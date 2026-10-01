import { openWebview } from "zmp-sdk";
import { useNavigate } from "zmp-ui";

type Utility = {
  title: string;
  icon: string;
  href?: string;
  path?: string;
};

type UtilityGridProps = {
  items: Utility[];
};

function UtilityGrid({ items }: UtilityGridProps) {
  const navigate = useNavigate();

  const isZaloMiniApp = () => {
    return Boolean((window as any).ZaloJavaScriptInterface || (window as any).zaloJSV2);
  };

  const openHref = (href: string) => {
    if (!isZaloMiniApp()) {
      window.open(href, "_blank", "noopener,noreferrer");
      return;
    }

    try {
      void openWebview({
        url: href,
        config: {
          style: "normal",
        },
        fail: (error) => {
          console.error("Không thể mở liên kết trong Mini App", error);
        },
      });
    } catch (error) {
      console.error("Không thể mở liên kết trong Mini App", error);
    }
  };

  return (
    <section className="smartkp-utilities" aria-label="Tiện ích số">
      {items.map((item) => (
        <button
          className="smartkp-utility"
          key={item.title}
          onClick={() => {
            if (item.path) {
              navigate(item.path);
              return;
            }

            if (item.href) {
              openHref(item.href);
            }
          }}
        >
          <img src={item.icon} alt="" />
          <span>{item.title}</span>
        </button>
      ))}
    </section>
  );
}

export default UtilityGrid;
