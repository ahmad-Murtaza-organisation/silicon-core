import { Cpu } from "lucide-react";

const COLS = [
  { title: "Shop", items: ["Processors", "Graphics Cards", "Motherboards", "Memory", "Storage", "Monitors"] },
  { title: "Electronics", items: ["Arduino", "Raspberry Pi", "Sensors", "Robotics", "Microcontrollers", "Modules"] },
  { title: "Learn", items: ["PC Building Guides", "Electronics Tutorials", "Hardware Reviews", "Tech Blog", "Arduino Center", "Raspberry Pi Hub"] },
  { title: "Company", items: ["About", "Careers", "Contact", "Support", "Warranty", "Press"] },
];

export function SiteFooter() {
  return (
    <footer className="bg-secondary text-secondary-foreground border-t border-white/5">
      <div className="container-page py-16">
        <div className="grid lg:grid-cols-[1.2fr_3fr] gap-12">
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

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {COLS.map((c) => (
              <div key={c.title}>
                <div className="text-xs font-semibold uppercase tracking-wider text-accent mb-4">{c.title}</div>
                <ul className="space-y-2.5">
                  {c.items.map((i) => (
                    <li key={i}><a href="#" className="text-sm text-secondary-foreground/75 hover:text-secondary-foreground transition">{i}</a></li>
                  ))}
                </ul>
              </div>
            ))}
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
