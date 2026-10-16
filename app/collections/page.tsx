import Image from "next/image";
import Link from "next/link";
import { collections } from "@/lib/data";
import { Breadcrumbs, PageHero } from "@/components/ui";
import { meta } from "@/lib/seo";
export const metadata = meta("護膚系列 Collections", "探索 NÜAGE 三大護膚系列：逆齡修護、深層保濕、亮澤煥膚，以瑞士植物科技呵護不同肌膚需要。", "/collections", "/images/lake.jpg");
export default function Page() {
  return (<>
    <Breadcrumbs items={[["護膚系列", "/collections"]]} />
    <PageHero eyebrow="COLLECTIONS" title="護膚系列" intro="為不同肌膚需要而設的三大系列。" image="/images/lake.jpg" alt="阿爾卑斯山湖泊景色" />
    <div className="mx-auto max-w-7xl space-y-20 px-6 py-20">{collections.map((c, i) => (
      <section key={c.slug} className="grid items-center gap-10 md:grid-cols-2">
        <div className={`relative aspect-[4/3] ${i % 2 ? "md:order-2" : ""}`}><Image src={c.image} alt={`${c.name}系列意境圖`} fill sizes="(min-width:768px) 50vw, 100vw" className="object-cover" /></div>
        <div><p className="serif text-xl text-gold">{c.en}</p><h2 className="mt-2 text-3xl font-light">{c.name}</h2><p className="mt-6 leading-loose text-ink/75">{c.desc}</p>
          <Link href={`/collections/${c.slug}`} className="mt-8 inline-block bg-ink px-8 py-3 text-xs tracking-widest text-cream">查看系列</Link></div>
      </section>))}</div>
  </>);
}
