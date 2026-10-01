import { Icon, useNavigate } from "zmp-ui";

function TourismHeader() {
  const navigate = useNavigate();

  return (
    <header className="tourism-header">
      <button className="tourism-back" aria-label="Quay lại" onClick={() => navigate("/")}>
        <Icon icon="zi-chevron-left" />
      </button>

      <h1>
        Khám phá
        <span>Vẻ đẹp Phường Gò Dầu</span>
      </h1>

      <label className="tourism-search">
        <Icon icon="zi-search" />
        <input placeholder="Tìm kiếm địa điểm, khách sạn..." />
      </label>
    </header>
  );
}

export default TourismHeader;
