"use client";
import { useState } from "react";
export default function Newsletter() {
  const [done, setDone] = useState(false);
  if (done) return <p className="text-sm text-gold">多謝！（示範功能，尚未連接電郵系統）</p>;
  return (
    <form onSubmit={(e) => { e.preventDefault(); setDone(true); }} className="flex border-b border-cream/40">
      <label htmlFor="nl" className="sr-only">電郵地址</label>
      <input id="nl" type="email" required placeholder="您的電郵地址" className="flex-1 bg-transparent py-3 text-sm outline-none placeholder:text-cream/40" />
      <button className="text-xs tracking-widest text-gold">訂閱 SUBSCRIBE</button>
    </form>
  );
}
