import { formatTimeAgo } from "@/helpers/formatTimeAgo";
import Image from "@/components/Image";
import styles from "./styles.module.css";

const NewsBanner = (props) => {
  const { item } = props;

  return (
    <div className={styles.root}>
      <Image image={item?.urlToImage} />
      <h3 className={styles.title}>{item.title}</h3>
      <p className={styles.extra}>
        {formatTimeAgo(item.publishedAt)} by {item.author}
      </p>
    </div>
  );
};

export default NewsBanner;
