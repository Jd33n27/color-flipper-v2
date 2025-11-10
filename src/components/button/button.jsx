import React from "react";
import styles from "./button.module.css"

const Button = ({buttonText="flip color", btnClass}) => {
  return <div className={styles["btn-container"]}>
    <button className={`${styles.btn} ${btnClass}`}>
      {buttonText}
    </button>
  </div>;
};

export default Button;
