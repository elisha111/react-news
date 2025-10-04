import { forwardRef } from "react";
import styles from "./styles.module.css";

const Categories = forwardRef((props, ref) => {
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
});

Categories.displayName = "Categories";

export default Categories;
