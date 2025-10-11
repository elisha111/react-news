import styles from "./styles.module.css";

import { useDebounce } from "@/shared/hooks/useDebounce";

import { TOTAL_PAGES } from "@/shared/constants/constants";

import { setFilters } from "@/entities/news/model/newsSlice";
import { useAppDispatch, useAppSelector } from "@/app/appStore";
import { useGetNewsQuery } from "@/entities/news/api/newsApi";
import { NewsList } from "@/widgets/news/ui";
import { Pagination } from "@/features/pagination";

import NewsFilters from "../NewsFilters";


const NewsByFilters = () => {
  const filters = useAppSelector((state) => state.news.filters);
  const news = useAppSelector((state) => state.news.news);

  const dispatch = useAppDispatch();

  const debouncedKeywords = useDebounce(filters.keywords, 1500);

  const { isLoading } = useGetNewsQuery({
    ...filters,
    keywords: debouncedKeywords,
  });

  const handleNextPage = () => {
    if (filters.page_number < TOTAL_PAGES) {
      dispatch(
        setFilters({ key: "page_number", value: filters.page_number + 1 })
      );
    }
  };

  const handlePrevPage = () => {
    if (filters.page_number > 1) {
      dispatch(
        setFilters({ key: "page_number", value: filters.page_number - 1 })
      );
    }
  };

  const handlePageClick = (pageNumber: number) => {
    dispatch(setFilters({ key: "page_number", value: pageNumber }));
  };

  return (
    <section className={styles.root}>
      <NewsFilters filters={filters} />

      <Pagination
        top
        bottom
        handleNextPage={handleNextPage}
        handlePrevPage={handlePrevPage}
        handlePageClick={handlePageClick}
        totalPages={TOTAL_PAGES}
        currentPage={filters.page_number}
      >
        <NewsList isLoading={isLoading} news={news} />
      </Pagination>
    </section>
  );
};

export default NewsByFilters;
