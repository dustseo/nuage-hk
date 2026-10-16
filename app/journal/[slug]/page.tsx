import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { articles, SITE } from "@/lib/data";
import { Breadcrumbs, JsonLd } from "@/components/ui";
import { meta } from "@/lib/seo";
type P = { params: Promise<{ slug: string }> };
export const dynamicParams = false;
export function generateStaticParams() { return articles.map((a) => ({ slug: a.slug })); }
export async function generateMetadata({ params }: P) {
  const { slug } = await params;
  const a = articles.find((x) => x.slug === slug)!;
  const m = meta(a.title, a.excerpt, `/journal/${a.slug}`, a.image);
  return { ...m, openGraph: { ...m.openGraph, type: "article", publishedTime: a.date } };
}
export default async function Page({ params }: P) {
  const { slug } = await params;
  const a = articles.find((x) => x.slug === slug);
  if (!a) notFound();
  return (<>
    <JsonLd data={{ "@context": "https://schema.org", "@type": "Article", headline: a.title, description: a.excerpt, image: SITE + a.image, datePublished: a.date, inLanguage: "zh-HK", author: { "@type": "Organization", name: "NÜAGE" }, publisher: { "@type": "Organization", name: "NÜAGE" }, mainEntityOfPage: `${SITE}/journal/${a.slug}` }} />
    <Breadcrumbs items={[["美肌誌", "/journal"], [a.title, `/journal/${a.slug}`]]} />
    <article className="mx-auto max-w-3xl px-6 py-12">
      <header><p className="text-xs tracking-widest text-sage"><time dateTime={a.date}>{a.date}</time> · {a.en}</p>
        <h1 className="mt-4 text-4xl font-light leading-snug">{a.title}</h1><p className="mt-4 text-lg text-ink/60">{a.excerpt}</p></header>
      <div className="relative mt-10 aspect-[16/9]"><Image src={a.image} alt={a.title} fill priority sizes="(min-width:768px) 768px, 100vw" className="object-cover" /></div>
      <div className="prose-nuage mt-10">{a.sections.map((s) => <section key={s.h} className="mt-10"><h2 className="text-2xl font-light">{s.h}</h2>{s.p.map((t) => <p key={t}>{t}</p>)}</section>)}</div>
      <p className="mt-12 border-t border-ink/10 pt-6 text-xs text-ink/50">本文內容僅供一般參考，不構成醫療建議。如有皮膚問題請諮詢皮膚科醫生。</p>
    </article>
    <aside className="mx-auto max-w-3xl px-6 pb-20"><h2 className="text-xl font-light">延伸閱讀</h2>
      <ul className="mt-4 space-y-3">{articles.filter((x) => x.slug !== a.slug).map((x) => <li key={x.slug}><Link href={`/journal/${x.slug}`} className="hover:text-gold">→ {x.title}</Link></li>)}</ul></aside>
  </>);
}
