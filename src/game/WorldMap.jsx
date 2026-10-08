import { useCallback, useEffect, useLayoutEffect, useRef } from 'react';
import PixelIcon from '../components/PixelIcon';
import { sections } from '../data/content';

const KEY_DIRECTIONS = {
  ArrowUp: [0, -1], w: [0, -1],
  ArrowDown: [0, 1], s: [0, 1],
  ArrowLeft: [-1, 0], a: [-1, 0],
  ArrowRight: [1, 0], d: [1, 0],
};
const WALK_MS = 260;

// Nearest block in the pressed direction, measured from the rendered layout so
// the same code works for the desktop grid and the mobile stack.
function findNeighbour(buttons, fromId, [dx, dy]) {
  const from = buttons[fromId].getBoundingClientRect();
  let best = null;
  let bestScore = Infinity;
  for (const [id, el] of Object.entries(buttons)) {
    if (id === fromId || !el) continue;
    const rect = el.getBoundingClientRect();
    const along = dx ? (rect.left - from.left) * dx : (rect.top - from.top) * dy;
    const across = dx ? Math.abs(rect.top - from.top) : Math.abs(rect.left - from.left);
    if (along < 8) continue;
    const score = along + across * 3;
    if (score < bestScore) {
      best = id;
      bestScore = score;
    }
  }
  return best;
}

export default function WorldMap({ selected, visited, onSelect, onOpen, play }) {
  const buttons = useRef({});
  const gridRef = useRef(null);
  const playerRef = useRef(null);
  const openTimer = useRef(null);
  const walkStarted = useRef(-Infinity);

  // Stand the character on top of the selected block.
  const placePlayer = useCallback(() => {
    const block = buttons.current[selected];
    const player = playerRef.current;
    if (!block || !player) return;
    const x = block.offsetLeft + block.offsetWidth / 2 - player.offsetWidth / 2;
    const y = block.offsetTop - player.offsetHeight + 4;
    player.style.transform = `translate(${x}px, ${y}px)`;
  }, [selected]);

  useLayoutEffect(() => {
    placePlayer();
    const observer = new ResizeObserver(placePlayer);
    observer.observe(gridRef.current);
    return () => observer.disconnect();
  }, [placePlayer]);

  useEffect(() => {
    buttons.current[selected]?.focus({ preventScroll: true });
    return () => clearTimeout(openTimer.current);
    // Focus the current block once, when the map appears.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const onKey = (event) => {
      if (event.metaKey || event.ctrlKey || event.altKey) return;
      const direction = KEY_DIRECTIONS[event.key.length === 1 ? event.key.toLowerCase() : event.key];
      if (direction) {
        const next = findNeighbour(buttons.current, selected, direction);
        event.preventDefault();
        if (next) {
          play('move');
          buttons.current[next].focus();
        }
      } else if (event.key === 'Enter' && !event.target.closest('a, button')) {
        event.preventDefault();
        onOpen(selected);
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [selected, onOpen, play]);

  // A click focuses the block first, which starts the walk; the section then
  // opens once the character has arrived. With no character (mobile stack) or
  // reduced motion, it opens at once.
  const handleFocus = (id) => {
    if (id !== selected) walkStarted.current = performance.now();
    onSelect(id);
  };

  const handleClick = (id) => {
    const walks =
      playerRef.current?.offsetParent != null && !window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const remaining = walks ? WALK_MS - (performance.now() - walkStarted.current) : 0;
    clearTimeout(openTimer.current);
    if (remaining > 0) openTimer.current = setTimeout(() => onOpen(id), remaining);
    else onOpen(id);
  };

  return (
    <main className="map" id="main">
      <h1 className="map__title">World Map</h1>
      <p className="map__hint map__hint--keys">Arrows / WASD: move · Enter: open · Esc: back</p>
      <p className="map__hint map__hint--touch">Tap a block to open it</p>
      {visited.length === sections.length && (
        <p className="map__clear">
          <span className="map__clear-title">All areas cleared!</span>
          You have seen everything. <a href="#save">Head to the Save Point</a> to get in touch.
        </p>
      )}

      <div className="map__grid" ref={gridRef}>
        <div className="map__player" ref={playerRef}>
          <PixelIcon name="player" size={40} />
        </div>
        <ul className="map__blocks">
          {sections.map((section) => {
            const isVisited = visited.includes(section.id);
            return (
              <li key={section.id}>
                <button
                  type="button"
                  ref={(el) => {
                    buttons.current[section.id] = el;
                  }}
                  className={`block block--${section.color}`}
                  data-selected={section.id === selected || undefined}
                  onFocus={() => handleFocus(section.id)}
                  onClick={() => handleClick(section.id)}
                >
                  <span className="block__icon">
                    <PixelIcon name={section.id} size={40} />
                  </span>
                  <span className="block__text">
                    <span className="block__title">{section.title}</span>
                    <span className="block__sub">{section.subtitle}</span>
                  </span>
                  {isVisited && (
                    <span className="block__check">
                      <span aria-hidden="true">✓</span>
                      <span className="sr-only">visited</span>
                    </span>
                  )}
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </main>
  );
}
