// Generates the social card: public/og-card.png (used by Open Graph / Twitter)
// and public/og-card.svg (same drawing, vector). Run: npm run og
// Everything is drawn from rectangles with a tiny built-in pixel font, so it
// needs no fonts, browser or image libraries.
import { writeFileSync } from 'node:fs';
import { crc32, deflateSync } from 'node:zlib';

const W = 1200;
const H = 630;
const C = {
  ink: '#14121f', night: '#24213a', stone: '#4a4768', mist: '#b9b4d0', paper: '#f4efe1', cream: '#fffaf0',
  grass: '#5fcf65', dirt: '#c98a52', sky: '#5ab8f5', gold: '#ffcf3f', red: '#ff5d5d',
};

const FONT = {
  A: '01110 10001 10001 11111 10001 10001 10001',
  C: '01110 10001 10000 10000 10000 10001 01110',
  D: '11110 10001 10001 10001 10001 10001 11110',
  E: '11111 10000 10000 11110 10000 10000 11111',
  G: '01110 10001 10000 10111 10001 10001 01111',
  I: '11111 00100 00100 00100 00100 00100 11111',
  J: '00111 00010 00010 00010 00010 10010 01100',
  L: '10000 10000 10000 10000 10000 10000 11111',
  M: '10001 11011 10101 10101 10001 10001 10001',
  N: '10001 11001 10101 10011 10001 10001 10001',
  O: '01110 10001 10001 10001 10001 10001 01110',
  P: '11110 10001 10001 11110 10000 10000 10000',
  R: '11110 10001 10001 11110 10100 10010 10001',
  S: '01111 10000 10000 01110 00001 00001 11110',
  T: '11111 00100 00100 00100 00100 00100 00100',
  U: '10001 10001 10001 10001 10001 10001 01110',
  Y: '10001 10001 01010 00100 00100 00100 00100',
  '/': '00001 00001 00010 00100 01000 10000 10000',
  '+': '00000 00100 00100 11111 00100 00100 00000',
  ',': '00000 00000 00000 00000 00110 00100 01000',
  '.': '00000 00000 00000 00000 00000 01100 01100',
  ' ': '00000 00000 00000 00000 00000 00000 00000',
};

const PLAYER = [
  '..dddddd..', '.ddddddyd.', '.ddccccdd.', '.dciccicd.', '.dccccccd.', '.dd.rr.dd.', '.ddrrrrdd.', '.crrrrrrc.', '..rrrrrr..', '.rrrrrrrr.', '..cc..cc..', '..nn..nn..',
];
const PLAYER_COLORS = { d: C.dirt, c: C.cream, i: C.ink, r: C.red, y: C.gold, n: C.stone };

const rects = [];
const rect = (x, y, w, h, color) => rects.push({ x, y, w, h, color });

function text(str, y, scale, color, shadow) {
  const width = str.length * 6 * scale - scale;
  const x0 = Math.round((W - width) / 2);
  const draw = (dx, dy, fill) => {
    [...str].forEach((ch, i) => {
      FONT[ch].split(' ').forEach((row, ry) => {
        [...row].forEach((bit, rx) => {
          if (bit === '1') rect(x0 + dx + (i * 6 + rx) * scale, y + dy + ry * scale, scale, scale, fill);
        });
      });
    });
  };
  if (shadow) draw(scale / 2, scale / 2, shadow);
  draw(0, 0, color);
}

function block(x, y, size, color) {
  rect(x, y, size, size, C.ink);
  rect(x + 6, y + 6, size - 12, size - 12, color);
  rect(x + 6, y + 6, size - 12, 8, C.cream);
  rect(x + 6, y + size - 14, size - 12, 8, C.stone);
}

// background, frame, ground
rect(0, 0, W, H, C.ink);
rect(24, 24, W - 48, H - 48, C.stone);
rect(32, 32, W - 64, H - 64, C.night);
rect(32, H - 112, W - 64, 16, C.grass);
rect(32, H - 96, W - 64, 64, C.dirt);

text('SAI MONICA R', 96, 14, C.gold, C.stone);
text('JUNIOR DATA SCIENTIST', 236, 7, C.paper);
text('AI/ML ENGINEER', 306, 7, C.paper);
text('DATA SCIENCE + LLM APPLICATIONS, DEPLOYED END TO END.', 362, 3, C.mist);

// row of world-map blocks standing on the ground, with the player on the first
const blockColors = [C.grass, C.dirt, C.sky, C.red, C.gold, C.mist];
const size = 72;
const gap = 48;
const startX = Math.round((W - (blockColors.length * size + (blockColors.length - 1) * gap)) / 2);
blockColors.forEach((color, i) => block(startX + i * (size + gap), H - 112 - size, size, color));
PLAYER.forEach((row, ry) => {
  [...row].forEach((ch, rx) => {
    if (ch !== '.') rect(startX + 16 + rx * 4, H - 112 - size - 48 + ry * 4, 4, 4, PLAYER_COLORS[ch]);
  });
});

// ---- SVG ----
const svg =
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${W} ${H}" width="${W}" height="${H}" shape-rendering="crispEdges">` +
  `<title>Sai Monica R — Junior Data Scientist · AI/ML Engineer</title>` +
  rects.map((r) => `<rect x="${r.x}" y="${r.y}" width="${r.w}" height="${r.h}" fill="${r.color}"/>`).join('') +
  `</svg>\n`;
writeFileSync(new URL('../public/og-card.svg', import.meta.url), svg);

// ---- PNG (8-bit RGB, no dependencies) ----
const stride = W * 3 + 1;
const raw = Buffer.alloc(stride * H);
for (const r of rects) {
  const [red, green, blue] = [1, 3, 5].map((i) => parseInt(r.color.slice(i, i + 2), 16));
  for (let y = Math.max(0, r.y); y < Math.min(H, r.y + r.h); y += 1) {
    for (let x = Math.max(0, r.x); x < Math.min(W, r.x + r.w); x += 1) {
      const o = y * stride + 1 + x * 3;
      raw[o] = red;
      raw[o + 1] = green;
      raw[o + 2] = blue;
    }
  }
}

function chunk(type, data) {
  const body = Buffer.concat([Buffer.from(type), data]);
  const out = Buffer.alloc(body.length + 8);
  out.writeUInt32BE(data.length, 0);
  body.copy(out, 4);
  out.writeUInt32BE(crc32(body), body.length + 4);
  return out;
}

const header = Buffer.alloc(13);
header.writeUInt32BE(W, 0);
header.writeUInt32BE(H, 4);
header.set([8, 2, 0, 0, 0], 8);
const png = Buffer.concat([
  Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]),
  chunk('IHDR', header),
  chunk('IDAT', deflateSync(raw, { level: 9 })),
  chunk('IEND', Buffer.alloc(0)),
]);
writeFileSync(new URL('../public/og-card.png', import.meta.url), png);
console.log(`og-card.png ${png.length} bytes, og-card.svg ${svg.length} bytes`);
