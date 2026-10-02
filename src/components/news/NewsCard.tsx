import { openWebview } from "zmp-sdk";
import { Icon } from "zmp-ui";

type NewsItem = {
  title: string;
  date: string;
  image: string;
  href: string;
};

type NewsCardProps = {
  item: NewsItem;
  highlight?: boolean;
};

function NewsCard({ item, highlight }: NewsCardProps) {
  const handleOpenNews = () => {
    const isMiniApp = Boolean(window.ZaloJavaScriptInterface && /zalo/i.test(window.navigator.userAgent));

    if (!isMiniApp) {
      return;
    }

    openWebview({
      url: item.href,
      config: {
        style: "normal",
      },
      fail: (error) => {
        console.error("Không thể mở tin tức trong webview", error);
        window.location.assign(item.href);
      },
    });
  };

  return (
    <a
      className="news-card"
      href={item.href}
      onClick={(event) => {
        if (!window.ZaloJavaScriptInterface || !/zalo/i.test(window.navigator.userAgent)) {
          return;
        }

        event.preventDefault();
        handleOpenNews();
      }}
    >
      <img src={item.image} alt={item.title} />
      <div>
        <h2 className={highlight ? "highlight" : ""}>{item.title}</h2>
        <p>
          <Icon icon="zi-calendar" />
          <span>{item.date}</span>
        </p>
      </div>
    </a>
  );
}

export default NewsCard;
