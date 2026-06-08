import { Link } from "@tanstack/react-router";
import { Search, Heart, ShoppingCart, User, Menu, ChevronDown, Zap } from "lucide-react";
import { useState } from "react";

const NAV = [
  { label: "Home", to: "/" },
  { label: "Flash Sale", to: "/", flash: true },
  { label: "Products", to: "/", mega: true },
  { label: "Custom PC Builder", to: "/" },
  { label: "Gaming", to: "/" },
  { label: "Monitors", to: "/" },
  { label: "Graphics Cards", to: "/" },
  { label: "Monitor Arms", to: "/" },
  { label: "Apple Products", to: "/" },
];

const MEGA = [
  {
    title: "Core Hardware",
    items: ["Processors", "Graphics Cards", "Motherboards", "Memory / RAM", "Storage / SSD", "Power Supplies", "Cases", "Cooling"],
  },
  {
    title: "Peripherals",
    items: ["Monitors", "Keyboards", "Mice", "Headphones", "Webcams", "Speakers", "Mousepads", "Controllers"],
  },
  {
    title: "Electronics",
    items: ["Arduino", "Raspberry Pi", "Sensors", "Robotics Kits", "Embedded Systems", "Microcontrollers", "Breadboards", "Modules"],
  },
  {
    title: "Solutions",
    items: ["Custom PC Builder", "Gaming Rigs", "Workstations", "Home Lab", "Networking", "Smart Home", "3D Printing", "Learning Center"],
  },
];

export function SiteHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/85 backdrop-blur-md">
      {/* Top utility bar */}
      <div className="hidden md:block bg-secondary text-secondary-foreground/90 text-xs">
        <div className="container-page flex h-9 items-center justify-between">
          <span className="flex items-center gap-2">
            <Zap className="h-3.5 w-3.5 text-accent" />
            Free shipping on orders over $99 · Same-day dispatch before 4pm
          </span>
          <div className="flex items-center gap-5">
            <a href="#" className="hover:text-primary-foreground">Track Order</a>
            <a href="#" className="hover:text-primary-foreground">Support</a>
            <a href="#" className="hover:text-primary-foreground">Sell on Silicon-Core</a>
          </div>
        </div>
      </div>

      {/* Main row */}
      <div className="container-page flex h-20 items-center gap-6">
        <button
          className="lg:hidden -ml-2 p-2 rounded-md hover:bg-muted"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          <Menu className="h-5 w-5" />
        </button>

        <Link to="/" className="flex items-center gap-2 shrink-0">
          <div className="relative h-9 w-9 rounded-lg bg-gradient-to-br from-primary to-accent shadow-elevated grid place-items-center">
            <div className="h-4 w-4 rounded-sm bg-background/95" />
            <div className="absolute -bottom-1 -right-1 h-2 w-2 rounded-full bg-accent ring-2 ring-background" />
          </div>
          <div className="leading-tight">
            <div className="font-display font-bold text-lg tracking-tight">Silicon<span className="text-primary">-</span>Core</div>
            <div className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground -mt-0.5">Powering Every Build</div>
          </div>
        </Link>

        {/* Search */}
        <div className="hidden md:flex flex-1 max-w-2xl mx-auto">
          <div className="relative w-full group">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <input
              type="search"
              placeholder="Search 12,000+ products — try 'RTX 4080' or 'Arduino Uno'"
              className="w-full h-12 pl-11 pr-28 rounded-full border border-input bg-surface focus:bg-background focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition text-sm"
            />
            <button className="absolute right-1.5 top-1.5 h-9 px-5 rounded-full bg-primary text-primary-foreground text-sm font-medium hover:bg-primary/90 transition">
              Search
            </button>
          </div>
        </div>

        <div className="ml-auto flex items-center gap-1">
          <button className="hidden sm:flex items-center gap-2 px-3 h-10 rounded-md hover:bg-muted text-sm">
            <User className="h-4 w-4" />
            <span className="hidden lg:inline">Sign in</span>
          </button>
          <button className="hidden sm:grid place-items-center h-10 w-10 rounded-md hover:bg-muted relative">
            <Heart className="h-5 w-5" />
            <span className="absolute -top-0.5 -right-0.5 h-4 min-w-4 px-1 rounded-full bg-accent text-accent-foreground text-[10px] font-semibold grid place-items-center">3</span>
          </button>
          <button className="flex items-center gap-2 h-10 pl-2 pr-3 rounded-md hover:bg-muted relative">
            <div className="relative">
              <ShoppingCart className="h-5 w-5" />
              <span className="absolute -top-1.5 -right-1.5 h-4 min-w-4 px-1 rounded-full bg-primary text-primary-foreground text-[10px] font-semibold grid place-items-center">2</span>
            </div>
            <span className="hidden lg:inline text-sm font-medium">$2,489</span>
          </button>
        </div>
      </div>

      {/* Nav */}
      <nav className="hidden lg:block border-t border-border bg-background">
        <div className="container-page flex items-center gap-1 h-12 text-sm font-medium">
          {NAV.map((item) => (
            <div
              key={item.label}
              className="relative h-full"
              onMouseEnter={() => item.mega && setMegaOpen(true)}
              onMouseLeave={() => item.mega && setMegaOpen(false)}
            >
              <Link
                to={item.to}
                className="h-full px-4 inline-flex items-center gap-1.5 text-foreground/80 hover:text-primary transition relative"
              >
                {item.flash && <Zap className="h-3.5 w-3.5 fill-warning text-warning" />}
                <span className={item.flash ? "text-destructive font-semibold" : ""}>{item.label}</span>
                {item.mega && <ChevronDown className="h-3 w-3" />}
              </Link>

              {item.mega && megaOpen && (
                <div className="absolute left-1/2 top-full -translate-x-1/2 w-[min(1200px,95vw)] bg-popover border border-border rounded-xl shadow-elevated p-8 z-50">
                  <div className="grid grid-cols-4 gap-8">
                    {MEGA.map((col) => (
                      <div key={col.title}>
                        <div className="text-xs uppercase tracking-wider text-primary font-semibold mb-3">{col.title}</div>
                        <ul className="space-y-2">
                          {col.items.map((i) => (
                            <li key={i}>
                              <a href="#" className="text-sm text-foreground/75 hover:text-primary transition">{i}</a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                  <div className="mt-6 pt-6 border-t border-border flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Can't decide? Let our PC Builder do the matching.</span>
                    <a href="#" className="text-primary font-semibold hover:underline">Open PC Builder →</a>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-border bg-background">
          <div className="container-page py-4 space-y-1">
            <div className="relative mb-3">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <input className="w-full h-11 pl-10 pr-4 rounded-md border border-input bg-surface text-sm" placeholder="Search products…" />
            </div>
            {NAV.map((item) => (
              <a key={item.label} href="#" className="block py-2.5 px-2 rounded-md hover:bg-muted text-sm font-medium">
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
