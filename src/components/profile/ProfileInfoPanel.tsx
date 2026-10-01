import { Icon } from "zmp-ui";

import { profileInfoCards } from "@/datas/profile";

function ProfileInfoPanel() {
  return (
    <section className="profile-info-panel">
      {profileInfoCards.map((item) => (
        <article className={`profile-info-card ${item.tone}`} key={item.label}>
          <Icon icon={item.icon as any} />
          <span>{item.label}</span>
          <strong>{item.value}</strong>
        </article>
      ))}
    </section>
  );
}

export default ProfileInfoPanel;
