import { Breadcrumbs, PageHero, Demo } from "@/components/ui";
import { meta } from "@/lib/seo";
import ShopGrid from "./ShopGrid";
export const metadata = meta("全部產品 Shop", "選購 NÜAGE 瑞士植物幹細胞護膚產品：精華、面霜、潔面、眼霜及面膜，按逆齡、保濕、亮澤系列篩選。", "/shop", "/images/bottles.jpg");
export default function Page() {
  return (<>
    <Breadcrumbs items={[["全部產品", "/shop"]]} />
    <PageHero eyebrow="SHOP" title="全部產品" intro="瑞士科技與天然植物精華的結晶。" image="/images/bottles.jpg" alt="白色護膚瓶與綠色植物" />
    <section className="mx-auto max-w-7xl px-6 py-16">
      <h2 className="mb-8 text-2xl font-light">產品系列<Demo t="示範產品及價格" /></h2>
      <ShopGrid />
    </section>
  </>);
}
