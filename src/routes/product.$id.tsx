import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  Star, Heart, GitCompareArrows, ShoppingCart, Truck, ShieldCheck, RefreshCw,
  FileText, Download, Check, Plus, Cpu, ChevronRight, BadgeCheck, Zap,
} from "lucide-react";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { ProductGallery } from "@/components/site/ProductGallery";
import { ProductCard, type Product } from "@/components/site/ProductCard";

type Detail = {
  id: string;
  name: string;
  brand: string;
  sku: string;
  category: string;
  subcategory: string;
  price: number;
  oldPrice?: number;
  rating: number;
  reviews: number;
  inStock: number;
  shortDescription: string;
  highlights: string[];
  images: { emoji: string; tint: string; label: string }[];
  specs: Record<string, Record<string, string>>;
  datasheets: { name: string; size: string; type: string }[];
};

const CATALOG: Record<string, Detail> = {
  "1": {
    id: "1",
    name: "Intel Core i9-14900K Desktop Processor",
    brand: "Intel",
    sku: "INT-CI9-14900K",
    category: "Processors",
    subcategory: "Desktop CPUs",
    price: 589,
    oldPrice: 689,
    rating: 4.8,
    reviews: 412,
    inStock: 24,
    shortDescription:
      "24 cores (8P + 16E), up to 6.0 GHz turbo, unlocked for overclocking. Built for elite gaming and content creation workflows on LGA 1700.",
    highlights: [
      "24 cores / 32 threads — 8 Performance + 16 Efficient",
      "Up to 6.0 GHz Max Turbo with Intel Thermal Velocity Boost",
      "36 MB Intel Smart Cache, DDR5-5600 / DDR4-3200 support",
      "Unlocked multiplier with Intel Extreme Tuning Utility",
      "Integrated Intel UHD Graphics 770",
    ],
    images: [
      { emoji: "🔵", tint: "bg-gradient-to-br from-blue-50 to-blue-100/40", label: "Front" },
      { emoji: "⚙️", tint: "bg-gradient-to-br from-slate-50 to-slate-100/40", label: "Pins" },
      { emoji: "📦", tint: "bg-gradient-to-br from-amber-50 to-amber-100/40", label: "Box" },
      { emoji: "🧊", tint: "bg-gradient-to-br from-cyan-50 to-cyan-100/40", label: "Heatspreader" },
    ],
    specs: {
      "General": {
        "Manufacturer": "Intel",
        "Family": "Core i9 (14th Gen, Raptor Lake Refresh)",
        "Model": "i9-14900K",
        "Socket": "LGA 1700",
        "Launch": "Q4 2023",
      },
      "Performance": {
        "Total Cores": "24 (8P + 16E)",
        "Total Threads": "32",
        "P-Core Base / Boost": "3.2 GHz / 5.6 GHz",
        "E-Core Base / Boost": "2.4 GHz / 4.4 GHz",
        "Max Turbo (TVB)": "6.0 GHz",
        "L3 Cache": "36 MB",
      },
      "Memory & I/O": {
        "Memory Support": "DDR5-5600, DDR4-3200",
        "Max Memory": "192 GB",
        "PCIe": "PCIe 5.0 ×16 + PCIe 4.0 ×4",
        "Integrated Graphics": "Intel UHD Graphics 770",
      },
      "Thermal & Power": {
        "Processor Base Power": "125 W",
        "Max Turbo Power": "253 W",
        "Tjunction": "100 °C",
        "Lithography": "Intel 7",
      },
    },
    datasheets: [
      { name: "i9-14900K Product Brief.pdf", size: "1.2 MB", type: "PDF" },
      { name: "Raptor Lake Datasheet Vol. 1.pdf", size: "8.4 MB", type: "PDF" },
      { name: "Thermal Design Guide.pdf", size: "2.1 MB", type: "PDF" },
      { name: "Compatibility Matrix.xlsx", size: "320 KB", type: "XLSX" },
    ],
  },
};

