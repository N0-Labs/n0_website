import Image from "next/image";
import Link from "next/link";
import { DomainShowcase } from "@/components/domain-showcase";

const domains = [
  {
    src: "/synth-land.jpg",
    alt: "Woodland military simulation — tank partially obscured by trees and dense vegetation near a river",
    label: "Land",
    tag: "Woodland / Riverine",
    desc: "Dense vegetation, dynamic water surfaces, and tracked vehicle assets for ground-force perception training.",
  },
  {
    src: "/synth-maritime.jpg",
    alt: "Maritime simulation — sailboat on storm-tossed open ocean in heavy rain and mist",
    label: "Maritime",
    tag: "Open Ocean / Storm",
    desc: "Low-visibility sea states, wave dynamics, and vessel signatures under rain, fog, and extreme weather conditions.",
  },
  {
    src: "/synth-urban.jpg",
    alt: "Ground combat simulation — destroyed structures, bare trees, and rusted container barriers in rain",
    label: "Ground Combat",
    tag: "Contested / Overcast",
    desc: "Degraded infrastructure, cluttered terrain, and adverse weather for edge-case ISR and autonomy training.",
  },
];

const stats = [
  { value: "10K", label: "Images / 20 min" },
  { value: "3X", label: "Model deployment cycles" },
  { value: "1000+", label: "Asset database" },
  { value: "Proven", label: "Sim-to-real transfer" },
];

const capabilities = [
  "Photorealistic environment rendering at any time of day or season",
  "Sensor-accurate RGB, IR, depth, and lidar modalities",
  "Automatic bounding-box, segmentation, and keypoint annotations",
  "Fully controllable weather — rain, fog, snow, dust storms",
  "Adversarial edge-case generation on demand",
  "Export to COCO, YOLO, Pascal VOC, or custom schema",
];

export default function SyntheticDataPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero */}
      <section className="pt-24 pb-16 px-5 max-w-[1200px] mx-auto">
        <p className="font-mono text-xs tracking-[0.18em] uppercase text-accent mb-6">
          Product — Synthetic Data
        </p>
        <h1 className="font-heading text-[clamp(48px,7vw,96px)] leading-[0.92] tracking-[0.03em] text-foreground mb-8 max-w-[16ch]">
          Perception Training Data. Any Domain. No Field Work.
        </h1>
        <p className="font-mono text-[clamp(13px,1.4vw,15px)] leading-[1.8] text-muted max-w-[65ch]">
          We generate photorealistic, fully-annotated training datasets from
          simulation — delivering{" "}
          <span className="text-foreground font-bold">proven sim-to-real</span>{" "}
          performance gains without the cost, delay, or risk of real-world data
          collection.
        </p>
        <div className="flex flex-wrap gap-4 mt-10">
          <a
            href="mailto:founders@n0labs.com?subject=Synthetic Data — Demo Request"
            className="inline-block font-mono text-xs font-bold tracking-[0.12em] uppercase text-background bg-accent px-7 py-3.5 rounded-lg transition-all duration-200 hover:bg-accent-hover hover:-translate-y-0.5 hover:shadow-[0_4px_20px_rgba(0,232,150,0.35)]"
          >
            Request a Dataset
          </a>
          <Link
            href="/"
            className="inline-block font-mono text-xs tracking-[0.12em] uppercase text-foreground/70 border border-line-strong px-7 py-3.5 rounded-lg transition-all duration-200 hover:text-foreground hover:border-accent/50"
          >
            Back to Home
          </Link>
        </div>
      </section>

      {/* Stats strip */}
      <section className="border-y border-line bg-panel">
        <div className="max-w-[1200px] mx-auto px-5 py-8 grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <p className="font-heading text-[clamp(28px,4vw,48px)] text-accent leading-none tracking-[0.04em]">
                {s.value}
              </p>
              <p className="font-mono text-[11px] tracking-[0.14em] uppercase text-muted mt-2">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Domain gallery */}
      <section className="py-20 px-5 max-w-[1200px] mx-auto">
        <h2 className="font-heading text-[clamp(28px,4vw,48px)] tracking-[0.04em] text-foreground mb-3">
          Domains
        </h2>
        <p className="font-mono text-sm text-muted mb-12 max-w-[55ch]">
          Our engine covers land, sea, and contested ground domains. Every
          environment is configurable — adjust assets, weather, time-of-day,
          and sensor parameters programmatically.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {domains.map((domain) => (
            <div
              key={domain.label}
              className="group relative overflow-hidden rounded-xl border border-line hover:border-accent/40 transition-colors duration-300"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={domain.src}
                  alt={domain.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
                <span className="absolute top-3 left-3 font-mono text-[10px] tracking-[0.14em] uppercase text-accent bg-background/70 backdrop-blur-sm border border-accent/30 rounded px-2 py-1">
                  {domain.tag}
                </span>
              </div>
              <div className="p-5 bg-panel">
                <h3 className="font-heading text-[22px] tracking-[0.05em] text-foreground mb-2">
                  {domain.label}
                </h3>
                <p className="font-mono text-[12px] leading-[1.7] text-muted">
                  {domain.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Procedural generation with domain showcase */}
      <DomainShowcase />

      {/* Capabilities */}
      <section className="py-20 px-5 max-w-[1200px] mx-auto border-t border-line">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          <div>
            <h2 className="font-heading text-[clamp(28px,4vw,48px)] tracking-[0.04em] text-foreground mb-4">
              What You Get
            </h2>
            <p className="font-mono text-sm leading-[1.8] text-muted max-w-[50ch]">
              Every dataset is delivered with annotation files, scene metadata,
              and a data card covering provenance, class distribution, and
              recommended splits.
            </p>
          </div>
          <ul className="flex flex-col gap-4">
            {capabilities.map((cap) => (
              <li key={cap} className="flex items-start gap-3">
                <span className="mt-1.5 shrink-0 w-1.5 h-1.5 rounded-full bg-accent" />
                <span className="font-mono text-[13px] leading-[1.7] text-muted">
                  {cap}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-5 max-w-[1200px] mx-auto border-t border-line">
        <div className="bg-panel border border-line-strong rounded-2xl p-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <h3 className="font-heading text-[clamp(24px,3.5vw,40px)] tracking-[0.04em] text-foreground leading-[0.95] mb-2">
              Ready to close the sim-to-real gap?
            </h3>
            <p className="font-mono text-sm text-muted max-w-[50ch]">
              Tell us your domain, platform, and task — we will scope a dataset
              and get back to you within 24 hours.
            </p>
          </div>
          <a
            href="mailto:founders@n0labs.com?subject=Synthetic Data — Dataset Request"
            className="shrink-0 inline-block font-mono text-xs font-bold tracking-[0.12em] uppercase text-background bg-accent px-8 py-4 rounded-lg transition-all duration-200 hover:bg-accent-hover hover:-translate-y-0.5 hover:shadow-[0_4px_20px_rgba(0,232,150,0.35)] whitespace-nowrap"
          >
            Get in Touch
          </a>
        </div>
      </section>
    </main>
  );
}
