import styles from "./styles.module.css";

import { getLatestNews } from "@/api/apiNews";

import { useFetch } from "@/helpers/hooks/useFetch";

import BannersList from "@/components/BannersList";

import type { NewsApiResponse } from "@/interfaces";

const LatestNews = () => {
  const { data, isLoading } = useFetch<NewsApiResponse, null>(getLatestNews);

  return (
    <section className={styles.root}>
      <BannersList banners={data && data.news} isLoading={isLoading} />
    </section>
  );
};

export default LatestNews;
