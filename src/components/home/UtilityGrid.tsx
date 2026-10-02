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
    return Boolean((window as any).ZaloJavaScriptInterface && /zalo/i.test(window.navigator.userAgent));
  };

  const openHref = (href: string) => {
    if (!isZaloMiniApp()) {
      window.location.assign(href);
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
          window.location.assign(href);
        },
      });
    } catch (error) {
      console.error("Không thể mở liên kết trong Mini App", error);
      window.location.assign(href);
    }
  };

  return (
    <section className="smartkp-utilities" aria-label="Tiện ích số">
      {items.map((item) => {
        const content = (
          <>
            <img src={item.icon} alt="" />
            <span>{item.title}</span>
          </>
        );

        if (item.href) {
          return (
            <a
              className="smartkp-utility"
              href={item.href}
              key={item.title}
              onClick={(event) => {
                if (!isZaloMiniApp()) {
                  return;
                }

                event.preventDefault();
                openHref(item.href);
              }}
            >
              {content}
            </a>
          );
        }

        return (
          <button
            className="smartkp-utility"
            key={item.title}
            onClick={() => {
              if (item.path) {
                navigate(item.path);
              }
            }}
            type="button"
          >
            {content}
          </button>
        );
      })}
    </section>
  );
}

export default UtilityGrid;
