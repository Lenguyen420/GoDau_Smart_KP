import { Icon, useNavigate } from "zmp-ui";

import OcopStars from "@/components/localProducts/OcopStars";
import type { LocalProduct } from "@/datas/localProducts";

type LocalProductCardProps = {
  product: LocalProduct;
};

function LocalProductCard({ product }: LocalProductCardProps) {
  const navigate = useNavigate();

  return (
    <button
      className="local-product-card"
      onClick={() => navigate(`/local-product-detail?id=${product.id}`)}
      type="button"
    >
      <div className="local-product-card__image">
        <img src={product.image} alt={product.name} />
        <span className="local-product-card__rank">OCOP {product.ocopRank}★</span>
        <span className="local-product-card__price">{product.price}</span>
      </div>

      <div className="local-product-card__body">
        <h2>{product.name}</h2>
        <p>
          <Icon icon="zi-location" />
          <span>{product.address}</span>
        </p>
        <div>
          <OcopStars value={product.rating} />
          <span>{product.category.toUpperCase()}</span>
        </div>
      </div>
    </button>
  );
}

export default LocalProductCard;
