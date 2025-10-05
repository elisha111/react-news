import styles from "./styles.module.css";

import Categories from "@/components/Categories";
import Slider from "@/components/Slider";
import Search from "@/components/Search";

import { getCategories } from "@/api/apiNews";

import { useFetch } from "@/helpers/hooks/useFetch";

import type { CategoriesApiResponse, IFilters } from "@/interfaces";

type NewsFiltersPropsType = {
  filters: IFilters;
  changeFilter: (key: string, value: string | number | null) => void;
};

const NewsFilters = (props: NewsFiltersPropsType) => {
  const { filters, changeFilter } = props;

  const { data: dataCategories } = useFetch<CategoriesApiResponse, null>(
    getCategories
  );

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
