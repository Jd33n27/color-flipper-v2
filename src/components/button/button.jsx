import React, { useRef, useEffect } from "react";
import styles from "./button.module.css";

const Button = ({ buttonText = "flip color", btnClass, onClick }) => {
  // a ref to get the button element
  const buttonRef = useRef(null);

  useEffect(() => {
    // this is  tp Calculate a random delay (between 2 and 7 seconds)
    const randomDelay = Math.random() * 5 + 2;

    // Set the random delay as a CSS variable on the button
    if (buttonRef.current) {
      buttonRef.current.style.setProperty("--glare-delay", `${randomDelay}s`);
    }
  }, []);

  return (
    <div className={styles["btn-container"]}>
      <button onClick={onClick} className={`${styles.btn} ${btnClass}`}>
        {buttonText}
      </button>
    </div>
  );
};

export default Button;
