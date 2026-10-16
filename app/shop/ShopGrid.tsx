"use client";
import { useState } from "react";
import { products, collections } from "@/lib/data";
import { ProductCard } from "@/components/ui";
export default function ShopGrid() {
  const [cat, setCat] = useState("all");
  const list = cat === "all" ? products : products.filter((p) => p.collection === cat);
  return (<>
    <div role="tablist" aria-label="產品分類" className="flex flex-wrap gap-3">
      {[["all", "全部 All"], ...collections.map((c) => [c.slug, `${c.name} ${c.en}`])].map(([k, l]) => (
        <button key={k} role="tab" aria-selected={cat === k} onClick={() => setCat(k)} className={`border px-5 py-2 text-xs tracking-wider ${cat === k ? "border-ink bg-ink text-cream" : "border-ink/20 hover:border-ink"}`}>{l}</button>))}
    </div>
    <p className="mt-6 text-sm text-ink/50">{list.length} 件產品</p>
    <div className="mt-6 grid grid-cols-2 gap-x-6 gap-y-12 lg:grid-cols-4">{list.map((p) => <ProductCard key={p.slug} p={p} />)}</div>
  </>);
}
