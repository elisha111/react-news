import styles from "./styles.module.css";

import Categories from "@/features/categories/ui/Categories";
import Slider from "@/features/slider/ui/Slider";
import Search from "@/features/search/ui/Search";

import type { IFilters } from "@/shared/interfaces";
import { useTheme } from "@/app/providers/ThemeProvider";

import { setFilters } from "@/entities/news/model/newsSlice";
import { useAppDispatch } from "@/app/appStore";
import { useGetCategoriesQuery } from "@/entities/category/api/categoryApi";

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
