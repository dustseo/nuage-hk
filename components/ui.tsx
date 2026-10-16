import Link from "next/link";
import Image from "next/image";
import { SITE, type Product } from "@/lib/data";

export const Demo = ({ t = "示範內容" }: { t?: string }) => <span className="ml-2 inline-block rounded-full border border-gold/50 px-2 py-0.5 align-middle text-[10px] tracking-wider text-gold">{t}</span>;
export const Ph = ({ t }: { t: string }) => <span className="rounded bg-gold/15 px-2 py-0.5 text-sm text-gold">【待補充：{t}】</span>;
export const JsonLd = ({ data }: { data: object }) => <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
export const Eyebrow = ({ children }: { children: React.ReactNode }) => <p className="text-xs tracking-[0.4em] text-gold">{children}</p>;

export function Breadcrumbs({ items }: { items: [string, string][] }) {
  const all: [string, string][] = [["主頁", "/"], ...items];
  return (
    <nav aria-label="麵包屑" className="mx-auto max-w-7xl px-6 pt-6 text-xs text-ink/50">
      <ol className="flex flex-wrap gap-2">{all.map(([n, h], i) => <li key={h}>{i < all.length - 1 ? <><Link href={h} className="hover:text-gold">{n}</Link> <span aria-hidden>/</span></> : <span aria-current="page">{n}</span>}</li>)}</ol>
      <JsonLd data={{ "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: all.map(([n, h], i) => ({ "@type": "ListItem", position: i + 1, name: n, item: SITE + h })) }} />
    </nav>
  );
}

export function PageHero({ eyebrow, title, intro, image, alt }: { eyebrow: string; title: string; intro: string; image: string; alt: string }) {
  return (
    <section className="relative mt-6 flex min-h-[46vh] items-end overflow-hidden">
      <Image src={image} alt={alt} fill priority sizes="100vw" className="object-cover" />
      <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/20 to-transparent" />
      <div className="relative mx-auto w-full max-w-7xl px-6 pb-14 text-cream">
        <p className="text-xs tracking-[0.4em] text-gold">{eyebrow}</p>
        <h1 className="mt-3 text-4xl font-light md:text-5xl">{title}</h1>
        <p className="mt-4 max-w-2xl text-cream/85">{intro}</p>
      </div>
    </section>
  );
}

export function ProductCard({ p }: { p: Product }) {
  return (
    <article className="group">
      <Link href={`/products/${p.slug}`}>
        <div className="relative aspect-[4/5] overflow-hidden bg-white">
          <Image src={p.images[0]} alt={`${p.name} ${p.en} 示範產品圖片`} fill sizes="(min-width:1024px) 25vw, 50vw" className="object-cover transition duration-700 group-hover:scale-105" />
        </div>
        <p className="mt-4 text-xs tracking-widest text-sage">{p.en}</p>
        <h3 className="mt-1 text-lg">{p.name}</h3>
        <p className="mt-1 text-sm text-ink/60">HK${p.price} · {p.size}<Demo t="示範價格" /></p>
      </Link>
    </article>
  );
}
