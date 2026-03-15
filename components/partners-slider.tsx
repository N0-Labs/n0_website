"use client";

import Image from "next/image";

const partners = [
  { src: "/nvidia-inception-logo.png", alt: "NVIDIA Inception Program", isLarge: true },
  { src: "/army_logo.png", alt: "U.S. Army" },
  { src: "/devcom-arl-logo.png", alt: "DEVCOM Army Research Laboratory" },
  { src: "/dod-logo.png", alt: "Department of Defense" },
  { src: "/overwatch-imaging-logo.png", alt: "Overwatch Imaging", invertColor: true },
  { src: "/mara_logo.jpg", alt: "MARA", invertColor: true },
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
            <div key={`${partner.alt}-${i}`} className={`flex-shrink-0 flex items-center justify-center ${partner.isLarge ? 'h-20' : 'h-16'}`}>
              <Image
                src={partner.src}
                alt={partner.alt}
                width={partner.isLarge ? 180 : 140}
                height={partner.isLarge ? 72 : 56}
                className={`${partner.isLarge ? 'h-20' : 'h-14'} w-auto object-contain transition-all duration-300 ${partner.invertColor ? 'invert' : 'grayscale hover:grayscale-0'}`}
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
