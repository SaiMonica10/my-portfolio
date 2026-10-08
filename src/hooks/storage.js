// localStorage can throw (private windows, blocked site data), so every
// access goes through these and the site falls back to its defaults.
export function readStored(key) {
  try {
    return window.localStorage.getItem(key);
  } catch {
    return null;
  }
}

export function writeStored(key, value) {
  try {
    window.localStorage.setItem(key, value);
  } catch {
    // ignore: the choice just won't be remembered
  }
}
