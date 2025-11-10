import React from "react";
import styles from "./toggle.module.css";

const Toggle = ({ activeMode, onModeChange }) => {
  const buttons = [
    { id: "simple", text: "simple" },
    { id: "rgb", text: "rgb" },
    { id: "hex", text: "hex" },
    { id: "hsl", text: "hsl" },
  ];

  return (
    <section className={styles["toggle-container"]}>
      <div className={styles["mode-toggle"]}>
        {buttons.map((button) => (
          <button
            key={button.id}
            onClick={() => onModeChange(button.id)}
            className={`${styles["mode-btn"]} ${
              activeMode === button.id ? styles.active : ""
            }`}
          >
            {button.text}
          </button>
        ))}
      </div>
    </section>
  );
};

export default Toggle;
