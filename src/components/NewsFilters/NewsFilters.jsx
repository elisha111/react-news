import styles from "./styles.module.css";

import Categories from "@/components/Categories";
import Search from "@/components/Search/Search";

import { getCategories } from "@/api/apiNews";

import { useFetch } from "@/helpers/hooks/useFetch";

const NewsFilters = (props) => {
  const { filters, changeFilter } = props;

  const { data: dataCategories } = useFetch(getCategories);

  return (
    <div className={styles.root}>
      {dataCategories && (
        <Categories
          categories={dataCategories.categories}
          selectedCategory={filters.category}
          setSelectedCategory={(category) => changeFilter("category", category)}
        />
      )}

      <Search
        keywords={filters.keywords}
        setKeywords={(keywords) => changeFilter("keywords", keywords)}
      />
    </div>
  );
};

export default NewsFilters;
