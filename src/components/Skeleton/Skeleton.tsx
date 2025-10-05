import styles from "./styles.module.css";

import type { DirectionType, SkeletonType } from "@/interfaces";

type SkeletonPropsType = {
  type?: SkeletonType;
  count?: number;
  direction?: DirectionType;
};

const Skeleton = (props: SkeletonPropsType) => {
  const { count = 1, type = "banner", direction = "column" } = props;

  return (
    <>
      {count > 1 ? (
        <ul
          className={
            direction === "column" ? styles.rootColumn : styles.rootRow
          }
        >
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
