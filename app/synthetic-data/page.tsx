import { ProductsNav } from "@/components/products-nav";

export default function SyntheticData() {
  return (
    <main className="min-h-screen bg-background-primary">
      <div className="max-w-4xl mx-auto px-8 pt-24 pb-12">
        <ProductsNav />

        {/* Header */}
        <section className="mb-16">
          <span className="inline-block text-xs font-semibold tracking-widest uppercase px-2.5 py-1 rounded mb-5 bg-blue-100 text-accent-blue">
            Synthetic data
          </span>
          <h1 className="text-4xl md:text-5xl font-semibold text-text-primary mb-6 text-pretty">
            Training data at simulation speed
          </h1>
          <p className="text-lg text-text-secondary leading-relaxed max-w-2xl">
            Generate fully annotated EO imagery at scale — across any domain, any condition — without a single real-world collection mission.
          </p>
        </section>

        {/* Throughput stat */}
        <section className="mb-10">
          <div className="border border-border-tertiary rounded-xl p-8 bg-background-primary flex items-center gap-10">
            <div>
              <p className="text-5xl font-semibold text-text-primary tracking-tight mb-1">10,000</p>
              <p className="text-sm text-text-secondary">labeled images</p>
            </div>
            <div className="text-3xl text-border-tertiary font-light">in</div>
            <div>
              <p className="text-5xl font-semibold text-brand tracking-tight mb-1">20 min</p>
              <p className="text-sm text-text-secondary">any domain</p>
            </div>
          </div>
        </section>

        {/* Domain coverage */}
        <section className="mb-14">
          <h2 className="text-xs font-semibold tracking-widest uppercase text-brand mb-5">
            Domains
          </h2>
          <div className="grid grid-cols-2 gap-4">
            {[
              {
                icon: "◇",
                title: "Ground autonomy",
                description: "Urban terrain, open desert, forested environments with configurable occlusion and lighting.",
              },
              {
                icon: "◈",
                title: "Maritime autonomy",
                description: "Open water, littoral zones, sea state variation, and weather-driven visibility degradation.",
              },
              {
                icon: "○",
                title: "Aerial ISR",
                description: "Nadir and oblique views across altitudes, with atmospheric haze and sensor noise profiles.",
              },
              {
                icon: "◆",
                title: "Counter UAS",
                description: "Small UAS signatures against cluttered sky backgrounds at a range of aspect angles and ranges.",
              },
            ].map((domain) => (
              <div
                key={domain.title}
                className="border border-border-tertiary rounded-lg p-5 bg-background-primary"
              >
                <div className="w-8 h-8 rounded bg-blue-100 flex items-center justify-center mb-3 text-base">
                  {domain.icon}
                </div>
                <h4 className="text-sm font-semibold text-text-primary mb-1">{domain.title}</h4>
                <p className="text-sm text-text-secondary leading-relaxed">{domain.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 3D Neural Reconstruction */}
        <section className="mb-14">
          <h2 className="text-xs font-semibold tracking-widest uppercase text-brand mb-5">
            Asset pipeline
          </h2>
          <div className="border border-border-tertiary rounded-xl overflow-hidden">
            <div className="bg-brand px-8 py-7">
              <h3 className="text-xl font-semibold text-white mb-2 tracking-tight">
                3D neural reconstruction
              </h3>
              <p className="text-sm text-white/75 leading-relaxed max-w-2xl">
                Any real-world asset can be added to our simulation database. We use neural reconstruction to convert video or photo captures into high-fidelity 3D models — no manual modeling required.
              </p>
            </div>
            <div className="px-8 py-7 bg-background-primary grid grid-cols-3 gap-6">
              <div>
                <h4 className="text-sm font-semibold text-text-primary mb-2">Capture</h4>
                <p className="text-sm text-text-secondary leading-relaxed">
                  Photograph or video an asset from multiple angles. Standard camera hardware is sufficient.
                </p>
              </div>
              <div>
                <h4 className="text-sm font-semibold text-text-primary mb-2">Reconstruct</h4>
                <p className="text-sm text-text-secondary leading-relaxed">
                  Our neural reconstruction pipeline produces a detailed 3D model with accurate geometry and appearance.
                </p>
              </div>
              <div>
                <h4 className="text-sm font-semibold text-text-primary mb-2">Deploy</h4>
                <p className="text-sm text-text-secondary leading-relaxed">
                  Assets are added to the simulation database and immediately available for synthetic data generation across all domains.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
