import { ingredients, products } from "@/lib/data";
import Link from "next/link";
import { Breadcrumbs, PageHero } from "@/components/ui";
import { meta } from "@/lib/seo";
export const metadata = meta("成分詞典 Ingredients Glossary", "NÜAGE 成分詞典：瑞士植物幹細胞萃取物、透明質酸、角鯊烷、菸鹼醯胺、雪絨花等常見護膚成分的作用與特性。", "/ingredients", "/images/eucalyptus.jpg");
export default function Page() {
  return (<>
    <Breadcrumbs items={[["成分詞典", "/ingredients"]]} />
    <PageHero eyebrow="INGREDIENTS" title="成分詞典" intro="了解每一種成分，作出更明智的護膚選擇。" image="/images/eucalyptus.jpg" alt="尤加利葉枝條" />
    <section className="mx-auto max-w-5xl px-6 py-20">
      <h2 className="sr-only">成分列表</h2>
      <div className="grid gap-6 md:grid-cols-2">{Object.entries(ingredients).map(([k, v]) => (
        <article key={k} id={k} className="scroll-mt-32 border border-ink/10 bg-white p-8">
          <p className="serif text-lg text-sage">{v.en}</p><h3 className="mt-1 text-xl">{v.name}</h3>
          <p className="mt-4 text-sm leading-loose text-ink/75">{v.desc}</p>
          <p className="mt-4 text-xs text-ink/50">見於：{products.filter((p) => p.ingredients.includes(k)).map((p, i) => <span key={p.slug}>{i > 0 && "、"}<Link href={`/products/${p.slug}`} className="underline hover:text-gold">{p.name}</Link></span>)}（示範產品）</p>
        </article>))}</div>
      <p className="mt-10 text-xs text-ink/50">以上為一般護膚成分知識，正式產品完整成分表【待補充】。</p>
    </section>
  </>);
}
