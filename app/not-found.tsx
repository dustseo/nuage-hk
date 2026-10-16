import Link from "next/link";
export const metadata = { title: "找不到頁面 404", robots: { index: false }, alternates: { canonical: null } };
export default function NotFound() {
  return (<section className="mx-auto max-w-2xl px-6 py-32 text-center">
    <p className="serif text-7xl text-gold">404</p><h1 className="mt-6 text-3xl font-light">找不到此頁面</h1>
    <p className="mt-4 text-ink/60">頁面可能已移除或網址有誤。</p>
    <div className="mt-10 flex justify-center gap-4"><Link href="/" className="bg-ink px-8 py-3 text-xs tracking-widest text-cream">返回主頁</Link><Link href="/shop" className="border border-ink px-8 py-3 text-xs tracking-widest">瀏覽產品</Link></div>
  </section>);
}
