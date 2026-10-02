import { Icon } from "zmp-ui";

type LocalProductCategory = {
  label: string;
  icon: string;
};

type LocalProductCategoriesProps = {
  categories: LocalProductCategory[];
  activeCategory: string;
  onChange: (category: string) => void;
};

function LocalProductCategories({ activeCategory, categories, onChange }: LocalProductCategoriesProps) {
  return (
    <section className="local-product-categories" aria-label="Danh mục sản phẩm">
      {categories.map((category) => (
        <button
          className={activeCategory === category.label ? "active" : ""}
          key={category.label}
          onClick={() => onChange(category.label)}
          type="button"
        >
          <span>
            <Icon icon={category.icon} />
          </span>
          <strong>{category.label}</strong>
        </button>
      ))}
    </section>
  );
}

export default LocalProductCategories;
