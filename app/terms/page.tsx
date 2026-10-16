import { Breadcrumbs } from "@/components/ui";
import { meta } from "@/lib/seo";
export const metadata = meta("使用條款 Terms of Use", "NÜAGE 香港網站使用條款。", "/terms");
export default function Page() {
  return (<>
    <Breadcrumbs items={[["使用條款", "/terms"]]} />
    <article className="prose-nuage mx-auto max-w-3xl px-6 py-16">
      <h1 className="text-4xl font-light">使用條款</h1><p className="text-sm">最後更新：2026-10-16（範本，正式條文【待補充】）</p>
      <h2 className="mt-10 text-xl">網站內容</h2><p>本網站展示的產品名稱、價錢、評價及部分圖片為示範內容，僅供參考，並不構成要約。</p><h2 className="mt-10 text-xl">非醫療建議</h2><p>網站上的護膚資訊僅供一般參考，不能取代專業醫療意見。</p><h2 className="mt-10 text-xl">圖片</h2><p>部分圖片來自 Unsplash，按 Unsplash License 使用。</p>
    </article>
  </>);
}
