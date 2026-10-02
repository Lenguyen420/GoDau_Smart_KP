import { Icon } from "zmp-ui";

type LocalProductAddressProps = {
  address: string;
};

function LocalProductAddress({ address }: LocalProductAddressProps) {
  return (
    <section className="local-product-address">
      <h2>Địa chỉ sản xuất</h2>
      <div>
        <Icon icon="zi-location" />
        <span>{address}</span>
      </div>
    </section>
  );
}

export default LocalProductAddress;
