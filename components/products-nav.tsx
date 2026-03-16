'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

export function ProductsNav() {
  const [productsOpen, setProductsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-background-primary/70 backdrop-blur-md">
      <div className="max-w-4xl mx-auto px-8 flex items-center justify-between py-4">
        <Link
          href="/"
          className="font-bold text-sm tracking-[0.24em] flex items-center gap-3 uppercase text-text-primary no-underline hover:opacity-80 transition"
        >
          <Image src="/N0_final-256x256.png" alt="Null Labs logo" width={28} height={28} />
          <span>Null Labs</span>
        </Link>
        <div className="flex gap-8 items-center">
          {/* Products dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setProductsOpen(true)}
            onMouseLeave={() => setProductsOpen(false)}
          >
            <Link href="/" className="text-sm text-text-primary font-medium">
              Products
            </Link>
            {productsOpen && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 pt-3 w-52">
              <div className="bg-background-primary/95 backdrop-blur-md border border-border-tertiary rounded-xl shadow-lg overflow-hidden">
                <Link
                  href="/synthetic-data"
                  className="flex items-center gap-3 px-4 py-3 hover:bg-background-secondary transition"
                >
                  <div className="w-8 h-8 rounded-lg bg-blue-100 flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-accent-blue" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
                      <rect x="3" y="3" width="7" height="7" rx="1" />
                      <rect x="14" y="3" width="7" height="7" rx="1" />
                      <rect x="3" y="14" width="7" height="7" rx="1" />
                      <rect x="14" y="14" width="7" height="7" rx="1" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-sm font-medium text-text-primary">Synthetic Data</div>
                    <div className="text-xs text-text-secondary mt-0.5">Training data at scale</div>
                  </div>
                </Link>
                <div className="h-px bg-border-tertiary mx-4" />
                <Link
                  href="/sitl-testing"
                  className="flex items-center gap-3 px-4 py-3 hover:bg-background-secondary transition"
                >
                  <div className="w-8 h-8 rounded-lg bg-amber-100 flex items-center justify-center flex-shrink-0 relative">
                    {/* Play button */}
                    <svg className="w-4 h-4 text-accent-amber" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                    {/* Wrench overlapping bottom-right */}
                    <svg className="w-3 h-3 text-accent-amber absolute -bottom-0.5 -right-0.5 drop-shadow-sm" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M22.7 19l-9.1-9.1c.9-2.3.4-5-1.5-6.9-2-2-5-2.4-7.4-1.3L9 6 6 9 1.6 4.7C.4 7.1.9 10.1 2.9 12.1c1.9 1.9 4.6 2.4 6.9 1.5l9.1 9.1c.4.4 1 .4 1.4 0l2.3-2.3c.5-.4.5-1.1.1-1.4z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-sm font-medium text-text-primary">SITL Testing</div>
                    <div className="text-xs text-text-secondary mt-0.5">20 fps simulation deployment</div>
                  </div>
                </Link>
              </div>
              </div>
            )}
          </div>

          <Link href="/about" className="text-sm text-text-secondary hover:text-text-primary transition">
            Company
          </Link>
          <Link href="/research" className="text-sm text-text-secondary hover:text-text-primary transition">
            Research
          </Link>
          <Link href="/contact" className="text-sm font-medium bg-brand text-white rounded px-[18px] py-2 hover:opacity-90 transition">
            Request a demo
          </Link>
        </div>
      </div>
    </nav>
  );
}
