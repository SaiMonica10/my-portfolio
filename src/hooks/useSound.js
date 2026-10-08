import { useCallback, useRef, useState } from 'react';

// Sound effects are synthesized with WebAudio, so there are no audio files to
// download. Nothing audio-related is created until the user unmutes.
const BLEEPS = {
  move: [[330, 0.05]],
  open: [[440, 0.06], [660, 0.09]],
  back: [[440, 0.06], [294, 0.09]],
  start: [[392, 0.08], [523, 0.08], [784, 0.14]],
};

export function useSound() {
  const [muted, setMuted] = useState(true);
  const mutedRef = useRef(true);
  const ctxRef = useRef(null);

  const play = useCallback((name) => {
    const ctx = ctxRef.current;
    if (mutedRef.current || !ctx) return;
    let at = ctx.currentTime;
    for (const [freq, duration] of BLEEPS[name] ?? []) {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'square';
      osc.frequency.value = freq;
      gain.gain.setValueAtTime(0.05, at);
      gain.gain.exponentialRampToValueAtTime(0.001, at + duration);
      osc.connect(gain).connect(ctx.destination);
      osc.start(at);
      osc.stop(at + duration);
      at += duration;
    }
  }, []);

  const toggleMute = useCallback(() => {
    const next = !mutedRef.current;
    if (!next) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (!AudioCtx) return;
      ctxRef.current ??= new AudioCtx();
      ctxRef.current.resume();
    }
    mutedRef.current = next;
    setMuted(next);
    if (!next) play('open');
  }, [play]);

  return { muted, toggleMute, play };
}
