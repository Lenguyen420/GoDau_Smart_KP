import { Page } from "zmp-ui";

import HotlineGroup from "@/components/hotline/HotlineGroup";
import HotlineHeader from "@/components/hotline/HotlineHeader";
import { hotlineGroups } from "@/datas/hotline";

function HotlinePage() {
  return (
    <Page className="hotline-page">
      <HotlineHeader />
      <main className="hotline-content">
        {hotlineGroups.map((group) => (
          <HotlineGroup group={group} key={group.id} />
        ))}
      </main>
    </Page>
  );
}

export default HotlinePage;
