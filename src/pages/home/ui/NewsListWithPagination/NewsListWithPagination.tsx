import { TOTAL_PAGES } from "@/shared/constants/constants";
import { NewsList } from "@/widgets/news";
import { Pagination } from "@/features/pagination";
import type { IFilters } from "@/shared/interfaces";
import type { INews } from "@/entities/news";
import { usePaginationNews } from "../../utils/hooks/usePaginationNews";

type NewsFiltersPropsType = {
  filters: IFilters;
  news: INews[];
  isLoading: boolean;
};

const NewsListWithPagination = (props: NewsFiltersPropsType) => {
  const { filters, news, isLoading } = props;

  const { handleNextPage, handlePrevPage, handlePageClick } =
    usePaginationNews(filters);

  return (
    <Pagination
      top
      bottom
      handleNextPage={handleNextPage}
      handlePrevPage={handlePrevPage}
      handlePageClick={handlePageClick}
      totalPages={TOTAL_PAGES}
      currentPage={filters.page_number}
    >
      <NewsList
        type="item"
        direction="column"
        isLoading={isLoading}
        news={news}
      />
    </Pagination>
  );
};

export default NewsListWithPagination;
