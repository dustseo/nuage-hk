"use client";
import Link from "next/link";
import { useState } from "react";
const nav = [
  ["/shop", "產品 Shop"], ["/collections", "系列 Collections"], ["/science", "瑞士科技 Science"], ["/ingredients", "成分 Ingredients"],
  ["/routine", "護膚配對 Routine"], ["/journal", "美肌誌 Journal"], ["/about", "品牌 About"],
];
export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50">
      <p className="bg-ink py-2 text-center text-xs tracking-widest text-cream">SWISS PLANT STEM CELL SKINCARE · 本網站產品資料為示範內容</p>
      <div className="border-b border-ink/10 bg-cream/90 backdrop-blur">
        <nav aria-label="主選單" className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <button className="lg:hidden" aria-label="開啟選單" aria-expanded={open} onClick={() => setOpen(!open)}>
            <span className="block h-px w-6 bg-ink" /><span className="mt-2 block h-px w-6 bg-ink" />
          </button>
          <Link href="/" className="serif text-2xl tracking-[0.35em]" aria-label="NÜAGE 主頁">NÜAGE</Link>
          <ul className="hidden gap-6 text-[13px] lg:flex">{nav.map(([h, l]) => <li key={h}><Link href={h} className="hover:text-gold">{l}</Link></li>)}</ul>
          <Link href="/contact" className="text-[13px] hover:text-gold">聯絡</Link>
        </nav>
        {open && <ul className="border-t border-ink/10 px-6 py-4 lg:hidden">{[...nav, ["/faq", "常見問題 FAQ"], ["/stores", "門市 Stores"]].map(([h, l]) =>
          <li key={h}><Link href={h} onClick={() => setOpen(false)} className="block py-3 text-lg">{l}</Link></li>)}</ul>}
      </div>
    </header>
  );
}
