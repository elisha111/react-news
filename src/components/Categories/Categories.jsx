import styles from "./styles.module.css";

const Categories = (props) => {
  const { categories, setSelectedCategory, selectedCategory } = props;
  return (
    <div className={styles.root}>
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
};

export default Categories;
