import { Page, useSearchParams } from "zmp-ui";

import TourismPlaceActions from "@/components/tourismPlace/TourismPlaceActions";
import TourismPlaceGallery from "@/components/tourismPlace/TourismPlaceGallery";
import TourismPlaceHero from "@/components/tourismPlace/TourismPlaceHero";
import TourismPlaceIntro from "@/components/tourismPlace/TourismPlaceIntro";
import { tourismPlaces } from "@/datas/tourism";

function TourismPlacePage() {
  const [searchParams] = useSearchParams();
  const placeId = Number(searchParams.get("id"));
  const place = tourismPlaces.find((item) => item.id === placeId) ?? tourismPlaces[0];

  return (
    <Page className="tourism-place-page">
      <TourismPlaceHero
        address={place.address}
        category={place.category}
        image={place.image}
        name={place.name}
      />

      <main className="tourism-place-content">
        <TourismPlaceIntro description={place.description} title={place.introTitle} />
        <TourismPlaceGallery images={place.gallery} title={place.name} />
      </main>

      <TourismPlaceActions address={place.address} phone={place.phone} />
    </Page>
  );
}

export default TourismPlacePage;
