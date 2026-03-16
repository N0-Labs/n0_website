"use client";

import { useState } from "react";

const domains = [
  {
    icon: "◈",
    title: "Maritime autonomy",
    description: "USV perception and obstacle detection across sea states, weather, and lighting conditions.",
    images: [
      { src: "/domain-maritime-1.jpg" },
    ],
  },
  {
    icon: "◇",
    title: "Aerial ISR",
    description: "UAS target detection and tracking in denied and degraded EO environments.",
    images: [
      { src: "/domain-aerial-1.jpg" },
      { src: "/domain-aerial-2.jpg" },
    ],
  },
  {
    icon: "○",
    title: "Ground autonomy",
    description: "UGV navigation and perception testing across contested terrain and sensor occlusion scenarios.",
    video: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/rgb-Intnc5D7OiMGzVjrRbEZrCo0OHtS2T.mp4",
    images: [],
  },
  {
    icon: "◆",
    title: "Counter UAS",
    description: "Autonomous threat detection and tracking of hostile unmanned aircraft systems in contested airspace.",
    images: [
      { src: "/domain-counter-uas-1.jpg" },
      { src: "/domain-counter-uas-2.jpg" },
      { src: "/domain-counter-uas-3.jpg" },
      { src: "/domain-counter-uas-4.jpg" },
      { src: "/domain-counter-uas-5.jpg" },
      { src: "/domain-counter-uas-6.jpg" },
    ],
  },
];

export function DomainsSection() {
  const [activeDomain, setActiveDomain] = useState<number | null>(null);
  const [activeSlide, setActiveSlide] = useState(0);

  function handleDomainClick(index: number) {
    if (activeDomain === index) {
      setActiveDomain(null);
    } else {
      setActiveDomain(index);
      setActiveSlide(0);
    }
  }

  const active = activeDomain !== null ? domains[activeDomain] : null;

  return (
    <section>
      <div className="text-xs font-semibold tracking-widest uppercase text-brand mb-6">
        Supported domains
      </div>
      <div className="grid grid-cols-2 gap-4">
        {domains.map((domain, index) => (
          <button
            key={index}
            onClick={() => handleDomainClick(index)}
            className={`text-left border rounded-lg p-5 bg-background-primary transition-all duration-200 cursor-pointer ${
              activeDomain === index
                ? "border-brand ring-1 ring-brand"
                : "border-border-tertiary hover:border-accent-blue"
            }`}
          >
            <div className="w-8 h-8 rounded bg-blue-100 flex items-center justify-center mb-3 text-base">
              {domain.icon}
            </div>
            <h4 className="text-sm font-semibold text-text-primary mb-1">
              {domain.title}
            </h4>
            <p className="text-sm text-text-secondary leading-relaxed">
              {domain.description}
            </p>
            <p className={`text-xs font-medium mt-3 transition-colors ${activeDomain === index ? "text-brand" : "text-accent-blue"}`}>
              {activeDomain === index ? "Hide examples ↑" : "View examples ↓"}
            </p>
          </button>
        ))}
      </div>

      {/* Slideshow panel */}
      {active && (
        <div className="mt-4 border border-border-tertiary rounded-lg overflow-hidden bg-background-secondary">
          <div className="relative aspect-video bg-black">
            {active.video ? (
              <video
                src={active.video}
                className="w-full h-full object-cover"
                autoPlay
                loop
                muted
                playsInline
              />
            ) : (
              <img
                src={active.images[activeSlide].src}
                alt="domain example"
                className="w-full h-full object-cover"
              />
            )}
            {/* Slide counter - only show for images */}
            {!active.video && active.images.length > 0 && (
              <div className="absolute top-3 right-3 bg-black/50 text-white text-xs px-2 py-1 rounded">
                {activeSlide + 1} / {active.images.length}
              </div>
            )}
            {/* Prev / Next */}
            {!active.video && active.images.length > 1 && (
              <>
                <button
                  onClick={() => setActiveSlide((s) => (s - 1 + active.images.length) % active.images.length)}
                  className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white w-8 h-8 rounded flex items-center justify-center transition"
                  aria-label="Previous image"
                >
                  ‹
                </button>
                <button
                  onClick={() => setActiveSlide((s) => (s + 1) % active.images.length)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white w-8 h-8 rounded flex items-center justify-center transition"
                  aria-label="Next image"
                >
                  ›
                </button>
              </>
            )}
          </div>
          {/* Dot indicators - only show for multiple images */}
          {!active.video && active.images.length > 1 && (
            <div className="px-5 py-3 flex items-center justify-end">
              <div className="flex gap-1.5">
                {active.images.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveSlide(i)}
                    className={`w-1.5 h-1.5 rounded-full transition-colors ${i === activeSlide ? "bg-brand" : "bg-border-tertiary"}`}
                    aria-label={`Go to slide ${i + 1}`}
                  />
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </section>
  );
}
