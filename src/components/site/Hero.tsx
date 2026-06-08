import { ArrowRight, Cpu, Wrench, ShieldCheck, Truck, Headphones } from "lucide-react";
import heroImg from "@/assets/hero-hardware.jpg";

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-border">
      <div className="absolute inset-0 bg-grid opacity-60 pointer-events-none" />
      <div className="absolute -top-32 -right-32 h-[480px] w-[480px] rounded-full bg-gradient-to-br from-primary/20 to-accent/10 blur-3xl pointer-events-none" />

      <div className="container-page relative grid lg:grid-cols-[1.05fr_1fr] gap-12 items-center py-16 lg:py-24">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1.5 text-xs font-medium text-foreground/70 mb-6">
            <span className="h-1.5 w-1.5 rounded-full bg-success animate-pulse" />
            New: 14th Gen Intel Core & RTX Super in stock
          </div>

          <h1 className="font-display text-5xl lg:text-7xl font-bold leading-[1.02] tracking-tight">
            High Performance
            <br />
            Computing <span className="text-gradient-brand">Starts Here</span>
          </h1>

          <p className="mt-6 text-lg text-muted-foreground max-w-xl">
            Processors, GPUs, Arduino, Raspberry Pi, and electronics for every build —
            from first soldering iron to flagship workstation.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#categories" className="inline-flex items-center gap-2 h-12 px-6 rounded-lg bg-primary text-primary-foreground font-semibold shadow-elevated hover:bg-primary/90 transition">
              Shop Now <ArrowRight className="h-4 w-4" />
            </a>
            <a href="#" className="inline-flex items-center gap-2 h-12 px-6 rounded-lg border border-border bg-background hover:bg-muted font-semibold transition">
              <Wrench className="h-4 w-4" /> Build Your PC
            </a>
          </div>

          <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-xl">
            {[
              { n: "12k+", l: "Products" },
              { n: "240+", l: "Brands" },
              { n: "98%", l: "5-star reviews" },
              { n: "24h", l: "Dispatch" },
            ].map((s) => (
              <div key={s.l}>
                <div className="font-display text-2xl font-bold text-foreground">{s.n}</div>
                <div className="text-xs text-muted-foreground uppercase tracking-wider mt-1">{s.l}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="absolute -inset-6 rounded-3xl bg-gradient-to-br from-primary/10 via-transparent to-accent/15 blur-2xl" />
          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-border bg-surface shadow-elevated">
            <img
              src={heroImg}
              alt="High performance CPU, GPU and Raspberry Pi board"
              width={1600}
              height={1200}
              className="h-full w-full object-cover"
            />
            <div className="absolute top-4 left-4 inline-flex items-center gap-2 rounded-full bg-background/90 backdrop-blur px-3 py-1.5 text-xs font-semibold border border-border">
              <Cpu className="h-3.5 w-3.5 text-primary" /> Curated by engineers
            </div>
          </div>

          <div className="absolute -bottom-6 -left-6 hidden sm:block bg-background border border-border rounded-xl shadow-card p-4 w-56">
            <div className="text-xs text-muted-foreground">Build of the week</div>
            <div className="font-semibold mt-1">Ryzen 9 + RTX 4080</div>
            <div className="flex items-baseline gap-2 mt-1">
              <span className="text-primary font-bold text-lg">$3,249</span>
              <span className="text-xs text-muted-foreground line-through">$3,599</span>
            </div>
          </div>
        </div>
      </div>

      {/* Trust strip */}
      <div className="border-t border-border bg-surface/60">
        <div className="container-page grid grid-cols-2 md:grid-cols-4 gap-6 py-5 text-sm">
          {[
            { Icon: Truck, t: "Free shipping $99+", s: "On all in-stock orders" },
            { Icon: ShieldCheck, t: "2-year warranty", s: "On core hardware" },
            { Icon: Headphones, t: "Expert support", s: "Real engineers, 7 days" },
            { Icon: Wrench, t: "Free assembly check", s: "On custom builds" },
          ].map(({ Icon, t, s }) => (
            <div key={t} className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-lg bg-primary/10 text-primary grid place-items-center shrink-0">
                <Icon className="h-5 w-5" />
              </div>
              <div>
                <div className="font-semibold">{t}</div>
                <div className="text-xs text-muted-foreground">{s}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
