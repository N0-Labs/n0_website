"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export function Navigation() {
  const [productsOpen, setProductsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/75 backdrop-blur-md border-b border-line">
      <nav className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 shrink-0">
          <Image
            src="/N0_final-256x256.png"
            alt="N0 Labs"
            width={36}
            height={36}
            className="object-contain"
          />
        </Link>

        {/* Center nav */}
        <div className="flex items-center gap-10">
          {/* Products dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setProductsOpen(true)}
            onMouseLeave={() => setProductsOpen(false)}
          >
            <button className="font-mono text-xs tracking-[0.12em] uppercase text-foreground/80 hover:text-accent transition-colors flex items-center gap-1.5">
              Products
              <svg
                className={`w-3 h-3 transition-transform duration-200 ${productsOpen ? "rotate-180" : ""}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {productsOpen && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 pt-3">
                <div className="bg-panel/95 backdrop-blur-md border border-line-strong rounded-xl shadow-[0_8px_32px_rgba(0,0,0,0.4)] py-2 min-w-[260px]">
                  <Link
                    href="/synthetic-data"
                    className="block px-5 py-3.5 group hover:bg-background/60 transition-colors"
                  >
                    <span className="font-heading text-[15px] tracking-[0.06em] text-foreground group-hover:text-accent block transition-colors">
                      Synthetic Data
                    </span>
                    <span className="font-mono text-[11px] text-muted mt-0.5 block">
                      For perception models
                    </span>
                  </Link>
                </div>
              </div>
            )}
          </div>

          {/* Company */}
          <Link
            href="/#company"
            className="font-mono text-xs tracking-[0.12em] uppercase text-foreground/80 hover:text-accent transition-colors"
          >
            Company
          </Link>
        </div>

        {/* Spacer to balance logo */}
        <div className="w-9 shrink-0" />
      </nav>
    </header>
  );
}
