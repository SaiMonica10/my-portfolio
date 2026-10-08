import { profile, sections, XP_PER_SECTION } from '../data/content';

export default function Hud({ mode, onModeChange, theme, onToggleTheme, muted, onToggleMute, visited, onHome }) {
  const isGame = mode === 'game';
  const xp = visited.length * XP_PER_SECTION;
  const maxXp = sections.length * XP_PER_SECTION;

  return (
    <header className="hud">
      <button type="button" className="hud__brand" onClick={onHome} aria-label={`${profile.name}, back to start`}>
        {profile.name}
      </button>

      {isGame && (
        <p className="hud__xp" aria-live="polite">
          <span className="hud__xp-label">XP</span> {xp}
          <span className="hud__xp-max">/{maxXp}</span>
        </p>
      )}

      <div className="hud__actions">
        {isGame && (
          <button type="button" className="hud__btn" onClick={onToggleMute} aria-pressed={!muted}>
            Sound <span aria-hidden="true">{muted ? 'off' : 'on'}</span>
          </button>
        )}
        <button
          type="button"
          className="hud__btn"
          onClick={onToggleTheme}
          aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}
        >
          {theme === 'dark' ? 'Light' : 'Dark'}
        </button>
        <button
          type="button"
          className="hud__btn"
          onClick={() => onModeChange(isGame ? 'recruiter' : 'game')}
          aria-pressed={!isGame}
        >
          Recruiter Mode <span aria-hidden="true">{isGame ? 'off' : 'on'}</span>
        </button>
        <a className="hud__btn hud__btn--primary" href={profile.resume} download aria-label="Download resume (PDF)">
          Resume
        </a>
      </div>
    </header>
  );
}
