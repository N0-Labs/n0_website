export function PageIntro() {
  return (
    <div className="mb-14 pb-12 border-b border-border-tertiary flex gap-16 items-start">
      <div className="flex-1">
        <div className="text-xs font-semibold tracking-widest uppercase text-brand mb-4">
          Null Labs Platform
        </div>
        <h1 className="text-4xl font-semibold leading-tight tracking-tight text-text-primary mb-4">
          Simulation and testing infrastructure for autonomy programs
        </h1>
        <p className="text-base text-text-secondary leading-relaxed">
          Null Labs gives autonomy engineering teams the simulation environment and synthetic data pipeline they need to build reliable perception systems — without waiting for real-world data collection and reducing time-intensive field testing.
        </p>
      </div>
      <div className="flex-1">
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-background-secondary rounded-lg p-4">
            <div className="text-2xl font-semibold text-text-primary tracking-tight mb-1">
              10×
            </div>
            <p className="text-xs text-text-secondary leading-relaxed">
              faster edge case coverage vs. real-world collection
            </p>
          </div>
          <div className="bg-background-secondary rounded-lg p-4">
            <div className="text-2xl font-semibold text-text-primary tracking-tight mb-1">
              EO
            </div>
            <p className="text-xs text-text-secondary leading-relaxed">
              physics-accurate sensor simulation
            </p>
          </div>
          <div className="bg-background-secondary rounded-lg p-4">
            <div className="text-2xl font-semibold text-text-primary tracking-tight mb-1">
              SITL
            </div>
            <p className="text-xs text-text-secondary leading-relaxed">
              closed-loop integration with your autonomy stack
            </p>
          </div>
          <div className="bg-background-secondary rounded-lg p-4">
            <div className="text-2xl font-semibold text-text-primary tracking-tight mb-1">
              DoW
            </div>
            <p className="text-xs text-text-secondary leading-relaxed">
              built for defense and maritime autonomy programs
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
