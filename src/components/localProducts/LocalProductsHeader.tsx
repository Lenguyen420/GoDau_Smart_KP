import { Icon, useNavigate } from "zmp-ui";

import { localProductSummary } from "@/datas/localProducts";

function LocalProductsHeader() {
  const navigate = useNavigate();

  return (
    <header className="local-products-header">
      <button className="local-products-back" aria-label="Quay lại" onClick={() => navigate("/")} type="button">
        <Icon icon="zi-chevron-left" />
      </button>

      <h1>
        {localProductSummary.title}
        <span>{localProductSummary.subtitle}</span>
      </h1>

      <label className="local-products-search">
        <Icon icon="zi-search" />
        <input placeholder={localProductSummary.searchPlaceholder} type="search" />
      </label>
    </header>
  );
}

export default LocalProductsHeader;
