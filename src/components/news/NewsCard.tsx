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
    const isMiniApp = Boolean(window.ZaloJavaScriptInterface || window.zaloJSV2);

    if (!isMiniApp) {
      window.open(item.href, "_blank", "noopener,noreferrer");
      return;
    }

    openWebview({
      url: item.href,
      config: {
        style: "normal",
      },
      fail: (error) => {
        console.error("Không thể mở tin tức trong webview", error);
      },
    });
  };

  return (
    <button className="news-card" onClick={handleOpenNews} type="button">
      <img src={item.image} alt={item.title} />
      <div>
        <h2 className={highlight ? "highlight" : ""}>{item.title}</h2>
        <p>
          <Icon icon="zi-calendar" />
          <span>{item.date}</span>
        </p>
      </div>
    </button>
  );
}

export default NewsCard;
