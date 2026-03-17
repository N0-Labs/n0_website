import { Suspense } from "react";
import { ProductsNav } from "@/components/products-nav";
import { PageIntro } from "@/components/page-intro";
import { ProductsSection } from "@/components/products-section";
import { PartnersSlider } from "@/components/partners-slider";
import { CTABanner } from "@/components/cta-banner";
import { DomainsSection } from "@/components/domains-section";

export default function Home() {
  return (
    <main className="min-h-screen bg-background-primary">
      <div className="max-w-4xl mx-auto px-8 pt-24 pb-12">
        <ProductsNav />
        <PageIntro />
        <ProductsSection />
        <PartnersSlider />
        <CTABanner />
        <Suspense>
          <DomainsSection />
        </Suspense>
      </div>
    </main>
  );
}
