import { motion as Motion } from "motion/react";
import { useAnimation } from "motion/react";
import { useEffect, useRef } from "react";

const AnimatedImage = ({
  src,
  alt,
  className = "",
  animationType = "fadeIn", // fadeIn, slideUp, scale, slideLeft, slideRight
  duration = 0.6,
  delay = 0,
  threshold = 0.2,
}) => {
  const controls = useAnimation();
  const ref = useRef();

  const animations = {
    fadeIn: {
      hidden: { opacity: 0 },
      visible: { opacity: 1 },
    },
    slideUp: {
      hidden: { opacity: 0, y: 50 },
      visible: { opacity: 1, y: 0 },
    },
    scale: {
      hidden: { opacity: 0, scale: 0.8 },
      visible: { opacity: 1, scale: 1 },
    },
    slideLeft: {
      hidden: { opacity: 0, x: 50 },
      visible: { opacity: 1, x: 0 },
    },
    slideRight: {
      hidden: { opacity: 0, x: -50 },
      visible: { opacity: 1, x: 0 },
    },
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            controls.start("visible");
          }
        });
      },
      {
        threshold: threshold,
        rootMargin: "0px 0px -100px 0px",
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [controls, threshold]);
  return (
    <Motion.div ref={ref} initial="hidden" animate={controls} viewport={{ once: true }} transition={{ duration, delay }} variants={animations[animationType]}>
      <img src={src} alt={alt} className={className} loading="lazy" />
    </Motion.div>
  );
};

export default AnimatedImage;
