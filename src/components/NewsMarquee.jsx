import { useRef, useState, useLayoutEffect } from "react";
import { motion as Motion, useAnimationFrame, useMotionValue, useScroll, useVelocity, useSpring, useTransform, wrap } from "motion/react";

// export default function NewsMarquee() {
//   const speed = 200;
//   const prevScrollY = useRef(0);
//   const direction = useRef(-1);
//   const x = useMotionValue(0);

//   useEffect(() => {
//     const handleScroll = () => {
//       const currentScroll = window.scrollY;
//       if (currentScroll > prevScrollY.current) {
//         direction.current = 1;
//       } else if (currentScroll < prevScrollY.current) {
//         direction.current = -1;
//       }

//       prevScrollY.current = currentScroll;
//     };
//     window.addEventListener("scroll", handleScroll);

//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   useAnimationFrame((t, delta) => {
//     const deltaX = ((speed * delta) / 1000) * direction.current;

//     x.set(x.get() + deltaX);

//     const limit = window.innerWidth;
//     if (x.get() < -limit) x.set(0);
//     if (x.get() > limit) x.set(0);
//   });
//   const items = [0, 1, 2, 3, 4, 5, 6];

//   return (
//     <div className="bg-black w-full py-4">
//       <Motion.div style={{ x }} className="flex items-center w-max">
//         {items.map((i) => (
//           <img key={i} src={i % 2 === 1 ? "/ornaments/NEWS.svg" : "/ornaments/NEWS (1).svg"} alt="news" className="lg:w-[540px] w-[270px] lg:mr-4 mr-2 shrink-0" />
//         ))}
//       </Motion.div>
//     </div>
//   );
// }

export default function NewsMarquee() {
  return (
    <ParallaxImage>
      {[0, 1, 2, 3].map((i) => (
        <img key={i} src={i % 2 === 1 ? "/ornaments/NEWS.svg" : "/ornaments/NEWS (1).svg"} alt="news" className="lg:w-[540px] w-[270px] lg:mr-4 mr-2 shrink-0" />
      ))}
    </ParallaxImage>
  );
}

function ParallaxImage({ children, baseVelocity = 2 }) {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);

  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400,
  });

  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false,
  });

  const directionFactor = useRef(1);
  const containerRef = useRef(null);
  const [repeatCount, setRepeatCount] = useState(4);

  useLayoutEffect(() => {
    const calculateRepeatCount = () => {
      if (containerRef.current) {
        const containerWidth = containerRef.current.offsetWidth;
        const contentWidth = containerRef.current.scrollWidth / repeatCount;
        const newCount = Math.ceil(containerWidth / contentWidth) + 2;
        if (newCount !== repeatCount) setRepeatCount(newCount);
      }
    };

    calculateRepeatCount();
    window.addEventListener("resize", calculateRepeatCount);
    return () => window.removeEventListener("resize", calculateRepeatCount);
  }, [children]);

  useAnimationFrame((t, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 1000);
    const vf = velocityFactor.get();

    if (vf < 0) directionFactor.current = -1;
    else if (vf > 0) directionFactor.current = 1;

    moveBy += directionFactor.current * moveBy * vf;
    baseX.set(baseX.get() + moveBy);
  });

  const wrapWidth = -100 / repeatCount;
  const x = useTransform(baseX, (v) => `${wrap(0, wrapWidth, v)}%`);

  return (
    <div ref={containerRef} className="bg-black w-full py-4 overflow-hidden">
      <Motion.div className="flex items-center w-max" style={{ x }}>
        {Array.from({ length: repeatCount }).map((_, index) => (
          <div key={index} className="flex">
            {children}
          </div>
        ))}
      </Motion.div>
    </div>
  );
}
