import { useState } from "react";
import { Page } from "zmp-ui";

import EmptyFeedback from "@/components/feedback/EmptyFeedback";
import FeedbackForm from "@/components/feedback/FeedbackForm";
import FeedbackHeader from "@/components/feedback/FeedbackHeader";

function FeedbackPage() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <Page className="feedback-page">
      <FeedbackHeader activeTab={activeTab} onTabChange={setActiveTab} />
      <main className="feedback-content">
        {activeTab === 0 ? <FeedbackForm /> : <EmptyFeedback />}
      </main>
    </Page>
  );
}

export default FeedbackPage;
