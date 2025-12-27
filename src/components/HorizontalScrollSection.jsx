import { useRef, useState, useLayoutEffect } from "react";
import { motion as Motion, useScroll, useTransform } from "motion/react";
import ScrollSection from "./ScrollSection";

/**
 * HorizontalScrollSection - GSAP-style horizontal scroll with pinning
 * Works with native scroll (Lenis disabled for this page)
 */
export default function HorizontalScrollSection({ children, className = "" }) {
  const containerRef = useRef(null);
  const contentRef = useRef(null);
  const [scrollWidth, setScrollWidth] = useState(0);

  // Measure content width
  useLayoutEffect(() => {
    const measureContent = () => {
      if (contentRef.current) {
        const contentWidth = contentRef.current.scrollWidth;
        const viewportWidth = window.innerWidth;
        setScrollWidth(Math.max(0, contentWidth - viewportWidth + 200));
      }
    };

    measureContent();

    // Observe resize
    const resizeObserver = new ResizeObserver(measureContent);
    if (contentRef.current) {
      resizeObserver.observe(contentRef.current);
    }

    window.addEventListener("resize", measureContent);
    return () => {
      resizeObserver.disconnect();
      window.removeEventListener("resize", measureContent);
    };
  }, [children]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Transform vertical scroll to horizontal movement
  const x = useTransform(scrollYProgress, [0, 1], [0, -scrollWidth]);

  return (
    <div
      ref={containerRef}
      className="relative bg-[url(/bg/Bg-Low.png)] bg-cover bg-fixed"
      style={{
        // Total height = viewport + scroll distance
        height: `${scrollWidth + window.innerHeight}px`,
      }}
    >
      {/* ==================== BEST STAFF - HORIZONTAL SCROLL ==================== */}
      <ScrollSection animation="fadeUp" className="pt-64 text-center w-full">
        <h2 className="lg:text-8xl text-4xl text-center text-[#4B4B4B] font-bold tracking-tight">
          BEST STAFF
        </h2>
        <p className="text-[#6B6B6B] lg:text-xl text-lg mt-4 italic">
          Scroll untuk melihat seluruh staf terbaik →
        </p>
      </ScrollSection>
      {/* Sticky wrapper - stays in viewport */}
      <div className="sticky top-0 left-0 w-full h-screen flex items-center overflow-hidden bg-transparent">
        {/* Horizontal content */}
        <Motion.div
          ref={contentRef}
          style={{ x }}
          className={`flex items-center gap-8 lg:gap-16 pl-[10vw] pr-[30vw] bg-transparent will-change-transform ${className}`}
        >
          {children}
        </Motion.div>
      </div>
    </div>
  );
}

/**
 * HorizontalScrollItem - Individual item in horizontal scroll
 */
export function HorizontalScrollItem({ children, className = "" }) {
  return (
    <Motion.div
      initial={{ opacity: 0.6, scale: 0.92 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: false, amount: 0.3 }}
      transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
      className={`flex-shrink-0 ${className}`}
    >
      {children}
    </Motion.div>
  );
}
