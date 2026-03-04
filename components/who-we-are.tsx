export function WhoWeAre() {
  return (
    <section className="py-[120px] text-center max-md:py-20">
      <h2 className="font-sans text-[36px] font-semibold text-foreground text-center mb-8 tracking-[-0.02em] px-5 max-md:text-[28px]">
        Who We Are
      </h2>
      <p className="text-lg leading-[1.7] text-muted text-center max-w-[800px] mx-auto px-5 max-md:text-base">
        {"We're a team of researchers and engineers from robotics, computer vision, machine learning, and neuroscience. Our collective experience spans automated AI lab infrastructure at DeepMind, scaling work for state-of-the-art generative models like Gemini Diffusion, semiconductor and neuromorphic computing research at Stanford, and patented ML on the edge technologies."}
      </p>
    </section>
  );
}
