import { Breadcrumbs, PageHero } from "@/components/ui";
import { meta } from "@/lib/seo";
import Quiz from "./Quiz";
export const metadata = meta("護膚配對 Skin Routine Finder", "回答三條簡單問題，找出適合您膚質的 NÜAGE 護膚步驟；附早晚護膚程序指南。", "/routine", "/images/guasha.jpg");
export default function Page() {
  return (<>
    <Breadcrumbs items={[["護膚配對", "/routine"]]} />
    <PageHero eyebrow="SKIN ROUTINE FINDER" title="找出您的護膚程序" intro="三條問題，配對專屬護膚步驟。" image="/images/guasha.jpg" alt="刮痧板、玉石滾輪與精華瓶" />
    <section className="mx-auto max-w-5xl px-6 py-20"><Quiz /></section>
    <section className="bg-mist py-20"><div className="mx-auto grid max-w-5xl gap-10 px-6 md:grid-cols-2">
      <div><h2 className="text-2xl font-light">早上 AM</h2><ol className="mt-6 list-decimal space-y-2 pl-5 text-ink/75"><li>潔面</li><li>爽膚水</li><li>精華</li><li>眼霜</li><li>面霜</li><li>防曬</li></ol></div>
      <div><h2 className="text-2xl font-light">晚上 PM</h2><ol className="mt-6 list-decimal space-y-2 pl-5 text-ink/75"><li>卸妝及潔面</li><li>爽膚水</li><li>精華</li><li>眼霜</li><li>面霜或精華油</li><li>每週 1–2 次面膜</li></ol></div>
    </div></section>
  </>);
}
