import { Icon, useNavigate } from "zmp-ui";

function NotificationHeader() {
  const navigate = useNavigate();

  return (
    <header className="notifications-header">
      <button className="notifications-back" aria-label="Quay lại" onClick={() => navigate("/")}>
        <Icon icon="zi-chevron-left" />
      </button>

      <h1>
        Thông tin nhanh
        <span>UBND Phường Gò Dầu</span>
      </h1>

      <label className="notifications-search">
        <Icon icon="zi-search" />
        <input placeholder="Tìm kiếm thông tin nhanh..." />
      </label>
    </header>
  );
}

export default NotificationHeader;
