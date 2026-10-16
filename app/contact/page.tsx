import { IG } from "@/lib/data";
import { Breadcrumbs, Ph } from "@/components/ui";
import { meta } from "@/lib/seo";
export const metadata = meta("聯絡我們 Contact", "聯絡 NÜAGE 香港：透過 Instagram @nuage_hk 查詢產品及合作。", "/contact");
export default function Page() {
  return (<>
    <Breadcrumbs items={[["聯絡我們", "/contact"]]} />
    <section className="mx-auto grid max-w-6xl gap-12 px-6 py-16 md:grid-cols-2">
      <div><p className="text-xs tracking-[0.4em] text-gold">CONTACT</p><h1 className="mt-3 text-4xl font-light">聯絡我們</h1>
        <p className="mt-6 leading-loose text-ink/70">歡迎透過 Instagram 私訊查詢產品、購買及合作事宜。</p>
        <a href={IG} target="_blank" rel="noopener" className="mt-8 inline-block bg-ink px-8 py-4 text-xs tracking-widest text-cream">Instagram @nuage_hk</a></div>
      <dl className="space-y-6 bg-white p-10">
        <div><dt className="text-xs tracking-widest text-sage">地址 ADDRESS</dt><dd className="mt-2"><Ph t="地址" /></dd></div>
        <div><dt className="text-xs tracking-widest text-sage">營業時間 HOURS</dt><dd className="mt-2"><Ph t="營業時間" /></dd></div>
        <div><dt className="text-xs tracking-widest text-sage">WHATSAPP / 電話</dt><dd className="mt-2"><Ph t="電話" /></dd></div>
        <div><dt className="text-xs tracking-widest text-sage">電郵 EMAIL</dt><dd className="mt-2"><Ph t="電郵" /></dd></div>
      </dl>
    </section>
  </>);
}
