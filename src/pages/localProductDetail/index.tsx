import { Page, useSearchParams } from "zmp-ui";

import LocalProductActions from "@/components/localProducts/LocalProductActions";
import LocalProductAddress from "@/components/localProducts/LocalProductAddress";
import LocalProductGallery from "@/components/localProducts/LocalProductGallery";
import LocalProductHero from "@/components/localProducts/LocalProductHero";
import LocalProductInfo from "@/components/localProducts/LocalProductInfo";
import { localProducts } from "@/datas/localProducts";

function LocalProductDetailPage() {
  const [searchParams] = useSearchParams();
  const productId = Number(searchParams.get("id"));
  const product = localProducts.find((item) => item.id === productId) ?? localProducts[0];

  return (
    <Page className="local-product-detail-page">
      <LocalProductHero product={product} />

      <main className="local-product-detail-content">
        <LocalProductInfo product={product} />
        <LocalProductGallery images={product.gallery} title={product.name} />
        <LocalProductAddress address={product.address} />
      </main>

      <LocalProductActions phone={product.phone} />
    </Page>
  );
}

export default LocalProductDetailPage;
