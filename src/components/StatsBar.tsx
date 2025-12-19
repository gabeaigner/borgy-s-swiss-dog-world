interface StatItemProps {
  value: string;
  label: string;
}

const StatItem = ({ value, label }: StatItemProps) => (
  <div className="text-center px-8 border-r border-primary-foreground/20 last:border-r-0">
    <p className="font-display text-3xl md:text-4xl text-primary-foreground mb-1">{value}</p>
    <p className="text-primary-foreground/60 text-xs uppercase tracking-[0.2em]">{label}</p>
  </div>
);

const collaborators = [
  { name: "Swiss Tourism" },
  { name: "Lindt" },
  { name: "Swatch" },
  { name: "Toblerone" },
];

const StatsBar = () => {
  return (
    <div className="absolute bottom-0 left-0 right-0 z-20">
      <div className="max-w-7xl mx-auto px-6 pb-12">
        <div className="glass-card p-8 bg-foreground/5 backdrop-blur-lg border-0">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            {/* Stats */}
            <div className="flex items-center">
              <StatItem value="2.4M" label="Followers" />
              <StatItem value="150M+" label="Views" />
              <StatItem value="50+" label="Collabs" />
            </div>

            {/* Collaborators */}
            <div className="flex items-center gap-6">
              <span className="text-primary-foreground/50 text-xs uppercase tracking-[0.2em]">Partners</span>
              <div className="flex items-center gap-1">
                {collaborators.map((collab, index) => (
                  <span key={collab.name} className="text-primary-foreground/80 text-sm font-light">
                    {collab.name}
                    {index < collaborators.length - 1 && <span className="mx-3 text-primary-foreground/30">·</span>}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatsBar;