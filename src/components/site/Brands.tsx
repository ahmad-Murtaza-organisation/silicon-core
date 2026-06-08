const BRANDS = ["Intel", "AMD", "NVIDIA", "ASUS", "MSI", "Gigabyte", "Corsair", "Kingston", "Samsung", "Arduino", "Raspberry Pi", "Logitech"];

export function Brands() {
  return (
    <section className="py-16 lg:py-20">
      <div className="container-page">
        <div className="text-center mb-10">
          <div className="text-xs font-semibold uppercase tracking-widest text-primary mb-2">Top brands</div>
          <h2 className="font-display text-3xl lg:text-4xl font-bold">Trusted by the industry's best</h2>
        </div>

        <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-3">
          {BRANDS.map((b) => (
            <a key={b} href="#" className="group h-20 rounded-xl border border-border bg-background hover:border-primary/40 hover:bg-surface transition grid place-items-center">
              <span className="font-display font-bold text-foreground/60 group-hover:text-primary transition">{b}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
