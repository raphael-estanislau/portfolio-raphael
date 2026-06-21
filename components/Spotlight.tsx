"use client";

import { useEffect } from "react";

export function Spotlight() {
  useEffect(() => {
    let frame = 0;
    let x = 0;
    let y = 0;

    const onMove = (e: MouseEvent) => {
      x = e.clientX;
      y = e.clientY;
      if (frame) return;
      frame = window.requestAnimationFrame(() => {
        document.body.style.setProperty("--mx", `${x}px`);
        document.body.style.setProperty("--my", `${y}px`);
        frame = 0;
      });
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    return () => {
      window.removeEventListener("mousemove", onMove);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div className="spotlight pointer-events-none fixed inset-0 -z-10 hidden lg:block" />
  );
}
