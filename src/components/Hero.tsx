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
      className="relative min-h-screen pt-20 lg:pt-24 flex flex-col justify-between border-b border-[#CFC9BF] bg-[#F3EFE7] overflow-hidden"
    >
      <div id="hero" className="sr-only" aria-hidden="true" />
      {/* Main 12-Column Editorial Grid (Desktop: columns 1-7 typography, 8-12 photo) */}
      <div className="w-full px-[4vw] sm:px-[5vw] py-8 lg:py-12 flex-1 flex flex-col justify-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 xl:gap-10 items-center"
        >
          {/* Left Column (Columns 1–7): Strong single vertical left-alignment axis */}
          <div className="lg:col-span-7 flex flex-col items-start justify-center text-left">
            {/* 1. Subtitle Kicker: FULL STACK DEVELOPER */}
            <motion.div variants={itemVariants} className="flex items-center gap-2.5 mb-2.5">
              <span className="inline-block w-2.5 h-2.5 bg-[#D71920] shrink-0" />
              <span className="font-mono-tech text-xs sm:text-[13px] tracking-[0.25em] text-[#D71920] uppercase font-semibold">
                FULL STACK DEVELOPER
              </span>
            </motion.div>

            {/* 2. Main Name Headline: ONE SINGLE HORIZONTAL LINE, NO period, ALL #111111, Clean Letter & Word Spacing */}
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
                className="font-display text-[#111111] uppercase select-none whitespace-nowrap block"
              >
                BHARGAVI A
              </h1>
            </motion.div>

            {/* Mobile Only Portrait Slot (Stack order: Name -> Photo -> Education) */}
            <div className="block lg:hidden w-full my-4">
              <div className="relative mx-auto max-w-sm">
                <div
                  className="absolute -inset-1.5 bg-[#D71920]/80 z-0"
                  aria-hidden="true"
                />
                <div className="relative z-10 bg-[#F8F5EF] border border-[#CFC9BF] p-1.5">
                  <div className="relative aspect-[3/4] w-full overflow-hidden bg-[#EAE5DC]">
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

            {/* 3. Education Line: Clean, non-competing, red accent separator */}
            <motion.div variants={itemVariants} className="mb-2 w-full">
              <div className="flex items-center flex-wrap gap-x-2 gap-y-1 font-mono-tech text-xs sm:text-sm text-[#111111]">
                <span className="font-semibold uppercase tracking-wider">
                  {personal.degree}
                </span>
                <span className="text-[#D71920] font-bold">/</span>
                <span className="text-[#4A4A46] font-medium uppercase tracking-wide">
                  {personal.specialization}
                </span>
              </div>
            </motion.div>

            {/* 4. Location: Aligned with left content, dark text with small red location icon */}
            <motion.div variants={itemVariants} className="mb-5 flex items-center gap-2 font-mono-tech text-xs sm:text-sm">
              <MapPin className="w-3.5 h-3.5 text-[#D71920] shrink-0" />
              <span className="font-semibold uppercase tracking-wider text-[#111111]">
                {personal.location.toUpperCase()}
              </span>
            </motion.div>

            {/* 5. Professional Summary: 600–680px max-width, 16px–18px font size, 1.6 line height */}
            <motion.div variants={itemVariants} className="mb-6 max-w-[660px]">
              <p className="text-[#4A4A46] text-[16px] sm:text-[17px] leading-[1.6] font-normal">
                {personal.summary}
              </p>
            </motion.div>

            {/* 6. Skill Tags: Transparent background, 1px border #BDB7AE, dark text #222222, balanced rows */}
            <motion.div variants={itemVariants} className="flex flex-wrap gap-2 max-w-[660px] mb-7">
              {skillTags.map((tag) => (
                <span
                  key={tag}
                  className="px-2.5 py-1 text-xs font-mono-tech uppercase bg-transparent border border-[#BDB7AE] text-[#222222] tracking-wider"
                >
                  {tag}
                </span>
              ))}
            </motion.div>

            {/* 7. Action Buttons: EXPLORE WORK →, GET IN TOUCH ↗, and direct profiles */}
            <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-3.5">
              <a
                href="#projects"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 bg-[#D71920] hover:bg-[#A80F15] text-white font-mono-tech text-xs uppercase tracking-wider font-semibold transition-colors duration-150"
              >
                <span>EXPLORE WORK</span>
                <span className="text-sm">→</span>
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-transparent border border-[#111111] hover:bg-[#111111] text-[#111111] hover:text-white font-mono-tech text-xs uppercase tracking-wider font-semibold transition-colors duration-150"
              >
                <span>GET IN TOUCH</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>

              <div className="flex items-center gap-2 sm:pl-1">
                <a
                  href={personal.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 border border-[#CFC9BF] hover:border-[#111111] bg-transparent text-[#111111] hover:text-[#D71920] transition-colors"
                  aria-label="GitHub Profile"
                >
                  <Github className="w-4 h-4" />
                </a>
                <a
                  href={personal.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 border border-[#CFC9BF] hover:border-[#111111] bg-transparent text-[#111111] hover:text-[#D71920] transition-colors"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  href={`mailto:${personal.email}`}
                  className="p-3 border border-[#CFC9BF] hover:border-[#111111] bg-transparent text-[#111111] hover:text-[#D71920] transition-colors"
                  aria-label="Email Bhargavi"
                >
                  <Mail className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          </div>

          {/* Right Column (Columns 8–12): Large Editorial Portrait closer to left content */}
          <div className="hidden lg:flex lg:col-span-5 relative justify-end items-center">
            {/* Subtle Watermark: Behind portrait, opacity 0.028, barely visible, does not overlap name */}
            <div
              className="absolute right-0 top-1/2 -translate-y-1/2 select-none pointer-events-none uppercase font-display z-0"
              style={{
                color: "#111111",
                opacity: 0.028,
                fontSize: "clamp(100px, 13vw, 180px)",
                whiteSpace: "nowrap",
                lineHeight: "0.8",
              }}
              aria-hidden="true"
            >
              PORTFOLIO
            </div>

            {/* Portrait Frame: 38-42vw target width, 70-78vh height, subtle red frame */}
            <motion.div
              variants={itemVariants}
              className="relative z-10 w-full max-w-[490px] xl:max-w-[530px] 2xl:max-w-[560px] h-[72vh] max-h-[700px] min-h-[480px]"
            >
              {/* Subtle Red Rectangular Framing Accent behind photo */}
              <div
                className="absolute -top-2 -right-2 -bottom-2 -left-2 bg-[#D71920]/85 z-0"
                aria-hidden="true"
              />

              {/* Inner Frame */}
              <div className="relative z-10 w-full h-full bg-[#F8F5EF] p-2 border border-[#CFC9BF] flex flex-col justify-between shadow-sm">
                {/* Top Caption Strip */}
                <div className="flex items-center justify-between pb-1.5 px-1 border-b border-[#CFC9BF] font-mono-tech text-[10px] text-[#4A4A46]">
                  <span className="text-[#111111] font-bold">BHARGAVI A</span>
                  <span className="text-[#D71920] font-semibold">FULL STACK DEVELOPER</span>
                </div>

                {/* Exact Client Photograph Asset (object-fit cover, unmodified face) */}
                <div className="relative flex-1 w-full overflow-hidden bg-[#EAE5DC] my-1.5 border border-[#CFC9BF]">
                  <img
                    src={clientPortrait}
                    alt="Bhargavi A"
                    className="w-full h-full object-cover object-top transition-transform duration-700 hover:scale-[1.02]"
                    loading="eager"
                    referrerPolicy="no-referrer"
                  />

                  {/* Corner editorial registration accents */}
                  <div className="absolute top-2 left-2 px-1.5 py-0.5 bg-[#F3EFE7]/90 border border-[#CFC9BF] font-mono-tech text-[9px] text-[#111111] uppercase tracking-wider">
                    ARAKKONAM, TN
                  </div>
                </div>

                {/* Bottom Caption Strip */}
                <div className="flex items-center justify-between pt-1.5 px-1 border-t border-[#CFC9BF] font-mono-tech text-[10px] text-[#4A4A46]">
                  <span className="truncate">{personal.degree}</span>
                  <span className="text-[#D71920] shrink-0 font-medium pl-2">{personal.specialization}</span>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Project Ticker: Spans bottom of hero, border #CFC9BF */}
      <div className="w-full border-t border-[#CFC9BF] bg-[#EAE5DC]/60 py-3.5 px-[4vw] sm:px-[5vw]">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 font-mono-tech text-xs">
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
            <span className="text-[#D71920] font-bold tracking-wider">PROJECTS:</span>
            <span className="text-[#111111] font-medium">KIDSPIRE</span>
            <span className="text-[#CFC9BF]">/</span>
            <span className="text-[#111111] font-medium">LUMEN</span>
            <span className="text-[#CFC9BF]">/</span>
            <span className="text-[#111111] font-medium">BS ROCKS CREATIONS ERP</span>
            <span className="text-[#CFC9BF]">/</span>
            <span className="text-[#111111] font-medium">ORBITRA</span>
            <span className="text-[#CFC9BF]">/</span>
            <span className="text-[#111111] font-medium">GOOGLE SHEETS AUTOMATION</span>
          </div>

          <a
            href="#projects"
            className="inline-flex items-center gap-1.5 text-[#111111] hover:text-[#D71920] transition-colors shrink-0 font-semibold"
          >
            <span>VIEW WORK</span>
            <ArrowDown className="w-3.5 h-3.5 text-[#D71920]" />
          </a>
        </div>
      </div>
    </section>
  );
};
