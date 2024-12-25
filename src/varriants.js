export const fadeIn = (direction, delay) => {
  return {
    hidden: {
      // Corrected from "hiddin" to "hidden"
      y: direction === "up" ? 40 : direction === "down" ? -40 : 0,
      x: direction === "left" ? 40 : direction === "right" ? -40 : 0,
      opacity: 0, // Add opacity 0 for proper hiding effect
    },
    show: {
      y: 0,
      x: 0,
      opacity: 1.5,
      transition: {
        type: "tween",
        duration: 0.7,
        delay: delay,
        ease: [0.25, 0.25, 0.25, 0.75],
      },
    },
  };
};
