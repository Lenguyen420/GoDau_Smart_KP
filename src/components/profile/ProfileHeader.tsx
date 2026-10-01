import { Icon, useNavigate } from "zmp-ui";

import { profileUser } from "@/datas/profile";

function ProfileHeader() {
  const navigate = useNavigate();

  return (
    <header className="profile-header">
      <img className="profile-header__bg" src={profileUser.avatar} alt="" />
      <div className="profile-topbar">
        <button aria-label="Quay lại" onClick={() => navigate("/")}>
          <Icon icon="zi-chevron-left" />
        </button>
        <h1>
          <Icon icon="zi-auto" />
          Hồ sơ công dân
        </h1>
      </div>

      <div className="profile-hero-user">
        <img src={profileUser.avatar} alt={profileUser.name} />
        <div>
          <span>Xin chào</span>
          <strong>{profileUser.name}</strong>
        </div>
      </div>
    </header>
  );
}

export default ProfileHeader;
