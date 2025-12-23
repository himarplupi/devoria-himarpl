import { motion as Motion } from "motion/react";

/**
 * ScrollSection - A reusable scroll-triggered animation wrapper
 *
 * @param {object} props
 * @param {React.ReactNode} props.children - Content to animate
 * @param {string} props.className - Additional CSS classes
 * @param {"fadeUp" | "fadeLeft" | "fadeRight" | "scale" | "fade"} props.animation - Animation type
 * @param {number} props.delay - Animation delay in seconds
 * @param {number} props.duration - Animation duration in seconds
 * @param {boolean} props.once - Whether to animate only once (default: true)
 */
export default function ScrollSection({
  children,
  className = "",
  animation = "fadeUp",
  delay = 0,
  duration = 0.8,
  once = true,
}) {
  const animations = {
    fadeUp: {
      hidden: { opacity: 0, y: 80 },
      visible: { opacity: 1, y: 0 },
    },
    fadeLeft: {
      hidden: { opacity: 0, x: -100 },
      visible: { opacity: 1, x: 0 },
    },
    fadeRight: {
      hidden: { opacity: 0, x: 100 },
      visible: { opacity: 1, x: 0 },
    },
    scale: {
      hidden: { opacity: 0, scale: 0.8 },
      visible: { opacity: 1, scale: 1 },
    },
    fade: {
      hidden: { opacity: 0 },
      visible: { opacity: 1 },
    },
  };

  return (
    <Motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: "0px 0px -100px 0px" }}
      transition={{
        duration,
        delay,
        ease: [0.25, 0.1, 0.25, 1],
      }}
      variants={animations[animation]}
      className={className}
      style={{ willChange: "transform, opacity" }}
    >
      {children}
    </Motion.div>
  );
}

/**
 * ScrollSectionStagger - Container that staggers children animations
 */
export function ScrollSectionStagger({
  children,
  className = "",
  staggerDelay = 0.15,
  once = true,
}) {
  return (
    <Motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: "0px 0px -50px 0px" }}
      transition={{ staggerChildren: staggerDelay }}
      className={className}
    >
      {children}
    </Motion.div>
  );
}

/**
 * ScrollSectionChild - Child element for use inside ScrollSectionStagger
 */
export function ScrollSectionChild({
  children,
  className = "",
  animation = "fadeUp",
  duration = 0.6,
}) {
  const animations = {
    fadeUp: {
      hidden: { opacity: 0, y: 60 },
      visible: { opacity: 1, y: 0 },
    },
    fadeLeft: {
      hidden: { opacity: 0, x: -60 },
      visible: { opacity: 1, x: 0 },
    },
    fadeRight: {
      hidden: { opacity: 0, x: 60 },
      visible: { opacity: 1, x: 0 },
    },
    scale: {
      hidden: { opacity: 0, scale: 0.9 },
      visible: { opacity: 1, scale: 1 },
    },
  };

  return (
    <Motion.div
      variants={animations[animation]}
      transition={{ duration, ease: [0.25, 0.1, 0.25, 1] }}
      className={className}
    >
      {children}
    </Motion.div>
  );
}
