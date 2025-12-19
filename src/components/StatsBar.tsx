interface StatItemProps {
  value: string;
  label: string;
}

const StatItem = ({ value, label }: StatItemProps) => (
  <div className="text-center px-6 md:px-8 border-r border-primary-foreground/20 last:border-r-0">
    <p className="font-display text-2xl md:text-4xl text-primary-foreground font-semibold mb-1">{value}</p>
    <p className="text-primary-foreground/60 text-xs uppercase tracking-wider font-medium">{label}</p>
  </div>
);

const partners = [
  { name: "Swiss Tourism", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Flag_of_Switzerland.svg/100px-Flag_of_Switzerland.svg.png" },
  { name: "Lindt", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Lindt-Logo.svg/150px-Lindt-Logo.svg.png" },
  { name: "Swatch", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Swatch_Logo.svg/150px-Swatch_Logo.svg.png" },
  { name: "Toblerone", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Toblerone_logo.svg/150px-Toblerone_logo.svg.png" },
];

const StatsBar = () => {
  return (
    <div className="absolute bottom-0 left-0 right-0 z-20">
      <div className="max-w-7xl mx-auto px-6 pb-8">
        <div className="glass-card p-6 md:p-8 rounded-2xl">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            {/* Stats */}
            <div className="flex items-center">
              <StatItem value="2.4M" label="Followers" />
              <StatItem value="150M+" label="Views" />
              <StatItem value="50+" label="Collabs" />
            </div>

            {/* Partners */}
            <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6">
              <span className="text-primary-foreground/60 text-xs uppercase tracking-wider font-medium">Recent Partnerships</span>
              <div className="flex items-center gap-6">
                {partners.map((partner) => (
                  <div
                    key={partner.name}
                    className="h-8 opacity-80 hover:opacity-100 transition-opacity duration-300"
                  >
                    <img
                      src={partner.logo}
                      alt={partner.name}
                      className="h-full w-auto object-contain brightness-0 invert"
                    />
                  </div>
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