import { Icon, useNavigate } from "zmp-ui";

type TourismPlace = {
  id: number;
  name: string;
  address: string;
  category: string;
  time: string;
  image: string;
};

type TourismPlaceCardProps = {
  place: TourismPlace;
};

function TourismPlaceCard({ place }: TourismPlaceCardProps) {
  const navigate = useNavigate();

  return (
    <button
      className="tourism-place-card"
      onClick={() => navigate(`/tourism-place?id=${place.id}`)}
      type="button"
    >
      <img src={place.image} alt={place.name} />
      <div className="tourism-place-card__body">
        <h2>{place.name}</h2>
        <p>
          <Icon icon="zi-location" />
          <span>{place.address}</span>
        </p>
        <div className="tourism-place-card__tags">
          <span>{place.category.toUpperCase()}</span>
          <span>
            <Icon icon="zi-clock-1" />
            {place.time}
          </span>
        </div>
      </div>
    </button>
  );
}

export default TourismPlaceCard;
