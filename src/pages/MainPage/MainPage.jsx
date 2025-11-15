import { useEffect, useState } from "react";
import { getNews } from "../../api/apiNews";
import { NewsBanner } from "../../components/NewsBanner";
import styles from "./styles.module.css";
import { NewsList } from "../../components/NewsList";

const MainPage = () => {
  const [news, setNews] = useState([]);

  const getNewsData = async () => {
    try {
      const response = await getNews();
      setNews(response);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  useEffect(() => {
    getNewsData();
  }, []);

  
  return (
    <main className={styles.main}>
      {news?.length > 0 ? <NewsBanner item={news[0]} /> : null}

      <NewsList news={news} />
    </main>
  );
};

export { MainPage };
