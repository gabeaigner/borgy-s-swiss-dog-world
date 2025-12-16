import { Users, Eye, Sparkles } from "lucide-react";

interface StatItemProps {
  icon: React.ReactNode;
  value: string;
  label: string;
}

const StatItem = ({ icon, value, label }: StatItemProps) => (
  <div className="flex items-center gap-3">
    <div className="w-12 h-12 rounded-xl bg-primary/20 backdrop-blur-sm flex items-center justify-center">
      {icon}
    </div>
    <div>
      <p className="font-display font-bold text-2xl text-primary-foreground">{value}</p>
      <p className="text-primary-foreground/70 text-sm">{label}</p>
    </div>
  </div>
);

const collaborators = [
  { name: "Swiss Tourism", initials: "ST" },
  { name: "Lindt", initials: "L" },
  { name: "Swatch", initials: "SW" },
  { name: "Toblerone", initials: "TB" },
];

const StatsBar = () => {
  return (
    <div className="absolute bottom-0 left-0 right-0 z-20">
      <div className="max-w-7xl mx-auto px-6 pb-8">
        <div className="glass-card rounded-2xl p-6 bg-foreground/10 backdrop-blur-xl border border-primary-foreground/10">
          <div className="flex flex-wrap items-center justify-between gap-8">
            {/* Stats */}
            <div className="flex flex-wrap gap-8">
              <StatItem
                icon={<Users className="w-5 h-5 text-primary" />}
                value="2.4M"
                label="Followers"
              />
              <StatItem
                icon={<Eye className="w-5 h-5 text-primary" />}
                value="150M+"
                label="Total Views"
              />
              <StatItem
                icon={<Sparkles className="w-5 h-5 text-primary" />}
                value="50+"
                label="Collaborations"
              />
            </div>

            {/* Collaborators */}
            <div className="flex items-center gap-4">
              <span className="text-primary-foreground/60 text-sm uppercase tracking-wider">Recent Partners</span>
              <div className="flex -space-x-2">
                {collaborators.map((collab) => (
                  <div
                    key={collab.name}
                    className="w-10 h-10 rounded-full bg-card flex items-center justify-center border-2 border-primary/30 hover:scale-110 hover:z-10 transition-transform cursor-pointer"
                    title={collab.name}
                  >
                    <span className="font-display font-bold text-xs text-foreground">{collab.initials}</span>
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
