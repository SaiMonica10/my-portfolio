# Sai Monica R — Portfolio

Retro, block-based "world map" portfolio with a plain **Recruiter Mode**.
Built with React + Vite, deployed on Vercel.

- **Game mode:** start screen → world map of six blocks → section screens.
  Arrow keys / WASD move, Enter opens, Esc returns to the map.
- **Recruiter Mode:** a clean single page with the same content. Toggle it in
  the top bar, or link straight to it with `?mode=recruiter`.

## Editing content

All text lives in [`src/data/content.js`](src/data/content.js); both modes
render from it.

The resume button points at `public/Sai_Monica_R_Resume.pdf`.

## Commands

```sh
npm install
npm run dev      # local dev server
npm run build    # production build into dist/
npm run preview  # serve the production build
npm run lint
npm run og       # regenerate public/og-card.png and .svg
```

## Structure

```text
src/
  data/content.js     all site content
  hooks/              mode, theme, sound, visited-sections state
  components/         HUD, pixel sprites, link list
  game/               start screen, world map, section screens
  recruiter/          Recruiter Mode page
  styles/             palette + theme tokens, game and recruiter styles
scripts/make-og.mjs   social card generator
```
