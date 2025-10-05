import { useTheme } from "@/context/ThemeContext";
import styles from "./styles.module.css";

import type { IPaginationProps } from "@/interfaces";

const Pagination = (props: IPaginationProps) => {
  const {
    totalPages,
    handleNextPage,
    handlePrevPage,
    handlePageClick,
    currentPage,
  } = props;

  const { isDark } = useTheme();

  return (
    <div className={`${styles.root} ${isDark ? styles.dark : styles.light}`}>
      <button
        className={styles.arrow}
        onClick={handlePrevPage}
        disabled={currentPage <= 1}
      >
        {"<"}
      </button>

      <div className={styles.list}>
        {[...Array(totalPages)].map((_, index) => (
          <button
            onClick={() => handlePageClick(index + 1)}
            className={styles.pageNumber}
            disabled={index + 1 === currentPage}
            key={index}
          >
            {index + 1}
          </button>
        ))}
      </div>

      <button
        className={styles.arrow}
        onClick={handleNextPage}
        disabled={currentPage >= totalPages}
      >
        {">"}
      </button>
    </div>
  );
};

export default Pagination;
