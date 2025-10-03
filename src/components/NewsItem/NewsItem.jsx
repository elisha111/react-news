import { formatTimeAgo } from "@/helpers/formatTimeAgo";
import styles from "./styles.module.css";
import withSkeleton from "@/helpers/hocs/withSkeleton";

const NewsItem = (props) => {
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

const NewsItemWithSkeleton = withSkeleton(NewsItem, "item", 10);

export default NewsItemWithSkeleton;
