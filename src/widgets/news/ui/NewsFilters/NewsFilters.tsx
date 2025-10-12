import styles from "./styles.module.css";

import Categories from "@/features/categories/ui/Categories";
import Slider from "@/features/slider/ui/Slider";
import Search from "@/features/search/ui/Search";

import type { IFilters } from "@/shared/interfaces";
import { useTheme } from "@/app/providers/ThemeProvider";

import { setFilters } from "@/entities/news/model/newsSlice";
import { useAppDispatch } from "@/app/appStore";
import type { CategoriesType } from "@/entities/category";

type NewsFiltersPropsType = {
  filters: IFilters;
  categories: CategoriesType[];
};

const NewsFilters = (props: NewsFiltersPropsType) => {
  const { filters, categories } = props;

  const { isDark } = useTheme();
  const dispatch = useAppDispatch();

  return (
    <div className={styles.root}>
      {categories && (
        <Slider isDark={isDark}>
          <Categories
            categories={categories}
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
