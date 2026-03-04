export function Contact() {
  return (
    <section className="py-20">
      <div className="text-muted text-left p-6 bg-panel rounded-xl border border-line-strong transition-shadow duration-200 hover:shadow-[0_8px_30px_rgba(0,255,178,0.06)] max-w-[60ch]">
        <strong className="font-heading text-[28px] tracking-[0.04em] text-foreground block mb-3 leading-[0.95]">
          {"Let's build"}
        </strong>
        <span className="font-sans text-[clamp(13px,1.4vw,15px)]">
          Partnerships, pilots, or investment: email us at{" "}
          <a
            href="mailto:founders@n0labs.com"
            className="text-accent no-underline transition-colors duration-200 hover:text-accent-hover font-bold break-words"
          >
            founders@n0labs.com
          </a>
          .
        </span>
      </div>
    </section>
  );
}
