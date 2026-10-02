import { Icon, useNavigate } from "zmp-ui";

import { hotlineSummary } from "@/datas/hotline";

function HotlineHeader() {
  const navigate = useNavigate();

  return (
    <header className="hotline-header">
      <div className="hotline-header__top">
        <button aria-label="Quay lại" onClick={() => navigate("/")} type="button">
          <Icon icon="zi-chevron-left" />
        </button>
        <h1>{hotlineSummary.title}</h1>
      </div>

      <label className="hotline-search">
        <Icon icon="zi-search" />
        <input placeholder={hotlineSummary.searchPlaceholder} type="search" />
      </label>
    </header>
  );
}

export default HotlineHeader;
