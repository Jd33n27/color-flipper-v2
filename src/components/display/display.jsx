import React from "react";
import styles from "./display.module.css";
import Button from "../button/button";
import Toggle from "../toggle/toggle";
import ColorSquares from "../colorSquares/colorSquares";

const Display = () => {
  return (
    <section className={styles["display-container"]}>
      <h1>Color Flipper</h1>
      <p>Discover beautiful colors with a single click</p>
      {/* Color format toggle */}
      <Toggle />
      {/* Color text Display area */}
      <div className={`${styles["color-display"]}`}>
        <p className={styles["color-name"]}>#667EEA</p>
        <p className={styles["color-value"]}>RGB(102, 126, 234)</p>
      </div>
      {/* Control buttons */}
      <div className={styles["btn-group"]}>
        <Button btnClass="btn-secondary" />
        <Button buttonText="copy code" btnClass="btn-primary" />
        <Button buttonText="random palette" btnClass="btn-secondary" />
      </div>

      <div className={styles["colors-container"]}>
        <ColorSquares id={1} color={"#ff9043"} />
      </div>
    </section>
  );
};

export default Display;
