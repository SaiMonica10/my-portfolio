import { useCallback, useState } from 'react';
import { writeStored } from './storage';

// The initial data-theme attribute is set by the inline script in index.html
// so the first paint already has the right colors.
export function useTheme() {
  const [theme, setTheme] = useState(() => (document.documentElement.dataset.theme === 'light' ? 'light' : 'dark'));

  const toggleTheme = useCallback(() => {
    setTheme((current) => {
      const next = current === 'dark' ? 'light' : 'dark';
      document.documentElement.dataset.theme = next;
      writeStored('portfolio-theme', next);
      return next;
    });
  }, []);

  return [theme, toggleTheme];
}
