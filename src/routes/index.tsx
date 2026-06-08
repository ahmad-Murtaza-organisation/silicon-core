import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site/SiteHeader";
import { Hero } from "@/components/site/Hero";
import { FeaturedCategories } from "@/components/site/FeaturedCategories";
import { BestSellers, FlashDeals, NewArrivals } from "@/components/site/ProductSections";
import { Brands } from "@/components/site/Brands";
import { Reviews } from "@/components/site/Reviews";
import { Newsletter } from "@/components/site/Newsletter";
import { SiteFooter } from "@/components/site/SiteFooter";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Silicon-Core — Powering Every Build | Computer Hardware & Electronics" },
      { name: "description", content: "Shop processors, graphics cards, Arduino, Raspberry Pi, sensors, and electronics. Curated by engineers, shipped same-day. The modern marketplace for builders." },
      { property: "og:title", content: "Silicon-Core — Powering Every Build" },
      { property: "og:description", content: "Processors, GPUs, Arduino, Raspberry Pi, and electronics for every build." },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Space+Grotesk:wght@500;600;700&display=swap" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <SiteHeader />
      <main className="flex-1">
        <Hero />
        <FeaturedCategories />
        <BestSellers />
        <FlashDeals />
        <NewArrivals />
        <Brands />
        <Reviews />
        <Newsletter />
      </main>
      <SiteFooter />
    </div>
  );
}
