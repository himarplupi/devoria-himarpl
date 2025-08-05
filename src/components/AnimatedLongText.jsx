import React from "react";
import { motion as Motion } from "motion/react";
import { useAnimation } from "motion/react";
import { useEffect, useRef } from "react";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
    },
  },
};

const wordAnimation = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

const AnimatedLongText = ({ text, className = "" }) => {
  const parts = text.split(/(<b>.*?<\/b>)/g);
  const controls = useAnimation();
  const ref = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            controls.start("show");
          }
        });
      },
      {
        threshold: 0.2,
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
  }, [controls]);

  return (
    <Motion.p ref={ref} variants={container} initial="hidden" animate={controls} className={className}>
      {parts.map((part, index) => {
        if (part.startsWith("<b>")) {
          const content = part.replace(/<\/?b>/g, "");
          const words = content.split(" ");
          return (
            <b key={index}>
              {words.map((word, i) => (
                <Motion.span key={i} variants={wordAnimation} style={{ display: "inline-block" }}>
                  {word}
                  {i !== words.length - 1 && "\u00A0"}
                </Motion.span>
              ))}
            </b>
          );
        }

        const words = part.split(" ");
        return (
          <React.Fragment key={index}>
            {words.map((word, i) => (
              <Motion.span key={i} variants={wordAnimation} style={{ display: "inline-block" }}>
                {word}
                {i !== words.length - 1 && "\u00A0"}
              </Motion.span>
            ))}
          </React.Fragment>
        );
      })}
    </Motion.p>
  );
};

export default AnimatedLongText;
