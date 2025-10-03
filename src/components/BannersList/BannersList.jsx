import NewsBanner from "@/components/NewsBanner";
import styles from "./styles.module.css";
import withSkeleton from "@/helpers/hocs/withSkeleton";

const BannersList = (props) => {
  const { banners } = props;

  return (
    <ul className={styles.root}>
      {banners?.map((banner) => (
        <NewsBanner key={banner.id} item={banner} />
      ))}
    </ul>
  );
};

const BannersListWithSkeleton = withSkeleton(BannersList, "banner", 10, "row");

export default BannersListWithSkeleton;
