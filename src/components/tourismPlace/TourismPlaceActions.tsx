import { openWebview } from "zmp-sdk";
import { Icon } from "zmp-ui";

type TourismPlaceActionsProps = {
  address: string;
  phone: string;
};

function TourismPlaceActions({ address, phone }: TourismPlaceActionsProps) {
  const openDirection = () => {
    const url = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;
    const isMiniApp = Boolean(window.ZaloJavaScriptInterface || window.zaloJSV2);

    if (!isMiniApp) {
      window.open(url, "_blank", "noopener,noreferrer");
      return;
    }

    openWebview({
      url,
      config: {
        style: "normal",
      },
      fail: (error) => {
        console.error("Không thể mở chỉ đường", error);
      },
    });
  };

  return (
    <footer className="tourism-place-actions">
      <a href={`tel:${phone}`}>
        <Icon icon="zi-call" />
        <span>Liên hệ</span>
      </a>
      <button onClick={openDirection} type="button">
        <Icon icon="zi-send-solid" />
        <span>Chỉ đường</span>
      </button>
    </footer>
  );
}

export default TourismPlaceActions;
