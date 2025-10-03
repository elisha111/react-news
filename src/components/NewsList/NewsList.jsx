import NewsItem from "@/components/NewsItem";
import styles from "./styles.module.css";

const NewsList = (props) => {
  const { news } = props;

  return (
    <ul className={styles.root}>
      {news.map((item) => (
        <NewsItem key={`${item.id}`} item={item} />
      ))}
    </ul>
  );
};

export default NewsList;
