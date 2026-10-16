import Image from "next/image";
import Link from "next/link";
import { Breadcrumbs, PageHero } from "@/components/ui";
import { meta } from "@/lib/seo";
export const metadata = meta("品牌故事 About NÜAGE", "NÜAGE 香港護膚品牌故事：以科學創新重塑肌膚年輕活力，結合瑞士頂尖技術與天然植物精華，散發獨特美麗光芒。", "/about", "/images/alps.jpg");
const values = [["科學 Science", "以科學創新為本，引入瑞士頂尖技術。"], ["自然 Nature", "嚴選天然植物精華，溫和呵護肌膚。"], ["自信 Confidence", "相信每個人都能散發獨特專屬的美麗光芒。"]];
export default function Page() {
  return (<>
    <Breadcrumbs items={[["品牌故事", "/about"]]} />
    <PageHero eyebrow="OUR STORY" title="品牌故事" intro="實現真正逆齡美肌的夢想。" image="/images/alps.jpg" alt="雲海之上的瑞士阿爾卑斯山" />
    <section className="mx-auto max-w-3xl px-6 py-20 text-center">
      <h2 className="text-3xl font-light">散發您獨特專屬的美麗光芒</h2>
      <p className="mt-8 leading-loose text-ink/75">NÜAGE 以科學創新重塑肌膚年輕活力，實現真正逆齡美肌的夢想。我們結合瑞士頂尖技術與天然植物精華，為您呈現完美肌膚，煥發自信光采。即刻感受瑞士植物幹細胞的神奇魅力。</p>
      <p className="mt-6 text-sm text-ink/50">創辦故事、成立年份及團隊介紹【待補充】。</p>
    </section>
    <section className="bg-mist py-20"><div className="mx-auto grid max-w-6xl gap-8 px-6 md:grid-cols-3">{values.map(([t, d]) => <div key={t} className="bg-cream p-10 text-center"><h3 className="serif text-2xl">{t}</h3><p className="mt-4 text-sm text-ink/70">{d}</p></div>)}</div></section>
    <section className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 md:grid-cols-2">
      <div className="relative aspect-[4/3]"><Image src="/images/spa.jpg" alt="白色護膚瓶、毛巾與鬱金香的寧靜護膚場景" fill sizes="(min-width:768px) 50vw, 100vw" className="object-cover" /></div>
      <div><h2 className="text-3xl font-light">NÜAGE 的名字</h2><p className="mt-6 leading-loose text-ink/75">「Nuage」在法語中意指雲朵——輕盈、純淨、柔軟，正是我們希望肌膚擁有的感受。</p>
        <Link href="/science" className="mt-8 inline-block border-b border-ink pb-1 text-xs tracking-widest">了解我們的科技</Link></div>
    </section>
  </>);
}
