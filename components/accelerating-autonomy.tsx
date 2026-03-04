import Image from "next/image";

const partners = [
  { src: "/ow_logo.png", alt: "Overwatch Imaging" },
  { src: "/arl.png", alt: "Army Research Lab" },
  { src: "/nvidia_logo.png", alt: "NVIDIA" },
  { src: "/mara_logo.jpg", alt: "Mara" },
  { src: "/Seal_of_the_Defense_Innovation_Unit.svg", alt: "DIU" },
];

export function AcceleratingAutonomy() {
  return (
    <section className="py-[120px] text-center max-md:py-20">
      <h2 className="font-sans font-bold tracking-[-0.03em] text-[42px] text-foreground text-center mb-8 px-5 max-md:text-[32px]">
        End-to-end Simulation Software
      </h2>
      <p className="font-sans text-[24px] leading-[1.8] tracking-[-0.01em] text-[rgba(255,255,255,0.85)] text-center max-w-[800px] mx-auto px-5 max-md:text-[20px] max-md:leading-[1.75]">
        We replace slow, resource-heavy data collection with next-generation
        simulation. Our engine produces data with proven{" "}
        <span className="text-foreground font-medium">sim-to-real transfer</span>.
      </p>
      <p className="font-sans text-[20px] tracking-[-0.01em] text-[rgba(255,255,255,0.85)] text-center mt-10 mb-6 mx-auto">
        For any domain, any platform. Build scenarios in virtual worlds to test
        and train your autonomy.
      </p>
      <a
        href="mailto:founders@n0labs.com?subject=Book Demo"
        className="inline-block font-sans text-base font-semibold text-foreground bg-transparent border-2 border-accent rounded-xl px-8 py-3.5 no-underline tracking-[-0.01em] mx-auto max-w-fit transition-all duration-300 hover:bg-accent hover:text-background hover:-translate-y-0.5 hover:shadow-[0_4px_12px_rgba(96,165,250,0.3)]"
      >
        Book Demo
      </a>
      <div className="mt-20 text-center max-md:mt-[60px]">
        <h3 className="font-sans text-lg font-medium text-[rgba(255,255,255,0.7)] uppercase tracking-[0.1em] mb-10">
          Partners
        </h3>
        <div className="flex flex-wrap justify-center items-center gap-10 max-w-[1000px] mx-auto max-md:gap-[30px]">
          {partners.map((partner) => (
            <Image
              key={partner.alt}
              src={partner.src}
              alt={partner.alt}
              width={120}
              height={120}
              className="max-h-[120px] w-auto opacity-60 grayscale transition-all duration-300 hover:opacity-100 hover:grayscale-0 max-md:max-h-20"
              unoptimized
            />
          ))}
        </div>
      </div>
    </section>
  );
}
