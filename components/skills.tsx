'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

interface SkillCategory {
  category: string
  skills: string[]
}

const skillCategories: SkillCategory[] = [
  {
    category: 'Backend',
    skills: ['.NET / ASP.NET', 'Node.js', 'REST API', 'GraphQL', 'Microservices', 'Message Queue', 'gRPC']
  },
  {
    category: 'Frontend',
    skills: ['React', 'Next.js', 'TypeScript', 'Vue.js', 'Tailwind CSS', 'State Management']
  },
  {
    category: 'Database',
    skills: ['MySQL', 'PostgreSQL', 'MongoDB', 'Redis', 'Elasticsearch', 'DynamoDB']
  },
  {
    category: 'Infrastructure',
    skills: ['Docker', 'Kubernetes', 'Linux', 'AWS', 'CI/CD', 'Terraform', 'Cloud Architecture']
  },
]

export function Skills() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  return (
    <section id="skills" ref={ref} className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-foreground mb-4">Technical Skills</h2>
          <p className="text-xl text-muted-foreground max-w-2xl">
            A comprehensive toolkit built through years of experience across various domains and technologies
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {skillCategories.map((category, idx) => (
            <motion.div
              key={category.category}
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -5 }}
              className="p-6 rounded-xl bg-card border border-border hover:border-accent/50 transition-all duration-300 cursor-pointer group"
            >
              <h3 className="text-lg font-bold text-foreground mb-4 group-hover:text-accent transition-colors">
                {category.category}
              </h3>
              <div className="space-y-3">
                {category.skills.map((skill) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, x: -10 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                    transition={{ delay: idx * 0.1 }}
                    className="text-sm text-muted-foreground group-hover:text-foreground transition-colors flex items-center"
                  >
                    <span className="w-1.5 h-1.5 bg-accent rounded-full mr-3" />
                    {skill}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
