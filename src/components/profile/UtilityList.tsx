import { Icon } from "zmp-ui";

import { profileUtilities } from "@/datas/profile";

function UtilityList() {
  return (
    <section className="profile-section">
      <h2>Tiện ích</h2>

      <div className="profile-utilities">
        {profileUtilities.map((item) => (
          <button className="profile-utility-row" key={item.title}>
            <span className={`profile-utility-row__icon ${item.tone}`}>
              <Icon icon={item.icon as any} />
            </span>
            <strong>{item.title}</strong>
            <Icon icon="zi-chevron-right" />
          </button>
        ))}
      </div>
    </section>
  );
}

export default UtilityList;
