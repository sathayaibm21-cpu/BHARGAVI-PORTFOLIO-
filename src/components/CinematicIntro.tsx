import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";

interface CinematicIntroProps {
  onComplete: () => void;
}

export const CinematicIntro: React.FC<CinematicIntroProps> = ({ onComplete }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    // Check for prefers-reduced-motion
    if (typeof window !== "undefined") {
      const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
      if (mediaQuery.matches) {
        setPrefersReducedMotion(true);
        // Skip animation or fade out immediately
        const timer = setTimeout(() => {
          setIsVisible(false);
          onComplete();
        }, 300);
        return () => clearTimeout(timer);
      }
    }

    // Lock body scroll during intro
    document.body.style.overflow = "hidden";

    // Sequence timeline:
    // 0.0s: Dark Purple start (#210B2C) + ambient Sunglow/Wisteria
    // 0.4s: FULL STACK DEVELOPER reveal (#FFD166)
    // 0.9s: BHARGAVI A reveal (#BC96E6)
    // 1.5s: Cinematic light sweep (#FFD166 + #BC96E6)
    // 1.8s: Real client photograph clip-path reveal
    // 2.5s: Cinematic composition complete
    // 3.1s: Smooth transition to portfolio
    const finishTimer = setTimeout(() => {
      setIsVisible(false);
    }, 3200);

    const cleanupTimer = setTimeout(() => {
      document.body.style.overflow = "unset";
      onComplete();
    }, 3800);

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" || e.key === " ") {
        setIsVisible(false);
        document.body.style.overflow = "unset";
        onComplete();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      clearTimeout(finishTimer);
      clearTimeout(cleanupTimer);
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [onComplete]);

  const handleSkip = () => {
    setIsVisible(false);
    document.body.style.overflow = "unset";
    onComplete();
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            scale: 1.015,
            transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
          }}
          className="fixed inset-0 z-[100] flex items-center justify-center overflow-hidden select-none"
          style={{ backgroundColor: "#210B2C" }}
          onClick={handleSkip}
        >
          {/* SCENE 01 — 0.0s: Ambient atmospheric texture & thin circular editorial light */}
          {/* Ambient soft glow - strictly #BC96E6 and #FFD166 */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 0.18, scale: 1 }}
            transition={{ duration: 1.8, ease: "easeOut" }}
            className="absolute -top-[15%] -left-[10%] w-[65vw] h-[65vw] rounded-full pointer-events-none"
            style={{
              background: "radial-gradient(circle, rgba(188, 150, 230, 0.35) 0%, rgba(33, 11, 44, 0) 70%)",
            }}
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 0.14, scale: 1 }}
            transition={{ duration: 2.2, ease: "easeOut", delay: 0.2 }}
            className="absolute -bottom-[20%] -right-[15%] w-[70vw] h-[70vw] rounded-full pointer-events-none"
            style={{
              background: "radial-gradient(circle, rgba(255, 209, 102, 0.3) 0%, rgba(33, 11, 44, 0) 70%)",
            }}
          />

          {/* Thin curved/circular editorial light element in #FFD166 */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotate: -8 }}
            animate={{ opacity: 0.25, scale: 1, rotate: 0 }}
            transition={{ duration: 1.6, ease: "easeOut" }}
            className="absolute w-[80vw] max-w-[850px] h-[80vw] max-h-[850px] rounded-full pointer-events-none"
            style={{
              border: "1px solid rgba(255, 209, 102, 0.2)",
            }}
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 0.15, scale: 1 }}
            transition={{ duration: 2.0, ease: "easeOut", delay: 0.1 }}
            className="absolute w-[60vw] max-w-[620px] h-[60vw] max-h-[620px] rounded-full pointer-events-none"
            style={{
              border: "1px solid rgba(188, 150, 230, 0.25)",
            }}
          />

          {/* Core Composition Grid */}
          <div className="relative z-10 w-full max-w-6xl px-6 sm:px-12 py-8 flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-14">
            {/* Left Column: Typography */}
            <div className="flex-1 flex flex-col items-start justify-center relative">
              {/* SCENE 02 — 0.4s: Title reveal FULL STACK DEVELOPER (#FFD166) */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: prefersReducedMotion ? 0 : 0.4, ease: "easeOut" }}
                className="flex flex-col items-start gap-1.5 mb-3"
              >
                <span
                  className="font-mono-tech text-xs sm:text-sm tracking-[0.3em] uppercase font-semibold"
                  style={{ color: "#FFD166" }}
                >
                  FULL STACK DEVELOPER
                </span>
                {/* Thin horizontal Sunglow line underneath */}
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 0.6, delay: prefersReducedMotion ? 0 : 0.55, ease: "easeOut" }}
                  className="h-[1px]"
                  style={{ backgroundColor: "rgba(255, 209, 102, 0.7)" }}
                />
              </motion.div>

              {/* SCENE 03 — 0.9s: Name reveal BHARGAVI A (#BC96E6) */}
              <div className="relative overflow-visible py-1">
                <motion.h1
                  initial={{ opacity: 0, y: 35 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: prefersReducedMotion ? 0 : 0.9, ease: [0.16, 1, 0.3, 1] }}
                  style={{
                    color: "#BC96E6",
                    fontSize: "clamp(46px, 7vw, 110px)",
                    lineHeight: "0.92",
                    fontWeight: 900,
                    letterSpacing: "-0.015em",
                    wordSpacing: "0.1em",
                    whiteSpace: "nowrap",
                  }}
                  className="font-display uppercase select-none tracking-tight block"
                >
                  BHARGAVI A
                </motion.h1>

                {/* SCENE 04 — 1.5s: Cinematic light sweep across typography */}
                {!prefersReducedMotion && (
                  <motion.div
                    initial={{ x: "-120%", opacity: 0 }}
                    animate={{ x: "240%", opacity: [0, 0.85, 0] }}
                    transition={{
                      duration: 1.1,
                      delay: 1.5,
                      ease: [0.4, 0, 0.2, 1],
                    }}
                    className="absolute inset-y-0 w-48 pointer-events-none"
                    style={{
                      background:
                        "linear-gradient(90deg, transparent 0%, rgba(255, 209, 102, 0.3) 50%, rgba(188, 150, 230, 0.4) 75%, transparent 100%)",
                    }}
                  />
                )}
              </div>
            </div>

            {/* Right Column: SCENE 05 — 1.8s & SCENE 06 — 2.5s: Real Client Photo Reveal */}
            <div className="relative flex justify-center items-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7, delay: prefersReducedMotion ? 0 : 1.7, ease: "easeOut" }}
                className="relative"
              >
                {/* Subtle Sunglow line / frame around photograph (#FFD166) */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: prefersReducedMotion ? 0 : 2.3, ease: "easeOut" }}
                  className="absolute -inset-2 pointer-events-none"
                  style={{
                    border: "1px solid rgba(255, 209, 102, 0.5)",
                    backgroundColor: "rgba(33, 11, 44, 0.5)",
                  }}
                />

                {/* Corner registration accents in Sunglow (#FFD166) */}
                <span
                  className="absolute -top-3.5 -left-3.5 text-xs font-mono-tech select-none"
                  style={{ color: "#FFD166" }}
                >
                  +
                </span>
                <span
                  className="absolute -top-3.5 -right-3.5 text-xs font-mono-tech select-none"
                  style={{ color: "#FFD166" }}
                >
                  +
                </span>
                <span
                  className="absolute -bottom-3.5 -left-3.5 text-xs font-mono-tech select-none"
                  style={{ color: "#FFD166" }}
                >
                  +
                </span>
                <span
                  className="absolute -bottom-3.5 -right-3.5 text-xs font-mono-tech select-none"
                  style={{ color: "#FFD166" }}
                >
                  +
                </span>

                {/* Photo container with clip-path mask reveal from darkness */}
                <motion.div
                  initial={{
                    clipPath: "inset(100% 0% 0% 0%)",
                    filter: "brightness(0.6)",
                  }}
                  animate={{
                    clipPath: "inset(0% 0% 0% 0%)",
                    filter: "brightness(1)",
                  }}
                  transition={{
                    duration: 0.9,
                    delay: prefersReducedMotion ? 0 : 1.8,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="relative w-48 sm:w-56 md:w-64 lg:w-72 aspect-[3/4] overflow-hidden"
                  style={{
                    backgroundColor: "#210B2C",
                    border: "1px solid rgba(188, 150, 230, 0.35)",
                  }}
                >
                  <img
                    src="/images/bhargavi_portrait_1791306509733.jpeg"
                    alt="Bhargavi A"
                    className="w-full h-full object-cover object-top"
                    loading="eager"
                    referrerPolicy="no-referrer"
                  />

                  {/* Dark purple vignette edge to blend into darkness */}
                  <div
                    className="absolute inset-0 pointer-events-none"
                    style={{
                      boxShadow: "inset 0 0 24px rgba(33, 11, 44, 0.5)",
                    }}
                  />
                </motion.div>
              </motion.div>
            </div>
          </div>

          {/* Minimal Skip Indicator in bottom right */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.4 }}
            transition={{ delay: 1.0, duration: 0.5 }}
            className="absolute bottom-5 right-6 z-20 font-mono-tech text-[10px] tracking-widest uppercase cursor-pointer hover:opacity-100 transition-opacity"
            style={{ color: "#FFD166" }}
            onClick={(e) => {
              e.stopPropagation();
              handleSkip();
            }}
          >
            [ESC / CLICK TO SKIP]
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
