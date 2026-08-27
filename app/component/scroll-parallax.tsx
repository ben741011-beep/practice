"use client";

import { useEffect, useRef, type ReactNode } from "react";

type ScrollParallaxProps = {
  children: ReactNode;
};

const MAX_OFFSET = 72;

export default function ScrollParallax({ children }: ScrollParallaxProps) {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

    if (!root || reduceMotion.matches) return;

    const layers = Array.from(
      root.querySelectorAll<HTMLElement>("[data-parallax]"),
    );
    let frame = 0;

    const update = () => {
      frame = 0;
      const viewportCenter = window.innerHeight / 2;
      const mobileScale = window.innerWidth < 768 ? 0.55 : 1;

      for (const layer of layers) {
        const speed = Number(layer.dataset.parallax ?? 0);
        const rect = layer.getBoundingClientRect();
        const distance = rect.top + rect.height / 2 - viewportCenter;
        const offset = Math.max(
          -MAX_OFFSET,
          Math.min(MAX_OFFSET, distance * speed * mobileScale),
        );

        layer.style.setProperty("--parallax-y", `${offset.toFixed(2)}px`);
      }
    };

    const requestUpdate = () => {
      if (!frame) frame = window.requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestUpdate);

    return () => {
      window.removeEventListener("scroll", requestUpdate);
      window.removeEventListener("resize", requestUpdate);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  return <div ref={rootRef}>{children}</div>;
}
