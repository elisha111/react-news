import styles from "./styles.module.css";

const Pagination = (props) => {
  const {
    totalPages,
    handleNextPage,
    handlePrevPage,
    handlePageClick,
    currentPage,
  } = props;

  return (
    <div className={styles.root}>
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
