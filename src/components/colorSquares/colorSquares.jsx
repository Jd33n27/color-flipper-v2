import React from "react";
import styles from "./colorSquares.module.css";

const ColorSquares = ({ colors,onColorChange }) => {
  return (
    <div className={styles["color-squares-container"]}>
      {colors.map((colorObject) => (
        <button
          key={colorObject.id}
          onClick={() => onColorChange(colorObject.color)}
          className={`${styles["color-square"]}`}
          style={{ backgroundColor: colorObject.color }}
        ></button>
      ))}
    </div>
  );
};

export default ColorSquares;
