"use client";

import { useEffect } from "react";

export default function HoverSound() {
  useEffect(() => {
    // Disable on touch devices
    if (
      window.matchMedia("(hover: none)").matches ||
      navigator.maxTouchPoints > 0
    ) {
      return;
    }

    let audioCtx = null;
    let lastHovered = null;

    const ensureAudio = () => {
      if (!audioCtx) {
        const AudioContext =
          window.AudioContext || window.webkitAudioContext;

        if (!AudioContext) return null;

        audioCtx = new AudioContext();
      }

      if (audioCtx.state === "suspended") {
        audioCtx.resume();
      }

      return audioCtx;
    };

    const play = (
      frequency,
      duration,
      volume,
      type = "sine"
    ) => {
      const ctx = ensureAudio();
      if (!ctx) return;

      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = type;
      osc.frequency.value = frequency;

      gain.gain.setValueAtTime(0, ctx.currentTime);
      gain.gain.linearRampToValueAtTime(volume, ctx.currentTime + 0.01);
      gain.gain.exponentialRampToValueAtTime(
        0.0001,
        ctx.currentTime + duration
      );

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start();
      osc.stop(ctx.currentTime + duration);
    };

    const unlock = () => {
      ensureAudio();
    };

    const selector = `
      button,
      a,
      [role="button"],
      .ac-cta,
      .ac-navlink
    `;

    const handleHover = (e) => {
      const el = e.target.closest(selector);

      if (!el) return;

      if (lastHovered === el) return;

      lastHovered = el;

      play(660, 0.07, 0.05, "sine");
    };

    const clearHover = (e) => {
      const el = e.target.closest(selector);

      if (el && lastHovered === el) {
        lastHovered = null;
      }
    };

    const handleClick = (e) => {
      if (!e.target.closest(selector)) return;

      play(520, 0.05, 0.06, "triangle");
    };

    window.addEventListener("pointerdown", unlock, {
      once: true,
      passive: true,
    });

    document.addEventListener("pointerover", handleHover);
    document.addEventListener("pointerout", clearHover);
    document.addEventListener("pointerdown", handleClick);

    return () => {
      document.removeEventListener("pointerover", handleHover);
      document.removeEventListener("pointerout", clearHover);
      document.removeEventListener("pointerdown", handleClick);

      if (audioCtx && audioCtx.state !== "closed") {
        audioCtx.close();
      }
    };
  }, []);

  return null;
}