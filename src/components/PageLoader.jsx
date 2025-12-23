import { motion as Motion, AnimatePresence } from "motion/react";
import { useState, useEffect } from "react";

/**
 * PageLoader - Full-screen animated loading screen
 * Shows "AWARDING KABINET DEVORIA" with letter-by-letter animation
 * User must click to dismiss after loading completes
 */
export default function PageLoader({ children, assets = [] }) {
  const [isLoading, setIsLoading] = useState(true);
  const [loadProgress, setLoadProgress] = useState(0);
  const [isReady, setIsReady] = useState(false); // Assets loaded, waiting for click

  const title = "AWARDING";
  const subtitle = "KABINET DEVORIA";

  useEffect(() => {
    const loadAssets = async () => {
      if (assets.length === 0) {
        // Simulate minimum loading time for animation
        await new Promise((resolve) => setTimeout(resolve, 2500));
        setLoadProgress(100);
        setIsReady(true); // Ready, but wait for click
        return;
      }

      let loaded = 0;
      const loadPromises = assets.map((src) => {
        return new Promise((resolve) => {
          if (src.endsWith(".mp4") || src.endsWith(".webm")) {
            const video = document.createElement("video");
            video.src = src;
            video.onloadeddata = () => {
              loaded++;
              setLoadProgress(Math.round((loaded / assets.length) * 100));
              resolve();
            };
            video.onerror = resolve;
          } else {
            const img = new Image();
            img.src = src;
            img.onload = () => {
              loaded++;
              setLoadProgress(Math.round((loaded / assets.length) * 100));
              resolve();
            };
            img.onerror = resolve;
          }
        });
      });

      await Promise.all(loadPromises);
      // Small delay to ensure animation is visible
      await new Promise((resolve) => setTimeout(resolve, 500));
      setIsReady(true); // Ready, but wait for click
    };

    loadAssets();
  }, [assets]);

  // Handle click to dismiss
  const handleClick = () => {
    if (isReady) {
      setIsLoading(false);
    }
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 50, rotateX: -90 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        delay: i * 0.08,
        duration: 0.6,
        ease: [0.25, 0.1, 0.25, 1],
      },
    }),
    exit: {
      opacity: 0,
      y: -30,
      transition: { duration: 0.3 },
    },
  };

  const containerVariants = {
    exit: {
      opacity: 0,
      scale: 1.1,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  };

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && (
          <Motion.div
            key="loader"
            variants={containerVariants}
            initial={{ opacity: 1 }}
            exit="exit"
            onClick={handleClick}
            className={`fixed inset-0 z-[9999] bg-black flex flex-col items-center justify-center overflow-hidden ${
              isReady ? "cursor-pointer" : ""
            }`}
          >
            {/* Background gradient animation */}
            <Motion.div
              className="absolute inset-0 opacity-30"
              animate={{
                background: [
                  "radial-gradient(circle at 20% 50%, #1a1a1a 0%, transparent 50%)",
                  "radial-gradient(circle at 80% 50%, #1a1a1a 0%, transparent 50%)",
                  "radial-gradient(circle at 50% 80%, #1a1a1a 0%, transparent 50%)",
                  "radial-gradient(circle at 20% 50%, #1a1a1a 0%, transparent 50%)",
                ],
              }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            />

            {/* Main Title - AWARDING */}
            <Motion.div className="flex overflow-hidden mb-2">
              {title.split("").map((char, i) => (
                <Motion.span
                  key={`title-${i}`}
                  custom={i}
                  variants={letterVariants}
                  initial="hidden"
                  animate="visible"
                  className="text-white text-6xl lg:text-9xl font-black tracking-wider"
                  style={{ display: "inline-block" }}
                >
                  {char}
                </Motion.span>
              ))}
            </Motion.div>

            {/* Subtitle - KABINET DEVORIA */}
            <Motion.div className="flex overflow-hidden">
              {subtitle.split("").map((char, i) => (
                <Motion.span
                  key={`subtitle-${i}`}
                  custom={i + title.length}
                  variants={letterVariants}
                  initial="hidden"
                  animate="visible"
                  className="text-white text-3xl lg:text-5xl font-bold tracking-[0.3em]"
                  style={{ display: "inline-block" }}
                >
                  {char === " " ? "\u00A0" : char}
                </Motion.span>
              ))}
            </Motion.div>

            {/* Progress bar or Click to enter */}
            <Motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.5, duration: 0.5 }}
              className="mt-16 w-64 lg:w-96"
            >
              {!isReady ? (
                <>
                  <div className="h-[2px] bg-white/20 rounded-full overflow-hidden">
                    <Motion.div
                      className="h-full bg-white"
                      initial={{ width: "0%" }}
                      animate={{ width: `${loadProgress}%` }}
                      transition={{ duration: 0.3 }}
                    />
                  </div>
                  <Motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.8 }}
                    className="text-white/50 text-sm text-center mt-4 tracking-widest"
                  >
                    {loadProgress}%
                  </Motion.p>
                </>
              ) : (
                <Motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center"
                >
                  <Motion.div
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                    className="inline-block px-8 py-3 border border-white/30 rounded-full"
                  >
                    <span className="text-white text-lg tracking-widest">
                      KLIK UNTUK MASUK
                    </span>
                  </Motion.div>
                </Motion.div>
              )}
            </Motion.div>

            {/* Decorative lines */}
            <Motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.5, duration: 1, ease: "easeOut" }}
              className="absolute top-1/3 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent"
            />
            <Motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.7, duration: 1, ease: "easeOut" }}
              className="absolute bottom-1/3 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent"
            />
          </Motion.div>
        )}
      </AnimatePresence>

      {/* Main content - only mount after loading complete so animations start fresh */}
      {!isLoading && (
        <Motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          {children}
        </Motion.div>
      )}
    </>
  );
}
