import { useState } from "react";
import { Page } from "zmp-ui";

import TourismTripsEmptyState from "@/components/tourismTrips/TourismTripsEmptyState";
import TourismTripsFilters from "@/components/tourismTrips/TourismTripsFilters";
import TourismTripsHeader from "@/components/tourismTrips/TourismTripsHeader";
import { tourismDayFilters, tourismTripSummary } from "@/datas/tourism";

function TourismTripsPage() {
  const [activeDay, setActiveDay] = useState(0);

  return (
    <Page className="tourism-trips-page">
      <TourismTripsHeader
        availableCount={tourismTripSummary.availableCount}
        searchPlaceholder={tourismTripSummary.searchPlaceholder}
        title={tourismTripSummary.title}
      />

      <main className="tourism-trips-content">
        <TourismTripsFilters
          activeDay={activeDay}
          days={tourismDayFilters}
          onDayChange={setActiveDay}
        />

        <TourismTripsEmptyState
          description={tourismTripSummary.emptyDescription}
          onClear={() => setActiveDay(0)}
          title={tourismTripSummary.emptyTitle}
        />
      </main>
    </Page>
  );
}

export default TourismTripsPage;
