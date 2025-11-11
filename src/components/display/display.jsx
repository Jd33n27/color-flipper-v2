import React, { useState, useEffect } from "react";
import styles from "./display.module.css";
import Button from "../button/button";
import Toggle from "../toggle/toggle";
import ColorSquares from "../colorSquares/colorSquares";

const Display = () => {
  const [activeMode, setActiveMode] = useState("simple");
  const [currentColor, setCurrentColor] = useState("#667EEA");
  const [colors, setColors] = useState([]);
  // This sets the background color with every color change
  useEffect(() => {
    document.body.style.background = currentColor;
  }, [currentColor]);

  const handleFlipColor = () => {
    // Logic to flip color based on activeMode
    const newColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
    const newId = new Date().getTime();
    const newColorObject = { id: newId, color: newColor };
    setCurrentColor(newColor);
    // this adds the new color to the colors array for the ColorSquares component
    setColors((currentColors) => [newColorObject, ...currentColors]);
  };

  const handleCopyCode = () => {
    navigator.clipboard.writeText(currentColor);
    alert("Copied to clipboard!");
  };

  const handleRandomPalette = () => {
    console.log("Generating new palette...");
  };

  return (
    <section className={styles["display-container"]}>
      <h1>Color Flipper</h1>
      <p>Discover beautiful colors with a single click</p>
      {/* Color format toggle */}
      <Toggle activeMode={activeMode} onModeChange={setActiveMode} />
      {/* Color text Display area */}
      <div className={`${styles["color-display"]}`}>
        <p className={styles["color-name"]}>{currentColor}</p>
        <p className={styles["color-value"]}>RGB(102, 126, 234)</p>
      </div>
      {/* Control buttons */}
      <div className={styles["btn-group"]}>
        <Button btnClass="btn-secondary" onClick={handleFlipColor} />
        <Button
          buttonText="copy code"
          btnClass="btn-primary"
          onClick={handleCopyCode}
        />
        <Button
          buttonText="random palette"
          btnClass="btn-secondary"
          onClick={handleRandomPalette}
        />
      </div>

      <div className={styles["colors-container"]}>
        <ColorSquares colors={colors} />
      </div>
    </section>
  );
};

export default Display;
