import { motion as Motion } from "motion/react";
import { useRef } from "react";
import { useScroll, useTransform } from "motion/react";

/**
 * ScrollNarration - Dramatic storytelling text reveal component
 *
 * @param {object} props
 * @param {string} props.text - The narrative text to display
 * @param {string} props.className - Additional CSS classes
 * @param {"word" | "line" | "fade"} props.revealType - How to reveal the text
 * @param {boolean} props.parallax - Enable subtle parallax effect
 */
export default function ScrollNarration({
  text,
  className = "",
  revealType = "word",
  parallax = false,
}) {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: revealType === "word" ? 0.03 : 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const wordAnimation = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  };

  const lineAnimation = {
    hidden: { opacity: 0, y: 50, filter: "blur(10px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: 0.8,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  };

  if (revealType === "fade") {
    return (
      <Motion.div
        ref={containerRef}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "0px 0px -100px 0px" }}
        transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
        style={parallax ? { y } : {}}
        className={className}
      >
        <p>{text}</p>
      </Motion.div>
    );
  }

  if (revealType === "line") {
    const lines = text.split("\n");
    return (
      <Motion.div
        ref={containerRef}
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "0px 0px -100px 0px" }}
        style={parallax ? { y } : {}}
        className={className}
      >
        {lines.map((line, index) => (
          <Motion.p key={index} variants={lineAnimation} className="mb-2">
            {line}
          </Motion.p>
        ))}
      </Motion.div>
    );
  }

  // Word-by-word reveal (default)
  const words = text.split(" ");
  return (
    <Motion.div
      ref={containerRef}
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "0px 0px -100px 0px" }}
      style={parallax ? { y } : {}}
      className={className}
    >
      <p>
        {words.map((word, index) => (
          <Motion.span
            key={index}
            variants={wordAnimation}
            style={{ display: "inline-block" }}
          >
            {word}
            {index < words.length - 1 && "\u00A0"}
          </Motion.span>
        ))}
      </p>
    </Motion.div>
  );
}

/**
 * ScrollHero - Large dramatic hero text with scale effect
 */
export function ScrollHero({ children, className = "" }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.85]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0.3]);

  return (
    <Motion.div ref={ref} style={{ scale, opacity }} className={className}>
      {children}
    </Motion.div>
  );
}

/**
 * ScrollCounter - Animated number counter
 */
export function ScrollCounter({
  to,
  className = "",
  suffix = "",
  prefix = "",
}) {
  return (
    <Motion.span
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className={className}
    >
      <Motion.span
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        {prefix}
        <Motion.span
          initial={{ opacity: 0 }}
          whileInView={{
            opacity: 1,
          }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {to}
        </Motion.span>
        {suffix}
      </Motion.span>
    </Motion.span>
  );
}
