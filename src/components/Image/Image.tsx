import styles from "./styles.module.css";

type ImagePropsType = {
  image: string;
};

const Image = (props: ImagePropsType) => {
  const { image } = props;

  return (
    <div className={styles.root}>
      {image && <img src={image} alt="" className={styles.image} />}
    </div>
  );
};

export default Image;
