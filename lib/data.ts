export const SITE = "https://nuage-hk.vercel.app";
export const IG = "https://www.instagram.com/nuage_hk/";

export type Product = {
  slug: string; name: string; en: string; collection: string; price: number; size: string;
  images: string[]; tagline: string; desc: string; ingredients: string[]; howTo: string[]; skin: string[];
};
export type Collection = { slug: string; name: string; en: string; image: string; desc: string };

export const collections: Collection[] = [
  { slug: "anti-ageing", name: "逆齡修護", en: "Anti-Ageing", image: "/images/dropper-hand.jpg", desc: "以瑞士植物幹細胞萃取為核心，針對肌膚失去彈性、細紋與疲憊感，日夜維持年輕活力。" },
  { slug: "hydration", name: "深層保濕", en: "Hydration", image: "/images/lake.jpg", desc: "靈感源自阿爾卑斯冰河湖泊，多重保濕成分鎖住水分，適應香港潮濕夏天與乾燥冬天。" },
  { slug: "brightening", name: "亮澤煥膚", en: "Brightening", image: "/images/flowers.jpg", desc: "結合高山花卉植物精華，令膚色看起來更均勻透亮，煥發自信光采。" },
];

const img = (...n: string[]) => n.map((x) => `/images/${x}.jpg`);
export const products: Product[] = [
  { slug: "alpine-cell-renewal-serum", name: "瑞士植物幹細胞精華", en: "Alpine Cell Renewal Serum", collection: "anti-ageing", price: 1280, size: "30ml",
    images: img("serum", "dropper-hand", "amber"), tagline: "品牌核心精華 · 重塑肌膚年輕活力",
    desc: "以瑞士植物幹細胞萃取物配合天然植物精華，質地輕盈易吸收，幫助肌膚維持柔滑、飽滿與彈性，適合作為日夜護膚的核心步驟。",
    ingredients: ["plant-stem-cell", "hyaluronic-acid", "squalane"], howTo: ["早晚潔面及爽膚後使用。", "取 2–3 滴於掌心，輕按全臉及頸部。", "待吸收後再塗抹面霜；日間最後一步必須使用防曬。"], skin: ["dry", "normal", "combo"] },
  { slug: "glacier-hydra-cream", name: "冰河保濕面霜", en: "Glacier Hydra Cream", collection: "hydration", price: 980, size: "50ml",
    images: img("jar-hand", "lake", "cream"), tagline: "全日水潤 · 輕盈不黏膩",
    desc: "啫喱般的柔滑質地，迅速為肌膚補充水分並形成柔軟保護膜，減少水分流失，適合香港濕熱天氣及冷氣房環境。",
    ingredients: ["hyaluronic-acid", "glycerin", "squalane"], howTo: ["於精華後使用。", "取一顆珍珠大小，由內向外輕輕推開。", "乾燥季節可於晚間加厚使用作睡眠面膜。"], skin: ["dry", "normal", "combo", "oily"] },
  { slug: "edelweiss-radiance-essence", name: "雪絨花亮澤精華", en: "Edelweiss Radiance Essence", collection: "brightening", price: 1080, size: "30ml",
    images: img("amber", "flowers", "guasha"), tagline: "高山花卉 · 透亮光采",
    desc: "蘊含雪絨花萃取及菸鹼醯胺，幫助改善暗啞，令膚色看起來更均勻有光澤。",
    ingredients: ["edelweiss", "niacinamide", "glycerin"], howTo: ["潔面及爽膚後使用。", "取 2 滴輕拍全臉，集中於暗啞部位。", "日間配合防曬使用效果更佳。"], skin: ["normal", "combo", "oily"] },
  { slug: "morning-dew-cleanser", name: "晨露溫和潔面乳", en: "Morning Dew Cleanser", collection: "hydration", price: 420, size: "120ml",
    images: img("cream", "spa", "eucalyptus"), tagline: "溫和潔淨 · 保留水潤",
    desc: "細緻泡沫溫和帶走污垢與多餘油脂，洗後不緊繃，為後續護膚步驟打好基礎。",
    ingredients: ["glycerin", "centella"], howTo: ["以溫水濕潤面部。", "取適量於掌心起泡，打圈按摩 30 秒。", "以清水徹底沖洗。"], skin: ["dry", "normal", "combo", "oily", "sensitive"] },
  { slug: "botanical-eye-renewal", name: "植萃修護眼霜", en: "Botanical Eye Renewal Cream", collection: "anti-ageing", price: 880, size: "15ml",
    images: img("bottles", "leaf", "jar-hand"), tagline: "細緻呵護眼周",
    desc: "專為細嫩眼周肌膚設計，以植物幹細胞萃取物及維他命 E 滋潤眼周，令雙眼看起來更明亮有神。",
    ingredients: ["plant-stem-cell", "tocopherol", "squalane"], howTo: ["取米粒大小，以無名指點於眼周。", "由內眼角向外輕輕按壓至吸收。"], skin: ["dry", "normal", "combo", "oily", "sensitive"] },
  { slug: "alpine-bloom-mask", name: "阿爾卑斯花卉面膜", en: "Alpine Bloom Mask", collection: "brightening", price: 680, size: "75ml",
    images: img("facial2", "flowers", "facial"), tagline: "每週兩次 · 煥膚儀式",
    desc: "柔滑乳霜面膜，結合高山花卉精華與積雪草，為肌膚帶來即時柔軟與光澤感。",
    ingredients: ["edelweiss", "centella", "glycerin"], howTo: ["潔面後均勻塗上厚厚一層。", "停留 10–15 分鐘。", "以溫水洗淨，接續日常護膚。"], skin: ["normal", "combo", "dry"] },
  { slug: "balancing-botanical-toner", name: "植萃平衡爽膚水", en: "Balancing Botanical Toner", collection: "hydration", price: 520, size: "150ml",
    images: img("spa", "ferns", "bottles"), tagline: "第一道保濕",
    desc: "清爽無酒精配方，潔面後即時補水，幫助肌膚更好地吸收後續精華。",
    ingredients: ["centella", "glycerin", "niacinamide"], howTo: ["潔面後倒適量於掌心或化妝棉。", "輕拍全臉至吸收。"], skin: ["normal", "combo", "oily", "sensitive"] },
  { slug: "night-recovery-oil", name: "夜間修護精華油", en: "Night Recovery Oil", collection: "anti-ageing", price: 1180, size: "30ml",
    images: img("dropper-hand", "matterhorn", "serum"), tagline: "夜間滋養 · 醒來柔滑",
    desc: "輕盈精華油融合角鯊烷與植物精華，於夜間滋養肌膚，翌日醒來觸感柔滑。",
    ingredients: ["squalane", "tocopherol", "plant-stem-cell"], howTo: ["晚間護膚最後一步使用。", "取 2–3 滴於掌心溫熱，按壓全臉。"], skin: ["dry", "normal"] },
];