const RELATED: Product[] = [
  { id: "r1", name: "ASUS ROG Strix Z790-E Motherboard", brand: "ASUS", price: 449, rating: 4, reviews: 178, inStock: true, emoji: "🟣", tint: "bg-gradient-to-br from-violet-50 to-violet-100/40" },
  { id: "r2", name: "Corsair Vengeance DDR5 32GB 6000MHz Kit", brand: "Corsair", price: 129, oldPrice: 169, rating: 4, reviews: 1240, inStock: true, sale: true, emoji: "🟡", tint: "bg-gradient-to-br from-amber-50 to-amber-100/40" },
  { id: "r3", name: "NZXT Kraken Elite 360 RGB AIO Cooler", brand: "NZXT", price: 279, rating: 5, reviews: 320, inStock: true, emoji: "❄️", tint: "bg-gradient-to-br from-cyan-50 to-cyan-100/40" },
  { id: "r4", name: "Samsung 990 Pro 2TB NVMe SSD", brand: "Samsung", price: 189, rating: 5, reviews: 920, inStock: true, emoji: "⚫", tint: "bg-gradient-to-br from-slate-50 to-slate-100/40" },
  { id: "r5", name: "NVIDIA GeForce RTX 4080 Super 16GB", brand: "NVIDIA", price: 1199, rating: 5, reviews: 287, inStock: true, badge: "Hot", emoji: "🟢", tint: "bg-gradient-to-br from-emerald-50 to-emerald-100/40" },
];

const FBT = [
  { id: "fbt-cpu", name: "Intel Core i9-14900K", brand: "Intel", price: 589, emoji: "🔵", tint: "bg-gradient-to-br from-blue-50 to-blue-100/40" },
  { id: "fbt-mobo", name: "ASUS ROG Strix Z790-E", brand: "ASUS", price: 449, emoji: "🟣", tint: "bg-gradient-to-br from-violet-50 to-violet-100/40" },
  { id: "fbt-cool", name: "NZXT Kraken Elite 360 AIO", brand: "NZXT", price: 279, emoji: "❄️", tint: "bg-gradient-to-br from-cyan-50 to-cyan-100/40" },
];

const REVIEWS = [
  { name: "Marcus T.", verified: true, rating: 5, date: "Apr 12, 2026", title: "Absolute monster for 4K editing", body: "Cut my Premiere render times by ~38% vs my old 12900K. Runs warm under sustained load — pair it with a 360mm AIO and you're fine. Cinebench R23 multi hitting 41k stable." },
  { name: "Priya R.", verified: true, rating: 5, date: "Mar 30, 2026", title: "Gaming + streaming, no compromises", body: "OBS x264 medium while playing Cyberpunk at 4K — frametimes are flat. E-cores are doing real work here. Worth every dollar." },
  { name: "Devon K.", verified: true, rating: 4, date: "Mar 15, 2026", title: "Great chip, needs serious cooling", body: "If you're not undervolting, you will hit 100C on a 280mm cooler. Dropped 50mV with no perf loss and now sits at 82C max. Five stars with a tune, four out of the box." },
];

export const Route = createFileRoute("/product/$id")({
  head: ({ params }) => {
    const p = CATALOG[params.id] ?? CATALOG["1"];
    return {
      meta: [
        { title: `${p.name} — Silicon-Core` },
        { name: "description", content: p.shortDescription },
        { property: "og:title", content: p.name },
        { property: "og:description", content: p.shortDescription },
      ],
    };
  },
  component: ProductPage,
});

function ProductPage() {
  const { id } = Route.useParams();
  const p = CATALOG[id] ?? CATALOG["1"];
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <SiteHeader />
      <main className="flex-1">
        <Breadcrumbs p={p} />
        <ProductHero p={p} />
        <FrequentlyBought />
        <DetailsTabs p={p} />
        <RelatedProducts />
      </main>
      <SiteFooter />
    </div>
  );
}

function Breadcrumbs({ p }: { p: Detail }) {
  return (
    <div className="container-page py-4">
      <nav className="flex items-center gap-1.5 text-xs text-muted-foreground">
        <Link to="/" className="hover:text-primary">Home</Link>
        <ChevronRight className="h-3 w-3" />
        <span className="hover:text-primary cursor-pointer">{p.category}</span>
        <ChevronRight className="h-3 w-3" />
        <span className="hover:text-primary cursor-pointer">{p.subcategory}</span>
        <ChevronRight className="h-3 w-3" />
        <span className="text-foreground font-medium truncate">{p.name}</span>
      </nav>
    </div>
  );
}

