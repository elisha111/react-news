import styles from "./styles.module.css";

import { useDebounce } from "@/shared/hooks/useDebounce";

import { useAppSelector } from "@/app/appStore";
import { useGetNewsQuery } from "@/entities/news/api/newsApi";
import { NewsFilters } from "@/widgets/news";

import { useGetCategoriesQuery } from "@/entities/category/api/categoryApi";
import NewsListWithPagination from "../NewsListWithPagination";

const NewsByFilters = () => {
  const filters = useAppSelector((state) => state.news.filters);
  const news = useAppSelector((state) => state.news.news);

  const debouncedKeywords = useDebounce(filters.keywords, 1500);

  const { data } = useGetCategoriesQuery(null);

  const { isLoading } = useGetNewsQuery({
    ...filters,
    keywords: debouncedKeywords,
  });

  return (
    <section className={styles.root}>
      <NewsFilters filters={filters} categories={data?.categories || []} />

      <NewsListWithPagination
        isLoading={isLoading}
        filters={filters}
        news={news}
      />
    </section>
  );
};

export default NewsByFilters;
