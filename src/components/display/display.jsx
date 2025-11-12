import React, { useState, useEffect, useRef } from "react";
import styles from "./display.module.css";
import Button from "../button/button";
import Toggle from "../toggle/toggle";
import ColorSquares from "../colorSquares/colorSquares";
import Particle from "../particles/particle";

// The list of simple colors
const simpleColors = [
  "red",
  "green",
  "blue",
  "yellow",
  "orange",
  "purple",
  "pink",
  "cyan",
  "magenta",
  "lime",
  "indigo",
  "teal",
  "navy",
  "maroon",
  "olive",
  "aqua",
  "silver",
  "gray",
  "black",
  "white",
];

// The color name-to-hex converter
function nameToHex(name) {
  const colors = {
    red: "#ff0000",
    green: "#008000",
    blue: "#0000ff",
    yellow: "#ffff00",
    orange: "#ffa500",
    purple: "#800080",
    pink: "#ffc0cb",
    cyan: "#00ffff",
    magenta: "#ff00ff",
    lime: "#00ff00",
    indigo: "#4b0082",
    teal: "#008080",
    navy: "#000080",
    maroon: "#800000",
    olive: "#808000",
    aqua: "#00ffff",
    silver: "#c0c0c0",
    gray: "#808080",
    black: "#000000",
    white: "#ffffff",
  };
  return colors[name.toLowerCase()] || "#667eea"; // Returns a default
}

// The hex-to-rgb converter
function hexToRgb(hex) {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16),
      }
    : null; // Returns null if the hex is invalid
}

const Display = () => {
  const [activeMode, setActiveMode] = useState("simple");
  const [currentColor, setCurrentColor] = useState("#667EEA");
  const [colors, setColors] = useState([]);

  const isFirstRender = useRef(true);
  // This sets the background color with every color change
  useEffect(() => {
    document.body.style.background = currentColor;
  }, [currentColor]);

  const handleFlipColor = () => {
    // Logic to flip color based on activeMode
    const newColor = generateRandomColor();
    const newId = new Date().getTime();
    const newColorObject = { id: newId, color: newColor };
    setCurrentColor(newColor);
    // this adds the new color to the colors array for the ColorSquares component
    setColors((currentColors) => [newColorObject, ...currentColors]);
  };

  const getColorValue = () => {
    // If it's already RGB or HSL, just return that.
    if (currentColor.startsWith("rgb") || currentColor.startsWith("hsl")) {
      return currentColor;
    }

    // If it's 'simple' or 'hex', convert
    //  Get the hex code. If it's 'simple' (like 'red'), convert it.
    const hex = currentColor.startsWith("#")
      ? currentColor
      : nameToHex(currentColor);

    // Converting that hex code to an RGB object
    const rgb = hexToRgb(hex);

    //  Return the formatted string (or a fallback)
    return rgb ? `rgb(${rgb.r}, ${rgb.g}, ${rgb.b})` : "Invalid Color";
  };

  const handleCopyCode = () => {
    navigator.clipboard.writeText(currentColor);
    alert("Copied to clipboard!");
  };

  const handleRandomPalette = () => {
    console.log("Generating new palette...");
  };

  const generateRandomColor = () => {
    // this reads the 'activeMode' state!
    switch (activeMode) {
      case "simple":
        const randomIndex = Math.floor(Math.random() * simpleColors.length);
        return simpleColors[randomIndex];

      case "hex":
        //  hex generator
        return (
          "#" +
          Math.floor(Math.random() * 16777215)
            .toString(16)
            .padStart(6, "0")
        );

      case "rgb":
        const r = Math.floor(Math.random() * 256);
        const g = Math.floor(Math.random() * 256);
        const b = Math.floor(Math.random() * 256);
        return `rgb(${r}, ${g}, ${b})`;

      case "hsl":
        const h = Math.floor(Math.random() * 361);
        const s = Math.floor(Math.random() * 101);
        const l = Math.floor(Math.random() * 101);
        return `hsl(${h}, ${s}%, ${l}%)`;

      default:
        return "#667eea";
    }
  };

  //  this sets a new color when the mode is switched
  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false; // Mark it as no longer the first render
      return;
    }
    handleFlipColor();
  }, [activeMode]);

  return (
    <section className={styles["display-container"]}>
      <Particle />
      <h1>Color Flipper</h1>
      <h5>Discover beautiful colors with a single click</h5>
      {/* Color format toggle */}
      <Toggle activeMode={activeMode} onModeChange={setActiveMode} />
      {/* Color text Display area */}
      <div className={`${styles["color-display"]}`}>
        <p className={styles["color-name"]}>{currentColor}</p>
        <p className={styles["color-value"]}>{getColorValue()}</p>
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
        <h4>Recent Colors</h4>
        <ColorSquares colors={colors} onColorChange={setCurrentColor} />
      </div>
    </section>
  );
};

export default Display;
