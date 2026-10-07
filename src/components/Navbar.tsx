import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { PORTFOLIO_DATA } from "../data/portfolio";

interface NavbarProps {
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Overview", href: "#overview" },
    { name: "Summary", href: "#summary" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Education", href: "#education" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-[#210B2C]/95 backdrop-blur-md border-b border-[#BC96E6]/30 py-3 shadow-md shadow-[#210B2C]"
            : "bg-[#210B2C]/85 backdrop-blur-sm border-b border-[#BC96E6]/20 py-4"
        }`}
      >
        <div className="w-full px-[4vw] sm:px-[5vw]">
          <div className="flex items-center justify-between">
            {/* Zone 1: Brand Wordmark */}
            <a
              href="#overview"
              className="group flex items-center gap-3 focus:outline-none"
              aria-label="Bhargavi A Portfolio Home"
            >
              <div className="w-7 h-7 bg-[#FFD166] flex items-center justify-center font-bold text-[#210B2C] text-xs tracking-wider transition-transform group-hover:scale-105">
                BA
              </div>
              <div className="flex items-baseline gap-2">
                <span className="font-display text-xl tracking-wider text-[#BC96E6] group-hover:text-[#FFD166] transition-colors">
                  {PORTFOLIO_DATA.personal.name}
                </span>
                <span className="hidden sm:inline font-mono-tech text-[10px] tracking-widest text-[#BC96E6]/70 uppercase">
                  / {PORTFOLIO_DATA.personal.title}
                </span>
              </div>
            </a>

            {/* Zone 2: Navigation Links */}
            <nav className="hidden lg:flex items-center gap-6 xl:gap-8" aria-label="Main Navigation">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href.substring(1);
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    className={`font-mono-tech text-xs tracking-wider uppercase py-1.5 transition-colors duration-200 relative ${
                      isActive
                        ? "text-[#FFD166] font-semibold"
                        : "text-[#BC96E6]/80 hover:text-[#FFD166]"
                    }`}
                  >
                    {link.name}
                    {isActive && (
                      <motion.span
                        layoutId="navUnderline"
                        className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#FFD166]"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                  </a>
                );
              })}
            </nav>

            {/* Zone 3: Primary Action */}
            <div className="hidden sm:flex items-center gap-4">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-5 py-2 text-xs font-mono-tech uppercase font-semibold text-[#210B2C] bg-[#FFD166] hover:bg-[#FFD166]/90 transition-colors"
              >
                <span>CONTACT</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-[#BC96E6] hover:text-[#FFD166] border border-[#BC96E6]/40 bg-[#210B2C] focus:outline-none"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-[60px] z-40 bg-[#210B2C] border-b border-[#BC96E6]/40 px-6 py-6 lg:hidden shadow-2xl"
          >
            <div className="flex flex-col gap-4">
              <div className="pb-2 border-b border-[#BC96E6]/30 flex items-center justify-between">
                <span className="font-mono-tech text-xs text-[#BC96E6]/70">INDEX</span>
                <span className="font-mono-tech text-[10px] text-[#FFD166]">BHARGAVI A</span>
              </div>

              <nav className="flex flex-col gap-1">
                {navLinks.map((link, idx) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center justify-between py-2.5 px-3 border-b border-[#BC96E6]/15 font-mono-tech text-sm tracking-wider uppercase text-[#BC96E6] hover:text-[#FFD166] hover:bg-[#BC96E6]/10 transition-colors"
                  >
                    <span className="flex items-center gap-3">
                      <span className="text-[#FFD166] text-xs font-semibold">0{idx + 1}</span>
                      {link.name}
                    </span>
                    <ArrowUpRight className="w-4 h-4 text-[#BC96E6]/70" />
                  </a>
                ))}
              </nav>

              <div className="pt-3 flex flex-col gap-2">
                <a
                  href="#contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full text-center py-3 bg-[#FFD166] text-[#210B2C] font-mono-tech text-xs tracking-wider uppercase font-semibold hover:bg-[#FFD166]/90 transition-colors"
                >
                  START A CONVERSATION
                </a>
                <div className="flex items-center justify-between text-[11px] font-mono-tech text-[#BC96E6]/80 pt-2">
                  <span>{PORTFOLIO_DATA.personal.email}</span>
                  <span>{PORTFOLIO_DATA.personal.phone}</span>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
