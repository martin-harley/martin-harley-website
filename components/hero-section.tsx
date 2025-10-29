"use client"

import { motion } from "framer-motion"

export function HeroSection() {

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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
    <section className="min-h-screen flex items-center">
      <div className="container-xl">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div variants={itemVariants} className="mb-16">
            <h1 className="hero-title text-foreground/80 whitespace-normal">MARTIN HARLEY </h1>
          </motion.div>

          <motion.div variants={itemVariants} className="max-w-2xl">
            <p className="hero-subtitle text-foreground-secondary">
              Engineering seamless experiences from Concept to Cloud.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
