'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

interface ExperienceItem {
  role: string
  company: string
  period: string
  description: string[]
  technologies: string[]
}

const experiences: ExperienceItem[] = [
  {
    role: 'Senior Backend Engineer',
    company: 'FinTech Innovation Labs',
    period: '2022 - Present',
    description: [
      'Architected and led the development of a high-throughput payment processing system handling 100K+ transactions per second',
      'Designed microservices infrastructure using Docker and Kubernetes, reducing operational costs by 40%',
      'Implemented distributed tracing and monitoring solutions, improving incident response time by 60%'
    ],
    technologies: ['Go', 'PostgreSQL', 'Kafka', 'Kubernetes', 'AWS']
  },
  {
    role: 'Lead Software Architect',
    company: 'Big Tech Corporation',
    period: '2019 - 2022',
    description: [
      'Led a team of 12 engineers in redesigning core infrastructure supporting 500M+ daily active users',
      'Developed comprehensive API gateway and service mesh solutions',
      'Mentored junior developers and established best practices for system design across the organization'
    ],
    technologies: ['.NET Core', 'Azure', 'Redis', 'Elasticsearch', 'GraphQL']
  },
  {
    role: 'Full Stack Engineer',
    company: 'Growth Stage Startup',
    period: '2017 - 2019',
    description: [
      'Built scalable backend infrastructure for real-time analytics platform processing 1M+ events daily',
      'Developed RESTful and GraphQL APIs serving 10M+ requests per day',
      'Established CI/CD pipelines and improved deployment frequency from monthly to multiple times daily'
    ],
    technologies: ['Node.js', 'React', 'MongoDB', 'AWS Lambda', 'Docker']
  },
]

export function Experience() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
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
    <section id="experience" ref={ref} className="py-20 px-6 bg-card/50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-foreground mb-4">Professional Journey</h2>
          <p className="text-xl text-muted-foreground max-w-2xl">
            A track record of building impactful systems and leading high-performing teams
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="space-y-8"
        >
          {experiences.map((exp, idx) => (
            <motion.div
              key={`${exp.company}-${idx}`}
              variants={itemVariants}
              className="relative pl-8 pb-8 border-l-2 border-accent/30 hover:border-accent/60 transition-colors"
            >
              {/* Timeline dot */}
              <div className="absolute -left-4 top-0 w-6 h-6 bg-accent rounded-full border-4 border-background" />

              {/* Content */}
              <div className="group">
                <div className="mb-4">
                  <p className="text-sm font-medium text-accent mb-1">{exp.period}</p>
                  <h3 className="text-2xl font-bold text-foreground group-hover:text-accent transition-colors">{exp.role}</h3>
                  <p className="text-lg text-muted-foreground">{exp.company}</p>
                </div>

                <ul className="space-y-3 mb-6">
                  {exp.description.map((desc, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                      transition={{ delay: idx * 0.1 + i * 0.05 }}
                      className="text-muted-foreground leading-relaxed flex items-start"
                    >
                      <span className="inline-block w-1.5 h-1.5 bg-accent/50 rounded-full mt-2 mr-3 flex-shrink-0" />
                      <span>{desc}</span>
                    </motion.li>
                  ))}
                </ul>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech) => (
                    <motion.span
                      key={tech}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                      className="px-3 py-1 rounded-full bg-background border border-border text-xs font-medium text-accent"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
