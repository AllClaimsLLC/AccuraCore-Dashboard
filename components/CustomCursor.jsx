"use client";

import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const cursorRef = useRef(null);

  useEffect(() => {
    if (!window.matchMedia("(pointer:fine)").matches) return;

    document.documentElement.classList.add("ac-nocursor");

    const cursor = cursorRef.current;

    let cx = window.innerWidth / 2;
    let cy = window.innerHeight / 2;

    let tx = cx;
    let ty = cy;

    const move = (e) => {
      tx = e.clientX;
      ty = e.clientY;
    };

    window.addEventListener("mousemove", move);

    let raf;

    const animate = () => {
      cx += (tx - cx) * 0.28;
      cy += (ty - cy) * 0.28;

      cursor.style.transform = `translate(${cx - 17}px,${cy - 17}px)`;

      raf = requestAnimationFrame(animate);
    };

    animate();

    const over = (e) => {
      const target = e.target.closest(
        "a,button,input,textarea,select,[role='button'],[onclick]"
      );

      if (target) {
        cursor.style.width = "46px";
        cursor.style.height = "46px";
        cursor.style.background = "rgba(17,97,165,.14)";
        cursor.style.borderColor = "var(--ac-orange-500)";
      } else {
        cursor.style.width = "34px";
        cursor.style.height = "34px";
        cursor.style.background =
          "linear-gradient(135deg,rgba(255,255,255,.35),rgba(255,255,255,.08))";
        cursor.style.borderColor = "rgba(255,255,255,.7)";
      }
    };

    document.addEventListener("mouseover", over);

    return () => {
      cancelAnimationFrame(raf);

      window.removeEventListener("mousemove", move);

      document.removeEventListener("mouseover", over);

      document.documentElement.classList.remove("ac-nocursor");
    };
  }, []);

  return <div ref={cursorRef} className="ac-cursor" />;
}