export const ingredients: Record<string, { name: string; en: string; desc: string }> = {
  "plant-stem-cell": { name: "瑞士植物幹細胞萃取物", en: "Swiss Plant Stem Cell Extract", desc: "透過植物細胞培養技術，從植物的分生組織培養出細胞並取其萃取物。這類萃取物富含抗氧化物及植物活性成分，常用於護膚品以幫助保護肌膚、維持柔潤。註：植物幹細胞萃取物不會變成人體細胞。" },
  "hyaluronic-acid": { name: "透明質酸", en: "Hyaluronic Acid", desc: "肌膚中天然存在的保濕分子，能吸附水分，令肌膚看起來更飽滿水潤。" },
  squalane: { name: "角鯊烷", en: "Squalane", desc: "穩定、輕盈的潤膚油，與肌膚皮脂相似，幫助減少水分流失而不覺油膩。" },
  glycerin: { name: "甘油", en: "Glycerin", desc: "經典而溫和的保濕劑，幫助肌膚表層保持水分，適合大部分膚質。" },
  niacinamide: { name: "菸鹼醯胺（維他命 B3）", en: "Niacinamide", desc: "多功能成分，有助改善膚色不均及暗啞，並支援肌膚屏障。" },
  edelweiss: { name: "雪絨花萃取", en: "Edelweiss Extract", desc: "生長於阿爾卑斯高山的花卉，在嚴峻環境下生存，其萃取物常被用作抗氧化護膚成分。" },
  tocopherol: { name: "維他命 E", en: "Tocopherol", desc: "脂溶性抗氧化成分，幫助保護肌膚免受環境壓力影響，同時具滋潤作用。" },
  centella: { name: "積雪草", en: "Centella Asiatica", desc: "傳統植物成分，以舒緩、鎮靜肌膚見稱，適合容易泛紅的肌膚。" },
};

