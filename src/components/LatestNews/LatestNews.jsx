import BannersList from "@/components/BannersList";
import styles from "./styles.module.css";

const LatestNews = (props) => {
  const { banners, isLoading } = props;

  return (
    <section className={styles.root}>
      <BannersList banners={banners} isLoading={isLoading} />
    </section>
  );
};

export default LatestNews;
