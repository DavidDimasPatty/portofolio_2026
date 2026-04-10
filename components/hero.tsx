"use client"
import { motion } from 'framer-motion'
import { ArrowDown, ArrowRight } from 'lucide-react'

export function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  }

  return (
    <section className="min-h-screen w-screen flex items-center justify-center pt-20 px-6 relative overflow-hidden">

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.3 }}
        className="max-w-4xl mx-auto text-center"
        transition={{ duration: 1 }}
      >
        {/* Subtitle */}
        <motion.div variants={itemVariants}>
          <span className="inline-block px-4 py-2 rounded-full bg-card border border-border text-accent text-sm font-medium mb-6">
            David Dimas Patty's Portofolio
          </span>
        </motion.div>

        {/* Main heading */}
        <motion.h1
          variants={itemVariants}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight text-white/80 z-20"
        >
          <span className="bg-linear-to-b from-white/90 via-white/100 to-white/20 bg-clip-text text-transparent [-webkit-text-stroke:1px_white] md:[-webkit-text-stroke:2px_white] lg:[-webkit-text-stroke:3px_white]">
            Software
          </span>
          <br />

          <span className="bg-linear-to-r from-accent via-secondary to-accent bg-clip-text text-transparent">
            Engineer
          </span>
        </motion.h1>

        {/* Description */}
        <motion.p
          variants={itemVariants}
          className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed px-4"
        >
          Specializing in distributed systems, microservices architecture, and building scalable APIs for fintech and big tech companies
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
        >
          <motion.a
            href="#projects"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-accent text-accent-foreground rounded-lg font-semibold hover:opacity-90 transition-opacity text-lg"
          >
            View My Work
          </motion.a>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 border-2 border-accent text-accent rounded-lg font-semibold hover:bg-accent hover:text-accent-foreground transition-all text-lg"
          >
            Get In Touch
          </motion.a>
        </motion.div>

        {/* Swipe indicator */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col md:flex-row items-center justify-center gap-4 mt-8"
        >
          <span className="text-xs md:text-sm font-bold tracking-[0.2em] uppercase text-muted-foreground/90 bg-secondary/10 px-6 py-2.5 rounded-full border border-secondary/20 shadow-[0_0_15px_rgba(var(--secondary),0.15)] flex items-center gap-3">
            Swipe to Explore
            <motion.div
              animate={{ x: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
            >
              <ArrowRight className="w-4 h-4 text-accent" />
            </motion.div>
          </span>
        </motion.div>
      </motion.div>
    </section>
  )
}
