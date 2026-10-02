import { useMemo, useState } from "react";
import { Page } from "zmp-ui";

import LocalProductCard from "@/components/localProducts/LocalProductCard";
import LocalProductCategories from "@/components/localProducts/LocalProductCategories";
import LocalProductsHeader from "@/components/localProducts/LocalProductsHeader";
import OcopProgramCard from "@/components/localProducts/OcopProgramCard";
import { localProductCategories, localProducts } from "@/datas/localProducts";

function LocalProductsPage() {
  const [activeCategory, setActiveCategory] = useState(localProductCategories[0].label);
  const visibleProducts = useMemo(() => {
    if (activeCategory === "Tất cả") {
      return localProducts;
    }

    return localProducts.filter((product) => product.category === activeCategory);
  }, [activeCategory]);

  return (
    <Page className="local-products-page">
      <LocalProductsHeader />

      <main className="local-products-content">
        <OcopProgramCard />
        <LocalProductCategories
          activeCategory={activeCategory}
          categories={localProductCategories}
          onChange={setActiveCategory}
        />
        <section className="local-product-list" aria-label="Sản phẩm địa phương">
          {visibleProducts.map((product) => (
            <LocalProductCard key={product.id} product={product} />
          ))}
        </section>
      </main>
    </Page>
  );
}

export default LocalProductsPage;
