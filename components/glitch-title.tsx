"use client";

import { useEffect, useRef, useCallback } from "react";

export function GlitchTitle() {
  const titleRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationEndedRef = useRef(false);

  const rand = useCallback(
    (min: number, max: number) => min + Math.random() * (max - min),
    []
  );
  const randInt = useCallback(
    (min: number, max: number) => Math.floor(min + Math.random() * (max - min + 1)),
    []
  );

  const getPixelSize = useCallback(() => {
    if (!titleRef.current) return { min: 6, max: 10 };
    const fs = parseFloat(getComputedStyle(titleRef.current).fontSize);
    const min = Math.max(6, Math.round(fs * 0.08));
    const max = Math.max(min + 1, Math.round(fs * 0.2));
    return { min, max };
  }, []);

  const fitCanvas = useCallback(() => {
    const title = titleRef.current;
    const canvas = canvasRef.current;
    if (!title || !canvas) return;

    const stage = title.parentElement;
    if (!stage) return;

    const rect = title.getBoundingClientRect();
    const pad = 16;
    stage.style.width = rect.width + pad * 2 + "px";
    stage.style.height = rect.height + pad * 2 + "px";
    canvas.width = rect.width + pad * 2;
    canvas.height = rect.height + pad * 2;
  }, []);

  const glitchBurst = useCallback(() => {
    const title = titleRef.current;
    const canvas = canvasRef.current;
    if (!title || !canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const { min, max } = getPixelSize();
    const w = canvas.width;
    const h = canvas.height;

    ctx.clearRect(0, 0, w, h);

    const blocks = 20 + Math.floor(Math.random() * 40);
    ctx.save();

    const titleRect = title.getBoundingClientRect();
    const stageRect = title.parentElement!.getBoundingClientRect();
    const titleLeft = titleRect.left - stageRect.left;
    const titleRight = titleLeft + titleRect.width;
    const titleTop = titleRect.top - stageRect.top;
    const titleBottom = titleTop + titleRect.height;

    for (let i = 0; i < blocks; i++) {
      const bw = randInt(min, max);
      const bh = randInt(min, max);
      const x = randInt(
        -Math.floor(max * 1.5),
        w + Math.floor(max * 1.5) - bw
      );
      const y = randInt(
        -Math.floor(max * 1.5),
        h + Math.floor(max * 1.5) - bh
      );

      const pixelCenterX = x + bw / 2;
      const pixelCenterY = y + bh / 2;
      const isInsideTitle =
        pixelCenterX >= titleLeft &&
        pixelCenterX <= titleRight &&
        pixelCenterY >= titleTop &&
        pixelCenterY <= titleBottom;

      ctx.globalCompositeOperation = "source-over";
      ctx.fillStyle = isInsideTitle ? "#0a1f1a" : "#ffffff";
      ctx.fillRect(x, y, bw, bh);
    }
    ctx.restore();

    // Letter displacement
    const glitchClasses = [
      "letter-glitch-1",
      "letter-glitch-2",
      "letter-glitch-3",
      "letter-glitch-4",
      "letter-glitch-5",
      "letter-glitch-6",
      "letter-glitch-7",
      "letter-glitch-8",
    ];

    const letterSpans = title.querySelectorAll<HTMLSpanElement>(".letter");
    letterSpans.forEach((span) => {
      glitchClasses.forEach((cls) => span.classList.remove(cls));
    });

    const numLettersToGlitch = Math.floor(Math.random() * 4) + 1;
    const shuffledIndices = Array.from(
      { length: letterSpans.length },
      (_, i) => i
    ).sort(() => Math.random() - 0.5);

    for (let i = 0; i < numLettersToGlitch; i++) {
      const letterIndex = shuffledIndices[i];
      const letterSpan = letterSpans[letterIndex];
      const randomGlitchClass =
        glitchClasses[Math.floor(Math.random() * glitchClasses.length)];
      letterSpan.classList.add(randomGlitchClass);
    }

    // Fade out
    const start = performance.now();
    function fade(now: number) {
      if (!ctx) return;
      const t = (now - start) / rand(120, 220);
      const alpha = Math.max(0, 1 - t);
      ctx.globalAlpha = alpha;
      if (alpha > 0) {
        requestAnimationFrame(fade);
      } else {
        ctx.globalAlpha = 1;
        ctx.clearRect(0, 0, w, h);
        letterSpans.forEach((span) => {
          glitchClasses.forEach((cls) => span.classList.remove(cls));
        });
      }
    }
    requestAnimationFrame(fade);
  }, [getPixelSize, rand, randInt]);

  useEffect(() => {
    fitCanvas();
    window.addEventListener("resize", fitCanvas);
    return () => window.removeEventListener("resize", fitCanvas);
  }, [fitCanvas]);

  useEffect(() => {
    const title = titleRef.current;
    if (!title) return;

    const handleAnimationEnd = () => {
      if (animationEndedRef.current) return;
      animationEndedRef.current = true;

      let timeoutId: ReturnType<typeof setTimeout>;

      function loop() {
        glitchBurst();

        if (Math.random() < 0.3) {
          setTimeout(glitchBurst, 50 + Math.random() * 150);
        }

        if (Math.random() < 0.15) {
          setTimeout(glitchBurst, 200 + Math.random() * 300);
        }

        const baseDelay =
          Math.random() < 0.4 ? rand(500, 1200) : rand(1200, 2500);
        const randomVariation =
          Math.random() < 0.2 ? rand(100, 800) : 0;
        timeoutId = setTimeout(loop, baseDelay + randomVariation);
      }
      loop();

      return () => clearTimeout(timeoutId);
    };

    title.addEventListener("animationend", handleAnimationEnd, { once: true });

    return () => {
      title.removeEventListener("animationend", handleAnimationEnd);
    };
  }, [glitchBurst, rand]);

  const letters = "NULL LABS".split("");

  return (
    <div className="relative isolate flex items-center justify-start h-full w-full">
      <div
        ref={titleRef}
        className="relative select-none whitespace-nowrap text-center mx-auto block font-bold uppercase text-foreground"
        style={{
          opacity: 0,
          animation: "nullLabsPushIn 2s ease forwards",
          animationDelay: "1s",
          fontSize: "clamp(24px, 4vw, 48px)",
          letterSpacing: "clamp(0.1em, 0.5vw, 0.24em)",
          transition: "transform 0.1s ease",
        }}
      >
        {letters.map((letter, index) => (
          <span
            key={index}
            className="letter inline-block transition-transform duration-100"
            data-index={index}
          >
            {letter === " " ? "\u00A0" : letter}
          </span>
        ))}
      </div>
      <canvas
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none"
        style={{ mixBlendMode: "difference" }}
      />
    </div>
  );
}
