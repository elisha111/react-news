import styles from "./styles.module.css";

import BannersList from "@/components/BannersList";

import { useGetLatestNewsQuery } from "@/store/services/newsApi";

const LatestNews = () => {
  const { data, isLoading } = useGetLatestNewsQuery(null);

  return (
    <section className={styles.root}>
      <BannersList banners={data && data.news} isLoading={isLoading} />
    </section>
  );
};

export default LatestNews;
