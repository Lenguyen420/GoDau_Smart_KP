import { Icon, useNavigate } from "zmp-ui";

type TourismTripsHeaderProps = {
  availableCount: number;
  searchPlaceholder: string;
  title: string;
};

function TourismTripsHeader({ availableCount, searchPlaceholder, title }: TourismTripsHeaderProps) {
  const navigate = useNavigate();

  return (
    <header className="tourism-trips-header">
      <div className="tourism-trips-header__top">
        <button aria-label="Quay lại" onClick={() => navigate("/tourism")} type="button">
          <Icon icon="zi-chevron-left" />
        </button>
        <div>
          <h1>{title}</h1>
          <p>{availableCount} lịch trình có sẵn</p>
        </div>
      </div>

      <label className="tourism-trips-search">
        <Icon icon="zi-search" />
        <input placeholder={searchPlaceholder} />
      </label>
    </header>
  );
}

export default TourismTripsHeader;
