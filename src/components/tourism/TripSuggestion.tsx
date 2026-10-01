import { Icon, useNavigate } from "zmp-ui";

type TripSuggestionProps = {
  activeDay: number;
  days: string[];
  onDayChange: (index: number) => void;
  onClear: () => void;
};

function TripSuggestion({ activeDay, days, onDayChange, onClear }: TripSuggestionProps) {
  const navigate = useNavigate();

  return (
    <section className="tourism-trip">
      <div className="tourism-section-title">
        <div>
          <Icon icon="zi-filter" />
          <h2>Lịch trình gợi ý</h2>
        </div>
        <button onClick={() => navigate("/tourism-trips")} type="button">
          Xem tất cả →
        </button>
      </div>

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

      <div className="tourism-empty-trip">
        <Icon icon="zi-calendar" />
        <p>Không tìm thấy lịch trình phù hợp</p>
        <button onClick={onClear} type="button">
          Xóa bộ lọc
        </button>
      </div>
    </section>
  );
}

export default TripSuggestion;
