export function DomainsSection() {
  const domains = [
    {
      icon: "◈",
      title: "Maritime autonomy",
      description: "USV perception and obstacle detection across sea states, weather, and lighting conditions.",
    },
    {
      icon: "◇",
      title: "Aerial ISR",
      description: "UAS target detection and tracking in denied and degraded EO/IR environments.",
    },
    {
      icon: "○",
      title: "Ground autonomy",
      description: "UGV navigation and perception testing across contested terrain and sensor occlusion scenarios.",
    },
  ];

  return (
    <section>
      <div className="text-xs font-semibold tracking-widest uppercase text-brand mb-6">
        Supported domains
      </div>
      <div className="grid grid-cols-3 gap-4">
        {domains.map((domain, index) => (
          <div
            key={index}
            className="border border-border-tertiary rounded-lg p-5 bg-background-primary"
          >
            <div className="w-8 h-8 rounded bg-blue-100 flex items-center justify-center mb-3 text-base">
              {domain.icon}
            </div>
            <h4 className="text-sm font-semibold text-text-primary mb-1">
              {domain.title}
            </h4>
            <p className="text-sm text-text-secondary leading-relaxed">
              {domain.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
