import { useCallback, useState } from 'react';
import { readStored, writeStored } from './storage';

const KEY = 'portfolio-mode';

// ?mode=recruiter in the URL wins, then the remembered choice, then game mode.
function initialMode() {
  const param = new URLSearchParams(window.location.search).get('mode');
  if (param === 'recruiter' || param === 'game') return param;
  return readStored(KEY) === 'recruiter' ? 'recruiter' : 'game';
}

export function useMode() {
  const [mode, setModeState] = useState(initialMode);

  const setMode = useCallback((next) => {
    writeStored(KEY, next);
    const url = new URL(window.location.href);
    if (next === 'recruiter') url.searchParams.set('mode', 'recruiter');
    else url.searchParams.delete('mode');
    url.hash = '';
    window.history.replaceState(null, '', url);
    window.scrollTo(0, 0);
    setModeState(next);
  }, []);

  return [mode, setMode];
}
