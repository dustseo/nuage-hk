import { IG } from "@/lib/data";
import { Breadcrumbs, Ph } from "@/components/ui";
import { meta } from "@/lib/seo";
export const metadata = meta("門市 Store Locator", "NÜAGE 香港門市及銷售點資料。", "/stores");
export default function Page() {
  return (<>
    <Breadcrumbs items={[["門市", "/stores"]]} />
    <section className="mx-auto max-w-4xl px-6 py-16 text-center">
      <p className="text-xs tracking-[0.4em] text-gold">STORE LOCATOR</p><h1 className="mt-3 text-4xl font-light">門市及銷售點</h1>
      <div className="mt-12 flex aspect-[16/7] items-center justify-center bg-mist text-ink/50">地圖 <Ph t="門市位置" /></div>
      <h2 className="mt-12 text-2xl font-light">香港</h2>
      <p className="mt-4"><Ph t="門市名稱、地址及營業時間" /></p>
      <p className="mt-8 text-sm text-ink/60">最新銷售點請查詢 <a href={IG} target="_blank" rel="noopener" className="underline">Instagram @nuage_hk</a></p>
    </section>
  </>);
}
