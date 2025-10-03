import NewsItem from "@/components/NewsItem";
import styles from "./styles.module.css";
import withSkeleton from "@/helpers/hocs/withSkeleton";

const NewsList = (props) => {
  const { news = [] } = props;

  return (
    <ul className={styles.root}>
      {news.map((item) => (
        <NewsItem key={`${item.id}`} item={item} />
      ))}
    </ul>
  );
};

const NewsItemWithSkeleton = withSkeleton(NewsList, "item", 10);

export default NewsItemWithSkeleton;
