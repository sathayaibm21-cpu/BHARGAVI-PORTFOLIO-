import React from "react";
import { motion } from "motion/react";
import { GraduationCap, MapPin } from "lucide-react";
import { PORTFOLIO_DATA } from "../data/portfolio";

export const Education: React.FC = () => {
  const { education } = PORTFOLIO_DATA;

  return (
    <div className="space-y-8">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.45, ease: "easeOut" }}
        className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-[#CFC9BF]"
      >
        <div>
          <div className="flex items-center gap-2 font-mono-tech text-xs text-[#D71920] uppercase font-bold mb-2">
            <span>05</span>
            <span>/</span>
            <span>EDUCATION</span>
          </div>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl text-[#111111] uppercase tracking-tight">
            ACADEMIC QUALIFICATIONS
          </h2>
        </div>
        <p className="font-mono-tech text-xs text-[#77736C] uppercase">
          [GRADUATE ENGINEERING DEGREE // AI &amp; ML SPECIALIZATION]
        </p>
      </motion.div>

      <div className="space-y-6">
        {education.map((edu, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="p-6 sm:p-8 bg-[#F8F5EF] border border-[#CFC9BF] max-w-4xl"
          >
            <div className="flex items-center gap-3 text-[#D71920] mb-3">
              <GraduationCap className="w-5 h-5" />
              <span className="font-mono-tech text-xs uppercase font-bold tracking-wider">
                UNDERGRADUATE DEGREE
              </span>
            </div>

            <h3 className="font-display text-2xl sm:text-3xl text-[#111111] uppercase tracking-tight mb-2">
              {edu.degree}
            </h3>

            <div className="font-mono-tech text-sm text-[#D71920] uppercase mb-4 font-semibold tracking-wide">
              SPECIALIZATION: {edu.specialization}
            </div>

            <div className="flex items-center gap-2 text-xs font-mono-tech text-[#77736C] uppercase pt-4 border-t border-[#CFC9BF]">
              <MapPin className="w-3.5 h-3.5 text-[#D71920]" />
              <span className="font-medium text-[#4A4A46]">{edu.location}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
