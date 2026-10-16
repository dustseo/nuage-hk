import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { products, collections, ingredients, reviews, SITE } from "@/lib/data";
import { Breadcrumbs, Demo, JsonLd, ProductCard, Eyebrow } from "@/components/ui";
import { meta } from "@/lib/seo";

type P = { params: Promise<{ slug: string }> };
export const dynamicParams = false;
export function generateStaticParams() { return products.map((p) => ({ slug: p.slug })); }
export async function generateMetadata({ params }: P) {
  const { slug } = await params;
  const p = products.find((x) => x.slug === slug)!;
  return meta(`${p.name} ${p.en}`, `${p.name}（${p.en}）：${p.desc.slice(0, 80)}`, `/products/${p.slug}`, p.images[0]);
}
export default async function Page({ params }: P) {
  const { slug } = await params;
  const p = products.find((x) => x.slug === slug);
  if (!p) notFound();
  const c = collections.find((x) => x.slug === p.collection)!;
  return (<>
    <JsonLd data={{ "@context": "https://schema.org", "@type": "Product", name: `${p.name} ${p.en}`, description: p.desc, image: p.images.map((i) => SITE + i), brand: { "@type": "Brand", name: "NÜAGE" }, category: c.name, url: `${SITE}/products/${p.slug}` }} />
    <Breadcrumbs items={[["全部產品", "/shop"], [c.name, `/collections/${c.slug}`], [p.name, `/products/${p.slug}`]]} />
    <section className="mx-auto grid max-w-7xl gap-12 px-6 py-10 lg:grid-cols-2">
      <div className="grid gap-4">
        <div className="relative aspect-square bg-white"><Image src={p.images[0]} alt={`${p.name} 示範產品主圖`} fill priority sizes="(min-width:1024px) 50vw, 100vw" className="object-cover" /></div>
        <div className="grid grid-cols-2 gap-4">{p.images.slice(1).map((im, i) => (
          <div key={im} className="relative aspect-square"><Image src={im} alt={`${p.name} 意境圖 ${i + 1}`} fill sizes="25vw" className="object-cover" /></div>))}</div>
      </div>
      <div className="lg:pt-8">
        <p className="text-xs tracking-[0.3em] text-sage">{c.en.toUpperCase()}</p>
        <h1 className="mt-3 text-4xl font-light">{p.name}</h1>
        <p className="serif mt-2 text-xl text-ink/60">{p.en}</p>
        <p className="mt-6 text-2xl">HK${p.price} <span className="text-sm text-ink/50">/ {p.size}</span><Demo t="示範價格" /></p>
        <p className="mt-2 text-sm text-gold">{p.tagline}</p>
        <p className="mt-6 leading-loose text-ink/75">{p.desc}</p>
        <p className="mt-2 text-xs text-ink/40">此為示範產品資料，正式產品名稱、成分及價錢【待補充】。</p>
        <Link href="/contact" className="mt-8 block bg-ink py-4 text-center text-xs tracking-widest text-cream hover:bg-sage">查詢購買 ENQUIRE</Link>
        <div className="mt-12 divide-y divide-ink/10 border-y border-ink/10">
          <section className="py-6"><h2 className="text-sm tracking-widest">主要成分 KEY INGREDIENTS</h2>
            <ul className="mt-4 space-y-3">{p.ingredients.map((k) => <li key={k}><Link href={`/ingredients#${k}`} className="font-medium hover:text-gold">{ingredients[k].name}</Link><span className="text-sm text-ink/50"> · {ingredients[k].en}</span></li>)}</ul></section>
          <section className="py-6"><h2 className="text-sm tracking-widest">使用方法 HOW TO USE</h2>
            <ol className="mt-4 list-decimal space-y-2 pl-5 text-ink/75">{p.howTo.map((s) => <li key={s}>{s}</li>)}</ol></section>
          <section className="py-6"><h2 className="text-sm tracking-widest">溫馨提示</h2>
            <p className="mt-4 text-sm text-ink/70">首次使用請先於耳後或手腕內側測試。如有不適請停止使用；如有皮膚疾病請諮詢醫生。</p></section>
        </div>
      </div>
    </section>
    <section className="bg-sand py-20"><div className="mx-auto max-w-5xl px-6">
      <h2 className="text-2xl font-light">用家評價<Demo t="示範評價" /></h2>
      <div className="mt-8 grid gap-6 md:grid-cols-3">{reviews.map((r) => <figure key={r.name} className="bg-cream p-8"><blockquote className="text-sm leading-relaxed">「{r.text}」</blockquote><figcaption className="mt-4 text-xs text-sage">— {r.name}</figcaption></figure>)}</div>
    </div></section>
    <section className="mx-auto max-w-7xl px-6 py-20"><Eyebrow>YOU MAY ALSO LIKE</Eyebrow><h2 className="mt-3 text-2xl font-light">相關產品</h2>
      <div className="mt-10 grid grid-cols-2 gap-6 lg:grid-cols-4">{products.filter((x) => x.slug !== p.slug).slice(0, 4).map((x) => <ProductCard key={x.slug} p={x} />)}</div></section>
  </>);
}
