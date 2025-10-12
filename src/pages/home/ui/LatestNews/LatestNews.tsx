import styles from "./styles.module.css";
import { useGetLatestNewsQuery } from "@/entities/news/api/newsApi";
import { NewsList } from "@/widgets/news";

const LatestNews = () => {
  const { data, isLoading } = useGetLatestNewsQuery(null);

  return (
    <section className={styles.root}>
      <NewsList
        type="banner"
        direction="row"
        news={data && data.news}
        isLoading={isLoading}
      />
    </section>
  );
};

export default LatestNews;
