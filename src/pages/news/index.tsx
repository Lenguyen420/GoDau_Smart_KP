import { useMemo, useState } from "react";
import { Page } from "zmp-ui";

import NewsCard from "@/components/news/NewsCard";
import NewsHeader from "@/components/news/NewsHeader";
import { newsCategories, newsItems } from "@/datas/news";

function NewsPage() {
  const [activeCategory, setActiveCategory] = useState(0);

  const visibleNews = useMemo(() => {
    const category = newsCategories[activeCategory];

    return newsItems.filter((item) => item.category === category);
  }, [activeCategory]);

  return (
    <Page className="news-page">
      <NewsHeader activeCategory={activeCategory} onCategoryChange={setActiveCategory} />
      <main className="news-content">
        {(visibleNews.length > 0 ? visibleNews : newsItems).map((item, index) => (
          <NewsCard highlight={index === 1} item={item} key={item.id} />
        ))}
      </main>
    </Page>
  );
}

export default NewsPage;
