import React from "react";
import { motion as Motion, AnimatePresence } from "motion/react";
import { useState, useEffect } from "react";
const duration = 0.6;
const delay = 0;
const threshold = 0.1;
const animations = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0 },
};
const ExpandableCard = ({ Title, children, bgColor, initiallyOpen = true }) => {
  const [open, setOpen] = useState(initiallyOpen);

  useEffect(() => {
    setOpen(initiallyOpen);
  }, [initiallyOpen]);
  return (
    <Motion.div
      initial={false}
      animate={{ height: open ? "auto" : "fit-content" }}
      whileInView={"visible"}
      viewport={{ once: true, margin: "0px 0px -130px 0px", amount: threshold }}
      transition={{ duration, delay }}
      variants={animations}
      style={{ borderColor: `#${bgColor}` }}
      className={`flex flex-col lg:rounded-3xl  rounded-lg lg:w-[1220px] md:w-[600px] w-[343px] gap-4  z-10 lg:border-8 border-4 `}
    >
      <div style={{ backgroundColor: `#${bgColor}` }} className={`flex flex-row items-center justify-between bg-[#${bgColor}] lg:gap-96  rounded-t-[4px] max-w-full lg:px-6 lg:py-4 px-4 py-2`}>
        <h4 className="text-white lg:text-[40px] text-base">{Title}</h4>

        <div className="flex flex-row items-center justify-between lg:gap-4 gap-[4.5px]">
          <div className="lg:w-6 lg:h-6 w-[6.75px] h-[6.75px] bg-[#4b4b4b] rounded-full cursor-pointer" onClick={() => setOpen(!open)}></div>
          <div className="lg:w-6 lg:h-6 w-[6.75px] h-[6.75px] bg-white rounded-full" onClick={() => console.log(open)}></div>
          <div className="lg:w-6 lg:h-6 w-[6.75px] h-[6.75px] bg-white rounded-full"></div>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <Motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }} transition={{ duration: 0.3 }} className="overflow-hidden pb-4">
            {children}
          </Motion.div>
        )}
      </AnimatePresence>
    </Motion.div>
  );
};

export default ExpandableCard;
