"use client"

import { motion } from "framer-motion"

const projects = [
  {
    id: 0,
    title: "Perin Health Devices",
    category: "Work",
    year: "2024",
    description:
      "Full-stack development, database architecture, and quality engineering for a HIPAA-compliant health platform with automated CI/CD.",
    link: "https://www.perinhealth.com",
  },
  {
    id: 1,
    title: "Email Template Generator",
    category: "Project",
    year: "2025",
    description:
      "A modern web app for creating, managing, and previewing email templates with built-in version control, dynamic variables, and live preview",
    link: "https://messages-api-kappa.vercel.app/",
  },
  {
    id: 2,
    title: "TapShelf",
    category: "Project",
    year: "2025",
    description:
      "A tap-to-collect NFC-to-NFT platform for mini figures, combining Swift-powered iOS experiences with a modern Next.js backend.",
    link: "https://pixel-soccer.vercel.app",
  },
  {
    id: 3,
    title: "Data Engineering - GitHub",
    category: "Project",
    year: "2023",
    description:
      "Projects demonstrating data engineering and analytics using SQL, Python, and R.",
    link: "https://github.com/martin-harley/PortfolioProjects",
  },
  {
    id: 4,
    title: "WordLadderWar",
    category: "Game Development",
    year: "2025",
    description:
      "A fast-paced word transformation game with real-time multiplayer and custom dictionaries. Features an elegant interface that makes wordplay addictive.",
    link: "https://word-ladder-war.vercel.app/",
  },
]

export function WorkSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
        ease: [0.25, 0.1, 0.25, 1.0] as const,
      },
    },
  }

  const titleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.1, 0.25, 1.0] as const,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.1, 0.25, 1.0] as const,
      },
    },
  }

  return (
    <section id="work" className="section-spacing">
      <div className="container-xl">
        <motion.h2
          variants={titleVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="section-title mb-24"
        >
          Selected Work
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {projects.map((project) => (
            <motion.div key={project.id} variants={itemVariants}>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group block py-8 border-t border-foreground/10 transition-all duration-500 ease-out"
              >
                <div className="flex items-center justify-between">
                  <h3 className="project-title text-foreground/80 group-hover:text-foreground transition-colors duration-500 ease-out">
                    {project.title}
                  </h3>
                  <div className="meta-text text-foreground-secondary">{project.year}</div>
                </div>

                {/* Project description that appears on hover */}
                <div className="max-h-0 overflow-hidden group-hover:max-h-20 transition-all duration-500 ease-out">
                  <p className="project-description text-foreground-secondary max-w-2xl pt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 ease-out">
                    {project.description}
                  </p>
                </div>
              </a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
