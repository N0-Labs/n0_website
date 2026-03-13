import Image from "next/image";
import Link from "next/link";

const partners = [
  { src: "/ow_logo.png", alt: "Overwatch Imaging" },
  { src: "/arl.png", alt: "Army Research Lab" },
  { src: "/nvidia_logo.png", alt: "NVIDIA" },
  { src: "/mara_logo.jpg", alt: "Mara" },
  { src: "/Seal_of_the_Defense_Innovation_Unit.svg", alt: "DIU" },
];

export function AcceleratingAutonomy() {
  return (
    <section id="sitl" className="py-[120px] text-center max-md:py-20">
      <h2 className="font-heading tracking-[0.04em] text-[clamp(36px,5.5vw,68px)] text-foreground text-center mb-8 px-5 leading-[0.95]">
        End-to-end Simulation Software
      </h2>
      <p className="font-sans text-[clamp(14px,1.5vw,16px)] leading-[1.8] tracking-[0.02em] text-muted text-center max-w-[800px] mx-auto px-5">
        Photorealistic, real-time, open-environment simulation for robotics operating in unstructured environments. Generate synthetic training data and validate your full stack — with{" "}
        <span className="text-foreground font-bold">proven sim-to-real transfer</span>.
      </p>
      <p className="font-sans text-[clamp(13px,1.4vw,15px)] tracking-[0.02em] text-muted-2 text-center mt-10 mb-6 mx-auto">
        For any domain, any platform. Build scenarios in virtual worlds to test
        and train your autonomy.
      </p>
      <a
        href="https://linkedin.com/in/krisluo"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block font-sans text-sm font-bold text-background bg-accent border-2 border-accent rounded-xl px-8 py-3.5 no-underline tracking-[0.08em] uppercase mx-auto max-w-fit transition-all duration-300 hover:bg-accent-hover hover:border-accent-hover hover:-translate-y-0.5 hover:shadow-[0_4px_12px_rgba(0,255,178,0.3)]"
      >
        Book Demo
      </a>

      <div className="mt-20 text-center max-md:mt-[60px]">
        <h3 className="font-sans text-xs font-bold text-muted uppercase tracking-[0.18em] mb-10">
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
