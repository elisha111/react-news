import styles from "./styles.module.css";

import { getNews } from "@/api/apiNews";

import type { NewsApiResponse, ParamsType } from "@/interfaces";
import { useFetch } from "@/helpers/hooks/useFetch";
import { useFilters } from "@/helpers/hooks/useFilers";
import { useDebounce } from "@/helpers/hooks/useDebounce";

import { PAGE_SIZE, TOTAL_PAGES } from "@/constants/constants";

import NewsFilters from "@/components/NewsFilters";
import PaginationWrapper from "@/components/PaginationWrapper";
import NewsList from "@/components/NewsList";

const NewsByFilters = () => {
  const { filters, changeFilter } = useFilters({
    page_number: 1,
    page_size: PAGE_SIZE,
    category: null,
    keywords: "",
  });

  const debouncedKeywords = useDebounce(filters.keywords, 1500);

  const { data, isLoading } = useFetch<NewsApiResponse, ParamsType>(getNews, {
    ...filters,
    keywords: debouncedKeywords,
  });

  const handleNextPage = () => {
    if (filters.page_number < TOTAL_PAGES) {
      changeFilter("page_number", filters.page_number + 1);
    }
  };

  const handlePrevPage = () => {
    if (filters.page_number > 1) {
      changeFilter("page_number", filters.page_number - 1);
    }
  };

  const handlePageClick = (pageNumber: number) => {
    changeFilter("page_number", pageNumber);
  };

  return (
    <section className={styles.root}>
      <NewsFilters filters={filters} changeFilter={changeFilter} />

      <PaginationWrapper
        top
        bottom
        handleNextPage={handleNextPage}
        handlePrevPage={handlePrevPage}
        handlePageClick={handlePageClick}
        totalPages={TOTAL_PAGES}
        currentPage={filters.page_number}
      >
        <NewsList isLoading={isLoading} news={data?.news} />
      </PaginationWrapper>
    </section>
  );
};

export default NewsByFilters;
