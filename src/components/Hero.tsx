import React from "react";
import { motion, type Variants } from "motion/react";
import { ArrowDown, ArrowUpRight, Github, Linkedin, Mail, MapPin } from "lucide-react";
import { PORTFOLIO_DATA } from "../data/portfolio";

const clientPortrait = "/images/bhargavi_portrait_1791306509733.jpeg";

export const Hero: React.FC = () => {
  const { personal } = PORTFOLIO_DATA;

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.07,
        delayChildren: 0.03,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 14 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4, ease: "easeOut" },
    },
  };

  const skillTags = [
    "+REACT",
    "+TYPESCRIPT",
    "+NODE.JS",
    "+ANDROID ERP",
    "+GOOGLE APPS SCRIPT",
    "+TAILWIND CSS",
  ];

  return (
    <section
      id="overview"
      className="relative min-h-screen pt-20 lg:pt-24 flex flex-col justify-between border-b border-[#BC96E6]/30 bg-[#210B2C] overflow-hidden"
    >
      <div id="hero" className="sr-only" aria-hidden="true" />

      {/* Main 12-Column Editorial Grid */}
      <div className="w-full px-[4vw] sm:px-[5vw] py-8 lg:py-12 flex-1 flex flex-col justify-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 xl:gap-10 items-center"
        >
          {/* Left Column (Columns 1–7): Strong single vertical left-alignment axis */}
          <div className="lg:col-span-7 flex flex-col items-start justify-center text-left">
            {/* 1. Subtitle Kicker: FULL STACK DEVELOPER (#FFD166) */}
            <motion.div variants={itemVariants} className="flex items-center gap-2.5 mb-2.5">
              <span className="inline-block w-2.5 h-2.5 bg-[#FFD166] shrink-0" />
              <span className="font-mono-tech text-xs sm:text-[13px] tracking-[0.25em] text-[#FFD166] uppercase font-semibold">
                FULL STACK DEVELOPER
              </span>
            </motion.div>

            {/* 2. Main Name Headline: ONE SINGLE LINE, NO period, #BC96E6 WISTERIA */}
            <motion.div variants={itemVariants} className="mb-4 sm:mb-5 w-full">
              <h1
                style={{
                  fontSize: "clamp(44px, 7vw, 135px)",
                  lineHeight: "0.95",
                  fontWeight: 800,
                  letterSpacing: "-0.015em",
                  wordSpacing: "0.08em",
                  whiteSpace: "nowrap",
                }}
                className="font-display text-[#BC96E6] uppercase select-none whitespace-nowrap block"
              >
                BHARGAVI A
              </h1>
            </motion.div>

            {/* Mobile Portrait Slot */}
            <div className="block lg:hidden w-full my-4">
              <div className="relative mx-auto max-w-sm">
                <div
                  className="absolute -inset-1.5 bg-[#FFD166]/30 z-0"
                  aria-hidden="true"
                />
                <div className="relative z-10 bg-[#210B2C] border border-[#BC96E6]/40 p-1.5">
                  <div className="relative aspect-[3/4] w-full overflow-hidden bg-[#210B2C]">
                    <img
                      src={clientPortrait}
                      alt="Bhargavi A"
                      className="w-full h-full object-cover object-top"
                      loading="eager"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* 3. Education Line: #BC96E6 and #FFD166 */}
            <motion.div variants={itemVariants} className="mb-2 w-full">
              <div className="flex items-center flex-wrap gap-x-2 gap-y-1 font-mono-tech text-xs sm:text-sm text-[#BC96E6]">
                <span className="font-semibold uppercase tracking-wider text-[#BC96E6]">
                  {personal.degree}
                </span>
                <span className="text-[#FFD166] font-bold">/</span>
                <span className="text-[#BC96E6]/80 font-medium uppercase tracking-wide">
                  {personal.specialization}
                </span>
              </div>
            </motion.div>

            {/* 4. Location: Dark Purple backdrop with #FFD166 pin and #BC96E6 text */}
            <motion.div variants={itemVariants} className="mb-5 flex items-center gap-2 font-mono-tech text-xs sm:text-sm">
              <MapPin className="w-3.5 h-3.5 text-[#FFD166] shrink-0" />
              <span className="font-semibold uppercase tracking-wider text-[#BC96E6]">
                {personal.location.toUpperCase()}
              </span>
            </motion.div>

            {/* 5. Professional Summary: Wisteria #BC96E6 for effortless readability */}
            <motion.div variants={itemVariants} className="mb-6 max-w-[660px]">
              <p className="text-[#BC96E6]/90 text-[16px] sm:text-[17px] leading-[1.6] font-normal">
                {personal.summary}
              </p>
            </motion.div>

            {/* 6. Skill Tags: Transparent background, #BC96E6 border, #BC96E6 text */}
            <motion.div variants={itemVariants} className="flex flex-wrap gap-2 max-w-[660px] mb-7">
              {skillTags.map((tag) => (
                <span
                  key={tag}
                  className="px-2.5 py-1 text-xs font-mono-tech uppercase bg-transparent border border-[#BC96E6]/40 text-[#BC96E6] hover:border-[#FFD166] transition-colors tracking-wider"
                >
                  {tag}
                </span>
              ))}
            </motion.div>

            {/* 7. Action Buttons */}
            <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-3.5">
              {/* Primary: Sunglow #FFD166 */}
              <a
                href="#projects"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 bg-[#FFD166] hover:bg-[#FFD166]/90 text-[#210B2C] font-mono-tech text-xs uppercase tracking-wider font-semibold transition-colors duration-150 shadow-lg shadow-[#FFD166]/20"
              >
                <span>EXPLORE WORK</span>
                <span className="text-sm">→</span>
              </a>

              {/* Secondary: Wisteria outline */}
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-transparent border border-[#BC96E6] hover:bg-[#BC96E6] text-[#BC96E6] hover:text-[#210B2C] font-mono-tech text-xs uppercase tracking-wider font-semibold transition-colors duration-150"
              >
                <span>GET IN TOUCH</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#FFD166]" />
              </a>

              {/* Social Channels */}
              <div className="flex items-center gap-2 sm:pl-1">
                <a
                  href={personal.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 border border-[#BC96E6]/30 hover:border-[#FFD166] bg-[#210B2C] text-[#BC96E6] hover:text-[#FFD166] transition-colors"
                  aria-label="GitHub Profile"
                >
                  <Github className="w-4 h-4" />
                </a>
                <a
                  href={personal.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 border border-[#BC96E6]/30 hover:border-[#FFD166] bg-[#210B2C] text-[#BC96E6] hover:text-[#FFD166] transition-colors"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  href={`mailto:${personal.email}`}
                  className="p-3 border border-[#BC96E6]/30 hover:border-[#FFD166] bg-[#210B2C] text-[#BC96E6] hover:text-[#FFD166] transition-colors"
                  aria-label="Email Bhargavi"
                >
                  <Mail className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          </div>

          {/* Right Column (Columns 8–12): Large Editorial Portrait */}
          <div className="hidden lg:flex lg:col-span-5 relative justify-end items-center">
            {/* Subtle Watermark: Wisteria #BC96E6 at low opacity behind portrait */}
            <div
              className="absolute right-0 top-1/2 -translate-y-1/2 select-none pointer-events-none uppercase font-display z-0"
              style={{
                color: "#BC96E6",
                opacity: 0.035,
                fontSize: "clamp(100px, 13vw, 180px)",
                whiteSpace: "nowrap",
                lineHeight: "0.8",
              }}
              aria-hidden="true"
            >
              PORTFOLIO
            </div>

            {/* Portrait Frame */}
            <motion.div
              variants={itemVariants}
              className="relative z-10 w-full max-w-[490px] xl:max-w-[530px] 2xl:max-w-[560px] h-[72vh] max-h-[700px] min-h-[480px]"
            >
              {/* Sunglow Framing Accent behind photo */}
              <div
                className="absolute -top-2 -right-2 -bottom-2 -left-2 bg-[#FFD166]/20 border border-[#FFD166]/40 z-0"
                aria-hidden="true"
              />

              {/* Inner Frame */}
              <div className="relative z-10 w-full h-full bg-[#210B2C] p-2 border border-[#BC96E6]/40 flex flex-col justify-between shadow-2xl">
                {/* Top Caption Strip */}
                <div className="flex items-center justify-between pb-1.5 px-1 border-b border-[#BC96E6]/30 font-mono-tech text-[10px]">
                  <span className="text-[#BC96E6] font-bold">BHARGAVI A</span>
                  <span className="text-[#FFD166] font-semibold">FULL STACK DEVELOPER</span>
                </div>

                {/* Real Client Photograph Asset */}
                <div className="relative flex-1 w-full overflow-hidden bg-[#210B2C] my-1.5 border border-[#BC96E6]/30">
                  <img
                    src={clientPortrait}
                    alt="Bhargavi A"
                    className="w-full h-full object-cover object-top transition-transform duration-700 hover:scale-[1.02]"
                    loading="eager"
                    referrerPolicy="no-referrer"
                  />

                  {/* Corner editorial registration accents */}
                  <div className="absolute top-2 left-2 px-1.5 py-0.5 bg-[#210B2C]/90 border border-[#BC96E6]/40 font-mono-tech text-[9px] text-[#BC96E6] uppercase tracking-wider">
                    ARAKKONAM, TN
                  </div>
                </div>

                {/* Bottom Caption Strip */}
                <div className="flex items-center justify-between pt-1.5 px-1 border-t border-[#BC96E6]/30 font-mono-tech text-[10px]">
                  <span className="truncate text-[#BC96E6]">{personal.degree}</span>
                  <span className="text-[#FFD166] shrink-0 font-medium pl-2">{personal.specialization}</span>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Project Ticker */}
      <div className="w-full border-t border-[#BC96E6]/30 bg-[#210B2C] py-3.5 px-[4vw] sm:px-[5vw]">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 font-mono-tech text-xs">
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
            <span className="text-[#FFD166] font-bold tracking-wider">PROJECTS:</span>
            <span className="text-[#BC96E6] font-medium">KIDSPIRE</span>
            <span className="text-[#BC96E6]/40">/</span>
            <span className="text-[#BC96E6] font-medium">LUMEN</span>
            <span className="text-[#BC96E6]/40">/</span>
            <span className="text-[#BC96E6] font-medium">BS ROCKS CREATIONS ERP</span>
            <span className="text-[#BC96E6]/40">/</span>
            <span className="text-[#BC96E6] font-medium">ORBITRA</span>
            <span className="text-[#BC96E6]/40">/</span>
            <span className="text-[#BC96E6] font-medium">GOOGLE SHEETS AUTOMATION</span>
          </div>

          <a
            href="#projects"
            className="inline-flex items-center gap-1.5 text-[#BC96E6] hover:text-[#FFD166] transition-colors shrink-0 font-semibold"
          >
            <span>VIEW WORK</span>
            <ArrowDown className="w-3.5 h-3.5 text-[#FFD166]" />
          </a>
        </div>
      </div>
    </section>
  );
};
