import type { Metadata } from "next";
import { ProductsNav } from "@/components/products-nav";

export const metadata: Metadata = {
  title: "Research - Null Labs",
  description: "Null Labs — Research",
};

export default function ResearchPage() {
  return (
    <main className="min-h-screen bg-background-primary">
      <ProductsNav />
      <div className="max-w-4xl mx-auto px-8 pt-24 pb-12">
        <section className="flex items-center justify-start" style={{ minHeight: "60vh" }}>
          <div>
            <div className="text-xs font-semibold tracking-widest uppercase text-brand mb-4">
              Research
            </div>
            <h1 className="text-4xl md:text-5xl font-semibold text-text-primary mb-6 text-pretty">
              Under construction
            </h1>
            <p className="text-lg text-text-secondary leading-relaxed max-w-2xl">
              Our research publications and technical insights will be available here soon.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
