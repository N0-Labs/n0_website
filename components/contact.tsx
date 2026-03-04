export function Contact() {
  return (
    <section className="py-20">
      <div className="text-muted text-left p-6 bg-panel rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.08)] transition-shadow duration-200 hover:shadow-[0_8px_30px_rgba(0,0,0,0.12)] max-w-[60ch]">
        <strong className="text-foreground block text-[20px] mb-3 font-semibold tracking-[-0.003em]">
          {"Let's build"}
        </strong>
        Partnerships, pilots, or investment: email us at{" "}
        <a
          href="mailto:founders@n0labs.com"
          className="text-accent no-underline transition-colors duration-200 hover:text-accent-hover font-medium break-words"
        >
          founders@n0labs.com
        </a>
        .
      </div>
    </section>
  );
}