function ProductHero({ p }: { p: Detail }) {
  const [qty, setQty] = useState(1);
  const discount = p.oldPrice ? Math.round((1 - p.price / p.oldPrice) * 100) : 0;
  return (
    <section className="container-page pb-10">
      <div className="grid lg:grid-cols-[1.05fr_1fr] gap-10">
        <ProductGallery images={p.images} />

        <div>
          <div className="flex items-center gap-2 text-xs">
            <span className="px-2 py-0.5 rounded-md bg-secondary/10 text-secondary font-semibold uppercase tracking-wider">{p.brand}</span>
            <span className="text-muted-foreground">SKU: {p.sku}</span>
          </div>
          <h1 className="font-display text-3xl lg:text-4xl font-bold mt-3 leading-tight">{p.name}</h1>

          <div className="mt-3 flex items-center gap-3 text-sm">
            <div className="flex items-center gap-1">
              {[0,1,2,3,4].map(i => (
                <Star key={i} className={`h-4 w-4 ${i < Math.round(p.rating) ? "fill-warning text-warning" : "text-muted-foreground/30"}`} />
              ))}
              <span className="ml-1 font-semibold">{p.rating.toFixed(1)}</span>
            </div>
            <a href="#reviews" className="text-muted-foreground hover:text-primary">{p.reviews} reviews</a>
            <span className="text-muted-foreground">·</span>
            <span className="inline-flex items-center gap-1 text-success font-medium">
              <Check className="h-3.5 w-3.5" /> {p.inStock} in stock
            </span>
          </div>

          <p className="mt-5 text-muted-foreground leading-relaxed">{p.shortDescription}</p>

          <ul className="mt-5 grid sm:grid-cols-2 gap-2">
            {p.highlights.map(h => (
              <li key={h} className="flex items-start gap-2 text-sm">
                <BadgeCheck className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                <span>{h}</span>
              </li>
            ))}
          </ul>

          <div className="mt-6 p-5 rounded-2xl border border-border bg-surface/40">
            <div className="flex items-baseline gap-3">
              <span className="font-display text-4xl font-bold">${p.price.toLocaleString()}</span>
              {p.oldPrice && (
                <>
                  <span className="text-muted-foreground line-through">${p.oldPrice.toLocaleString()}</span>
                  <span className="px-2 py-0.5 rounded-md bg-destructive text-destructive-foreground text-xs font-bold">Save {discount}%</span>
                </>
              )}
            </div>
            <div className="mt-1 text-xs text-muted-foreground">
              Or 4 interest-free payments of <span className="font-semibold text-foreground">${(p.price / 4).toFixed(2)}</span>
            </div>

            <div className="mt-5 flex flex-wrap items-stretch gap-3">
              <div className="inline-flex items-center rounded-md border border-border bg-background">
                <button onClick={() => setQty(q => Math.max(1, q - 1))} className="h-11 w-11 grid place-items-center hover:bg-muted">−</button>
                <span className="w-12 text-center font-semibold tabular-nums">{qty}</span>
                <button onClick={() => setQty(q => q + 1)} className="h-11 w-11 grid place-items-center hover:bg-muted">+</button>
              </div>
              <button className="flex-1 min-w-[180px] h-11 rounded-md bg-primary text-primary-foreground font-semibold inline-flex items-center justify-center gap-2 hover:bg-primary/90 transition">
                <ShoppingCart className="h-4 w-4" /> Add to cart
              </button>
              <button className="h-11 px-5 rounded-md bg-secondary text-secondary-foreground font-semibold hover:bg-secondary/90 transition inline-flex items-center gap-2">
                <Zap className="h-4 w-4" /> Buy now
              </button>
              <button aria-label="Wishlist" className="h-11 w-11 grid place-items-center rounded-md border border-border hover:border-primary hover:text-primary transition">
                <Heart className="h-4 w-4" />
              </button>
              <button aria-label="Compare" className="h-11 w-11 grid place-items-center rounded-md border border-border hover:border-primary hover:text-primary transition">
                <GitCompareArrows className="h-4 w-4" />
              </button>
            </div>

            <div className="mt-5 grid grid-cols-3 gap-3 text-xs">
              <Trust icon={Truck} label="Free shipping" sub="Orders over $99" />
              <Trust icon={ShieldCheck} label="3-yr warranty" sub="Manufacturer" />
              <Trust icon={RefreshCw} label="30-day returns" sub="Hassle-free" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Trust({ icon: Icon, label, sub }: { icon: any; label: string; sub: string }) {
  return (
    <div className="flex items-start gap-2">
      <div className="h-9 w-9 rounded-lg bg-background border border-border grid place-items-center text-primary shrink-0">
        <Icon className="h-4 w-4" />
      </div>
      <div>
        <div className="font-semibold">{label}</div>
        <div className="text-muted-foreground">{sub}</div>
      </div>
    </div>
  );
}

function FrequentlyBought() {
  const [picked, setPicked] = useState<Record<string, boolean>>({ "fbt-cpu": true, "fbt-mobo": true, "fbt-cool": true });
  const total = FBT.filter(i => picked[i.id]).reduce((s, i) => s + i.price, 0);
  const bundle = total * 0.93;
  return (
    <section className="container-page py-12">
      <div className="rounded-2xl border border-border bg-surface/40 p-6 lg:p-8">
        <div className="flex items-center gap-2 mb-1 text-xs font-semibold uppercase tracking-widest text-primary">
          <Plus className="h-3.5 w-3.5" /> Bundle & save
        </div>
        <h2 className="font-display text-2xl lg:text-3xl font-bold">Frequently bought together</h2>
        <p className="text-sm text-muted-foreground mt-1">Save 7% when you buy all three as a build bundle.</p>

        <div className="mt-6 flex flex-col lg:flex-row items-stretch lg:items-center gap-4">
          <div className="flex-1 flex flex-wrap items-center gap-3">
            {FBT.map((it, i) => (
              <div key={it.id} className="flex items-center gap-3">
                <label className="flex flex-col items-center gap-2 cursor-pointer">
                  <div className={`relative h-24 w-24 rounded-xl border-2 ${picked[it.id] ? "border-primary" : "border-border"} ${it.tint} grid place-items-center text-4xl`}>
                    <input
                      type="checkbox"
                      checked={!!picked[it.id]}
                      onChange={(e) => setPicked(p => ({ ...p, [it.id]: e.target.checked }))}
                      className="absolute top-1.5 left-1.5 h-4 w-4 accent-primary"
                    />
                    {it.emoji}
                  </div>
                  <div className="text-center max-w-[120px]">
                    <div className="text-[11px] text-primary font-semibold uppercase tracking-wider">{it.brand}</div>
                    <div className="text-xs font-medium line-clamp-2">{it.name}</div>
                    <div className="text-xs font-bold mt-0.5">${it.price}</div>
                  </div>
                </label>
                {i < FBT.length - 1 && <Plus className="h-5 w-5 text-muted-foreground hidden sm:block" />}
              </div>
            ))}
          </div>

          <div className="lg:w-64 p-5 rounded-xl bg-background border border-border">
            <div className="text-xs text-muted-foreground">Bundle price</div>
            <div className="flex items-baseline gap-2 mt-1">
              <span className="font-display text-2xl font-bold">${bundle.toFixed(2)}</span>
              <span className="text-xs text-muted-foreground line-through">${total.toFixed(2)}</span>
            </div>
            <div className="text-xs text-success font-medium mt-0.5">You save ${(total - bundle).toFixed(2)}</div>
            <button className="mt-3 w-full h-10 rounded-md bg-primary text-primary-foreground font-semibold text-sm inline-flex items-center justify-center gap-2 hover:bg-primary/90">
              <ShoppingCart className="h-4 w-4" /> Add bundle
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

const TABS = ["Specifications", "Datasheets", "Reviews", "Shipping"] as const;
type Tab = typeof TABS[number];

function DetailsTabs({ p }: { p: Detail }) {
  const [tab, setTab] = useState<Tab>("Specifications");
  return (
    <section id="reviews" className="container-page py-10">
      <div className="border-b border-border flex gap-1 overflow-x-auto">
        {TABS.map(t => (
          <button
            key={t}
            onClick={() => setTab(t)}
            className={`relative px-5 py-3 text-sm font-semibold whitespace-nowrap transition ${tab === t ? "text-primary" : "text-muted-foreground hover:text-foreground"}`}
          >
            {t}
            {tab === t && <span className="absolute inset-x-3 -bottom-px h-0.5 bg-primary rounded-full" />}
          </button>
        ))}
      </div>

      <div className="py-8">
        {tab === "Specifications" && <Specs specs={p.specs} />}
        {tab === "Datasheets" && <Datasheets files={p.datasheets} />}
        {tab === "Reviews" && <ReviewsTab rating={p.rating} count={p.reviews} />}
        {tab === "Shipping" && <Shipping />}
      </div>
    </section>
  );
}

function Specs({ specs }: { specs: Detail["specs"] }) {
  return (
    <div className="grid md:grid-cols-2 gap-6">
      {Object.entries(specs).map(([group, rows]) => (
        <div key={group} className="rounded-xl border border-border overflow-hidden">
          <div className="px-5 py-3 bg-surface/60 border-b border-border flex items-center gap-2">
            <Cpu className="h-4 w-4 text-primary" />
            <h3 className="font-display font-semibold">{group}</h3>
          </div>
          <dl>
            {Object.entries(rows).map(([k, v], i) => (
              <div key={k} className={`grid grid-cols-[40%_1fr] px-5 py-2.5 text-sm ${i % 2 ? "bg-surface/30" : ""}`}>
                <dt className="text-muted-foreground">{k}</dt>
                <dd className="font-medium">{v}</dd>
              </div>
            ))}
          </dl>
        </div>
      ))}
    </div>
  );
}

function Datasheets({ files }: { files: Detail["datasheets"] }) {
  return (
    <div className="grid sm:grid-cols-2 gap-3 max-w-3xl">
      {files.map(f => (
        <a
          key={f.name}
          href="#"
          className="group flex items-center gap-4 p-4 rounded-xl border border-border bg-background hover:border-primary/40 hover:shadow-sm transition"
        >
          <div className="h-12 w-12 rounded-lg bg-primary/10 text-primary grid place-items-center shrink-0">
            <FileText className="h-5 w-5" />
          </div>
          <div className="flex-1 min-w-0">
            <div className="font-semibold text-sm truncate">{f.name}</div>
            <div className="text-xs text-muted-foreground">{f.type} · {f.size}</div>
          </div>
          <Download className="h-4 w-4 text-muted-foreground group-hover:text-primary" />
        </a>
      ))}
    </div>
  );
}

function ReviewsTab({ rating, count }: { rating: number; count: number }) {
  const dist = [78, 14, 5, 2, 1];
  return (
    <div className="grid lg:grid-cols-[300px_1fr] gap-10">
      <div>
        <div className="font-display text-5xl font-bold">{rating.toFixed(1)}</div>
        <div className="flex items-center gap-1 mt-1">
          {[0,1,2,3,4].map(i => (
            <Star key={i} className={`h-4 w-4 ${i < Math.round(rating) ? "fill-warning text-warning" : "text-muted-foreground/30"}`} />
          ))}
        </div>
        <div className="text-sm text-muted-foreground mt-1">Based on {count} verified reviews</div>

        <div className="mt-6 space-y-2">
          {dist.map((pct, i) => (
            <div key={i} className="flex items-center gap-3 text-xs">
              <span className="w-6 text-muted-foreground">{5 - i}★</span>
              <div className="flex-1 h-2 rounded-full bg-muted overflow-hidden">
                <div className="h-full bg-warning" style={{ width: `${pct}%` }} />
              </div>
              <span className="w-8 text-right tabular-nums text-muted-foreground">{pct}%</span>
            </div>
          ))}
        </div>

        <button className="mt-6 w-full h-10 rounded-md border border-border font-semibold text-sm hover:border-primary hover:text-primary transition">
          Write a review
        </button>
      </div>

      <div className="space-y-5">
        {REVIEWS.map(r => (
          <article key={r.name} className="p-5 rounded-xl border border-border bg-background">
            <div className="flex items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-primary/10 text-primary font-bold grid place-items-center">
                  {r.name[0]}
                </div>
                <div>
                  <div className="font-semibold text-sm flex items-center gap-2">
                    {r.name}
                    {r.verified && (
                      <span className="inline-flex items-center gap-1 text-[10px] text-success font-semibold">
                        <BadgeCheck className="h-3 w-3" /> Verified
                      </span>
                    )}
                  </div>
                  <div className="text-xs text-muted-foreground">{r.date}</div>
                </div>
              </div>
              <div className="flex items-center gap-0.5">
                {[0,1,2,3,4].map(i => (
                  <Star key={i} className={`h-3.5 w-3.5 ${i < r.rating ? "fill-warning text-warning" : "text-muted-foreground/30"}`} />
                ))}
              </div>
            </div>
            <h4 className="mt-3 font-semibold">{r.title}</h4>
            <p className="mt-1 text-sm text-muted-foreground leading-relaxed">{r.body}</p>
          </article>
        ))}
      </div>
    </div>
  );
}

function Shipping() {
  return (
    <div className="max-w-3xl space-y-4 text-sm leading-relaxed">
      <p><strong>Free standard shipping</strong> on orders over $99 — typically 2–4 business days.</p>
      <p><strong>Same-day dispatch</strong> for in-stock orders placed before 3:00 PM PT.</p>
      <p><strong>Express &amp; overnight</strong> available at checkout. International shipping to 60+ countries.</p>
      <p><strong>Returns:</strong> 30 days, no restocking fee on unopened items. RMA generated automatically.</p>
    </div>
  );
}

function RelatedProducts() {
  return (
    <section className="py-16 bg-surface/60 border-t border-border">
      <div className="container-page">
        <div className="flex items-end justify-between mb-8 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-primary mb-2">
              <Cpu className="h-3.5 w-3.5" /> Pairs well with
            </div>
            <h2 className="font-display text-3xl font-bold">Related products</h2>
          </div>
          <a href="#" className="text-sm font-semibold text-primary hover:underline hidden md:inline">Browse all →</a>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {RELATED.map(p => <ProductCard key={p.id} p={p} />)}
        </div>
      </div>
    </section>
  );
}
