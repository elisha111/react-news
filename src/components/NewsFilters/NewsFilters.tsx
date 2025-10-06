import styles from "./styles.module.css";

import Categories from "@/components/Categories";
import Slider from "@/components/Slider";
import Search from "@/components/Search";

import type { IFilters } from "@/interfaces";
import { useTheme } from "@/context/ThemeContext";
import { useGetCategoriesQuery } from "@/store/services/newsApi";
import { useAppDispatch } from "@/store";
import { setFilters } from "@/store/slices/newsSlice";

type NewsFiltersPropsType = {
  filters: IFilters;
};

const NewsFilters = (props: NewsFiltersPropsType) => {
  const { filters } = props;

  const { data } = useGetCategoriesQuery(null);

  const { isDark } = useTheme();
  const dispatch = useAppDispatch();

  return (
    <div className={styles.root}>
      {data && (
        <Slider isDark={isDark}>
          <Categories
            categories={data.categories}
            selectedCategory={filters.category}
            setSelectedCategory={(category) =>
              dispatch(setFilters({ key: "category", value: category }))
            }
          />
        </Slider>
      )}

      <Search
        keywords={filters.keywords}
        setKeywords={(keywords) =>
          dispatch(setFilters({ key: "keywords", value: keywords }))
        }
      />
    </div>
  );
};

export default NewsFilters;
