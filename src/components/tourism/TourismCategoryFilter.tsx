import { Icon } from "zmp-ui";

type TourismCategory = {
  label: string;
  icon: string;
};

type TourismCategoryFilterProps = {
  activeIndex: number;
  categories: TourismCategory[];
  onChange: (index: number) => void;
};

function TourismCategoryFilter({ activeIndex, categories, onChange }: TourismCategoryFilterProps) {
  return (
    <section className="tourism-category-filter">
      {categories.map((category, index) => (
        <button
          className={activeIndex === index ? "active" : ""}
          key={category.label}
          onClick={() => onChange(index)}
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

export default TourismCategoryFilter;
