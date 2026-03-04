"use client";

import Image from "next/image";
import { GlitchTitle } from "./glitch-title";

export function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-start" style={{ left: "-5px" }}>
      <div className="relative text-left max-w-[800px] px-5">
        <div
          className="flex items-center justify-start gap-[clamp(20px,4vw,40px)] w-full h-screen relative"
          style={{ paddingLeft: "clamp(20px, 15vw, 230px)" }}
        >
          <Image
            src="/N0_final-256x256.png"
            alt="Null Labs Logo"
            width={120}
            height={120}
            className="block self-center"
            style={{
              width: "clamp(80px, 10vw, 120px)",
              height: "clamp(80px, 10vw, 120px)",
              animation: "logoPushAnimation 3s ease forwards",
            }}
            priority
          />
          <GlitchTitle />
        </div>
      </div>
    </section>
  );
}
