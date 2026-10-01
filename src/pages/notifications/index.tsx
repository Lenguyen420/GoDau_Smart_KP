import { useMemo, useState } from "react";
import { Page } from "zmp-ui";

import CategoryTabs from "@/components/notifications/CategoryTabs";
import NotificationCard from "@/components/notifications/NotificationCard";
import NotificationHeader from "@/components/notifications/NotificationHeader";
import { notificationCategories, notifications } from "@/datas/notifications";

function NotificationsPage() {
  const [activeCategory, setActiveCategory] = useState(0);

  const filteredNotifications = useMemo(() => {
    if (activeCategory === 0) {
      return notifications;
    }

    return notifications.filter(
      (notification) => notification.category === notificationCategories[activeCategory].label,
    );
  }, [activeCategory]);

  return (
    <Page className="notifications-page">
      <NotificationHeader />
      <main className="notifications-content">
        <CategoryTabs
          activeIndex={activeCategory}
          categories={notificationCategories}
          onChange={setActiveCategory}
        />

        <section className="notifications-list">
          {filteredNotifications.map((notification) => (
            <NotificationCard item={notification} key={notification.id} />
          ))}
        </section>
      </main>
    </Page>
  );
}

export default NotificationsPage;
