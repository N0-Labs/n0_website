import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Research - Null Labs",
  description: "Null Labs — Research",
};

export default function ResearchPage() {
  return (
    <>
      <header className="fixed top-5 left-0 right-0 z-[1000] flex items-center justify-center px-5">
        <div className="flex items-center gap-5 bg-[rgba(245,245,245,0.06)] backdrop-blur-[10px] rounded-2xl px-4 py-2.5 justify-between max-w-[1200px] w-[calc(100%-40px)] mx-auto shadow-[0_4px_20px_rgba(0,0,0,0.1)] border border-line">
          <Link
            href="/"
            className="font-bold text-sm tracking-[0.24em] flex items-center gap-3 uppercase text-foreground no-underline"
          >
            <Image
              src="/N0_final-256x256.png"
              alt="Null Labs Logo"
              width={32}
              height={32}
              className="w-8 h-8"
            />
            <span>Null Labs</span>
          </Link>
          <nav className="flex gap-3 items-center ml-auto">
            <Link
              href="/research"
              className="text-foreground text-xs tracking-[0.12em] uppercase no-underline px-2 py-1 font-semibold before:content-['['] after:content-[']'] before:mr-1 after:ml-1"
              aria-current="page"
            >
              Research
            </Link>
          </nav>
        </div>
      </header>

      <main>
        <div className="bg-background">
          <div className="w-full mx-auto px-[max(16px,env(safe-area-inset-left))] md:max-w-[1200px] md:px-5">
            <section className="h-screen flex items-center justify-start pt-0 pb-0 text-left">
              <div className="w-full max-w-[60ch]">
                <div className="font-variant-caps-all-small-caps text-xs tracking-[0.18em] text-accent mb-4 font-semibold uppercase">
                  Research
                </div>
                <h1 className="font-sans text-[48px] font-semibold text-foreground mb-6 max-w-[60ch] max-md:text-[36px]">
                  Under construction
                </h1>
                <p className="text-[24px] text-muted leading-[1.5]">
                  Our research publications and technical insights will be
                  available here soon.
                </p>
              </div>
            </section>
          </div>
        </div>
      </main>
    </>
  );
}
