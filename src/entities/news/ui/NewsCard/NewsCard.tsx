import Image from "@/shared/ui/Image";
import type { INews } from "../../model/types";
import styles from "./styles.module.css";

import { formatTimeAgo } from "@/shared/helpers/formatTimeAgo";

type NewsItemPropsType = {
  item: INews;
  type: "banner" | "item";
};

const NewsCard = (props: NewsItemPropsType) => {
  const { item, type = "item" } = props;

  return (
    <li className={`${styles.root} ${type === "banner" && styles.banner}`}>
      {type === "banner" ? (
        <Image image={item?.image} />
      ) : (
        <div
          className={styles.image}
          style={{ backgroundImage: `url(${item.image})` }}
        />
      )}

      <div className={styles.info}>
        <h3 className={styles.title}>{item.title}</h3>
        <p className={styles.extra}>
          {formatTimeAgo(item.published)} by {item.author}
        </p>
      </div>
    </li>
  );
};

export default NewsCard;
