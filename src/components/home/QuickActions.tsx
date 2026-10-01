import { Icon } from "zmp-ui";

function QuickActions() {
  return (
    <section className="smartkp-actions">
      <button>
        <Icon icon="zi-pin" />
        <strong>Ghim ứng dụng</strong>
        <span>Truy cập nhanh chóng</span>
      </button>
      <button>
        <Icon icon="zi-share" />
        <strong>Chia sẻ</strong>
        <span>Gửi bạn bè, người thân</span>
      </button>
    </section>
  );
}

export default QuickActions;
