"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export function Navigation() {
  const [productsOpen, setProductsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-line">
      <nav className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo on the left */}
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/N0_final-256x256.png"
            alt="N0 Labs"
            width={40}
            height={40}
            className="object-contain"
          />
        </Link>

        {/* Center navigation */}
        <div className="flex items-center gap-8">
          {/* Products dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setProductsOpen(true)}
            onMouseLeave={() => setProductsOpen(false)}
          >
            <button className="font-sans text-sm text-foreground hover:text-accent transition-colors flex items-center gap-1">
              Products
              <svg
                className={`w-4 h-4 transition-transform ${productsOpen ? "rotate-180" : ""}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {/* Dropdown menu */}
            {productsOpen && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2">
                <div className="bg-background/95 backdrop-blur-md border border-line rounded-lg shadow-lg py-2 min-w-[280px]">
                  <Link
                    href="#synthetic-data"
                    className="block px-4 py-3 text-sm text-foreground hover:bg-panel hover:text-accent transition-colors"
                  >
                    <span className="font-heading text-base block">Synthetic Data</span>
                    <span className="text-muted text-xs">For Perception models</span>
                  </Link>
                  <Link
                    href="#sitl"
                    className="block px-4 py-3 text-sm text-foreground hover:bg-panel hover:text-accent transition-colors"
                  >
                    <span className="font-heading text-base block">SITL Sensor Sim</span>
                    <span className="text-muted text-xs">For testing autonomy</span>
                  </Link>
                </div>
              </div>
            )}
          </div>

          {/* Company */}
          <Link
            href="#company"
            className="font-sans text-sm text-foreground hover:text-accent transition-colors"
          >
            Company
          </Link>
        </div>

        {/* Right side placeholder for balance */}
        <div className="w-10" />
      </nav>
    </header>
  );
}
