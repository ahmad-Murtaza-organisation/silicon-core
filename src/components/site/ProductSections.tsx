import { ProductCard, type Product } from "./ProductCard";
import { Flame, Sparkles, TrendingUp, Clock } from "lucide-react";
import { useEffect, useState } from "react";

const BESTSELLERS: Product[] = [
  { id: "1", name: "Intel Core i9-14900K Desktop Processor", brand: "Intel", price: 589, oldPrice: 689, rating: 5, reviews: 412, inStock: true, sale: true, badge: "Best Seller", emoji: "🔵", tint: "bg-gradient-to-br from-blue-50 to-blue-100/40" },
  { id: "2", name: "NVIDIA GeForce RTX 4080 Super 16GB", brand: "NVIDIA", price: 1199, rating: 5, reviews: 287, inStock: true, badge: "Hot", emoji: "🟢", tint: "bg-gradient-to-br from-emerald-50 to-emerald-100/40" },
  { id: "3", name: "Corsair Vengeance DDR5 32GB 6000MHz Kit", brand: "Corsair", price: 129, oldPrice: 169, rating: 4, reviews: 1240, inStock: true, sale: true, emoji: "🟡", tint: "bg-gradient-to-br from-amber-50 to-amber-100/40" },
  { id: "4", name: "Samsung 990 Pro 2TB NVMe SSD", brand: "Samsung", price: 189, rating: 5, reviews: 920, inStock: true, emoji: "⚫", tint: "bg-gradient-to-br from-slate-50 to-slate-100/40" },
  { id: "5", name: "ASUS ROG Strix Z790-E Motherboard", brand: "ASUS", price: 449, rating: 4, reviews: 178, inStock: true, emoji: "🟣", tint: "bg-gradient-to-br from-violet-50 to-violet-100/40" },
];

const NEW_ARRIVALS: Product[] = [
  { id: "n1", name: "Raspberry Pi 5 8GB Starter Kit", brand: "Raspberry Pi", price: 129, rating: 5, reviews: 56, inStock: true, badge: "New", emoji: "🍓", tint: "bg-gradient-to-br from-rose-50 to-rose-100/40" },
  { id: "n2", name: "Arduino Mega 2560 Rev3 Board", brand: "Arduino", price: 49, rating: 5, reviews: 32, inStock: true, badge: "New", emoji: "🟦", tint: "bg-gradient-to-br from-cyan-50 to-cyan-100/40" },
  { id: "n3", name: "Logitech G Pro X Superlight 2", brand: "Logitech", price: 159, rating: 5, reviews: 21, inStock: true, badge: "New", emoji: "🖱️", tint: "bg-gradient-to-br from-slate-50 to-slate-100/40" },
  { id: "n4", name: "LG UltraGear 27GR95QE OLED Monitor", brand: "LG", price: 899, rating: 4, reviews: 18, inStock: true, badge: "New", emoji: "🖥️", tint: "bg-gradient-to-br from-blue-50 to-blue-100/40" },
  { id: "n5", name: "MSI MPG A1000G PCIE5 PSU", brand: "MSI", price: 219, rating: 5, reviews: 12, inStock: true, badge: "New", emoji: "⚡", tint: "bg-gradient-to-br from-amber-50 to-amber-100/40" },
];

function useCountdown() {
  const [t, setT] = useState({ h: 5, m: 42, s: 18 });
  useEffect(() => {
    const i = setInterval(() => {
      setT(({ h, m, s }) => {
        let ns = s - 1, nm = m, nh = h;
        if (ns < 0) { ns = 59; nm--; }
        if (nm < 0) { nm = 59; nh--; }
        if (nh < 0) { nh = 23; }
        return { h: nh, m: nm, s: ns };
      });
    }, 1000);
    return () => clearInterval(i);
  }, []);
  return t;
}

function SectionHeader({ icon: Icon, eyebrow, title, action }: { icon: any; eyebrow: string; title: string; action?: React.ReactNode }) {
  return (
    <div className="flex items-end justify-between mb-8 gap-4">
      <div>
        <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-primary mb-2">
          <Icon className="h-3.5 w-3.5" /> {eyebrow}
        </div>
        <h2 className="font-display text-3xl lg:text-4xl font-bold">{title}</h2>
      </div>
      {action}
    </div>
  );
}

export function BestSellers() {
  return (
    <section className="py-16 lg:py-20 bg-surface/60 border-y border-border">
      <div className="container-page">
        <SectionHeader icon={TrendingUp} eyebrow="Most loved" title="Best sellers this month"
          action={<a href="#" className="text-sm font-semibold text-primary hover:underline hidden md:inline">View all →</a>} />
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {BESTSELLERS.map((p) => <ProductCard key={p.id} p={p} />)}
        </div>
      </div>
    </section>
  );
}

export function FlashDeals() {
  const t = useCountdown();
  const pad = (n: number) => n.toString().padStart(2, "0");
  return (
    <section className="py-16 lg:py-20">
      <div className="container-page">
        <div className="rounded-2xl overflow-hidden bg-gradient-to-br from-secondary via-secondary to-primary text-secondary-foreground p-8 lg:p-10 mb-8 relative">
          <div className="absolute inset-0 bg-grid opacity-10" />
          <div className="relative flex flex-wrap items-center justify-between gap-6">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-accent mb-2">
                <Flame className="h-3.5 w-3.5" /> Flash deals
              </div>
              <h2 className="font-display text-3xl lg:text-4xl font-bold">Up to 40% off — today only</h2>
              <p className="mt-2 text-secondary-foreground/70 max-w-xl">Hand-picked components and dev boards at our lowest prices of the season.</p>
            </div>
            <div className="flex items-center gap-3">
              <Clock className="h-5 w-5 text-accent" />
              {[
                { v: pad(t.h), l: "Hours" },
                { v: pad(t.m), l: "Min" },
                { v: pad(t.s), l: "Sec" },
              ].map((x) => (
                <div key={x.l} className="text-center">
                  <div className="w-14 h-14 rounded-lg bg-background/10 backdrop-blur border border-white/10 grid place-items-center font-display font-bold text-2xl tabular-nums">{x.v}</div>
                  <div className="text-[10px] uppercase tracking-wider mt-1 text-secondary-foreground/60">{x.l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {BESTSELLERS.slice(0, 5).map((p) => <ProductCard key={`fd-${p.id}`} p={{ ...p, sale: true, oldPrice: p.oldPrice ?? Math.round(p.price * 1.3) }} />)}
        </div>
      </div>
    </section>
  );
}

export function NewArrivals() {
  return (
    <section className="py-16 lg:py-20 bg-surface/60 border-y border-border">
      <div className="container-page">
        <SectionHeader icon={Sparkles} eyebrow="Just landed" title="New arrivals"
          action={<a href="#" className="text-sm font-semibold text-primary hover:underline hidden md:inline">Browse all →</a>} />
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {NEW_ARRIVALS.map((p) => <ProductCard key={p.id} p={p} />)}
        </div>
      </div>
    </section>
  );
}
