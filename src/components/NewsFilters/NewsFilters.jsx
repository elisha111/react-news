import styles from "./styles.module.css";

import Categories from "@/components/Categories";
import Search from "@/components/Search";
import Slider from "@/components/Slider";

import { getCategories } from "@/api/apiNews";

import { useFetch } from "@/helpers/hooks/useFetch";

const NewsFilters = (props) => {
  const { filters, changeFilter } = props;

  const { data: dataCategories } = useFetch(getCategories);

  return (
    <div className={styles.root}>
      {dataCategories && (
        <Slider>
          <Categories
            categories={dataCategories.categories}
            selectedCategory={filters.category}
            setSelectedCategory={(category) =>
              changeFilter("category", category)
            }
          />
        </Slider>
      )}

      <Search
        keywords={filters.keywords}
        setKeywords={(keywords) => changeFilter("keywords", keywords)}
      />
    </div>
  );
};

export default NewsFilters;
