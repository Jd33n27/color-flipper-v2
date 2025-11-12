import React, { useEffect, useRef } from "react";
import styles from "./particle.module.css";

const Particle = ({ zIndex }) => {
  // This will be the "handle" to the container div.
  const containerRef = useRef(null);

  // useEffect to run the particle creation code
  // The empty array [] means "run this code only ONCE, when the component first mounts."
  useEffect(() => {
    // Getting the actual DOM node from the ref
    const particlesContainer = containerRef.current;

    for (let i = 0; i < 30; i++) {
      const particle = document.createElement("div");
      particle.className = styles.particle;

      // Set random positions and animation time
      particle.style.left = Math.random() * 100 + "%";
      particle.style.animationDelay = Math.random() * 20 + "s";
      particle.style.animationDuration = Math.random() * 10 + 10 + "s";

      // Append the new particle to our ref'd container
      particlesContainer.appendChild(particle);
    }
  }, []); // Empty array means "run once on mount"

  return (
    // Attach the ref to the JSX element
    <div
      style={{ zIndex }}
      className={styles["particles-container"]}
      ref={containerRef}
    >
      {" "}
    </div>
  );
};

export default Particle;
