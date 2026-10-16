import { faqs } from "@/lib/data";
import { Breadcrumbs, JsonLd } from "@/components/ui";
import { meta } from "@/lib/seo";
export const metadata = meta("常見問題 FAQ", "NÜAGE 常見問題：品牌介紹、購買方法、敏感肌使用建議、植物幹細胞萃取物及門市資料。", "/faq");
export default function Page() {
  return (<>
    <JsonLd data={{ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })) }} />
    <Breadcrumbs items={[["常見問題", "/faq"]]} />
    <section className="mx-auto max-w-3xl px-6 py-16">
      <p className="text-xs tracking-[0.4em] text-gold">FAQ</p><h1 className="mt-3 text-4xl font-light">常見問題</h1>
      <div className="mt-12 divide-y divide-ink/10 border-y border-ink/10">{faqs.map((f) => (
        <details key={f.q} className="group py-6"><summary className="flex cursor-pointer list-none justify-between text-lg"><h2 className="font-normal">{f.q}</h2><span className="text-gold group-open:rotate-45">+</span></summary>
          <p className="mt-4 leading-loose text-ink/70">{f.a}</p></details>))}</div>
    </section>
  </>);
}
