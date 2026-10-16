import { Breadcrumbs } from "@/components/ui";
import { meta } from "@/lib/seo";
export const metadata = meta("私隱政策 Privacy Policy", "NÜAGE 香港網站私隱政策。", "/privacy");
export default function Page() {
  return (<>
    <Breadcrumbs items={[["私隱政策", "/privacy"]]} />
    <article className="prose-nuage mx-auto max-w-3xl px-6 py-16">
      <h1 className="text-4xl font-light">私隱政策</h1><p className="text-sm">最後更新：2026-10-16（範本，正式條文【待補充】）</p>
      <h2 className="mt-10 text-xl">收集的資料</h2><p>本網站目前不設網上購物或會員帳戶。訂閱表格為示範功能，並不會收集或儲存您的資料。</p><h2 className="mt-10 text-xl">Cookies</h2><p>本網站可能使用必要的技術性 cookies 以維持網站正常運作。</p><h2 className="mt-10 text-xl">查詢</h2><p>如對私隱政策有任何疑問，請透過 Instagram @nuage_hk 聯絡我們。</p>
    </article>
  </>);
}
