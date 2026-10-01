import { Icon } from "zmp-ui";

type TourismTripsFiltersProps = {
  activeDay: number;
  days: string[];
  onDayChange: (index: number) => void;
};

function TourismTripsFilters({ activeDay, days, onDayChange }: TourismTripsFiltersProps) {
  return (
    <section className="tourism-trips-filters">
      <div className="tourism-day-label">
        <Icon icon="zi-calendar" />
        <span>Số ngày</span>
      </div>

      <div className="tourism-day-filters">
        {days.map((day, index) => (
          <button
            className={activeDay === index ? "active" : ""}
            key={day}
            onClick={() => onDayChange(index)}
            type="button"
          >
            {day}
          </button>
        ))}
      </div>
    </section>
  );
}

export default TourismTripsFilters;
