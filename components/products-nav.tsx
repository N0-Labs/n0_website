'use client';

import Link from 'next/link';
import Image from 'next/image';

export function ProductsNav() {
  return (
    <nav className="flex items-center justify-between py-6 px-0 border-b border-border-tertiary mb-14">
      <Link href="/" className="flex items-center gap-2 font-semibold text-base text-text-primary tracking-tight hover:opacity-80 transition">
        <Image src="/N0_final-256x256.png" alt="N0labs logo" width={28} height={28} />
        N0labs
      </Link>
      <div className="flex gap-8 items-center">
        <Link href="/about" className="text-sm text-text-secondary hover:text-text-primary transition">
          Company
        </Link>
        <Link href="/" className="text-sm text-text-primary font-medium">
          Products
        </Link>
        <a href="/research" className="text-sm text-text-secondary hover:text-text-primary transition">
          Research
        </a>
        <button className="text-sm font-medium bg-brand text-white rounded px-[18px] py-2 cursor-pointer hover:opacity-90 transition">
          Request a demo
        </button>
      </div>
    </nav>
  );
}
