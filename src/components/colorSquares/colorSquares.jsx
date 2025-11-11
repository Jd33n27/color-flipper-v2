import React from "react";
import styles from "./colorSquares.module.css";

const ColorSquares = ({ colors }) => {
  return (
    <div className={styles["color-squares-container"]}>
      {colors.map((colorObject) => (
        <div
          key={colorObject.id}
          className={`${styles["color-square"]}`}
          style={{ backgroundColor: colorObject.color }}
        ></div>
      ))}
    </div>
  );
};

export default ColorSquares;
