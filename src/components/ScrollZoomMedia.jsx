import { useRef } from "react";
import { motion as Motion, useScroll, useTransform } from "motion/react";

/**
 * ScrollZoomMedia - Image/Video that scales up as user scrolls
 * Creates a cinematic zoom effect
 *
 * @param {object} props
 * @param {string} props.src - Image source URL
 * @param {string} props.videoSrc - Optional video source URL (takes priority over src)
 * @param {string} props.alt - Alt text
 * @param {number} props.startScale - Initial scale (default: 0.6)
 * @param {number} props.endScale - Final scale (default: 1)
 * @param {string} props.className - Additional CSS classes
 */
export default function ScrollZoomMedia({
  src,
  videoSrc,
  alt = "",
  startScale = 0.6,
  endScale = 1,
  className = "",
}) {
  const containerRef = useRef(null);
  const mediaRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "center center"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [startScale, endScale]);
  const opacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);
  const borderRadius = useTransform(scrollYProgress, [0, 1], ["48px", "24px"]);

  // Handle video visibility for autoplay
  const handleInView = (inView) => {
    if (mediaRef.current && videoSrc) {
      if (inView) {
        mediaRef.current.play();
      } else {
        mediaRef.current.pause();
      }
    }
  };

  return (
    <Motion.div
      ref={containerRef}
      className={`relative overflow-hidden ${className}`}
      style={{ opacity }}
      onViewportEnter={() => handleInView(true)}
      onViewportLeave={() => handleInView(false)}
    >
      <Motion.div
        style={{ scale, borderRadius }}
        className="w-full h-full overflow-hidden will-change-transform"
      >
        {videoSrc ? (
          <video
            ref={mediaRef}
            src={videoSrc}
            className="w-full h-full object-cover"
            loop
            muted
            playsInline
            preload="auto"
          />
        ) : (
          <img
            src={src}
            alt={alt}
            className="w-full h-full object-cover"
            loading="eager"
          />
        )}
      </Motion.div>
    </Motion.div>
  );
}

/**
 * ScrollRevealCard - Card that reveals with dramatic animation
 */
export function ScrollRevealCard({
  children,
  className = "",
  direction = "up",
}) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center center"],
  });

  const directionMap = {
    up: { y: [100, 0], x: [0, 0] },
    down: { y: [-100, 0], x: [0, 0] },
    left: { y: [0, 0], x: [100, 0] },
    right: { y: [0, 0], x: [-100, 0] },
  };

  const y = useTransform(scrollYProgress, [0, 1], directionMap[direction].y);
  const x = useTransform(scrollYProgress, [0, 1], directionMap[direction].x);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);
  const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);

  return (
    <Motion.div
      ref={ref}
      style={{ y, x, opacity, scale }}
      className={`will-change-transform ${className}`}
    >
      {children}
    </Motion.div>
  );
}

/**
 * ParallaxText - Text with parallax scrolling effect
 */
export function ParallaxText({ children, className = "", speed = 0.5 }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100 * speed, -100 * speed]);

  return (
    <Motion.div ref={ref} style={{ y }} className={className}>
      {children}
    </Motion.div>
  );
}
