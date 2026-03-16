import Link from "next/link";

export function CTABanner() {
  return (
    <div className="bg-background-secondary rounded-xl p-9 flex items-center justify-between gap-8 mb-14">
      <div>
        <h3 className="text-lg font-semibold text-text-primary mb-1 tracking-tight">
          Talk to an engineer, not a salesperson
        </h3>
        <p className="text-sm text-text-secondary leading-relaxed max-w-2xl">
          Our team works directly with autonomy engineers. If you're building perception for a UAS, USV, or UGV program, we'll walk you through how N0labs fits into your stack — no slide deck required.
        </p>
      </div>
      <div className="flex gap-2.5 flex-shrink-0">
        <Link href="/contact" className="text-sm font-medium bg-brand text-white rounded px-5 py-2.5 cursor-pointer hover:opacity-90 transition whitespace-nowrap">
          Request a demo
        </Link>
        <button className="text-sm font-medium text-text-primary border border-border-primary rounded px-5 py-2.5 cursor-pointer hover:bg-background-primary transition bg-background-primary whitespace-nowrap">
          View docs
        </button>
      </div>
    </div>
  );
}
