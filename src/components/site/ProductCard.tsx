import { Star, Heart, ShoppingCart, GitCompareArrows } from "lucide-react";
import { Link } from "@tanstack/react-router";

export type Product = {
  id: string;
  name: string;
  brand: string;
  price: number;
  oldPrice?: number;
  rating: number;
  reviews: number;
  inStock: boolean;
  sale?: boolean;
  badge?: string;
  emoji: string;
  tint: string;
};

export function ProductCard({ p }: { p: Product }) {
  const discount = p.oldPrice ? Math.round((1 - p.price / p.oldPrice) * 100) : 0;
  return (
    <article className="group relative flex flex-col rounded-xl border border-border bg-background overflow-hidden hover:shadow-card-hover hover:border-primary/30 transition">
      <div className={`relative aspect-square ${p.tint} grid place-items-center overflow-hidden`}>
        <div className="text-7xl group-hover:scale-110 transition-transform duration-500">{p.emoji}</div>
        <div className="absolute top-3 left-3 flex flex-col gap-1.5">
          {p.sale && discount > 0 && (
            <span className="px-2 py-0.5 rounded-md bg-destructive text-destructive-foreground text-[11px] font-bold">-{discount}%</span>
          )}
          {p.badge && (
            <span className="px-2 py-0.5 rounded-md bg-secondary text-secondary-foreground text-[11px] font-semibold">{p.badge}</span>
          )}
        </div>
        <div className="absolute top-3 right-3 flex flex-col gap-1.5 opacity-0 group-hover:opacity-100 transition translate-x-2 group-hover:translate-x-0">
          <button className="h-8 w-8 grid place-items-center rounded-full bg-background/90 backdrop-blur border border-border hover:bg-primary hover:text-primary-foreground hover:border-primary transition" aria-label="Wishlist">
            <Heart className="h-4 w-4" />
          </button>
          <button className="h-8 w-8 grid place-items-center rounded-full bg-background/90 backdrop-blur border border-border hover:bg-primary hover:text-primary-foreground hover:border-primary transition" aria-label="Compare">
            <GitCompareArrows className="h-4 w-4" />
          </button>
        </div>
      </div>

      <div className="flex-1 flex flex-col p-4">
        <div className="text-[11px] font-semibold uppercase tracking-wider text-primary">{p.brand}</div>
        <h3 className="mt-1 font-semibold text-sm leading-snug line-clamp-2 min-h-[2.5rem]">{p.name}</h3>

        <div className="mt-2 flex items-center gap-1.5 text-xs">
          <div className="flex">
            {[0, 1, 2, 3, 4].map((i) => (
              <Star key={i} className={`h-3.5 w-3.5 ${i < Math.round(p.rating) ? "fill-warning text-warning" : "text-muted-foreground/30"}`} />
            ))}
          </div>
          <span className="text-muted-foreground">({p.reviews})</span>
        </div>

        <div className="mt-3 flex items-baseline gap-2">
          <span className="font-display text-lg font-bold text-foreground">${p.price.toLocaleString()}</span>
          {p.oldPrice && <span className="text-xs text-muted-foreground line-through">${p.oldPrice.toLocaleString()}</span>}
        </div>

        <div className="mt-1 text-xs">
          {p.inStock ? (
            <span className="text-success font-medium inline-flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-success" /> In stock
            </span>
          ) : (
            <span className="text-muted-foreground">Out of stock</span>
          )}
        </div>

        <button className="mt-4 h-10 rounded-md bg-secondary text-secondary-foreground text-sm font-semibold inline-flex items-center justify-center gap-2 hover:bg-primary transition">
          <ShoppingCart className="h-4 w-4" /> Add to cart
        </button>
      </div>
    </article>
  );
}
