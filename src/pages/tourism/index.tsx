import { useMemo, useState } from "react";
import { Page } from "zmp-ui";

import TourismCategoryFilter from "@/components/tourism/TourismCategoryFilter";
import TourismHeader from "@/components/tourism/TourismHeader";
import TourismPlaceCard from "@/components/tourism/TourismPlaceCard";
import TripSuggestion from "@/components/tourism/TripSuggestion";
import { tourismCategories, tourismDayFilters, tourismPlaces } from "@/datas/tourism";

function TourismPage() {
  const [activeCategory, setActiveCategory] = useState(0);
  const [activeDay, setActiveDay] = useState(0);

  const filteredPlaces = useMemo(() => {
    if (activeCategory === 0) {
      return tourismPlaces;
    }

    return tourismPlaces.filter(
      (place) => place.category === tourismCategories[activeCategory].label,
    );
  }, [activeCategory]);

  return (
    <Page className="tourism-page">
      <TourismHeader />
      <main className="tourism-content">
        <TripSuggestion
          activeDay={activeDay}
          days={tourismDayFilters}
          onClear={() => setActiveDay(0)}
          onDayChange={setActiveDay}
        />

        <TourismCategoryFilter
          activeIndex={activeCategory}
          categories={tourismCategories}
          onChange={setActiveCategory}
        />

        <section className="tourism-place-list">
          {filteredPlaces.map((place) => (
            <TourismPlaceCard key={place.id} place={place} />
          ))}
        </section>
      </main>
    </Page>
  );
}

export default TourismPage;
