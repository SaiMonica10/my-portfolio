// Pixel-art sprites drawn as inline SVG from character grids, so there are no
// image requests. Each character maps to a palette color; "." is transparent.
const COLORS = {
  i: 'var(--ink)',
  n: 'var(--stone)',
  m: 'var(--mist)',
  p: 'var(--paper)',
  c: 'var(--cream)',
  g: 'var(--grass)',
  d: 'var(--dirt)',
  s: 'var(--sky)',
  y: 'var(--gold)',
  r: 'var(--red)',
  b: 'var(--navy)',
};

const SPRITES = {
  stats: [
    '..........',
    '.rr....rr.',
    'rrrr..rrrr',
    'rcrrrrrrrr',
    'rrrrrrrrrr',
    '.rrrrrrrr.',
    '..rrrrrr..',
    '...rrrr...',
    '....rr....',
    '..........',
  ],
  inventory: [
    '..........',
    '.nnnnnnnn.',
    'nddddddddn',
    'nddddddddn',
    'nnnnyynnnn',
    'ndddyydddn',
    'nddddddddn',
    'nddddddddn',
    '.nnnnnnnn.',
    '..........',
  ],
  levels: [
    '..m.......',
    '..mrrrrr..',
    '..mrrrrrr.',
    '..mrrrrr..',
    '..mrrrr...',
    '..m.......',
    '..m.......',
    '..m.......',
    '.mmm......',
    'ggggggg...',
  ],
  quests: [
    '.pppppppp.',
    'pppppppppp',
    '.pnnnnnnp.',
    '.pppppppp.',
    '.pnnnnppp.',
    '.pppppppp.',
    '.pnnnnnpp.',
    '.pppppppp.',
    'pppppppppp',
    '.pppppppp.',
  ],
  achievements: [
    'yyyyyyyyyy',
    'y.yyyyyy.y',
    'y.ycyyyy.y',
    '.yyyyyyyy.',
    '..yyyyyy..',
    '...yyyy...',
    '....yy....',
    '....yy....',
    '..yyyyyy..',
    '.yyyyyyyy.',
  ],
  save: [
    'nnnnnnnnn.',
    'nsmmmmmnsn',
    'nsmmmnmnsn',
    'nsmmmmmnsn',
    'nsssssssss',
    'nsssssssss',
    'nsppppppsn',
    'nsppppppsn',
    'nsppppppsn',
    'nnnnnnnnnn',
  ],
  player: [
    '..dddddd..',
    '.ddddddyd.',
    '.ddccccdd.',
    '.dciccicd.',
    '.dccccccd.',
    '.dd.rr.dd.',
    '.ddrrrrdd.',
    '.crrrrrrc.',
    '..rrrrrr..',
    '.rrrrrrrr.',
    '..cc..cc..',
    '..nn..nn..',
  ],
};

export default function PixelIcon({ name, size = 40, className }) {
  const rows = SPRITES[name];
  const rects = [];
  rows.forEach((row, y) => {
    let x = 0;
    while (x < row.length) {
      const ch = row[x];
      let end = x + 1;
      while (end < row.length && row[end] === ch) end += 1;
      if (ch !== '.') {
        rects.push(<rect key={`${x}-${y}`} x={x} y={y} width={end - x} height={1} fill={COLORS[ch]} />);
      }
      x = end;
    }
  });

  return (
    <svg
      className={className}
      viewBox={`0 0 ${rows[0].length} ${rows.length}`}
      width={size}
      height={(size * rows.length) / rows[0].length}
      shapeRendering="crispEdges"
      aria-hidden="true"
      focusable="false"
    >
      {rects}
    </svg>
  );
}
