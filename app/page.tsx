const IG = "https://www.instagram.com/nuage_hk/";
const Ph = ({ t }: { t: string }) => <span className="rounded bg-gold/15 px-2 py-0.5 text-sm text-gold">【待補充：{t}】</span>;
const pillars = [
  { en: "Swiss Technology", zh: "瑞士頂尖技術", d: "引入瑞士護膚科研技術，以科學創新重塑肌膚年輕活力。" },
  { en: "Plant Stem Cells", zh: "瑞士植物幹細胞", d: "感受瑞士植物幹細胞的神奇魅力，喚醒肌膚自然光采。" },
  { en: "Botanical Essence", zh: "天然植物精華", d: "結合天然植物精華，溫和呵護，煥發自信光芒。" },
];
export default function Home() {
  return (<main>
    <header className="fixed inset-x-0 top-0 z-50 border-b border-ink/5 bg-cream/80 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#" className="serif text-2xl tracking-[0.3em]">NÜAGE</a>
        <div className="hidden gap-8 text-sm md:flex">
          <a href="#about">品牌故事</a><a href="#products">產品</a><a href="#gallery">美肌日誌</a><a href="#contact">聯絡我們</a></div>
      </nav></header>

    <section className="relative flex min-h-screen items-center overflow-hidden bg-gradient-to-br from-cream via-[#efe9df] to-[#dfe5d6] pt-20">
      <div className="absolute -right-32 top-20 h-[32rem] w-[32rem] rounded-full bg-white/60 blur-3xl" />
      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-6 md:grid-cols-2">
        <div>
          <p className="mb-4 text-xs tracking-[0.4em] text-sage">SWISS SKINCARE · HONG KONG</p>
          <h1 className="text-4xl font-light leading-tight md:text-6xl">以科學創新<br />重塑肌膚<span className="text-gold">年輕活力</span></h1>
          <p className="mt-6 max-w-md text-lg leading-relaxed text-ink/70">實現真正逆齡美肌的夢想。NÜAGE結合瑞士頂尖技術與天然植物精華，為您呈現完美肌膚，煥發自信光采。</p>
          <div className="mt-10 flex gap-4">
            <a href="#products" className="rounded-full bg-ink px-8 py-3 text-sm text-cream transition hover:bg-sage">探索產品</a>
            <a href={IG} target="_blank" className="rounded-full border border-ink px-8 py-3 text-sm transition hover:bg-ink hover:text-cream">Instagram</a>
          </div></div>
        <div className="flex justify-center">
          <div className="relative h-72 w-72 md:h-96 md:w-96">
            <div className="absolute inset-0 rounded-full border border-gold/40" />
            <img src="/logo.jpg" alt="NÜAGE" className="absolute inset-6 h-[calc(100%-3rem)] w-[calc(100%-3rem)] rounded-full object-cover shadow-2xl" />
          </div></div>
      </div></section>

    <section id="about" className="mx-auto max-w-4xl px-6 py-28 text-center">
      <p className="serif text-sm tracking-[0.4em] text-gold">OUR STORY</p>
      <h2 className="mt-4 text-3xl font-light md:text-4xl">散發您獨特專屬的美麗光芒</h2>
      <p className="mt-8 text-lg leading-loose text-ink/70">NÜAGE 相信，真正的美源於健康而充滿活力的肌膚。我們以科學創新為本，融合瑞士頂尖技術與天然植物精華，即刻感受瑞士植物幹細胞的神奇魅力。</p>
    </section>

    <section id="products" className="bg-white py-28"><div className="mx-auto max-w-6xl px-6">
      <div className="text-center"><p className="serif text-sm tracking-[0.4em] text-gold">THE NÜAGE WAY</p>
        <h2 className="mt-4 text-3xl font-light">品牌核心</h2></div>
      <div className="mt-16 grid gap-8 md:grid-cols-3">{pillars.map(p => (
        <div key={p.en} className="rounded-3xl border border-ink/5 bg-cream p-10 transition hover:-translate-y-1 hover:shadow-xl">
          <p className="serif text-xl text-sage">{p.en}</p><h3 className="mt-2 text-xl">{p.zh}</h3>
          <p className="mt-4 leading-relaxed text-ink/70">{p.d}</p></div>))}</div>
      <div className="mt-16 rounded-3xl bg-ink p-10 text-center text-cream">
        <h3 className="text-2xl font-light">產品系列</h3>
        <p className="mt-4 text-cream/70">產品名稱、功效及價錢：<Ph t="產品資料" /></p>
        <a href={IG} target="_blank" className="mt-6 inline-block rounded-full bg-gold px-8 py-3 text-sm">到 Instagram 查看最新產品</a>
      </div></div></section>

    <section id="gallery" className="mx-auto max-w-6xl px-6 py-28">
      <div className="text-center"><p className="serif text-sm tracking-[0.4em] text-gold">GALLERY</p><h2 className="mt-4 text-3xl font-light">美肌日誌</h2></div>
      <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-4">{[0,1,2,3,4,5,6,7].map(i => (
        <a key={i} href={IG} target="_blank" className={`flex aspect-square items-center justify-center rounded-2xl text-sm text-ink/40 transition hover:opacity-80 ${i%3===0?"bg-[#dfe5d6]":i%3===1?"bg-[#efe9df]":"bg-white"}`}>
          {i===0 ? <img src="/logo.jpg" alt="" className="h-full w-full rounded-2xl object-cover" /> : "@nuage_hk"}</a>))}</div>
      <p className="mt-6 text-center text-sm text-ink/50">圖片待補充 — 請於 Instagram 瀏覽更多</p>
    </section>

    <section id="contact" className="bg-[#dfe5d6] py-28"><div className="mx-auto grid max-w-6xl gap-12 px-6 md:grid-cols-2">
      <div><p className="serif text-sm tracking-[0.4em] text-gold">VISIT & CONTACT</p><h2 className="mt-4 text-3xl font-light">聯絡我們</h2>
        <p className="mt-6 leading-relaxed text-ink/70">歡迎透過 Instagram 私訊查詢產品及預約。</p>
        <a href={IG} target="_blank" className="mt-8 inline-block rounded-full bg-ink px-8 py-3 text-sm text-cream">@nuage_hk</a></div>
      <dl className="space-y-6 rounded-3xl bg-white/70 p-10">
        <div><dt className="text-sm text-sage">地址 Address</dt><dd className="mt-1"><Ph t="地址" /></dd></div>
        <div><dt className="text-sm text-sage">營業時間 Hours</dt><dd className="mt-1"><Ph t="營業時間" /></dd></div>
        <div><dt className="text-sm text-sage">WhatsApp / 電話</dt><dd className="mt-1"><Ph t="電話" /></dd></div>
        <div><dt className="text-sm text-sage">電郵 Email</dt><dd className="mt-1"><Ph t="電郵" /></dd></div>
      </dl></div></section>

    <footer className="bg-ink py-12 text-center text-cream/60">
      <p className="serif text-2xl tracking-[0.3em] text-cream">NÜAGE</p>
      <p className="mt-3 text-sm">Swiss Plant Stem Cell Skincare · Hong Kong</p>
      <a href={IG} target="_blank" className="mt-4 inline-block text-sm underline">Instagram @nuage_hk</a>
      <p className="mt-6 text-xs">© {new Date().getFullYear()} NÜAGE Hong Kong. All rights reserved.</p>
    </footer>
  </main>);
}
