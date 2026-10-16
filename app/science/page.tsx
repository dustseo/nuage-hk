import Image from "next/image";
import Link from "next/link";
import { Breadcrumbs, PageHero, Eyebrow } from "@/components/ui";
import { meta } from "@/lib/seo";
export const metadata = meta("瑞士科技 Our Science", "了解植物幹細胞與植物細胞培養技術：NÜAGE 如何結合瑞士頂尖技術與天然植物精華，以科學創新重塑肌膚年輕活力。", "/science", "/images/lab.jpg");
const steps = [
  ["01", "選取植物", "從植物具再生能力的分生組織（如芽尖）取得少量細胞樣本。"],
  ["02", "細胞培養", "在受控的實驗室環境中培養植物細胞，無需大量採摘植物，品質更穩定。"],
  ["03", "萃取活性成分", "從培養細胞中萃取抗氧化物等植物活性成分。"],
  ["04", "配方結合", "與天然植物精華及保濕成分結合，製成溫和、易用的護膚品。"],
];
export default function Page() {
  return (<>
    <Breadcrumbs items={[["瑞士科技", "/science"]]} />
    <PageHero eyebrow="OUR SCIENCE" title="瑞士科技 · 植物幹細胞" intro="以科學創新重塑肌膚年輕活力。" image="/images/lab.jpg" alt="實驗室研究人員使用滴管進行測試" />
    <section className="mx-auto max-w-3xl px-6 py-20 prose-nuage">
      <h2 className="text-3xl font-light">甚麼是植物幹細胞？</h2>
      <p>植物擁有驚人的再生能力：剪下一段枝條，可以長成一棵新植物。這種能力來自植物分生組織中的「植物幹細胞」，它們可以不斷分裂並發展成不同的植物組織。</p>
      <p>在護膚領域，科學家利用植物細胞培養技術，從這些細胞取得富含抗氧化物、氨基酸及其他植物活性成分的萃取物，用以幫助保護肌膚、維持肌膚柔潤與活力。</p>
      <h3 className="mt-10 text-xl">重要說明</h3>
      <p>植物幹細胞萃取物不會在人體內變成幹細胞，亦不能取代醫學治療。其價值在於萃取物中的植物活性成分。</p>
    </section>
    <section className="bg-mist py-20"><div className="mx-auto max-w-7xl px-6">
      <Eyebrow>THE PROCESS</Eyebrow><h2 className="mt-4 text-3xl font-light">植物細胞培養技術</h2>
      <ol className="mt-12 grid gap-8 md:grid-cols-4">{steps.map(([n, t, d]) => <li key={n} className="bg-cream p-8"><p className="serif text-4xl text-gold">{n}</p><h3 className="mt-4 text-lg">{t}</h3><p className="mt-3 text-sm leading-relaxed text-ink/70">{d}</p></li>)}</ol>
    </div></section>
    <section className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 md:grid-cols-2">
      <div className="relative aspect-[4/3]"><Image src="/images/alps.jpg" alt="雲海之上的瑞士阿爾卑斯山" fill sizes="(min-width:768px) 50vw, 100vw" className="object-cover" /></div>
      <div><h2 className="text-3xl font-light">為何是瑞士？</h2><p className="mt-6 leading-loose text-ink/75">瑞士以精密工藝及生命科學研究聞名，亦是植物細胞培養護膚技術的重要發展地。阿爾卑斯高山植物在嚴峻環境中生長，啟發了我們對肌膚韌性與活力的追求。</p>
        <p className="mt-4 text-sm text-ink/50">具體技術合作夥伴及原料產地【待補充】。</p>
        <Link href="/ingredients" className="mt-8 inline-block border-b border-ink pb-1 text-xs tracking-widest">探索成分</Link></div>
    </section>
  </>);
}
