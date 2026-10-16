import { notFound } from "next/navigation";
import { collections, products } from "@/lib/data";
import { Breadcrumbs, PageHero, ProductCard, Demo } from "@/components/ui";
import { meta } from "@/lib/seo";
type P = { params: Promise<{ slug: string }> };
export const dynamicParams = false;
export function generateStaticParams() { return collections.map((c) => ({ slug: c.slug })); }
export async function generateMetadata({ params }: P) {
  const { slug } = await params;
  const c = collections.find((x) => x.slug === slug)!;
  return meta(`${c.name}系列 ${c.en}`, c.desc, `/collections/${c.slug}`, c.image);
}
export default async function Page({ params }: P) {
  const { slug } = await params;
  const c = collections.find((x) => x.slug === slug);
  if (!c) notFound();
  return (<>
    <Breadcrumbs items={[["護膚系列", "/collections"], [c.name, `/collections/${c.slug}`]]} />
    <PageHero eyebrow={c.en.toUpperCase()} title={`${c.name}系列`} intro={c.desc} image={c.image} alt={`${c.name}系列意境圖`} />
    <section className="mx-auto max-w-7xl px-6 py-16"><h2 className="text-2xl font-light">系列產品<Demo t="示範產品" /></h2>
      <div className="mt-10 grid grid-cols-2 gap-6 lg:grid-cols-4">{products.filter((p) => p.collection === c.slug).map((p) => <ProductCard key={p.slug} p={p} />)}</div></section>
  </>);
}
