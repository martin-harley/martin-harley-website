"use client"

import { motion } from "framer-motion"

export function AboutSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
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
    <section id="about" className="section-spacing">
      <div className="container-xl">
        <motion.h2
          variants={titleVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="section-title mb-24"
        >
          About
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24"
        >
          <motion.div variants={itemVariants} className="flex flex-col space-y-16">
            <div>
              <p className="body-text text-foreground-secondary">
                Full-stack engineer with a DevOps mindset, focused on building secure, scalable, and production-ready
                systems.
              </p>
            </div>

            <div>
              <p className="body-text text-foreground-secondary">
                Currently engineering FDA- and HIPAA-compliant health tech at{" "}
                <a
                  href="https://perinhealth.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-400 hover:text-green-300 font-medium transition-colors duration-300"
                >
                  Perin Health
                </a>{" "}
                and researching and developing new tools at{" "}
                <a
                  href="http://phasemargin.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-400 hover:text-green-300 font-medium transition-colors duration-300"
                >
                  Phase Margin
                </a>
                .
              </p>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="flex flex-col space-y-6 justify-start">
            <div>
              <p className="body-text text-foreground-secondary">
                I believe in creating work that not only looks good but also solves real problems and delivers
                exceptional user experiences.
              </p>
            </div>

            <div>
              <p className="body-text text-foreground-secondary">
                When I&apos;m not architecting pipelines or coding, I&apos;m at the beach surfing, exploring new cities, or
                creating experimental side projects.
              </p>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mt-16"
        >
          <p className="body-text text-foreground-secondary text-center">
            Open to new opportunities where technical depth and product vision meet.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
