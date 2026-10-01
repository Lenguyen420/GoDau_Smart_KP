import { Icon, useNavigate } from "zmp-ui";

type TourismPlaceHeroProps = {
  address: string;
  category: string;
  image: string;
  name: string;
};

function TourismPlaceHero({ address, category, image, name }: TourismPlaceHeroProps) {
  const navigate = useNavigate();

  return (
    <header className="tourism-place-hero">
      <img src={image} alt={name} />
      <div className="tourism-place-hero__overlay" />
      <button className="tourism-place-hero__back" aria-label="Quay lại" onClick={() => navigate("/tourism")} type="button">
        <Icon icon="zi-chevron-left" />
      </button>
      <div className="tourism-place-hero__content">
        <span>{category.toUpperCase()}</span>
        <h1>{name}</h1>
        <p>
          <Icon icon="zi-location" />
          {address}
        </p>
      </div>
    </header>
  );
}

export default TourismPlaceHero;
