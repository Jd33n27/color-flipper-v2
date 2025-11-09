import React from "react";
import styles from "./display.module.css";

const Display = () => {
  return <section className={styles["display-container"]}>
    <div className={`${styles["color-display"]}`}>
        <p className={styles["color-name"]}>#667EEA</p>
        <p className={styles["color-value"]}>RGB(102, 126, 234)</p>
    </div>
  </section>;
};

export default Display;
