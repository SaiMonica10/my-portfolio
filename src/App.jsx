import { useCallback, useEffect, useState } from 'react';
import Hud from './components/Hud';
import { sections, XP_PER_SECTION } from './data/content';
import Scenery from './game/Scenery';
import SectionView from './game/SectionView';
import StartScreen from './game/StartScreen';
import WorldMap from './game/WorldMap';
import { useMode } from './hooks/useMode';
import { useSound } from './hooks/useSound';
import { useTheme } from './hooks/useTheme';
import { useVisited } from './hooks/useVisited';
import RecruiterPage from './recruiter/RecruiterPage';

const SECTION_IDS = sections.map((s) => s.id);

// The open section lives in the URL hash (#levels), so sections can be linked
// to and the browser Back button returns to the map.
function sectionFromHash() {
  const id = window.location.hash.slice(1);
  return SECTION_IDS.includes(id) ? id : null;
}

function App() {
  const [mode, setModeRaw] = useMode();
  const [theme, toggleTheme] = useTheme();
  const { muted, toggleMute, play } = useSound();
  const [visited, visit] = useVisited();
  const [openId, setOpenId] = useState(sectionFromHash);
  const [started, setStarted] = useState(() => sectionFromHash() !== null);
  const [selected, setSelected] = useState(() => sectionFromHash() ?? SECTION_IDS[0]);
  const [toast, setToast] = useState(0);

  const isGame = mode === 'game';

  // Switching modes clears the hash, so drop the open section with it.
  const setMode = useCallback(
    (next) => {
      setOpenId(null);
      setModeRaw(next);
    },
    [setModeRaw],
  );

  const showSection = useCallback(
    (id) => {
      setOpenId(id);
      if (id) {
        setSelected(id);
        if (!visited.includes(id)) setToast((count) => count + 1);
        visit(id);
      }
    },
    [visit, visited],
  );

  // The "+100 XP" pop-up shows briefly each time a new section is discovered.
  useEffect(() => {
    if (!toast) return undefined;
    const timer = setTimeout(() => setToast(0), 1600);
    return () => clearTimeout(timer);
  }, [toast]);

  useEffect(() => {
    const onHashChange = () => showSection(sectionFromHash());
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, [showSection]);

  // A section opened straight from a shared link still counts as visited.
  useEffect(() => {
    const id = sectionFromHash();
    if (id) visit(id);
  }, [visit]);

  const openSection = useCallback(
    (id) => {
      play('open');
      window.location.hash = id;
    },
    [play],
  );

  const closeSection = useCallback(() => {
    play('back');
    window.history.pushState(null, '', window.location.pathname + window.location.search);
    setOpenId(null);
  }, [play]);

  useEffect(() => {
    if (!isGame || !openId) return undefined;
    const onKey = (event) => {
      if (event.key === 'Escape') closeSection();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [isGame, openId, closeSection]);

  const start = useCallback(() => {
    play('start');
    setStarted(true);
  }, [play]);

  const goHome = () => {
    if (openId) closeSection();
    setStarted(false);
    window.scrollTo(0, 0);
  };

  let screen;
  if (!isGame) screen = <RecruiterPage />;
  else if (!started) screen = <StartScreen onStart={start} onRecruiterMode={() => setMode('recruiter')} />;
  else if (openId) screen = <SectionView id={openId} onBack={closeSection} />;
  else screen = <WorldMap selected={selected} visited={visited} onSelect={setSelected} onOpen={openSection} play={play} />;

  return (
    <div className="app" data-mode={mode}>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Hud
        mode={mode}
        onModeChange={setMode}
        theme={theme}
        onToggleTheme={toggleTheme}
        muted={muted}
        onToggleMute={toggleMute}
        visited={visited}
        onHome={goHome}
      />
      {isGame && !openId && <Scenery />}
      {screen}
      {isGame && toast > 0 && (
        <p key={toast} className="toast" aria-hidden="true">
          +{XP_PER_SECTION} XP
        </p>
      )}
    </div>
  );
}

export default App;
