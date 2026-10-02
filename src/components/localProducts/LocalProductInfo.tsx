import { Icon } from "zmp-ui";

import OcopStars from "@/components/localProducts/OcopStars";
import type { LocalProduct } from "@/datas/localProducts";

type LocalProductInfoProps = {
  product: LocalProduct;
};

function LocalProductInfo({ product }: LocalProductInfoProps) {
  return (
    <section className="local-product-info">
      <div className="local-product-sheet-handle" />
      <div className="local-product-rating-card">
        <div>
          <span className="ocop-ribbon ocop-ribbon--green" aria-hidden="true" />
          <h2>Xếp hạng OCOP</h2>
        </div>
        <OcopStars value={product.rating} />
        <p>
          <Icon icon="zi-home" />
          <span>{product.producer}</span>
        </p>
        <strong>{product.price}</strong>
      </div>

      <article className="local-product-intro">
        <h2>{product.introTitle}</h2>
        {product.description.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </article>
    </section>
  );
}

export default LocalProductInfo;
