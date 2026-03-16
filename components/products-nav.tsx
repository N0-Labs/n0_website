'use client';

import Link from 'next/link';
import Image from 'next/image';

export function ProductsNav() {
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
          <Link href="/about" className="text-sm text-text-secondary hover:text-text-primary transition">
            Company
          </Link>
          <Link href="/" className="text-sm text-text-primary font-medium">
            Products
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
