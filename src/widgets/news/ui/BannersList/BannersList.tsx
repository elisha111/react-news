import { NewsBanner, type INews } from "@/entities/news";
import styles from "./styles.module.css";

import withSkeleton from "@/shared/hocs/withSkeleton";

type BannersListPropsType = {
  banners?: INews[] | null;
};

const BannersList = (props: BannersListPropsType) => {
  const { banners } = props;

  return (
    <ul className={styles.root}>
      {banners?.map((banner) => (
        <NewsBanner key={banner.id} item={banner} />
      ))}
    </ul>
  );
};

const BannersListWithSkeleton = withSkeleton<BannersListPropsType>(
  BannersList,
  "banner",
  10,
  "row"
);

export default BannersListWithSkeleton;