export type Article = { slug: string; title: string; en: string; date: string; image: string; excerpt: string; sections: { h: string; p: string[] }[] };
export const articles: Article[] = [
  { slug: "skincare-layering-order", title: "護膚品使用次序：由薄至厚的黃金法則", en: "How to Layer Your Skincare", date: "2026-09-12", image: "/images/serum.jpg",
    excerpt: "精華、乳液、面霜、防曬應該怎樣排？掌握一個簡單原則，令每一步都發揮作用。",
    sections: [
      { h: "基本原則：由水至油、由薄至厚", p: ["質地越清爽、越水狀的產品越先用，越濃稠、含油量越高的產品越後用。這樣可以避免厚重產品形成的薄膜阻隔後續產品。"] },
      { h: "早上建議步驟", p: ["1. 潔面　2. 爽膚水　3. 精華　4. 眼霜　5. 面霜　6. 防曬（必須）。", "早上護膚重點是保濕和防護，防曬永遠是最後一步。"] },
      { h: "晚上建議步驟", p: ["1. 卸妝／雙重潔面　2. 爽膚水　3. 精華　4. 眼霜　5. 面霜　6. 精華油（如需要）。", "晚上是修護時間，可以使用較滋潤的質地。"] },
      { h: "小貼士", p: ["每層之間等待約 30–60 秒讓產品吸收；新產品建議先在耳後或手腕內側測試；如使用處方護膚品，請遵從醫生或藥劑師指示。"] },
    ] },
  { slug: "sunscreen-in-hong-kong", title: "香港全年都要防曬？你需要知道的 5 件事", en: "Sunscreen in Hong Kong", date: "2026-08-28", image: "/images/matterhorn.jpg",
    excerpt: "陰天、冬天、留在室內——紫外線其實從未休息。",
    sections: [
      { h: "1. 陰天也有紫外線", p: ["雲層並不能完全阻隔紫外線，香港天文台會每日公佈紫外線指數，出門前不妨查看。"] },
      { h: "2. UVA 與 UVB", p: ["UVB 主要導致曬傷，UVA 則穿透力較強，與肌膚老化有關。選擇標示「廣譜」防護的防曬產品可同時應對兩者。"] },
      { h: "3. 份量要足夠", p: ["一般建議面部約使用兩隻手指長度的份量，太少會令防護效果大打折扣。"] },
      { h: "4. 記得補塗", p: ["戶外活動、流汗或游泳後，應約每兩小時補塗一次。"] },
      { h: "5. 防曬是最有效的抗老步驟", p: ["無論使用多好的精華，日間防曬都是維持肌膚年輕狀態最基本、最重要的一步。"] },
    ] },
  { slug: "what-are-plant-stem-cells", title: "認識植物幹細胞護膚：科學與迷思", en: "Plant Stem Cells, Explained", date: "2026-08-10", image: "/images/lab.jpg",
    excerpt: "植物幹細胞是甚麼？為何護膚界越來越常見？我們以簡單方式拆解。",
    sections: [
      { h: "植物也有「幹細胞」", p: ["植物的根尖、芽尖等分生組織擁有不斷分裂、再生的能力，這些細胞被稱為植物幹細胞。"] },
      { h: "植物細胞培養技術", p: ["瑞士在植物細胞培養技術方面發展成熟。科學家在實驗室中培養植物細胞，無需大量採摘稀有植物，便能取得穩定、可持續的萃取物。"] },
      { h: "對肌膚有甚麼作用？", p: ["植物幹細胞萃取物富含抗氧化物、氨基酸等植物活性成分，可幫助保護肌膚免受環境壓力影響，維持柔潤與活力。"] },
      { h: "常見迷思", p: ["迷思：塗上植物幹細胞會變成人體幹細胞。事實：不會。植物細胞與人體細胞截然不同，其價值在於萃取物中的活性成分，而非細胞本身。", "如有特別皮膚問題，請諮詢皮膚科醫生。"] },
    ] },
  { slug: "hydration-for-hk-seasons", title: "潮濕夏天 vs 乾燥冬天：香港四季保濕策略", en: "Hydration Through Hong Kong Seasons", date: "2026-07-22", image: "/images/lake.jpg",
    excerpt: "香港天氣變化大，保濕方法也應跟着季節調整。",
    sections: [
      { h: "夏天：輕盈補水", p: ["潮濕炎熱時，選擇啫喱或乳液質地；冷氣房會令肌膚缺水，即使出油亦需要保濕。"] },
      { h: "秋冬：加強鎖水", p: ["北風季節空氣乾燥，可加入含角鯊烷或神經醯胺的面霜，晚間加一層精華油。"] },
      { h: "全年都適用", p: ["避免用過熱的水洗臉；洗臉後 3 分鐘內塗上保濕產品；多喝水、保持充足睡眠。"] },
    ] },
];

export const faqs = [
  { q: "NÜAGE 是甚麼品牌？", a: "NÜAGE 是香港護膚品牌，以科學創新重塑肌膚年輕活力，結合瑞士頂尖技術與天然植物精華，主打瑞士植物幹細胞護膚。" },
  { q: "網站上的產品及價錢是正式資料嗎？", a: "暫時不是。本網站現時展示的產品名稱、價錢及評價均為示範內容，正式產品資料請留意我們的 Instagram @nuage_hk。" },
  { q: "如何購買產品？", a: "購買渠道【待補充】。現時歡迎透過 Instagram 私訊查詢。" },
  { q: "產品適合敏感肌嗎？", a: "每款產品適合的膚質不同。敏感肌建議先於耳後或手腕內側進行測試；如有皮膚疾病請先諮詢醫生。" },
  { q: "甚麼是植物幹細胞萃取物？", a: "是透過植物細胞培養技術取得的植物萃取物，富含抗氧化等植物活性成分。詳情可參閱「瑞士科技」頁面。" },
  { q: "有沒有實體店？", a: "門市地址及營業時間【待補充】。" },
];

export const reviews = [
  { name: "Cherry L.", text: "質地很輕盈，吸收很快，用了幾星期覺得皮膚摸起來更滑。" },
  { name: "Mandy W.", text: "香味很淡很舒服，包裝也很有質感。" },
  { name: "Ivy C.", text: "冷氣房整天也不覺得乾，會繼續用。" },
];
