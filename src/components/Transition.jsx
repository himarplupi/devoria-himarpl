import { motion as Motion } from "motion/react";
import { AnimatePresence } from "motion/react";

export default function Transition() {
  return (
    <>
      <Motion.div
        key="transition1"
        className="fixed top-0 bottom-0 right-full w-screen h-screen z-[100] bg-[#0B409C]"
        initial={{ x: "100%", width: "100%" }}
        animate={{ x: "0%", width: "0%" }}
        exit={{ x: "0%", width: "100%" }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
      />

      <Motion.div
        key="transition2"
        className="fixed top-0 bottom-0 right-full w-screen h-screen z-[99] bg-[#10316B]"
        initial={{ x: "100%", width: "100%" }}
        animate={{ x: "0%", width: "0%" }}
        transition={{ delay: 0.2, duration: 0.8, ease: "easeInOut" }}
      />

      <Motion.div
        key="transition3"
        className="fixed top-0 bottom-0 right-full w-screen h-screen z-[98] bg-[#FFE867]"
        initial={{ x: "100%", width: "100%" }}
        animate={{ x: "0%", width: "0%" }}
        transition={{ delay: 0.4, duration: 0.8, ease: "easeInOut" }}
      />
    </>
  );
}
