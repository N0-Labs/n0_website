export function WhoWeAre() {
  return (
    <section id="company" className="py-[120px] text-center max-md:py-20">
      <h2 className="font-heading tracking-[0.04em] text-[clamp(32px,4.5vw,56px)] text-foreground text-center mb-8 px-5 leading-[0.95]">
        Who We Are
      </h2>
      <p className="font-sans text-[clamp(13px,1.4vw,15px)] leading-[1.7] text-muted text-center max-w-[800px] mx-auto px-5">
        {"We're a small, focused team of ex-Stanford and ex-Google DeepMind researchers and engineers who've spent years building expertise in training perception models with simulation — from traditional classifiers to VLAs and VLMs. Small means fast, direct, and deeply invested in your success. Whatever your simulation use case, we'll execute."}
      </p>
    </section>
  );
}
