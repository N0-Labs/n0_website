export function WhoWeAre() {
  return (
    <section className="py-[120px] text-center max-md:py-20">
      <h2 className="font-heading tracking-[0.04em] text-[clamp(32px,4.5vw,56px)] text-foreground text-center mb-8 px-5 leading-[0.95]">
        Who We Are
      </h2>
      <p className="font-sans text-[clamp(13px,1.4vw,15px)] leading-[1.7] text-muted text-center max-w-[800px] mx-auto px-5">
        {"We're a team of researchers and engineers from robotics, computer vision, machine learning, and neuroscience. Our collective experience spans automated AI lab infrastructure at DeepMind, scaling work for state-of-the-art generative models like Gemini Diffusion, semiconductor and neuromorphic computing research at Stanford, and patented ML on the edge technologies."}
      </p>
    </section>
  );
}
