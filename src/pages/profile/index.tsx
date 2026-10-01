import { Page } from "zmp-ui";

import ActivityCards from "@/components/profile/ActivityCards";
import ProfileHeader from "@/components/profile/ProfileHeader";
import ProfileInfoPanel from "@/components/profile/ProfileInfoPanel";
import UtilityList from "@/components/profile/UtilityList";

function ProfilePage() {
  return (
    <Page className="profile-page">
      <ProfileHeader />
      <main className="profile-content">
        <ProfileInfoPanel />
        <ActivityCards />
        <UtilityList />
      </main>
    </Page>
  );
}

export default ProfilePage;
