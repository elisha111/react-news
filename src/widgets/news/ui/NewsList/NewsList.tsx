import { NewsItem, type INews } from "@/entities/news";
import styles from "./styles.module.css";

import withSkeleton from "@/shared/hocs/withSkeleton";

type NewsListPropsType = {
  news?: INews[];
};

const NewsList = (props: NewsListPropsType) => {
  const { news = [] } = props;

  return (
    <ul className={styles.root}>
      {news?.map((item) => (
        <NewsItem key={`${item.id}`} item={item} />
      ))}
    </ul>
  );
};

const NewsItemWithSkeleton = withSkeleton<NewsListPropsType>(
  NewsList,
  "item",
  10
);

export default NewsItemWithSkeleton;
