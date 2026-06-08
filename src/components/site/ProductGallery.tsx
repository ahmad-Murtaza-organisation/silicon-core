import { useState, useRef } from "react";
import { Expand } from "lucide-react";

export type GalleryImage = { emoji: string; tint: string; label: string };

export function ProductGallery({ images }: { images: GalleryImage[] }) {
  const [active, setActive] = useState(0);
  const [zoom, setZoom] = useState(false);
  const [pos, setPos] = useState({ x: 50, y: 50 });
  const ref = useRef<HTMLDivElement>(null);
  const img = images[active];

  const onMove = (e: React.MouseEvent) => {
    const r = ref.current?.getBoundingClientRect();
    if (!r) return;
    const x = ((e.clientX - r.left) / r.width) * 100;
    const y = ((e.clientY - r.top) / r.height) * 100;
    setPos({ x: Math.max(0, Math.min(100, x)), y: Math.max(0, Math.min(100, y)) });
  };

  return (
    <div className="flex gap-4">
      <div className="flex flex-col gap-3">
        {images.map((im, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            className={`h-16 w-16 rounded-lg overflow-hidden border-2 grid place-items-center text-2xl ${im.tint} ${i === active ? "border-primary" : "border-border hover:border-primary/40"} transition`}
            aria-label={im.label}
          >
            {im.emoji}
          </button>
        ))}
      </div>
      <div className="flex-1">
        <div
          ref={ref}
          onMouseEnter={() => setZoom(true)}
          onMouseLeave={() => setZoom(false)}
          onMouseMove={onMove}
          className={`relative aspect-square rounded-2xl overflow-hidden border border-border ${img.tint} grid place-items-center cursor-zoom-in select-none`}
        >
          <div
            className="text-[14rem] transition-transform duration-200 ease-out"
            style={{
              transform: zoom ? `scale(2.2) translate(${(50 - pos.x) * 0.3}%, ${(50 - pos.y) * 0.3}%)` : "scale(1)",
              transformOrigin: `${pos.x}% ${pos.y}%`,
            }}
          >
            {img.emoji}
          </div>
          <div className="absolute top-3 right-3 h-9 w-9 grid place-items-center rounded-full bg-background/90 border border-border text-foreground/70">
            <Expand className="h-4 w-4" />
          </div>
          {zoom && (
            <div className="absolute bottom-3 left-3 text-[11px] px-2 py-1 rounded bg-background/90 border border-border font-medium">
              Hover to zoom · 2.2x
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
