import { ProductsNav } from "@/components/products-nav";
import { TeamMemberCard } from "@/components/team-member-card";

export default function About() {
  return (
    <main className="min-h-screen bg-background-primary">
      <div className="max-w-4xl mx-auto px-8 py-12">
        <ProductsNav />
        
        {/* Header */}
        <section className="mb-20">
          <h1 className="text-4xl md:text-5xl font-semibold text-text-primary mb-6 text-pretty">
            Building the future of autonomy
          </h1>
          <p className="text-lg text-text-secondary leading-relaxed max-w-2xl">
            At N0labs, we're a team of robotics and AI experts dedicated to providing the simulation environment and synthetic data pipeline that autonomy engineering teams need to build reliable perception systems.
          </p>
        </section>

        {/* Team Section */}
        <section>
          <h2 className="text-2xl font-semibold text-text-primary mb-16">
            Leadership
          </h2>
          
          <div className="space-y-20">
            <TeamMemberCard
              name="Kristopher Luo"
              role="CEO & Co-founder"
              image="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1747817813738-LcVOXjjrF8DYG5DXFh1oEiHu8IIMRH.jpeg"
              bio="Kristopher has spent multiple years developing vision-based edge products in both research and product environments. He has worked in industry automating vision-to-action pipelines for agriculture robotics, and deployed neural networks on edge including a patented system for child heat protection in vehicles. His expertise spans the full stack from model development to production deployment."
            />
            
            <div className="h-px bg-border-primary" />
            
            <TeamMemberCard
              name="Niel Ok"
              role="CTO & Co-founder"
              image="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1728868918596-s1SXN5oL8N5ANJGsb6CiokmCZa7l5B.jpeg"
              bio="Niel is the CTO and co-founder at N0labs. Previously, he led infrastructure at a DeepMind spinout working on automating AI research. He studied Electrical Engineering and conducted neuroscience theory research at Stanford, bringing deep technical expertise in systems design and machine learning infrastructure."
            />
          </div>
        </section>
      </div>
    </main>
  );
}
