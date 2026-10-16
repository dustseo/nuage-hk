import Link from "next/link";
import Newsletter from "./Newsletter";
import { IG } from "@/lib/data";
const cols: [string, [string, string][]][] = [
  ["選購 Shop", [["/shop", "全部產品"], ["/collections/anti-ageing", "逆齡修護"], ["/collections/hydration", "深層保濕"], ["/collections/brightening", "亮澤煥膚"]]],
  ["探索 Discover", [["/science", "瑞士科技"], ["/ingredients", "成分詞典"], ["/routine", "護膚配對"], ["/journal", "美肌誌"]]],
  ["服務 Care", [["/about", "品牌故事"], ["/faq", "常見問題"], ["/contact", "聯絡我們"], ["/stores", "門市"]]],
];
export default function Footer() {
  return (
    <footer className="bg-ink text-cream/70">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 md:grid-cols-5">
        <div className="md:col-span-2">
          <p className="serif text-3xl tracking-[0.35em] text-cream">NÜAGE</p>
          <p className="mt-4 max-w-sm text-sm leading-relaxed">以科學創新重塑肌膚年輕活力。結合瑞士頂尖技術與天然植物精華。</p>
          <p className="mt-8 text-xs tracking-widest text-cream">訂閱最新消息 NEWSLETTER</p>
          <div className="mt-3 max-w-sm"><Newsletter /></div>
        </div>
        {cols.map(([t, ls]) => (
          <nav key={t} aria-label={t}><p className="text-xs tracking-widest text-cream">{t}</p>
            <ul className="mt-4 space-y-3 text-sm">{ls.map(([h, l]) => <li key={h}><Link href={h} className="hover:text-gold">{l}</Link></li>)}</ul></nav>
        ))}
      </div>
      <div className="border-t border-cream/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-6 text-xs md:flex-row md:justify-between">
          <p>© 2026 NÜAGE Hong Kong · 網站產品、價錢及評價為示範內容</p>
          <div className="flex gap-6"><a href={IG} target="_blank" rel="noopener" className="hover:text-gold">Instagram @nuage_hk</a><Link href="/privacy">私隱政策</Link><Link href="/terms">使用條款</Link></div>
        </div>
      </div>
    </footer>
  );
}
