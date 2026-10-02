import {
  AnimationRoutes,
  App,
  Route,
  SnackbarProvider,
  ZMPRouter,
} from "zmp-ui";

import HomePage from "@/pages/index";
import FeedbackPage from "@/pages/feedback";
import HotlinePage from "@/pages/hotline";
import LocalProductDetailPage from "@/pages/localProductDetail";
import LocalProductsPage from "@/pages/localProducts";
import NewsPage from "@/pages/news";
import NotificationsPage from "@/pages/notifications";
import ProfilePage from "@/pages/profile";
import TourismPage from "@/pages/tourism";
import TourismPlacePage from "@/pages/tourismPlace";
import TourismTripsPage from "@/pages/tourismTrips";

const Layout = () => {
  return (
    <App theme="light">
      <SnackbarProvider>
        <ZMPRouter>
          <AnimationRoutes>
            <Route path="/" element={<HomePage />}></Route>
            <Route path="/feedback" element={<FeedbackPage />}></Route>
            <Route path="/hotline" element={<HotlinePage />}></Route>
            <Route path="/local-products" element={<LocalProductsPage />}></Route>
            <Route path="/local-product-detail" element={<LocalProductDetailPage />}></Route>
            <Route path="/news" element={<NewsPage />}></Route>
            <Route path="/notifications" element={<NotificationsPage />}></Route>
            <Route path="/profile" element={<ProfilePage />}></Route>
            <Route path="/tourism" element={<TourismPage />}></Route>
            <Route path="/tourism-place" element={<TourismPlacePage />}></Route>
            <Route path="/tourism-trips" element={<TourismTripsPage />}></Route>
          </AnimationRoutes>
        </ZMPRouter>
      </SnackbarProvider>
    </App>
  );
};
export default Layout;
