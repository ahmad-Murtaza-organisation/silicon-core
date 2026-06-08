import { Cpu, MonitorPlay, CircuitBoard, MemoryStick, HardDrive, Cog, Radio, Bot, Network, Zap } from "lucide-react";

const CATS = [
  { name: "Processors", count: 142, Icon: Cpu, tint: "from-blue-500/15 to-blue-500/0" },
  { name: "Graphics Cards", count: 86, Icon: MonitorPlay, tint: "from-emerald-500/15 to-emerald-500/0" },
  { name: "Motherboards", count: 124, Icon: CircuitBoard, tint: "from-violet-500/15 to-violet-500/0" },
  { name: "RAM", count: 98, Icon: MemoryStick, tint: "from-amber-500/15 to-amber-500/0" },
  { name: "SSD Storage", count: 156, Icon: HardDrive, tint: "from-rose-500/15 to-rose-500/0" },
  { name: "Arduino", count: 64, Icon: Cog, tint: "from-cyan-500/15 to-cyan-500/0" },
  { name: "Raspberry Pi", count: 42, Icon: Zap, tint: "from-red-500/15 to-red-500/0" },
  { name: "Sensors", count: 210, Icon: Radio, tint: "from-fuchsia-500/15 to-fuchsia-500/0" },
  { name: "Robotics", count: 38, Icon: Bot, tint: "from-orange-500/15 to-orange-500/0" },
  { name: "Networking", count: 71, Icon: Network, tint: "from-teal-500/15 to-teal-500/0" },
];

export function FeaturedCategories() {
  return (
    <section id="categories" className="py-16 lg:py-24">
      <div className="container-page">
        <div className="flex items-end justify-between mb-10">
          <div>
            <div className="text-xs font-semibold uppercase tracking-widest text-primary mb-2">Shop by category</div>
            <h2 className="font-display text-3xl lg:text-4xl font-bold">Everything you need to build</h2>
          </div>
          <a href="#" className="hidden md:inline text-sm font-semibold text-primary hover:underline">All categories →</a>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {CATS.map(({ name, count, Icon, tint }) => (
            <a
              key={name}
              href="#"
              className="group relative overflow-hidden rounded-xl border border-border bg-background p-5 hover:border-primary/40 hover:shadow-card-hover transition"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${tint} opacity-0 group-hover:opacity-100 transition`} />
              <div className="relative">
                <div className="h-11 w-11 rounded-lg bg-surface border border-border grid place-items-center text-primary group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition">
                  <Icon className="h-5 w-5" />
                </div>
                <div className="mt-4 font-semibold text-sm">{name}</div>
                <div className="text-xs text-muted-foreground mt-0.5">{count} products</div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
