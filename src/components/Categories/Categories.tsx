import styles from "./styles.module.css";

import { forwardRef, type ForwardedRef } from "react";

import type { CategoriesType } from "@/interfaces";

type CategoriesPropsType = {
  categories: CategoriesType[];
  setSelectedCategory: (category: CategoriesType | null) => void;
  selectedCategory: CategoriesType | null;
};

const Categories = forwardRef(
  (props: CategoriesPropsType, ref: ForwardedRef<HTMLDivElement>) => {
    const { categories, setSelectedCategory, selectedCategory } = props;

    return (
      <div ref={ref} className={styles.root}>
        <button
          className={!selectedCategory ? styles.active : styles.item}
          onClick={() => setSelectedCategory(null)}
        >
          all
        </button>
        {categories.map((category) => (
          <button
            className={
              selectedCategory === category ? styles.active : styles.item
            }
            onClick={() => setSelectedCategory(category)}
            key={category}
          >
            {category}
          </button>
        ))}
      </div>
    );
  }
);

Categories.displayName = "Categories";

export default Categories;
