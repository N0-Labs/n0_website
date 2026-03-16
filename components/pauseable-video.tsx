"use client";

import { useRef, useState } from "react";

export function PauseableVideo({ src }: { src: string }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [paused, setPaused] = useState(false);

  function toggle() {
    const v = videoRef.current;
    if (!v) return;
    if (v.paused) {
      v.play();
      setPaused(false);
    } else {
      v.pause();
      setPaused(true);
    }
  }

  return (
    <div className="relative cursor-pointer group" onClick={toggle}>
      <video
        ref={videoRef}
        src={src}
        className="w-full"
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
      />
      {/* Play/pause overlay */}
      <div className={`absolute inset-0 flex items-center justify-center transition-opacity duration-200 ${paused ? "opacity-100" : "opacity-0 group-hover:opacity-100"}`}>
        <div className="bg-black/50 rounded-full w-12 h-12 flex items-center justify-center">
          {paused ? (
            /* Play icon */
            <svg className="w-5 h-5 text-white ml-0.5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
          ) : (
            /* Pause icon */
            <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
            </svg>
          )}
        </div>
      </div>
    </div>
  );
}
