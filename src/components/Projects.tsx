import React, { useState } from "react";
import { motion } from "motion/react";
import { ArrowUpRight, Github, Eye } from "lucide-react";
import { PORTFOLIO_DATA, ProjectItem } from "../data/portfolio";
import { ProjectCaseStudy } from "./ProjectCaseStudy";

export const Projects: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState<string>("ALL");
  const [activeCaseStudy, setActiveCaseStudy] = useState<ProjectItem | null>(null);

  const filterCategories = [
    { label: "ALL", filter: "ALL" },
    { label: "WEB APPS", filter: "Web" },
    { label: "MOBILE ERP", filter: "Android" },
    { label: "AUTOMATION", filter: "Automation" },
  ];

  const filteredProjects = PORTFOLIO_DATA.projects.filter((project) => {
    if (selectedFilter === "ALL") return true;
    if (selectedFilter === "Web") return project.category.includes("Web") || project.category.includes("Frontend");
    if (selectedFilter === "Android") return project.category.includes("Android");
    if (selectedFilter === "Automation") return project.category.includes("Automation");
    return true;
  });

  return (
    <section id="projects" className="py-20 lg:py-28 border-b border-[#CFC9BF] bg-[#F3EFE7]">
      <div className="w-full px-[4vw] sm:px-[5vw]">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.45, ease: "easeOut" }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-10 border-b border-[#CFC9BF]"
        >
          <div>
            <div className="flex items-center gap-2 font-mono-tech text-xs text-[#D71920] uppercase font-bold mb-2">
              <span>02</span>
              <span>/</span>
              <span>PROJECTS</span>
            </div>
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl text-[#111111] uppercase tracking-tight">
              FEATURED WORK
            </h2>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap items-center gap-2">
            <span className="font-mono-tech text-xs text-[#77736C] uppercase mr-2 hidden sm:inline">
              FILTER:
            </span>
            {filterCategories.map((cat) => (
              <button
                key={cat.label}
                onClick={() => setSelectedFilter(cat.filter)}
                className={`px-3.5 py-1.5 font-mono-tech text-xs uppercase tracking-wider transition-all duration-150 ${
                  selectedFilter === cat.filter
                    ? "bg-[#D71920] text-white font-semibold"
                    : "bg-transparent text-[#4A4A46] hover:text-[#111111] border border-[#CFC9BF] hover:border-[#111111]"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Technical Sub-bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="py-3 border-b border-[#CFC9BF] flex items-center justify-between font-mono-tech text-[11px] text-[#77736C]"
        >
          <span>INDEXED PROJECTS ({filteredProjects.length})</span>
          <span className="hidden sm:inline">CORE DISCIPLINES: REACT • TYPESCRIPT • ANDROID ERP • APPS SCRIPT</span>
        </motion.div>

        {/* Project Editorial Grid */}
        <div className="divide-y divide-[#CFC9BF] border-b border-[#CFC9BF]">
          {filteredProjects.map((project, index) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.06 }}
              className="py-12 lg:py-16 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start group hover:bg-[#EAE5DC]/35 transition-colors px-2 sm:px-4"
            >
              {/* Left Column: Index Number & Meta */}
              <div className="lg:col-span-3 flex flex-row lg:flex-col justify-between items-start">
                <div>
                  <span className="font-mono-tech text-5xl sm:text-6xl lg:text-7xl text-[#DDD7CE] group-hover:text-[#D71920] font-bold transition-colors">
                    {project.number}
                  </span>
                  <div className="mt-3 font-mono-tech text-xs text-[#77736C] uppercase">
                    {project.year && (
                      <>
                        <span>{project.year}</span>
                        <span className="mx-2 text-[#CFC9BF]">/</span>
                      </>
                    )}
                    <span className="text-[#111111] font-medium">{project.role}</span>
                  </div>
                </div>

                <div className="mt-4 hidden lg:block">
                  <span className="inline-block px-2.5 py-1 text-[10px] font-mono-tech uppercase bg-transparent border border-[#BDB7AE] text-[#4A4A46]">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Middle Column: Core Project Narrative & Features */}
              <div className="lg:col-span-6 space-y-4">
                <div>
                  <span className="font-mono-tech text-xs text-[#D71920] uppercase tracking-wider block mb-1 font-semibold">
                    {project.tagline}
                  </span>
                  <h3 className="font-display text-3xl sm:text-4xl lg:text-5xl text-[#111111] uppercase tracking-tight transition-colors">
                    {project.title}
                  </h3>
                </div>

                <p className="text-sm sm:text-base text-[#4A4A46] leading-relaxed">
                  {project.description}
                </p>

                {/* Key Capabilities Bullet Points */}
                <div className="space-y-2 pt-2">
                  {project.features.slice(0, 3).map((feat, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#333333]">
                      <span className="text-[#D71920] font-bold font-mono-tech mt-0.5">•</span>
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>

                {/* Tech Chips */}
                <div className="flex flex-wrap gap-2 pt-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 font-mono-tech text-[11px] uppercase bg-transparent border border-[#BDB7AE] text-[#222222] tracking-wider"
                    >
                      +{tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Right Column: Interactive Actions */}
              <div className="lg:col-span-3 flex flex-col justify-between items-start lg:items-end h-full gap-4 pt-2">
                <button
                  onClick={() => setActiveCaseStudy(project)}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#D71920] hover:bg-[#A80F15] text-white font-mono-tech text-xs uppercase tracking-wider font-semibold transition-colors duration-150 group/btn"
                >
                  <Eye className="w-3.5 h-3.5" />
                  <span>VIEW CASE STUDY</span>
                  <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                </button>

                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 bg-transparent border border-[#111111] hover:bg-[#111111] text-[#111111] hover:text-white font-mono-tech text-xs uppercase tracking-wider font-medium transition-colors duration-150"
                >
                  <Github className="w-3.5 h-3.5" />
                  <span>REPOSITORY</span>
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      {/* Case Study Modal Component */}
      <ProjectCaseStudy
        project={activeCaseStudy}
        onClose={() => setActiveCaseStudy(null)}
      />
    </section>
  );
};
