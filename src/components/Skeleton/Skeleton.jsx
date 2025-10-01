import styles from "./styles.module.css";

const Skeleton = (props) => {
  const { count = 1, type = "banner" } = props;

  return (
    <>
      {count > 1 ? (
        <ul className={styles.root}>
          {[...Array(count)].map((_, index) => (
            <li
              className={type === "banner" ? styles.banner : styles.item}
              key={index}
            />
          ))}
        </ul>
      ) : (
        <div className={type === "banner" ? styles.banner : styles.item} />
      )}
    </>
  );
};

export default Skeleton;
