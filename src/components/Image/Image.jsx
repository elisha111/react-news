import styles from "./styles.module.css";

const Image = (props) => {
  const { image } = props;

  return (
    <div className={styles.root}>
      {image ? <img src={image} alt="" className={styles.image} /> : null}
    </div>
  );
};

export default Image;
