import { Icon } from "zmp-ui";

import { profileActivityCards } from "@/datas/profile";

function ActivityCards() {
  return (
    <section className="profile-section">
      <div className="profile-section__header">
        <h2>Hoạt động của bạn</h2>
        <span>Truy cập nhanh</span>
      </div>

      <div className="profile-activities">
        {profileActivityCards.map((item) => (
          <button className={`profile-activity-card ${item.tone}`} key={item.title}>
            <span className="profile-activity-card__icon">
              <Icon icon={item.icon as any} />
            </span>
            <strong>{item.title}</strong>
            <small>{item.description}</small>
          </button>
        ))}
      </div>
    </section>
  );
}

export default ActivityCards;
