import { Page } from "zmp-ui";

import BottomNav from "@/components/home/BottomNav";
import Hero from "@/components/home/Hero";
import NoticeCard from "@/components/home/NoticeCard";
import QuickActions from "@/components/home/QuickActions";
import SectionTitle from "@/components/home/SectionTitle";
import UtilityGrid from "@/components/home/UtilityGrid";
import { bottomTabs, homeImages, utilities } from "@/datas/home";

function HomePage() {
  return (
    <Page className="smartkp-page">
      <Hero bg1={homeImages.bg1} bg2={homeImages.bg2} logo={homeImages.logo} />

      <main className="smartkp-content">
        <SectionTitle>Tiện ích số</SectionTitle>
        <UtilityGrid items={utilities} />
        <NoticeCard logo={homeImages.logo} />
        <QuickActions />
      </main>

      <BottomNav tabs={bottomTabs} />
    </Page>
  );
}

export default HomePage;
