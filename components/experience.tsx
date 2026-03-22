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
      'Architected high-throughput payment system handling 100K+ TPS',
      'Designed microservices infrastructure using Docker & Kubernetes',
      'Implemented distributed tracing improving incident response'
    ],
    technologies: ['Go', 'PostgreSQL', 'Kafka', 'Kubernetes', 'AWS']
  },
  {
    role: 'Lead Software Architect',
    company: 'Big Tech Corporation',
    period: '2019 - 2022',
    description: [
      'Led 12 engineers redesigning infrastructure for 500M+ DAU',
      'Developed API gateway & service mesh',
      'Mentored engineers and defined system design standards'
    ],
    technologies: ['.NET', 'Azure', 'Redis', 'Elastic', 'GraphQL']
  },
  {
    role: 'Full Stack Engineer',
    company: 'Startup',
    period: '2017 - 2019',
    description: [
      'Built real-time analytics infrastructure',
      'Created REST + GraphQL APIs',
      'Implemented CI/CD pipelines'
    ],
    technologies: ['Node.js', 'React', 'MongoDB', 'AWS', 'Docker']
  }
]

export function Experience() {

  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <section id="experience" ref={ref} className="h-screen
  w-screen
  py-20
  px-6
  overflow-y-auto
  touch-pan-y lg:flex items-center bg-gray-200">

      <div className="max-w mx-auto">

        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-5xl font-bold mb-4 text-foreground">Professional Journey</h2>
          <p className="text-xl text-muted-foreground">
            Experience building scalable systems
          </p>
        </motion.div>

        {/* Horizontal timeline */}
        <div className="relative">

          {/* Line */}
          <div className="absolute
left-3
top-0
bottom-0
w-[2px]
left-[-10]
bg-accent/30
md:top-6
md:left-0
md:right-0
md:h-[2px]
md:w-auto

" />

          <div className="  flex
  flex-col
  lg:flex-row
  gap-12
  pb-10
  pt-12">

            {experiences.map((exp, idx) => (

              <motion.div
                key={idx}
                initial={{ opacity: 0, x: 80 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: idx * 0.2 }}
                className="relative
md:min-w-[420px]
w-full"
              >

                {/* timeline dot */}
                <div className="absolute
left-[-22px]
top-25
w-6
h-6
bg-accent
rounded-full
border-4
border-background
md:-top-[35px]
md:left-[50%]" />

                <div className="bg-background border border-border rounded-xl p-6 hover:border-accent transition-all ml-2">

                  <p className="text-sm text-accent mb-1">{exp.period}</p>

                  <h3 className="text-xl font-bold">{exp.role}</h3>

                  <p className="text-muted-foreground mb-4">
                    {exp.company}
                  </p>

                  <ul className="space-y-2 mb-4">
                    {exp.description.map((d, i) => (
                      <li key={i} className="text-sm text-muted-foreground flex">
                        <span className="w-1.5 h-1.5 bg-accent rounded-full mr-2 mt-2" />
                        {d}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-xs border border-border rounded-full text-accent"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                </div>

              </motion.div>

            ))}

          </div>

        </div>

      </div>

    </section>
  )
}