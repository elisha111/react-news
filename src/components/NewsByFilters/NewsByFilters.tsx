import styles from "./styles.module.css";

import { useDebounce } from "@/helpers/hooks/useDebounce";

import { TOTAL_PAGES } from "@/constants/constants";

import NewsFilters from "@/components/NewsFilters";
import PaginationWrapper from "@/components/PaginationWrapper";
import NewsList from "@/components/NewsList";
import { useGetNewsQuery } from "@/store/services/newsApi";
import { useAppDispatch, useAppSelector } from "@/store";
import { setFilters } from "@/store/slices/newsSlice";

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

      <PaginationWrapper
        top
        bottom
        handleNextPage={handleNextPage}
        handlePrevPage={handlePrevPage}
        handlePageClick={handlePageClick}
        totalPages={TOTAL_PAGES}
        currentPage={filters.page_number}
      >
        <NewsList isLoading={isLoading} news={news} />
      </PaginationWrapper>
    </section>
  );
};

export default NewsByFilters;
