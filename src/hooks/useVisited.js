import { useCallback, useState } from 'react';
import { sections } from '../data/content';
import { readStored, writeStored } from './storage';

const KEY = 'portfolio-visited';
const IDS = sections.map((s) => s.id);

function initialVisited() {
  const stored = (readStored(KEY) ?? '').split(',');
  return IDS.filter((id) => stored.includes(id));
}

// Which sections have been opened; drives the XP counter and block checkmarks.
export function useVisited() {
  const [visited, setVisited] = useState(initialVisited);

  const visit = useCallback((id) => {
    setVisited((current) => {
      if (current.includes(id) || !IDS.includes(id)) return current;
      const next = [...current, id];
      writeStored(KEY, next.join(','));
      return next;
    });
  }, []);

  return [visited, visit];
}
