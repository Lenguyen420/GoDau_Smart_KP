import { Icon, useNavigate } from "zmp-ui";

import { newsCategories } from "@/datas/news";

type NewsHeaderProps = {
  activeCategory: number;
  onCategoryChange: (index: number) => void;
};

function NewsHeader({ activeCategory, onCategoryChange }: NewsHeaderProps) {
  const navigate = useNavigate();

  return (
    <header className="news-header">
      <div className="news-header__title">
        <button aria-label="Quay lại" onClick={() => navigate("/")}>
          <Icon icon="zi-chevron-left" />
        </button>
        <h1>Tin tức &amp; Sự kiện</h1>
      </div>

      <nav className="news-categories" aria-label="Danh mục tin tức">
        {newsCategories.map((category, index) => (
          <button
            className={index === activeCategory ? "active" : ""}
            key={category}
            onClick={() => onCategoryChange(index)}
          >
            {category}
          </button>
        ))}
      </nav>
    </header>
  );
}

export default NewsHeader;
