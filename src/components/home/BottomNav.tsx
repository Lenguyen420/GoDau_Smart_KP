import { Icon, useNavigate } from "zmp-ui";

type BottomTab = {
  label: string;
  icon: string;
  path?: string;
  active?: boolean;
};

type BottomNavProps = {
  tabs: BottomTab[];
};

function BottomNav({ tabs }: BottomNavProps) {
  const navigate = useNavigate();

  return (
    <nav className="smartkp-bottom-nav" aria-label="Điều hướng">
      {tabs.map((tab) => (
        <button
          className={tab.active ? "active" : ""}
          key={tab.label}
          onClick={() => {
            if (tab.path) {
              navigate(tab.path);
            }
          }}
        >
          <Icon icon={tab.icon as any} />
          <span>{tab.label}</span>
        </button>
      ))}
    </nav>
  );
}

export default BottomNav;
