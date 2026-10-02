import { Page } from "zmp-ui";
import type { CSSProperties } from "react";

import BottomNav from "@/components/home/BottomNav";
import Hero from "@/components/home/Hero";
import HomeNewsSection from "@/components/home/HomeNewsSection";
import NoticeCard from "@/components/home/NoticeCard";
import QuickActions from "@/components/home/QuickActions";
import SectionTitle from "@/components/home/SectionTitle";
import UtilityGrid from "@/components/home/UtilityGrid";
import { bottomTabs, homeImages, homeNewsItems, utilities } from "@/datas/home";

function HomePage() {
  return (
    <Page
      className="smartkp-page"
      style={{ "--smartkp-home-bg": `url(${homeImages.bg3})` } as CSSProperties}
    >
      <Hero bg1={homeImages.bg1} bg2={homeImages.bg2} logo={homeImages.logo} />

      <main className="smartkp-content">
        <SectionTitle>Tiện ích số</SectionTitle>
        <UtilityGrid items={utilities} />
        <NoticeCard logo={homeImages.logo} />
        <QuickActions />
        <HomeNewsSection items={homeNewsItems} morePath="/news" />
      </main>

      <BottomNav tabs={bottomTabs} />
    </Page>
  );
}

export default HomePage;
