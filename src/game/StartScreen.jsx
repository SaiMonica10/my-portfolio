import { useEffect } from 'react';
import PixelIcon from '../components/PixelIcon';
import { profile } from '../data/content';

export default function StartScreen({ onStart, onRecruiterMode }) {
  // Enter anywhere on the screen starts, unless a control has focus (then
  // Enter activates that control as usual).
  useEffect(() => {
    const onKey = (event) => {
      if (event.key !== 'Enter' || event.target.closest('a, button')) return;
      event.preventDefault();
      onStart();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onStart]);

  return (
    <main className="start" id="main">
      <p className="badge">Open to work</p>
      <PixelIcon name="player" size={60} className="start__player" />
      <h1 className="start__title">{profile.name}</h1>
      <p className="start__subtitle">{profile.title}</p>
      <p className="start__tagline">{profile.tagline}</p>
      <p className="start__location">{profile.location}</p>
      <button type="button" className="start__press" onClick={onStart} autoFocus>
        <span className="blink">Press Start</span>
      </button>
      <button type="button" className="start__skip" onClick={onRecruiterMode}>
        Skip to Recruiter Mode
      </button>
    </main>
  );
}
