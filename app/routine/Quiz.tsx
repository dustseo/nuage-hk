"use client";
import { useState } from "react";
import { products } from "@/lib/data";
import { ProductCard } from "@/components/ui";
const qs = [
  { k: "skin", q: "您的膚質是？", o: [["dry", "乾性"], ["normal", "中性"], ["combo", "混合性"], ["oily", "油性"], ["sensitive", "敏感"]] },
  { k: "goal", q: "您最想改善？", o: [["anti-ageing", "細紋與彈性"], ["hydration", "缺水與乾燥"], ["brightening", "暗啞與膚色不均"]] },
  { k: "time", q: "您的護膚習慣？", o: [["min", "簡單快捷（3 步）"], ["full", "完整儀式（5 步以上）"]] },
];
export default function Quiz() {
  const [a, setA] = useState<Record<string, string>>({});
  const [step, setStep] = useState(0);
  if (step >= qs.length) {
    const rec = products.filter((p) => p.skin.includes(a.skin) && (p.collection === a.goal || p.slug === "morning-dew-cleanser"));
    const list = (rec.length ? rec : products.slice(0, 3)).slice(0, a.time === "min" ? 3 : 5);
    return (<div>
      <h2 className="text-2xl font-light">您的專屬護膚建議</h2>
      <p className="mt-3 text-sm text-ink/60">根據您的答案配對（示範產品，僅供參考）。早上最後一步請記得使用防曬。</p>
      <div className="mt-10 grid grid-cols-2 gap-6 lg:grid-cols-4">{list.map((p) => <ProductCard key={p.slug} p={p} />)}</div>
      <button onClick={() => { setA({}); setStep(0); }} className="mt-10 border border-ink px-8 py-3 text-xs tracking-widest">重新開始</button>
    </div>);
  }
  const q = qs[step];
  return (<div>
    <p className="text-xs tracking-widest text-gold">問題 {step + 1} / {qs.length}</p>
    <h2 className="mt-3 text-3xl font-light">{q.q}</h2>
    <div className="mt-8 grid gap-3 sm:grid-cols-2">{q.o.map(([v, l]) => (
      <button key={v} onClick={() => { setA({ ...a, [q.k]: v }); setStep(step + 1); }} className="border border-ink/20 bg-white p-6 text-left hover:border-gold">{l}</button>))}</div>
  </div>);
}
