import type { INews } from "../../model/types";
import styles from "./styles.module.css";

import { formatTimeAgo } from "@/shared/helpers/formatTimeAgo";

type NewsItemPropsType = {
  item: INews;
};

const NewsItem = (props: NewsItemPropsType) => {
  const { item } = props;

  return (
    <li className={styles.root}>
      <div
        className={styles.image}
        style={{ backgroundImage: `url(${item.image})` }}
      />

      <div className={styles.info}>
        <h3 className={styles.title}>{item.title}</h3>
        <p className={styles.extra}>
          {formatTimeAgo(item.published)} by {item.author}
        </p>
      </div>
    </li>
  );
};

export default NewsItem;
