import React from "react";
import styles from "./colorSquares.module.css";

const ColorSquares = ({ id, color }) => {
  const colors = [
    { id: id, color: color },
    { id: 2, color: "#ff8976" },
  ];
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
