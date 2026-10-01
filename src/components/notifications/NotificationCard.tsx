import { Icon } from "zmp-ui";

type Notification = {
  title: string;
  category: string;
  date: string;
  image: string;
  description: string;
};

type NotificationCardProps = {
  item: Notification;
};

function NotificationCard({ item }: NotificationCardProps) {
  return (
    <article className="notification-card">
      <div className="notification-card__image">
        <img src={item.image} alt={item.title} />
        <span>{item.category}</span>
      </div>
      <div className="notification-card__body">
        <h2>{item.title}</h2>
        <p className="notification-card__date">
          <Icon icon="zi-location" />
          <span>{item.date}</span>
        </p>
        <p>{item.description}</p>
      </div>
    </article>
  );
}

export default NotificationCard;
