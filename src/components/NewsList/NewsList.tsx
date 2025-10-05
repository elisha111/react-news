import styles from "./styles.module.css";

import NewsItem from "@/components/NewsItem";

import withSkeleton from "@/helpers/hocs/withSkeleton";
import type { INews } from "@/interfaces";

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
