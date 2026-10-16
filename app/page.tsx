import Image from "next/image";
import Link from "next/link";
import { collections, products, articles, reviews, ingredients, IG, SITE } from "@/lib/data";
import { ProductCard, Demo, Eyebrow, JsonLd } from "@/components/ui";
import { meta } from "@/lib/seo";

export const metadata = { ...meta("NÜAGE 香港 | 瑞士植物幹細胞護膚 Swiss Skincare", "以科學創新重塑肌膚年輕活力。NÜAGE 結合瑞士頂尖技術與天然植物精華，探索瑞士植物幹細胞逆齡護膚系列。", "/"), title: { absolute: "NÜAGE 香港 | 瑞士植物幹細胞護膚 Swiss Skincare" } };

export default function Home() {
  return (<>
    <JsonLd data={[
      { "@context": "https://schema.org", "@type": "Organization", name: "NÜAGE", url: SITE, logo: SITE + "/images/serum.jpg", sameAs: [IG] },
      { "@context": "https://schema.org", "@type": "WebSite", name: "NÜAGE 香港", url: SITE, inLanguage: "zh-HK" },
    ]} />
    <section className="relative flex min-h-[88vh] items-center overflow-hidden">
      <Image src="/images/serum.jpg" alt="植物精華滴管瓶與綠葉，展現瑞士植物護膚" fill priority sizes="100vw" className="object-cover" />
      <div className="absolute inset-0 bg-gradient-to-r from-cream via-cream/85 to-cream/50 md:to-transparent" />
      <div className="relative mx-auto w-full max-w-7xl px-6">
        <Eyebrow>SWISS PLANT STEM CELL SKINCARE</Eyebrow>
        <h1 className="mt-6 max-w-xl text-4xl font-light leading-tight md:text-6xl">以科學創新<br />重塑肌膚<span className="text-gold">年輕活力</span></h1>
        <p className="mt-6 max-w-md text-lg leading-relaxed text-ink/70">實現真正逆齡美肌的夢想。NÜAGE 結合瑞士頂尖技術與天然植物精華，為您呈現完美肌膚，煥發自信光采。</p>
        <div className="mt-10 flex flex-wrap gap-4">
          <Link href="/shop" className="bg-ink px-10 py-4 text-xs tracking-widest text-cream hover:bg-sage">探索產品 SHOP NOW</Link>
          <Link href="/science" className="border border-ink px-10 py-4 text-xs tracking-widest hover:bg-ink hover:text-cream">瑞士科技 OUR SCIENCE</Link>
        </div>
      </div>
    </section>

    <section className="mx-auto max-w-7xl px-6 py-24">
      <div className="text-center"><Eyebrow>COLLECTIONS</Eyebrow><h2 className="mt-4 text-3xl font-light">護膚系列</h2></div>
      <div className="mt-14 grid gap-6 md:grid-cols-3">{collections.map((c) => (
        <Link key={c.slug} href={`/collections/${c.slug}`} className="group relative block aspect-[3/4] overflow-hidden">
          <Image src={c.image} alt={`${c.name}系列意境圖`} fill sizes="(min-width:768px) 33vw, 100vw" className="object-cover transition duration-700 group-hover:scale-105" />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/70 to-transparent" />
          <div className="absolute bottom-8 left-8 text-cream"><p className="serif text-lg text-gold">{c.en}</p><h3 className="text-2xl font-light">{c.name}</h3></div>
        </Link>))}</div>
    </section>

    <section className="bg-white py-24"><div className="mx-auto max-w-7xl px-6">
      <div className="flex items-end justify-between"><div><Eyebrow>BESTSELLERS</Eyebrow><h2 className="mt-4 text-3xl font-light">人氣之選<Demo /></h2></div>
        <Link href="/shop" className="text-xs tracking-widest underline underline-offset-8">查看全部</Link></div>
      <div className="mt-12 grid grid-cols-2 gap-6 lg:grid-cols-4">{products.slice(0, 4).map((p) => <ProductCard key={p.slug} p={p} />)}</div>
    </div></section>

    <section className="grid md:grid-cols-2">
      <div className="relative min-h-[420px]"><Image src="/images/matterhorn.jpg" alt="瑞士阿爾卑斯山馬特洪峰雪景" fill sizes="(min-width:768px) 50vw, 100vw" className="object-cover" /></div>
      <div className="flex items-center bg-mist px-8 py-20 md:px-16"><div>
        <Eyebrow>OUR SCIENCE</Eyebrow><h2 className="mt-4 text-3xl font-light">源自瑞士的植物細胞科技</h2>
        <p className="mt-6 leading-loose text-ink/75">瑞士以精密科研聞名。NÜAGE 引入瑞士植物細胞培養技術，將植物幹細胞萃取物與天然植物精華結合，為肌膚帶來年輕活力。</p>
        <Link href="/science" className="mt-8 inline-block border-b border-ink pb-1 text-xs tracking-widest">了解更多 DISCOVER</Link>
      </div></div>
    </section>

    <section className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-24 md:grid-cols-2">
      <div><Eyebrow>KEY INGREDIENT</Eyebrow><h2 className="mt-4 text-3xl font-light">{ingredients["plant-stem-cell"].name}</h2>
        <p className="mt-6 leading-loose text-ink/75">{ingredients["plant-stem-cell"].desc}</p>
        <Link href="/ingredients" className="mt-8 inline-block border-b border-ink pb-1 text-xs tracking-widest">成分詞典 GLOSSARY</Link></div>
      <div className="relative aspect-square"><Image src="/images/ferns.jpg" alt="翠綠蕨類植物葉片" fill sizes="(min-width:768px) 50vw, 100vw" className="object-cover" /></div>
    </section>

    <section className="bg-sand py-24"><div className="mx-auto max-w-6xl px-6 text-center">
      <Eyebrow>TESTIMONIALS</Eyebrow><h2 className="mt-4 text-3xl font-light">用家分享<Demo t="示範評價" /></h2>
      <div className="mt-12 grid gap-8 md:grid-cols-3">{reviews.map((r) => (
        <figure key={r.name} className="bg-cream p-10"><blockquote className="serif text-xl leading-relaxed">「{r.text}」</blockquote><figcaption className="mt-6 text-xs tracking-widest text-sage">— {r.name}</figcaption></figure>))}</div>
    </div></section>

    <section className="mx-auto max-w-7xl px-6 py-24">
      <div className="flex items-end justify-between"><div><Eyebrow>JOURNAL</Eyebrow><h2 className="mt-4 text-3xl font-light">美肌誌</h2></div><Link href="/journal" className="text-xs tracking-widest underline underline-offset-8">全部文章</Link></div>
      <div className="mt-12 grid gap-8 md:grid-cols-3">{articles.slice(0, 3).map((a) => (
        <article key={a.slug}><Link href={`/journal/${a.slug}`} className="group">
          <div className="relative aspect-[4/3] overflow-hidden"><Image src={a.image} alt={a.title} fill sizes="(min-width:768px) 33vw, 100vw" className="object-cover transition duration-700 group-hover:scale-105" /></div>
          <h3 className="mt-5 text-lg group-hover:text-gold">{a.title}</h3><p className="mt-2 text-sm text-ink/60">{a.excerpt}</p></Link></article>))}</div>
    </section>

    <section className="bg-ink py-20 text-center text-cream">
      <Eyebrow>@NUAGE_HK</Eyebrow><h2 className="mt-4 text-3xl font-light">於 Instagram 關注我們</h2>
      <a href={IG} target="_blank" rel="noopener" className="mt-8 inline-block border border-gold px-10 py-4 text-xs tracking-widest text-gold hover:bg-gold hover:text-ink">FOLLOW ON INSTAGRAM</a>
    </section>
  </>);
}
