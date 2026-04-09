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
    role: 'Web Developer (Internship)',
    company: 'UNPAR +',
    period: 'AUG 2020 - DEC 2020',
    description: [
      'Assisting in the preparation and development of the UNPAR+ website',
      "Performing problem-solving related to the UNPAR+ website",
    ],
    technologies: ['HTML', 'CSS', "Java Script", 'CMS']
  },
  {
    role: 'Web Developer (Internship)',
    company: 'PT. Akur Pratama (YOGYA GROUP)',
    period: 'JUL 2021 - SEP 2021',
    description: [
      'Building a back-end application used for the new employee recruitmentprocess called YoKerja.',
      'Building a catalog application used for users to view the latestbrochures in Yogya',
      'Utilized GitLab and Jenkins for streamlined CI/CD processes',
      'Utilized PostgreSQL for database'
    ],
    technologies: ['PHP', 'Laravel', 'PostgreSQL']
  },
  {
    role: 'Supervisor Back End Developer',
    company: 'PT. INDOMARCO PRISMATAMA',
    period: 'NOV 2023 - PRESENT',
    description: [
      'Created a website and dashboard dedicated to IT audit (ISO) documentstorage for the company.',
      'Established a scheduler for automated, periodic email dispatches(monthly, weekly, and deadline-driven).',
      'Utilized GitLab, Docker, and Jenkins for streamlined CI/CD processes',
      "Responsible for developing transaction APIs for payment systems using SNAP (Standar Open API Pembayaran Indonesia).",
      "Developed a Central User Management Website and its API to centralizethe account system for the company.",
      "Created Back Office Website For Cashing-In Bonus and Salary for Employee.",
      "Designed and developed internal web services tailored to operational website requirements."
    ],
    technologies: ['.NET', 'C#', 'MongoDB', 'MySQL', 'Python', "PHP", "Laravel", "Linux", "Docker", "Git Hub"]
  }
]

export function Experience() {

  const ref = useRef(null)
  const isInView = useInView(ref, { amount: 0.6 })

  return (
    <section id="experience" ref={ref} className="h-screen
  w-screen
  px-6
  overflow-y-auto
  lg:flex">

      <div className="max-w mx-auto mt-10">

        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-5xl font-bold text-foreground">Professional Journey</h2>
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
                initial={{ opacity: 0, x: 0 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: idx * 0.2 }}
                className="relative lg:flex-1 w-full flex"
              >

                {/* timeline dot */}
                <div className="absolute
left-[-22px]
top-[25px]
w-6
h-6
bg-accent
rounded-full
border-4
border-background
md:-top-[35px]
md:left-[50%]
md:-translate-x-1/2" />

                <div className="bg-background w-full border border-border rounded-xl p-6 hover:border-accent shadow-[0_0_15px_rgba(0,0,0,0.1)] transition-all ml-2 flex flex-col h-full group">

                  <p className="text-sm font-bold tracking-wider text-accent mb-2 uppercase">{exp.period}</p>

                  <h3 className="text-xl md:text-2xl font-bold group-hover:text-accent transition-colors">{exp.role}</h3>

                  <p className="text-muted-foreground/80 font-medium mb-6 mt-1 border-b border-border/50 pb-4">
                    {exp.company}
                  </p>

                  <ul className="space-y-3 mb-6">
                    {exp.description.map((d, i) => (
                      <li key={i} className="text-sm text-muted-foreground/90 flex items-start leading-relaxed">
                        <span className="w-1.5 h-1.5 bg-accent rounded-full mr-3 mt-1.5 shrink-0" />
                        <span>{d}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Spacer to push technologies to the bottom */}
                  <div className="flex-grow" />

                  <div className="flex flex-wrap gap-2 pt-6 mt-auto border-t border-border/30">
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1.5 text-xs font-semibold bg-secondary/10 border border-secondary/20 rounded-full text-secondary"
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