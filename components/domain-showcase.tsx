"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

const domainData: Record<
  string,
  { images: string[]; description: string }
> = {
  CUAS: {
    images: [
      "/cuas/scene-0.jpg",
      "/cuas/scene-1.jpg",
      "/cuas/scene-2.jpg",
      "/cuas/scene-3.jpg",
      "/cuas/scene-4.jpg",
      "/cuas/scene-5.jpg",
      "/cuas/scene-6.jpg",
      "/cuas/scene-7.jpg",
      "/cuas/scene-8.jpg",
      "/cuas/scene-9.jpg",
    ],
    description:
      "Counter-UAS detection across mountain, forest, and open sky environments with varied lighting and weather conditions.",
  },
  UGV: {
    images: ["/synth-land.jpg", "/synth-urban.jpg", "/ugv/scene-0.jpg", "/ugv/scene-1.jpg", "/ugv/scene-2.jpg"],
    description:
      "Unmanned Ground Vehicle perception training across woodland, contested terrain, and varied lighting conditions.",
  },
  USV: {
    images: ["/synth-maritime.jpg", "/synth-proc-fog.jpg"],
    description:
      "Unmanned Surface Vessel detection in open ocean, harbor, and adverse maritime weather conditions.",
  },
  UAS: {
    images: ["/synth-proc-desert.jpg", "/synth-proc-snow.jpg", "/synth-proc-night.jpg"],
    description:
      "Unmanned Aerial System scenarios spanning desert, arctic, and night/thermal domains.",
  },
};

const domainLabels: { key: string; label: string }[] = [
  { key: "CUAS", label: "CUAS" },
  { key: "UGV", label: "UGV" },
  { key: "USV", label: "USV" },
  { key: "UAS", label: "UAS" },
];

export function DomainShowcase() {
  const [activeDomain, setActiveDomain] = useState("CUAS");
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const domain = domainData[activeDomain];
  const images = domain?.images || [];

  // Auto-rotate images every 2.5 seconds
  useEffect(() => {
    if (images.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }, 2500);

    return () => clearInterval(interval);
  }, [images.length, activeDomain]);

  // Reset image index when domain changes
  useEffect(() => {
    setCurrentImageIndex(0);
  }, [activeDomain]);

  return (
    <section className="py-20 px-5 max-w-[1200px] mx-auto border-t border-line">
      <div className="mb-10">
        <p className="font-mono text-xs tracking-[0.18em] uppercase text-accent mb-3">
          Easy Procedural Generation
        </p>
        <h2 className="font-heading text-[clamp(28px,4vw,48px)] tracking-[0.04em] text-foreground mb-4">
          Any Domain. On Demand.
        </h2>
        <p className="font-mono text-sm leading-[1.8] text-muted max-w-[60ch]">
          Spin up fully-configured environments across domains in minutes. Our
          procedural pipeline handles asset placement, lighting, and weather
          parametrically.
        </p>
      </div>

      {/* Domain tabs */}
      <div className="flex flex-wrap gap-2 mb-6">
        {domainLabels.map((d) => (
          <button
            key={d.key}
            onClick={() => setActiveDomain(d.key)}
            className={`font-mono text-xs tracking-[0.14em] uppercase px-5 py-2.5 rounded-lg border transition-all duration-200 ${
              activeDomain === d.key
                ? "bg-accent text-background border-accent font-bold"
                : "bg-transparent text-foreground/70 border-line-strong hover:text-foreground hover:border-accent/50"
            }`}
          >
            {d.label}
          </button>
        ))}
        <span className="font-mono text-xs tracking-[0.14em] uppercase px-5 py-2.5 text-muted/50 italic">
          More domains coming...
        </span>
      </div>

      {/* Image display */}
      <div className="relative overflow-hidden rounded-xl border border-line bg-panel">
        <div className="relative aspect-[16/9] md:aspect-[21/9]">
          {images.map((src, idx) => (
            <Image
              key={src}
              src={src}
              alt={`${activeDomain} scene ${idx + 1}`}
              fill
              className={`object-cover transition-opacity duration-700 ${
                idx === currentImageIndex ? "opacity-100" : "opacity-0"
              }`}
              sizes="(max-width: 768px) 100vw, 1200px"
              priority={idx === 0}
            />
          ))}
          <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent pointer-events-none" />

          {/* Domain label overlay */}
          <div className="absolute bottom-0 left-0 right-0 p-6 flex items-end justify-between">
            <div>
              <p className="font-heading text-[clamp(24px,4vw,40px)] tracking-[0.05em] text-foreground leading-tight">
                {activeDomain}
              </p>
              <p className="font-mono text-[12px] leading-[1.7] text-muted max-w-[50ch] mt-1">
                {domain?.description}
              </p>
            </div>

            {/* Image indicator dots */}
            {images.length > 1 && (
              <div className="flex gap-1.5">
                {images.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentImageIndex(idx)}
                    className={`w-2 h-2 rounded-full transition-all duration-200 ${
                      idx === currentImageIndex
                        ? "bg-accent w-5"
                        : "bg-foreground/30 hover:bg-foreground/50"
                    }`}
                    aria-label={`Go to image ${idx + 1}`}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
