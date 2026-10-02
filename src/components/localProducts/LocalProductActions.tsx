import { Icon } from "zmp-ui";

type LocalProductActionsProps = {
  phone: string;
};

function LocalProductActions({ phone }: LocalProductActionsProps) {
  return (
    <footer className="local-product-actions">
      <a href={`tel:${phone}`}>
        <Icon icon="zi-call" />
        <span>Liên hệ</span>
      </a>
    </footer>
  );
}

export default LocalProductActions;
