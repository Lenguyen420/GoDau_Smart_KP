import { Icon } from "zmp-ui";

type Category = {
  label: string;
  icon: string;
};

type CategoryTabsProps = {
  activeIndex: number;
  categories: Category[];
  onChange: (index: number) => void;
};

function CategoryTabs({ activeIndex, categories, onChange }: CategoryTabsProps) {
  return (
    <div className="notifications-categories">
      {categories.map((category, index) => (
        <button
          className={index === activeIndex ? "active" : ""}
          key={category.label}
          onClick={() => onChange(index)}
        >
          <span>
            <Icon icon={category.icon as any} />
          </span>
          <strong>{category.label}</strong>
        </button>
      ))}
    </div>
  );
}

export default CategoryTabs;
