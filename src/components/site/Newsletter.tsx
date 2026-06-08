import { Mail, ArrowRight } from "lucide-react";

export function Newsletter() {
  return (
    <section className="py-16 lg:py-20">
      <div className="container-page">
        <div className="relative overflow-hidden rounded-3xl border border-border bg-gradient-to-br from-surface via-background to-surface p-10 lg:p-14">
          <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />
          <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-accent/10 blur-3xl" />

          <div className="relative max-w-2xl">
            <div className="h-12 w-12 rounded-xl bg-primary/10 text-primary grid place-items-center mb-5">
              <Mail className="h-5 w-5" />
            </div>
            <h2 className="font-display text-3xl lg:text-4xl font-bold">Be first to know when prices drop</h2>
            <p className="mt-3 text-muted-foreground">Weekly deals on processors, GPUs, and dev kits. Plus first-look at restocks. No spam — just specs.</p>

            <form className="mt-6 flex flex-col sm:flex-row gap-3 max-w-xl" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                required
                placeholder="you@example.com"
                className="flex-1 h-12 px-4 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary"
              />
              <button className="inline-flex items-center justify-center gap-2 h-12 px-6 rounded-lg bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition">
                Subscribe <ArrowRight className="h-4 w-4" />
              </button>
            </form>
            <p className="text-xs text-muted-foreground mt-3">By subscribing you agree to our privacy policy. Unsubscribe anytime.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
