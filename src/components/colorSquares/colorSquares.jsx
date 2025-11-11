import React from "react";
import styles from "./colorSquares.module.css";

const ColorSquares = ({ colors }) => {
  return (
    <div className={styles["color-squares-container"]}>
      {colors.map((colorObject) => (
        <button
          key={colorObject.id}
          className={`${styles["color-square"]}`}
          style={{ backgroundColor: colorObject.color }}
        ></button>
      ))}
    </div>
  );
};

export default ColorSquares;
