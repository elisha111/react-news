import { formatTimeAgo } from "../../helpers/formatTimeAgo";
import styles from "./styles.module.css";

const NewsItem = (props) => {
  const { item } = props;

  return (
    <li className={styles.root}>
      <div
        className={styles.image}
        style={{ backgroundImage: `url(${item.image})`}}
      ></div>

      <div className={styles.info}>
        <h3 className={styles.title}>{item.title}</h3>
        <p className={styles.extra}>
          {formatTimeAgo(item.publish_date)} by {item.author}
        </p>
      </div>
    </li>
  );
};

export default NewsItem;
