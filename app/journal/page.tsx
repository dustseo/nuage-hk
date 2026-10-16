import Image from "next/image";
import Link from "next/link";
import { articles } from "@/lib/data";
import { Breadcrumbs, PageHero } from "@/components/ui";
import { meta } from "@/lib/seo";
export const metadata = meta("美肌誌 Journal", "NÜAGE 美肌誌：護膚步驟次序、香港防曬指南、植物幹細胞科學與四季保濕策略等實用護膚知識。", "/journal", "/images/flowers.jpg");
export default function Page() {
  return (<>
    <Breadcrumbs items={[["美肌誌", "/journal"]]} />
    <PageHero eyebrow="JOURNAL" title="美肌誌" intro="實用護膚知識與品牌故事。" image="/images/flowers.jpg" alt="花卉與植物花束" />
    <section className="mx-auto grid max-w-7xl gap-12 px-6 py-20 md:grid-cols-2">
      <h2 className="sr-only">最新文章</h2>
      {articles.map((a) => (
        <article key={a.slug}><Link href={`/journal/${a.slug}`} className="group block">
          <div className="relative aspect-[16/10] overflow-hidden"><Image src={a.image} alt={a.title} fill sizes="(min-width:768px) 50vw, 100vw" className="object-cover transition duration-700 group-hover:scale-105" /></div>
          <p className="mt-5 text-xs tracking-widest text-sage"><time dateTime={a.date}>{a.date}</time> · {a.en}</p>
          <h3 className="mt-2 text-2xl font-light group-hover:text-gold">{a.title}</h3><p className="mt-3 text-ink/60">{a.excerpt}</p></Link></article>))}
    </section>
  </>);
}
