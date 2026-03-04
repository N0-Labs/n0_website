import Image from "next/image";

const backers = [
  { src: "/yc_logo.png", alt: "Y Combinator", className: "" },
  { src: "/ovo_ventures.png", alt: "OVO Ventures", className: "" },
  {
    src: "/pdc.avif",
    alt: "Palm Drive Capital",
    className: "!max-h-[200px] max-md:!max-h-[100px]",
  },
];

export function Backers() {
  return (
    <section className="py-[120px] text-center max-md:py-20">
      <h2 className="font-heading tracking-[0.04em] text-[clamp(32px,4.5vw,56px)] text-foreground text-center mb-8 px-5 leading-[0.95]">
        Our Backers
      </h2>
      <div className="flex flex-wrap justify-center items-center gap-10 max-w-[1000px] mt-[60px] mx-auto max-md:gap-[30px]">
        {backers.map((backer) => (
          <Image
            key={backer.alt}
            src={backer.src}
            alt={backer.alt}
            width={120}
            height={120}
            className={`max-h-[120px] w-auto opacity-60 grayscale transition-all duration-300 hover:opacity-100 hover:grayscale-0 max-md:max-h-20 ${backer.className}`}
            unoptimized
          />
        ))}
      </div>
    </section>
  );
}
