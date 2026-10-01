import { Icon, useNavigate } from "zmp-ui";

import { feedbackTabs } from "@/datas/feedback";

type FeedbackHeaderProps = {
  activeTab: number;
  onTabChange: (tabIndex: number) => void;
};

function FeedbackHeader({ activeTab, onTabChange }: FeedbackHeaderProps) {
  const navigate = useNavigate();

  return (
    <header className="feedback-header">
      <div className="feedback-header__title">
        <button aria-label="Quay lại" onClick={() => navigate("/")}>
          <Icon icon="zi-chevron-left" />
        </button>
        <h1>Phản ánh kiến nghị</h1>
      </div>

      <nav className="feedback-tabs" aria-label="Phản ánh kiến nghị">
        {feedbackTabs.map((tab, index) => (
          <button
            className={index === activeTab ? "active" : ""}
            key={tab}
            onClick={() => onTabChange(index)}
          >
            {tab}
          </button>
        ))}
      </nav>
    </header>
  );
}

export default FeedbackHeader;
