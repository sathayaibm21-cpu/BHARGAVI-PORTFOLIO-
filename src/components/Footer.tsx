import React from "react";
import { ArrowUp, Github, Linkedin, Mail } from "lucide-react";
import { PORTFOLIO_DATA } from "../data/portfolio";

export const Footer: React.FC = () => {
  const { personal } = PORTFOLIO_DATA;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#EAE5DC] border-t border-[#CFC9BF] text-[#4A4A46] py-12 lg:py-16">
      <div className="w-full px-[4vw] sm:px-[5vw]">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b border-[#CFC9BF]">
          {/* Identity */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-7 h-7 bg-[#D71920] flex items-center justify-center font-bold text-white text-xs tracking-wider">
                BA
              </div>
              <span className="font-display text-2xl text-[#111111] tracking-wide">
                {personal.name}
              </span>
            </div>
            <p className="font-mono-tech text-xs text-[#4A4A46] uppercase max-w-sm leading-relaxed">
              {personal.title} — {personal.location}
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href={personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 border border-[#CFC9BF] hover:border-[#111111] bg-[#F8F5EF] text-[#111111] hover:text-[#D71920] transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 border border-[#CFC9BF] hover:border-[#111111] bg-[#F8F5EF] text-[#111111] hover:text-[#D71920] transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${personal.email}`}
                className="p-2.5 border border-[#CFC9BF] hover:border-[#111111] bg-[#F8F5EF] text-[#111111] hover:text-[#D71920] transition-colors"
                aria-label="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Index */}
          <div className="md:col-span-4 space-y-2 font-mono-tech text-xs">
            <span className="text-[#111111] font-bold uppercase block mb-3">
              NAVIGATION
            </span>
            <div className="grid grid-cols-2 gap-2.5 uppercase">
              <a href="#overview" className="hover:text-[#D71920] transition-colors">
                [00] Overview
              </a>
              <a href="#summary" className="hover:text-[#D71920] transition-colors">
                [01] Summary
              </a>
              <a href="#projects" className="hover:text-[#D71920] transition-colors">
                [02] Projects
              </a>
              <a href="#skills" className="hover:text-[#D71920] transition-colors">
                [03] Skills
              </a>
              <a href="#experience" className="hover:text-[#D71920] transition-colors">
                [04] Experience
              </a>
              <a href="#education" className="hover:text-[#D71920] transition-colors">
                [05] Education
              </a>
            </div>
          </div>

          {/* Back to Top */}
          <div className="md:col-span-3 flex md:flex-col justify-between items-start md:items-end">
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-transparent hover:bg-[#111111] border border-[#111111] text-[#111111] hover:text-white font-mono-tech text-xs uppercase tracking-wider font-semibold transition-colors duration-150"
              aria-label="Scroll to top"
            >
              <span>TOP OF PAGE</span>
              <ArrowUp className="w-3.5 h-3.5 text-[#D71920]" />
            </button>
          </div>
        </div>

        {/* Bottom Strip */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono-tech text-[11px] text-[#77736C]">
          <div>
            <span>{personal.name} — {personal.title}</span>
          </div>
          <div>
            <span>{personal.location}</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
