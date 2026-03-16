export function ProductsSection() {
  return (
    <section className="mb-14">
      <div className="text-xs font-semibold tracking-widest uppercase text-brand mb-6">
        Products
      </div>

      {/* Hero Product */}
      <div className="border border-border-tertiary rounded-xl overflow-hidden mb-5">
        <div className="bg-brand px-8 py-7 flex items-start justify-between gap-8">
          <div>
            <h2 className="text-xl font-semibold text-white mb-2 tracking-tight">
              Sensor Simulation &amp; SITL Testing
            </h2>
            <p className="text-sm text-white/75 leading-relaxed max-w-2xl">
              Photorealistic EO simulation environments for software-in-the-loop testing. Validate your autonomy stack against degraded conditions, edge cases, and adversarial scenarios before hardware integration.
            </p>
          </div>
          <div className="bg-white/15 text-white text-xs font-semibold tracking-widest uppercase px-2.5 py-1 rounded whitespace-nowrap flex-shrink-0 mt-0.5">
            Core product
          </div>
        </div>
        <div className="px-8 py-7 bg-background-primary grid grid-cols-3 gap-6">
          <div>
            <h4 className="text-sm font-semibold text-text-primary mb-2">
              Sensor fidelity
            </h4>
            <p className="text-sm text-text-secondary leading-relaxed">
              Physics-accurate EO rendering with real-world degradation — atmospheric haze, sensor noise, motion blur, and lighting variation.
            </p>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-text-primary mb-2">
              Closed-loop SITL
            </h4>
            <p className="text-sm text-text-secondary leading-relaxed">
              Direct integration with your autonomy stack. Run your software against simulated sensor feeds in real time with configurable scenario control.
            </p>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-text-primary mb-2">
              Environment library
            </h4>
            <p className="text-sm text-text-secondary leading-relaxed">
              Maritime, aerial, and ground environments. Author custom scenarios or pull from our pre-built library for common test conditions.
            </p>
          </div>
        </div>
      </div>

      {/* Product Cards */}
      <div className="grid grid-cols-2 gap-5">
        {/* Card 1 */}
        <div className="border border-border-tertiary rounded-xl p-7 bg-background-primary">
          <span className="inline-block text-xs font-semibold tracking-widest uppercase px-2.5 py-1 rounded mb-4 bg-blue-100 text-accent-blue">
            Synthetic data
          </span>
          <h3 className="text-base font-semibold text-text-primary mb-2 tracking-tight">
            Training data generation
          </h3>
          <p className="text-sm text-text-secondary leading-relaxed mb-5">
            Generate labeled sensor data at scale to train and fine-tune your perception models. Cover the long tail of conditions your real-world dataset doesn't reach.
          </p>
          <ul className="flex flex-col gap-1.5 mb-6">
            <li className="text-sm text-text-secondary leading-normal flex items-start">
              <span className="inline-block w-1 h-0.5 bg-text-secondary mr-3.5 mt-2 flex-shrink-0" />
              <span>EO imagery with automatic annotation</span>
            </li>
            <li className="text-sm text-text-secondary leading-normal flex items-start">
              <span className="inline-block w-1 h-0.5 bg-text-secondary mr-3.5 mt-2 flex-shrink-0" />
              <span>Domain randomization across sensor configs and conditions</span>
            </li>
            <li className="text-sm text-text-secondary leading-normal flex items-start">
              <span className="inline-block w-1 h-0.5 bg-text-secondary mr-3.5 mt-2 flex-shrink-0" />
              <span>Drop-in integration with existing training pipelines</span>
            </li>
          </ul>
          <a href="#" className="text-sm font-medium text-brand cursor-pointer hover:opacity-70 transition">
            Learn more →
          </a>
        </div>

        {/* Card 2 */}
        <div className="border border-border-tertiary rounded-xl p-7 bg-background-primary">
          <span className="inline-block text-xs font-semibold tracking-widest uppercase px-2.5 py-1 rounded mb-4 bg-amber-100 text-accent-amber">
            Coming soon
          </span>
          <h3 className="text-base font-semibold text-text-primary mb-2 tracking-tight">
            Autonomy validation suite
          </h3>
          <p className="text-sm text-text-secondary leading-relaxed mb-5">
            Structured test suites for autonomy programs — from unit-level perception regression to full mission rehearsal in simulation.
          </p>
          <ul className="flex flex-col gap-1.5 mb-6">
            <li className="text-sm text-text-secondary leading-normal flex items-start">
              <span className="inline-block w-1 h-0.5 bg-text-secondary mr-3.5 mt-2 flex-shrink-0" />
              <span>Pre-built scenario libraries for maritime and aerial domains</span>
            </li>
            <li className="text-sm text-text-secondary leading-normal flex items-start">
              <span className="inline-block w-1 h-0.5 bg-text-secondary mr-3.5 mt-2 flex-shrink-0" />
              <span>Pass/fail metrics tied to program requirements</span>
            </li>
            <li className="text-sm text-text-secondary leading-normal flex items-start">
              <span className="inline-block w-1 h-0.5 bg-text-secondary mr-3.5 mt-2 flex-shrink-0" />
              <span>CI/CD integration for continuous validation</span>
            </li>
          </ul>
          <a href="#" className="text-sm font-medium text-brand cursor-pointer hover:opacity-70 transition">
            Join waitlist →
          </a>
        </div>
      </div>
    </section>
  );
}
