import React from "react";
import { motion } from "motion/react";
import { Code, Server, Smartphone, Terminal } from "lucide-react";
import { PORTFOLIO_DATA } from "../data/portfolio";

export const Skills: React.FC = () => {
  const { skills } = PORTFOLIO_DATA;
  const categoryIcons = [Code, Server, Smartphone];

  return (
    <section id="skills" className="py-20 lg:py-28 border-b border-[#CFC9BF] bg-[#F3EFE7]">
      <div className="w-full px-[4vw] sm:px-[5vw]">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.45, ease: "easeOut" }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-[#CFC9BF]"
        >
          <div>
            <div className="flex items-center gap-2 font-mono-tech text-xs text-[#D71920] uppercase font-bold mb-2">
              <span>03</span>
              <span>/</span>
              <span>TECHNICAL CAPABILITIES</span>
            </div>
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl text-[#111111] uppercase tracking-tight">
              SKILLS &amp; TECHNOLOGIES
            </h2>
          </div>
          <p className="font-mono-tech text-xs text-[#77736C] max-w-sm uppercase leading-relaxed">
            [FULL STACK DEVELOPMENT // MOBILE ANDROID // WORKFLOW AUTOMATION]
          </p>
        </motion.div>

        {/* 3-Column Editorial Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-0 border-x border-b border-[#CFC9BF] mt-10">
          {skills.map((category, catIdx) => {
            const Icon = categoryIcons[catIdx] || Terminal;
            return (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: catIdx * 0.08 }}
                className={`p-8 bg-[#F8F5EF] hover:bg-[#EAE5DC]/50 transition-colors relative flex flex-col justify-between ${
                  catIdx !== skills.length - 1 ? "lg:border-r border-b lg:border-b-0 border-[#CFC9BF]" : ""
                }`}
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-3">
                      <div className="p-2 border border-[#CFC9BF] bg-[#F3EFE7] text-[#D71920]">
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="font-mono-tech text-xs text-[#77736C] uppercase font-semibold">
                        SECTOR 0{catIdx + 1}
                      </span>
                    </div>
                  </div>

                  <h3 className="font-display text-2xl text-[#111111] uppercase tracking-wide mb-6">
                    {category.category}
                  </h3>

                  {/* Skills List */}
                  <div className="space-y-2 pt-2 border-t border-[#CFC9BF]">
                    {category.skills.map((skill, idx) => (
                      <div
                        key={skill}
                        className="flex items-center justify-between p-2.5 bg-[#F3EFE7] border border-[#CFC9BF] hover:border-[#111111] transition-colors group"
                      >
                        <div className="flex items-center gap-2.5">
                          <span className="text-[#D71920] font-mono-tech text-[10px] font-bold">
                            0{idx + 1}
                          </span>
                          <span className="font-mono-tech text-xs text-[#111111] group-hover:text-[#D71920] transition-colors font-medium">
                            {skill}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
