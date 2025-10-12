import { NewsCard, type INews } from "@/entities/news";
import styles from "./styles.module.css";

import withSkeleton from "@/shared/hocs/withSkeleton";

type NewsListPropsType = {
  news?: INews[];
  type?: "banner" | "item";
  direction?: "row" | "column";
};

const NewsList = (props: NewsListPropsType) => {
  const { news = [], type = "item" } = props;

  return (
    <ul className={`${type === "item" ? styles.items : styles.banners}`}>
      {news?.map((item) => (
        <NewsCard type={type} key={`${item.id}`} item={item} />
      ))}
    </ul>
  );
};

const NewsItemWithSkeleton = withSkeleton<NewsListPropsType>(NewsList, 10);

export default NewsItemWithSkeleton;
