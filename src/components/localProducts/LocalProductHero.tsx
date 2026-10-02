import { Icon, useNavigate } from "zmp-ui";

import type { LocalProduct } from "@/datas/localProducts";

type LocalProductHeroProps = {
  product: LocalProduct;
};

function LocalProductHero({ product }: LocalProductHeroProps) {
  const navigate = useNavigate();

  return (
    <header className="local-product-hero">
      <img src={product.image} alt={product.name} />
      <div className="local-product-hero__overlay" />
      <button
        className="local-product-hero__back"
        aria-label="Quay lại"
        onClick={() => navigate("/local-products")}
        type="button"
      >
        <Icon icon="zi-chevron-left" />
      </button>
      <span className="local-product-hero__rank">OCOP {product.ocopRank}★</span>
      <div className="local-product-hero__content">
        <span>{product.category.toUpperCase()}</span>
        <h1>{product.name}</h1>
        <p>
          <Icon icon="zi-location" />
          {product.address}
        </p>
      </div>
    </header>
  );
}

export default LocalProductHero;
