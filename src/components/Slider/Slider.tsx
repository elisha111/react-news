import React, { useRef, type ForwardedRef } from "react";
import styles from "./styles.module.css";

type SliderPropsType = {
  children: React.ReactElement<{ ref?: ForwardedRef<HTMLElement> }>;
  step?: number;
};

const Slider = (props: SliderPropsType) => {
  const { children, step = 150 } = props;

  const sliderRef = useRef<HTMLElement | null>(null);

  const scrollLeft = () => {
    if (!sliderRef.current) return;

    sliderRef.current.scrollLeft -= step;
  };
  const scrollRight = () => {
    if (!sliderRef.current) return;
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
