'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

export function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section id="about" ref={ref} className="py-20 px-6 bg-card/50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
        >
          {/* Left side */}
          <motion.div variants={itemVariants}>
            <h2 className="text-5xl md:text-6xl font-bold mb-6 text-foreground">About Me</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p className="text-lg">
                I'm a senior software engineer with 8+ years of experience building robust backend systems and scalable infrastructure for world-class organizations. My passion lies at the intersection of system design, performance optimization, and clean architecture.
              </p>
              <p className="text-lg">
                Currently, I focus on designing and implementing distributed systems that handle millions of transactions per second while maintaining data consistency and reliability.
              </p>
              <p className="text-lg">
                Beyond code, I'm committed to mentoring junior engineers, open-source contributions, and staying ahead of emerging technologies in the fintech and cloud-native space.
              </p>
            </div>
          </motion.div>

          {/* Right side - Stats */}
          <motion.div variants={itemVariants} className="space-y-8">
            <div className="space-y-6">
              {[
                { label: 'Years Experience', value: '8+' },
                { label: 'Projects Delivered', value: '40+' },
                { label: 'Team Members Mentored', value: '25+' },
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                  transition={{ delay: i * 0.1 }}
                  className="pb-6 border-b border-border"
                >
                  <p className="text-sm font-medium text-muted-foreground mb-2">{stat.label}</p>
                  <p className="text-4xl font-bold text-accent">{stat.value}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
