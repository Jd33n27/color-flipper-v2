import React, { useState } from "react";
import styles from "./toggle.module.css";

const Toggle = () => {
  const [activeMode, setActiveMode] = useState("simple");

  const buttons = [
    { id: "simple", text: "simple" },
    { id: "rgb", text: "rgb" },
    { id: "hex", text: "hex" },
    { id: "hsl", text: "hsl" },
  ];

  const handleButtonClick = (mode) => {
    setActiveMode(mode);
  };
  
  return (
    <section className={styles["toggle-container"]}>
      <div className={styles["mode-toggle"]}>
        {buttons.map((button) => (
          <button
            key={button.id}
            onClick={() => handleButtonClick(button.id)}
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
