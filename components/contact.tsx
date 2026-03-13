import Link from "next/link";

export function Contact() {
  return (
    <section className="py-20">
      <div className="text-muted text-left p-6 bg-panel rounded-xl border border-line-strong transition-shadow duration-200 hover:shadow-[0_8px_30px_rgba(0,255,178,0.06)] max-w-[60ch]">
        <strong className="font-heading text-[28px] tracking-[0.04em] text-foreground block mb-3 leading-[0.95]">
          {"Let's build"}
        </strong>
        <span className="font-sans text-[clamp(13px,1.4vw,15px)] block mb-4">
          Partnerships, pilots, or investment — tell us about your project.
        </span>
        <Link
          href="/contact"
          className="inline-block font-mono text-xs font-bold tracking-[0.12em] uppercase text-background bg-accent px-6 py-3 rounded-lg transition-all duration-200 hover:bg-accent-hover hover:-translate-y-0.5 hover:shadow-[0_4px_20px_rgba(0,232,150,0.35)]"
        >
          Get in Touch
        </Link>
      </div>
    </section>
  );
}
