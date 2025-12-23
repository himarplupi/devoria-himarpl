import { useState, useRef } from "react";
import { motion as Motion, AnimatePresence } from "motion/react";
import confetti from "canvas-confetti";

/**
 * MysteryCard - Wrapper that hides content until clicked
 * Reveals with confetti explosion (using canvas-confetti/MagicUI style) and smooth animation
 */
export default function MysteryCard({
  children,
  department = "???",
  className = "",
}) {
  const [isRevealed, setIsRevealed] = useState(false);
  const cardRef = useRef(null);

  const handleReveal = () => {
    if (!isRevealed) {
      setIsRevealed(true);
      triggerConfetti();
    }
  };

  // MagicUI-style confetti explosion
  const triggerConfetti = () => {
    // Get card position for confetti origin
    const rect = cardRef.current?.getBoundingClientRect();
    const x = rect ? (rect.left + rect.width / 2) / window.innerWidth : 0.5;
    const y = rect ? (rect.top + rect.height / 2) / window.innerHeight : 0.5;

    // Fireworks style burst
    const defaults = {
      origin: { x, y },
      zIndex: 9999,
    };

    // First burst - main explosion
    confetti({
      ...defaults,
      particleCount: 100,
      spread: 70,
      startVelocity: 30,
      decay: 0.95,
      scalar: 1.2,
    });

    // Second burst - smaller particles
    setTimeout(() => {
      confetti({
        ...defaults,
        particleCount: 50,
        spread: 100,
        startVelocity: 45,
        decay: 0.9,
        scalar: 0.8,
      });
    }, 100);

    // Third burst - stars effect
    setTimeout(() => {
      confetti({
        ...defaults,
        particleCount: 30,
        spread: 120,
        startVelocity: 25,
        decay: 0.92,
        scalar: 1,
        shapes: ["star"],
        colors: ["#FFD700", "#FFA500", "#FF6347"],
      });
    }, 200);
  };

  return (
    <div ref={cardRef} className={`relative ${className}`}>
      {/* Card content with reveal animation */}
      <Motion.div
        animate={isRevealed ? "revealed" : "mystery"}
        initial="mystery"
        variants={{
          mystery: { scale: 1 },
          revealed: { scale: 1 },
        }}
        onClick={handleReveal}
        className="cursor-pointer"
      >
        {/* Mystery overlay */}
        <AnimatePresence>
          {!isRevealed && <MysteryOverlay department={department} />}
        </AnimatePresence>

        {/* Actual card content - always rendered but hidden initially */}
        <Motion.div
          animate={
            isRevealed ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }
          }
          transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
        >
          {children}
        </Motion.div>
      </Motion.div>
    </div>
  );
}

/**
 * Mystery overlay with dark theme and question mark
 */
function MysteryOverlay({ department }) {
  return (
    <Motion.div
      initial={{ opacity: 1 }}
      exit={{
        opacity: 0,
        scale: 1.2,
        filter: "blur(10px)",
      }}
      transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
      className="absolute inset-0 z-10 flex flex-col items-center justify-center"
    >
      {/* Dark card replica */}
      <div className="flex flex-col gap-6 lg:max-h-[676px] lg:w-[400px] w-full">
        <div className="flex flex-col w-full h-fit bg-[#0a0a0a] rounded-3xl items-center px-8 py-6 gap-6 relative overflow-hidden">
          {/* Shimmer effect */}
          <Motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent"
            animate={{ x: ["-100%", "100%"] }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          />

          {/* HIMARPL logo (dimmed) */}
          <img
            src="/himarpl/Group 247.svg"
            alt="himarpl"
            className="w-[196px] opacity-30"
          />

          {/* Mystery image placeholder */}
          <div className="w-full flex flex-col justify-center items-center rounded-2xl bg-gradient-to-br from-[#1a1a1a] to-[#0d0d0d] border border-white/10">
            <div className="h-96 w-full flex flex-col items-center justify-center rounded-t-2xl relative">
              {/* Question mark */}
              <Motion.div
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{ duration: 2, repeat: Infinity }}
                className="text-9xl font-black text-white/20 select-none"
              >
                ?
              </Motion.div>

              {/* Pulse rings */}
              <Motion.div
                className="absolute inset-0 rounded-t-2xl"
                animate={{
                  boxShadow: [
                    "inset 0 0 60px 20px rgba(255,255,255,0.02)",
                    "inset 0 0 80px 30px rgba(255,255,255,0.05)",
                    "inset 0 0 60px 20px rgba(255,255,255,0.02)",
                  ],
                }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </div>

            {/* Department label */}
            <div className="bg-gradient-to-r from-[#1a1a1a] to-[#2a2a2a] flex flex-col justify-center items-center w-full min-h-[60px] py-2 px-3 rounded-b-2xl border-t border-white/10">
              <h4
                className={`text-white/60 font-extrabold text-center leading-tight ${
                  department?.length > 20
                    ? "text-lg"
                    : department?.length > 15
                    ? "text-xl"
                    : department?.length > 10
                    ? "text-2xl"
                    : "text-4xl"
                }`}
              >
                {department}
              </h4>
            </div>
          </div>

          {/* Click hint */}
          <Motion.div
            animate={{ opacity: [0.4, 1, 0.4] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="flex flex-row gap-5 justify-center items-center w-full"
          >
            <span className="text-white/50 text-xl font-medium tracking-wider">
              KLIK UNTUK REVEAL
            </span>
          </Motion.div>
        </div>
      </div>
    </Motion.div>
  );
}
