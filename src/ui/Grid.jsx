import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useId } from "react";

const VerticalLinesPattern = ({
  width = 40, // Width of each vertical line
  height = 40, // Height of each pattern block
  strokeDasharray = "0", // Dash pattern for the lines (can be solid or dashed)
  className,
  ...props
}) => {
  const [hasAnimated, setHasAnimated] = useState(false);
  const id = useId();

  // Animation variants for the vertical line
  const lineVariants = {
    initial: { pathLength: 0, opacity: 0 },
    animate: { pathLength: 1, opacity: 1, transition: { duration: 1, ease: "easeInOut" } }
  };

  // Trigger the animation on page load
  useEffect(() => {
    setHasAnimated(true);
  }, []);

  return (
    <motion.svg
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 h-full w-[90%] left-[50%] transform -translate-x-1/2 fill-gray-100/30 stroke-gray-200/30 ${className}`}
      {...props}
      initial={{ opacity: 0 }}  // Initial state for fading effect
      animate={{ opacity: 1 }}  // Fade in the entire SVG
      transition={{ duration: 1 }} // Add the fade-in effect
    >
      <defs>
        <pattern
          id={id}
          width={width}
          height={height}
          patternUnits="userSpaceOnUse"
        >
          {/* Motion path for vertical lines */}
          <motion.path
            d={`M0 0V${height}`} // Vertical line from 0 to full height
            fill="none"
            strokeDasharray={strokeDasharray}
            stroke="#e0e0e0" // Lighter stroke color (light gray)
            variants={lineVariants}
            initial="initial"
            animate={hasAnimated ? "animate" : "initial"}
            style={{ transition: "all 0.5s ease-in-out" }}
          />
        </pattern>
      </defs>

      {/* Apply the pattern to the full rect */}
      <rect width="100%" height="100%" strokeWidth={0} fill={`url(#${id})`} />
    </motion.svg>
  );
};

export default VerticalLinesPattern;
