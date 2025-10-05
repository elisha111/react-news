import styles from "./styles.module.css";

import { formatTimeAgo } from "@/helpers/formatTimeAgo";

import Image from "@/components/Image";

import type { INews } from "@/interfaces";

type NewsBannerPropsType = {
  item: INews;
};

const NewsBanner = (props: NewsBannerPropsType) => {
  const { item } = props;

  return (
    <div className={styles.root}>
      <Image image={item?.image} />
      <h3 className={styles.title}>{item.title}</h3>
      <p className={styles.extra}>
        {formatTimeAgo(item.published)} by {item.author}
      </p>
    </div>
  );
};

export default NewsBanner;
