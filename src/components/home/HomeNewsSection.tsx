import { Icon, useNavigate } from "zmp-ui";

type HomeNewsItem = {
  id: number;
  title: string;
  date: string;
  image: string;
  href: string;
};

type HomeNewsSectionProps = {
  items: HomeNewsItem[];
  morePath: string;
};

function HomeNewsSection({ items, morePath }: HomeNewsSectionProps) {
  const navigate = useNavigate();

  return (
    <section className="home-news-section" aria-label="Tin tức và sự kiện mới nhất">
      <div className="home-news-section__header">
        <div>
          <span />
          <h2>Tin tức & Sự kiện mới nhất</h2>
        </div>
        <button onClick={() => navigate(morePath)} type="button">
          Xem thêm
        </button>
      </div>

      <div className="home-news-list">
        {items.map((item) => (
          <a className="home-news-card" href={item.href} key={item.id}>
            <img src={item.image} alt={item.title} />
            <div>
              <h3>{item.title}</h3>
              <time>{item.date}</time>
              <strong>
                Đọc thêm
                <Icon icon="zi-arrow-up-right" />
              </strong>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}

export default HomeNewsSection;
