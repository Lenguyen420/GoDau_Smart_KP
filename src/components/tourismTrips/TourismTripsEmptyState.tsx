import { Icon } from "zmp-ui";

type TourismTripsEmptyStateProps = {
  description: string;
  onClear: () => void;
  title: string;
};

function TourismTripsEmptyState({ description, onClear, title }: TourismTripsEmptyStateProps) {
  return (
    <section className="tourism-trips-empty">
      <Icon icon="zi-calendar" />
      <h2>{title}</h2>
      <p>{description}</p>
      <button onClick={onClear} type="button">
        Xóa tất cả bộ lọc
      </button>
    </section>
  );
}

export default TourismTripsEmptyState;
