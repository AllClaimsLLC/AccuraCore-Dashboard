"use client";

import { useEffect, useRef } from "react";

export default function ScrollProgress() {
  const progressRef = useRef(null);

  useEffect(() => {
    const updateProgress = () => {
      const scrollTop = window.scrollY;
      const scrollHeight =
        document.documentElement.scrollHeight - window.innerHeight;

      const progress =
        scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0;

      if (progressRef.current) {
        progressRef.current.style.width = `${progress}%`;
      }
    };

    window.addEventListener("scroll", updateProgress, {
      passive: true,
    });

    updateProgress();

    return () =>
      window.removeEventListener("scroll", updateProgress);
  }, []);

  return (
    <div
      ref={progressRef}
      className="fixed top-0 left-0 h-[3px] w-0 z-[9999]"
      style={{
        background: "linear-gradient(90deg, #1E63FF, #FF7A1A)",
        transition: "width 0.1s linear",
      }}
    />
  );
}