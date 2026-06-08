import { Cpu, MapPin, Clock, Phone, Mail, ShieldCheck, BadgeCheck } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="bg-secondary text-secondary-foreground border-t border-white/5">
      <div className="container-page py-16">
        <div className="grid lg:grid-cols-[1.2fr_3fr] gap-12 mb-14">
          <div>
            <div className="flex items-center gap-2">
              <div className="h-9 w-9 rounded-lg bg-gradient-to-br from-primary to-accent grid place-items-center">
                <Cpu className="h-4 w-4" />
              </div>
              <div>
                <div className="font-display font-bold text-lg">Silicon<span className="text-accent">-</span>Core</div>
                <div className="text-[10px] uppercase tracking-[0.18em] text-secondary-foreground/60">Powering Every Build</div>
              </div>
            </div>
            <p className="mt-5 text-sm text-secondary-foreground/70 max-w-sm">
              The modern marketplace for computer hardware and electronics. Curated by engineers, delivered fast, backed by humans.
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Contact column */}
          <div>
            <div className="text-xs font-semibold uppercase tracking-wider text-accent mb-4">Got questions? Contact us</div>
            <ul className="space-y-4 text-sm text-secondary-foreground/80">
              <li className="flex items-start gap-3">
                <MapPin className="h-4 w-4 text-accent mt-0.5 shrink-0" />
                <span>Shop# GC-51 and GF-05, Ground Floor, Techno City Mall, I.I Chundrigar Rd, New Chali, Karachi, 74200</span>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="h-4 w-4 text-accent mt-0.5 shrink-0" />
                <span>Business Hours 12:00 PM – 8:00 PM</span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="h-4 w-4 text-accent mt-0.5 shrink-0" />
                <div className="space-y-1">
                  <div><a href="tel:+923257033554" className="hover:text-secondary-foreground">0325 7033554</a> <span className="text-secondary-foreground/60">– Orders Queries</span></div>
                  <div><a href="tel:+923215530993" className="hover:text-secondary-foreground">0321 5530993</a> <span className="text-secondary-foreground/60">– Product Queries</span></div>
                  <div><a href="tel:+923048394866" className="hover:text-secondary-foreground">0304 8394866</a> <span className="text-secondary-foreground/60">– Quotation / Builds</span></div>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="h-4 w-4 text-accent mt-0.5 shrink-0" />
                <a href="mailto:support@silicon-core.pk" className="hover:text-secondary-foreground">support@silicon-core.pk</a>
              </li>
            </ul>
          </div>

          {/* Payment methods */}
          <div>
            <div className="text-xs font-semibold uppercase tracking-wider text-accent mb-4">We use secure payment methods</div>
            <div className="grid grid-cols-2 gap-3">
              {[
                { name: "Meezan Bank", sub: "Islamic Bank" },
                { name: "Bank AL Habib", sub: "Limited" },
                { name: "HBL", sub: "abhipay" },
                { name: "VISA", sub: "Cards" },
                { name: "Mastercard", sub: "Cards" },
                { name: "JazzCash", sub: "Wallet" },
              ].map((m) => (
                <div key={m.name} className="rounded-lg bg-background/5 border border-white/10 px-3 py-2.5 flex flex-col">
                  <span className="font-display font-bold text-sm leading-tight">{m.name}</span>
                  <span className="text-[10px] uppercase tracking-wider text-secondary-foreground/55 mt-0.5">{m.sub}</span>
                </div>
              ))}
            </div>

            <div className="text-xs font-semibold uppercase tracking-wider text-accent mt-6 mb-3">Secured by</div>
            <div className="flex gap-2">
              <div className="flex items-center gap-2 rounded-lg bg-background/5 border border-white/10 px-3 py-2">
                <ShieldCheck className="h-4 w-4 text-success" />
                <div className="leading-tight">
                  <div className="text-xs font-bold">Norton</div>
                  <div className="text-[9px] uppercase tracking-wider text-secondary-foreground/55">Secured</div>
                </div>
              </div>
              <div className="flex items-center gap-2 rounded-lg bg-background/5 border border-white/10 px-3 py-2">
                <BadgeCheck className="h-4 w-4 text-destructive" />
                <div className="leading-tight">
                  <div className="text-xs font-bold">McAfee</div>
                  <div className="text-[9px] uppercase tracking-wider text-secondary-foreground/55">Tested Daily</div>
                </div>
              </div>
            </div>
          </div>

          {/* Support menu */}
          <div>
            <div className="text-xs font-semibold uppercase tracking-wider text-accent mb-4">Support menu</div>
            <ul className="space-y-2.5 text-sm">
              {["About Us", "Terms and Conditions", "Privacy Policy", "Shipping & Returns", "Warranty Claims", "Track Your Order", "FAQs"].map((i) => (
                <li key={i}>
                  <a href="#" className="text-secondary-foreground/75 hover:text-secondary-foreground transition">{i}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Find more */}
          <div className="lg:border-l lg:border-white/10 lg:pl-8">
            <div className="text-xs font-semibold uppercase tracking-wider text-accent mb-4">Find more</div>
            <ul className="space-y-2.5 text-sm">
              {[
                "Monitor", "Casing", "Motherboard", "RAM Price in Pakistan",
                "Processors", "Keyboards", "Mouse", "Cooling Solutions",
                "Power Supplies", "Graphics Cards", "Storage Devices", "Gaming Chairs",
              ].map((i) => (
                <li key={i}>
                  <a href="#" className="text-secondary-foreground/75 hover:text-secondary-foreground transition">{i}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col md:flex-row gap-4 items-start md:items-center justify-between text-xs text-secondary-foreground/60">
          <div>© {new Date().getFullYear()} Silicon-Core. All rights reserved.</div>
          <div className="flex gap-5">
            <a href="#" className="hover:text-secondary-foreground">Privacy</a>
            <a href="#" className="hover:text-secondary-foreground">Terms</a>
            <a href="#" className="hover:text-secondary-foreground">Cookies</a>
            <a href="#" className="hover:text-secondary-foreground">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
