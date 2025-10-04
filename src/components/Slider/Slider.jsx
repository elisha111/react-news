import React, { useRef } from "react";
import styles from "./styles.module.css";

const Slider = (props) => {
  const { children, step = 150 } = props;

  const sliderRef = useRef(null);

  const scrollLeft = () => {
    sliderRef.current.scrollLeft -= step;
  };
  const scrollRight = () => {
    sliderRef.current.scrollLeft += step;
  };

  return (
    <div className={styles.root}>
      <button onClick={scrollLeft} className={styles.arrow}>{`<`}</button>
      {React.cloneElement(children, { ref: sliderRef })}
      <button onClick={scrollRight} className={styles.arrow}>{`>`}</button>
    </div>
  );
};

export default Slider;
