import React, { useEffect, useRef } from "react";
import styles from "./particle.module.css";

const Particle = () => {
  // 1. Create a ref. This will be our "handle" to the container div.
  const containerRef = useRef(null);

  // 2. Use useEffect to run the particle creation code
  //    The empty array [] means "run this code only ONCE,
  //    when the component first mounts."
  useEffect(() => {
    // 3. Get the actual DOM node from the ref
    const particlesContainer = containerRef.current;

    // 4. This is the exact same logic from your JS class
    for (let i = 0; i < 30; i++) {
      const particle = document.createElement("div");
      particle.className = styles.particle; // Use the CSS module class

      // Set random styles
      particle.style.left = Math.random() * 100 + "%";
      particle.style.animationDelay = Math.random() * 20 + "s";
      particle.style.animationDuration = Math.random() * 10 + 10 + "s";

      // 5. Append the new particle to our ref'd container
      particlesContainer.appendChild(particle);
    }
  }, []); // <-- Empty array means "run once on mount"

  return (
    // 6. Attach the ref to the JSX element
    <div className={styles["particles-container"]} ref={containerRef} />
  );
};

export default Particle;
