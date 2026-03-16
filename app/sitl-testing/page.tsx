import { ProductsNav } from "@/components/products-nav";

export default function SITLTesting() {
  return (
    <main className="min-h-screen bg-background-primary">
      <div className="max-w-4xl mx-auto px-8 pt-24 pb-12">
        <ProductsNav />

        {/* Header */}
        <section className="mb-16">
          <span className="inline-block text-xs font-semibold tracking-widest uppercase px-2.5 py-1 rounded mb-5 bg-amber-100 text-accent-amber">
            SITL Testing
          </span>
          <h1 className="text-4xl md:text-5xl font-semibold text-text-primary mb-6 text-pretty">
            Software-in-the-loop simulation
          </h1>
          <p className="text-lg text-text-secondary leading-relaxed max-w-2xl">
            Run your autonomy stack against photorealistic simulated sensor feeds in real time — before a single hour of field testing.
          </p>
        </section>

        {/* Key stat */}
        <section className="mb-10">
          <div className="border border-border-tertiary rounded-xl p-8 bg-background-primary flex items-center gap-10">
            <div>
              <p className="text-5xl font-semibold text-brand tracking-tight mb-1">20 fps</p>
              <p className="text-sm text-text-secondary">real-time SITL simulation</p>
            </div>
            <div className="h-12 w-px bg-border-tertiary" />
            <div>
              <p className="text-5xl font-semibold text-text-primary tracking-tight mb-1">SITL</p>
              <p className="text-sm text-text-secondary">closed-loop deployment</p>
            </div>
          </div>
        </section>

        {/* Deployment details */}
        <section className="mb-14">
          <h2 className="text-xs font-semibold tracking-widest uppercase text-brand mb-5">
            Deployment
          </h2>
          <div className="border border-border-tertiary rounded-xl overflow-hidden">
            <div className="bg-brand px-8 py-7">
              <h3 className="text-xl font-semibold text-white mb-2 tracking-tight">
                Drop-in integration with your stack
              </h3>
              <p className="text-sm text-white/75 leading-relaxed max-w-2xl">
                Connect your autonomy software directly to the simulation engine. No custom middleware — your stack receives sensor feeds and issues commands exactly as it would on hardware.
              </p>
            </div>
            <div className="px-8 py-7 bg-background-primary grid grid-cols-3 gap-6">
              <div>
                <h4 className="text-sm font-semibold text-text-primary mb-2">Real-time throughput</h4>
                <p className="text-sm text-text-secondary leading-relaxed">
                  Sustained 20 fps EO sensor output with physics-accurate rendering — no pre-baked frames, no offline processing.
                </p>
              </div>
              <div>
                <h4 className="text-sm font-semibold text-text-primary mb-2">Configurable scenarios</h4>
                <p className="text-sm text-text-secondary leading-relaxed">
                  Inject faults, degrade sensors, spawn threats, and sweep environmental conditions programmatically across test runs.
                </p>
              </div>
              <div>
                <h4 className="text-sm font-semibold text-text-primary mb-2">CI/CD ready</h4>
                <p className="text-sm text-text-secondary leading-relaxed">
                  Headless deployment with pass/fail metrics. Integrate SITL regression tests directly into your continuous integration pipeline.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Feature list */}
        <section className="mb-14">
          <h2 className="text-xs font-semibold tracking-widest uppercase text-brand mb-5">
            Capabilities
          </h2>
          <div className="grid grid-cols-2 gap-4">
            {[
              {
                title: "Physics-accurate EO",
                description: "Atmospheric haze, sensor noise, motion blur, and lighting variation rendered at runtime.",
              },
              {
                title: "Multi-domain environments",
                description: "Maritime, aerial, and ground environments with configurable terrain, weather, and sea state.",
              },
              {
                title: "Multi-agent simulation",
                description: "Run multiple autonomous agents within the same scenario — test coordination, deconfliction, and emergent behavior without hardware.",
              },
              {
                title: "Structured test suites",
                description: "Pre-built scenario libraries for common program requirements with quantified pass/fail output.",
              },
            ].map((item) => (
              <div key={item.title} className="border border-border-tertiary rounded-lg p-5 bg-background-primary">
                <h4 className="text-sm font-semibold text-text-primary mb-1">{item.title}</h4>
                <p className="text-sm text-text-secondary leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
