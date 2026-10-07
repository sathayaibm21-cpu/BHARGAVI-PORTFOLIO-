import React, { useState } from "react";
import { motion } from "motion/react";
import { Mail, Phone, Linkedin, Github, Copy, Check, Send, ArrowUpRight } from "lucide-react";
import { PORTFOLIO_DATA } from "../data/portfolio";

export const Contact: React.FC = () => {
  const { personal } = PORTFOLIO_DATA;
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personal.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(personal.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.email || !formState.message) return;

    const subject = encodeURIComponent(formState.subject || `Inquiry from ${formState.name || "Portfolio Visitor"}`);
    const body = encodeURIComponent(
      `Name: ${formState.name}\nEmail: ${formState.email}\n\nMessage:\n${formState.message}`
    );
    window.location.href = `mailto:${personal.email}?subject=${subject}&body=${body}`;
    setFormSubmitted(true);
    setTimeout(() => setFormSubmitted(false), 6000);
  };

  return (
    <section id="contact" className="py-20 lg:py-28 border-b border-[#BC96E6]/30 bg-[#210B2C]">
      <div className="w-full px-[4vw] sm:px-[5vw]">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.45, ease: "easeOut" }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-[#BC96E6]/30"
        >
          <div>
            <div className="flex items-center gap-2 font-mono-tech text-xs text-[#FFD166] uppercase font-bold mb-2">
              <span>06</span>
              <span>/</span>
              <span>CONTACT</span>
            </div>
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl text-[#BC96E6] uppercase tracking-tight">
              GET IN TOUCH
            </h2>
          </div>
          <p className="font-mono-tech text-xs text-[#BC96E6]/70 max-w-sm uppercase leading-relaxed">
            [{personal.email} // {personal.phone}]
          </p>
        </motion.div>

        {/* Contact Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 py-12">
          {/* Left: Contact Channels */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45, ease: "easeOut" }}
            className="lg:col-span-5 space-y-8"
          >
            <div>
              <span className="font-mono-tech text-xs text-[#FFD166] uppercase tracking-wider block mb-2 font-bold">
                DIRECT INQUIRY CHANNELS
              </span>
              <h3 className="font-display text-2xl sm:text-3xl text-[#BC96E6] uppercase leading-tight mb-4">
                LET'S DISCUSS YOUR SYSTEM REQUIREMENTS OR UPCOMING PROJECT.
              </h3>
              <p className="text-sm text-[#BC96E6]/80 leading-relaxed">
                Available for full-stack engineering roles, web applications, Android applications, and workflow automation systems.
              </p>
            </div>

            {/* Direct Cards */}
            <div className="space-y-4">
              {/* Email Card */}
              <div className="p-5 bg-[#210B2C] border border-[#BC96E6]/30 hover:border-[#FFD166] transition-colors">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-mono-tech text-[10px] text-[#BC96E6]/70 uppercase font-semibold">
                    ELECTRONIC MAIL
                  </span>
                  <button
                    onClick={handleCopyEmail}
                    className="flex items-center gap-1 font-mono-tech text-[10px] text-[#FFD166] hover:text-[#BC96E6] transition-colors font-semibold"
                  >
                    {copiedEmail ? (
                      <>
                        <Check className="w-3 h-3" />
                        <span>COPIED</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3 h-3" />
                        <span>COPY</span>
                      </>
                    )}
                  </button>
                </div>
                <a
                  href={`mailto:${personal.email}`}
                  className="font-mono-tech text-sm sm:text-base text-[#BC96E6] hover:text-[#FFD166] transition-colors flex items-center justify-between font-medium"
                >
                  <span className="truncate">{personal.email}</span>
                  <ArrowUpRight className="w-4 h-4 shrink-0 text-[#FFD166]" />
                </a>
              </div>

              {/* Phone Card */}
              <div className="p-5 bg-[#210B2C] border border-[#BC96E6]/30 hover:border-[#FFD166] transition-colors">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-mono-tech text-[10px] text-[#BC96E6]/70 uppercase font-semibold">
                    TELEPHONE
                  </span>
                  <button
                    onClick={handleCopyPhone}
                    className="flex items-center gap-1 font-mono-tech text-[10px] text-[#FFD166] hover:text-[#BC96E6] transition-colors font-semibold"
                  >
                    {copiedPhone ? (
                      <>
                        <Check className="w-3 h-3" />
                        <span>COPIED</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3 h-3" />
                        <span>COPY</span>
                      </>
                    )}
                  </button>
                </div>
                <a
                  href={`tel:${personal.phone.replace(/[^0-9+]/g, "")}`}
                  className="font-mono-tech text-sm sm:text-base text-[#BC96E6] hover:text-[#FFD166] transition-colors flex items-center justify-between font-medium"
                >
                  <span>{personal.phone}</span>
                  <ArrowUpRight className="w-4 h-4 shrink-0 text-[#FFD166]" />
                </a>
              </div>

              {/* Social Channels */}
              <div className="grid grid-cols-2 gap-4">
                <a
                  href={personal.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 bg-[#210B2C] border border-[#BC96E6]/30 hover:border-[#FFD166] transition-colors flex items-center justify-between group"
                >
                  <div className="flex items-center gap-2">
                    <Linkedin className="w-4 h-4 text-[#FFD166]" />
                    <span className="font-mono-tech text-xs text-[#BC96E6] uppercase font-semibold">
                      LINKEDIN
                    </span>
                  </div>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#BC96E6]/70 group-hover:text-[#FFD166] transition-colors" />
                </a>

                <a
                  href={personal.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 bg-[#210B2C] border border-[#BC96E6]/30 hover:border-[#FFD166] transition-colors flex items-center justify-between group"
                >
                  <div className="flex items-center gap-2">
                    <Github className="w-4 h-4 text-[#FFD166]" />
                    <span className="font-mono-tech text-xs text-[#BC96E6] uppercase font-semibold">
                      GITHUB
                    </span>
                  </div>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#BC96E6]/70 group-hover:text-[#FFD166] transition-colors" />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right: Message Dispatch Form */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45, ease: "easeOut", delay: 0.08 }}
            className="lg:col-span-7 bg-[#210B2C] border border-[#BC96E6]/30 p-6 sm:p-8 md:p-10"
          >
            <div className="flex items-center justify-between pb-4 mb-6 border-b border-[#BC96E6]/30">
              <span className="font-mono-tech text-xs text-[#FFD166] font-bold uppercase">
                SEND MESSAGE
              </span>
              <span className="font-mono-tech text-[10px] text-[#BC96E6]/70">
                STANDARD MAILTO INQUIRY
              </span>
            </div>

            {formSubmitted ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-12 h-12 bg-[#FFD166]/20 border border-[#FFD166] text-[#FFD166] mx-auto flex items-center justify-center">
                  <Check className="w-6 h-6" />
                </div>
                <h4 className="font-display text-2xl text-[#BC96E6] uppercase">
                  MESSAGE DISPATCHED
                </h4>
                <p className="font-mono-tech text-xs text-[#BC96E6]/80 max-w-md mx-auto">
                  Your mail client has been opened with your inquiry details. Alternatively, email directly to {personal.email}.
                </p>
                <button
                  onClick={() => setFormSubmitted(false)}
                  className="px-5 py-2.5 border border-[#BC96E6] text-xs font-mono-tech uppercase text-[#BC96E6] hover:bg-[#BC96E6] hover:text-[#210B2C] transition-colors"
                >
                  SEND ANOTHER MESSAGE
                </button>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block font-mono-tech text-xs text-[#BC96E6]/80 uppercase mb-2 font-semibold">
                      YOUR NAME *
                    </label>
                    <input
                      type="text"
                      required
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      placeholder="e.g. Alex Mercer"
                      className="w-full bg-[#210B2C] border border-[#BC96E6]/40 focus:border-[#FFD166] px-4 py-3 text-sm text-[#BC96E6] font-mono-tech placeholder:text-[#BC96E6]/50 focus:outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block font-mono-tech text-xs text-[#BC96E6]/80 uppercase mb-2 font-semibold">
                      YOUR EMAIL ADDRESS *
                    </label>
                    <input
                      type="email"
                      required
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      placeholder="e.g. alex@company.com"
                      className="w-full bg-[#210B2C] border border-[#BC96E6]/40 focus:border-[#FFD166] px-4 py-3 text-sm text-[#BC96E6] font-mono-tech placeholder:text-[#BC96E6]/50 focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-mono-tech text-xs text-[#BC96E6]/80 uppercase mb-2 font-semibold">
                    PROJECT FOCUS / SUBJECT
                  </label>
                  <input
                    type="text"
                    value={formState.subject}
                    onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                    placeholder="e.g. Full Stack Engineering Role / Project Inquiry"
                    className="w-full bg-[#210B2C] border border-[#BC96E6]/40 focus:border-[#FFD166] px-4 py-3 text-sm text-[#BC96E6] font-mono-tech placeholder:text-[#BC96E6]/50 focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="block font-mono-tech text-xs text-[#BC96E6]/80 uppercase mb-2 font-semibold">
                    PROJECT DETAILS OR MESSAGE *
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    placeholder="Provide details about your project scope, timeline, or engineering opportunity..."
                    className="w-full bg-[#210B2C] border border-[#BC96E6]/40 focus:border-[#FFD166] px-4 py-3 text-sm text-[#BC96E6] font-mono-tech placeholder:text-[#BC96E6]/50 focus:outline-none transition-colors resize-none"
                  />
                </div>

                <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <span className="font-mono-tech text-[10px] text-[#BC96E6]/70">
                    DIRECT EMAIL: {personal.email}
                  </span>

                  <button
                    type="submit"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-[#FFD166] hover:bg-[#FFD166]/90 text-[#210B2C] font-mono-tech text-xs uppercase tracking-wider font-semibold transition-colors duration-150 shadow-lg shadow-[#FFD166]/20"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>SEND MESSAGE</span>
                  </button>
                </div>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
