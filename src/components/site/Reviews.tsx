import { Star, Quote } from "lucide-react";

const R = [
  { name: "Marcus T.", role: "Streamer", text: "Built my dream rig in a weekend. Their PC Builder caught a PSU wattage issue I would have missed. Fast shipping, immaculate packaging.", rating: 5 },
  { name: "Priya S.", role: "Robotics student", text: "The Arduino + sensor bundles are unbeatable. Real engineers in support — got a wiring diagram emailed within an hour.", rating: 5 },
  { name: "Devon R.", role: "ML engineer", text: "Picked up 4× RTX 4080s for a training rig. Best prices I found, plus they price-matched a competitor. Zero drama.", rating: 5 },
];

export function Reviews() {
  return (
    <section className="py-16 lg:py-20 bg-secondary text-secondary-foreground relative overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-[0.07]" />
      <div className="container-page relative">
        <div className="text-center mb-12">
          <div className="text-xs font-semibold uppercase tracking-widest text-accent mb-2">Customer reviews</div>
          <h2 className="font-display text-3xl lg:text-4xl font-bold">Rated 4.9 / 5 by 12,000+ builders</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {R.map((r) => (
            <div key={r.name} className="rounded-2xl bg-background/5 backdrop-blur border border-white/10 p-6 relative">
              <Quote className="absolute top-5 right-5 h-8 w-8 text-accent/30" />
              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: r.rating }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-warning text-warning" />
                ))}
              </div>
              <p className="text-secondary-foreground/85 leading-relaxed">"{r.text}"</p>
              <div className="mt-5 pt-5 border-t border-white/10">
                <div className="font-semibold">{r.name}</div>
                <div className="text-xs text-secondary-foreground/60">{r.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
