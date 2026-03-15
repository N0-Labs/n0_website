"use client";

import Image from "next/image";

const partners = [
  { src: "/nvidia_logo.png", alt: "NVIDIA" },
  { src: "/army_logo.png", alt: "U.S. Army" },
  { src: "/arl.png", alt: "Army Research Laboratory" },
  { src: "/Seal_of_the_Defense_Innovation_Unit.svg", alt: "Defense Innovation Unit" },
  { src: "/ow_logo.png", alt: "OW" },
  { src: "/mara_logo.jpg", alt: "MARA" },
];

// Duplicate for seamless loop
const track = [...partners, ...partners];

export function PartnersSlider() {
  return (
    <section className="mb-14 border-t border-border-primary pt-10">
      <p className="text-xs font-semibold tracking-widest uppercase text-text-secondary mb-8">
        Partners
      </p>

      <div className="relative overflow-hidden">
        {/* Fade edges */}
        <div
          className="pointer-events-none absolute inset-y-0 left-0 w-16 z-10"
          style={{
            background:
              "linear-gradient(to right, var(--color-background-primary), transparent)",
          }}
        />
        <div
          className="pointer-events-none absolute inset-y-0 right-0 w-16 z-10"
          style={{
            background:
              "linear-gradient(to left, var(--color-background-primary), transparent)",
          }}
        />

        <div className="flex gap-14 items-center animate-marquee w-max">
          {track.map((partner, i) => (
            <div key={`${partner.alt}-${i}`} className="flex-shrink-0 flex items-center justify-center h-16">
              <Image
                src={partner.src}
                alt={partner.alt}
                width={140}
                height={56}
                className="h-14 w-auto object-contain opacity-70 invert hover:opacity-100 transition-all duration-300"
                unoptimized
              />
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 28s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}
