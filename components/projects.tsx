'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useState, useRef } from 'react'
import { ExternalLink, Github } from 'lucide-react'
import { ProjectCarousel } from '@/components/ui/projectCarrousel'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog'
interface Project {
  title: string
  description: string
  images: string[]
  technologies: string[]
  github?: string
  demo?: string
}

const projects: Project[] = [
  {
    title: 'MNIST Hand Writing Recognition',
    description: 'The MNIST Handwriting Recognition project is a remarkable demonstration of the potential of deep learning techniques in the field of image classification. Built using the Python programming language and leveraging the MNIST dataset, this project aims to create a model capable of accurately identifying handwritten digits with remarkable precision.',
    images: [
      "/projects/mnist1.jfif",
      "/projects/mnist2.jfif"
    ],
    technologies: ['Python'],
    github: 'https://github.com',
    demo: 'https://example.com',
  },
  {
    title: 'Snake Charmer Machine Learning',
    description: 'Snake Charmer is a program from a machine learning project using the Java programming language. The challenge in creating this program was to design the machine learning code to find the best path (score) that a snake can take from the starting point to the endpoint. This program was developed to fulfill one of the computer science project coursework.',
    images: [
      "/projects/snake1.jfif",
    ],
    technologies: ['Java'],
    github: 'https://github.com',
    demo: 'https://example.com',
  },
  {
    title: 'Simple Piano Tiles',
    description: 'The Simple Piano Tiles project stands as a culmination of ingenuity and technical proficiency, developed using the versatile Android Studio platform and crafted with the Java programming language',
    images: [
      "/projects/piano1.jfif",
      "/projects/piano2.jfif"
    ],
    technologies: ['OOP', 'Java', 'Android Studio'],
    github: 'https://github.com',
    demo: 'https://example.com',
  },
  {
    title: 'Game Development John Lemon',
    description: 'The John Lemon game project stands as a testament to the fusion of creativity and technical skill, brought to life using the powerful Unity game engine and programmed in the C# programming language. The successful completion of this project not only fulfilled academic requirements but also resulted in the acquisition of a prestigious certificate in Unity 3D Game Development from Sangnila',
    images: [
      "/projects/game1.jfif",
      "/projects/game2.jfif",
    ],
    technologies: ['C++', "Unity"],
    github: 'https://github.com',
    demo: 'https://example.com',
  },
  {
    title: 'Pelayanan Imam Katolik',
    description: 'Pelayanan Imam Katolik Application represents an innovative solution utilizing the Flutter framework to facilitate the sacrament reservation process within the Catholic Church. This application aims to streamline the process of reserving sacraments such as baptism, communion, and various other ceremonies for parishioners.',
    images: [
      "/projects/pelayanan1.jfif",
      "/projects/pelayanan2.jfif",
      "/projects/pelayanan3.jfif"
    ],
    technologies: ['OOP', "Multi-agent Systems", "Dart", "Web Services API", "MongoDB", "Flutter"],
    github: 'https://github.com',
    demo: 'https://example.com',
  },
  {
    title: 'AI All in One Website',
    description: 'Eventually-consistent distributed database synchronization system ensuring data integrity across multiple geographic regions',
    images: [
      "/projects/aiallinone1.png",
      "/projects/aiallinone2.png"
    ],
    technologies: ['PostgreSQL', 'DynamoDB', 'AWS Lambda', 'EventBridge', 'Terraform'],
    github: 'https://github.com',
    demo: 'https://example.com',
  },
  {
    title: 'Wedding Website',
    description: 'Eventually-consistent distributed database synchronization system ensuring data integrity across multiple geographic regions',
    images: [
      "/projects/wedding1.png",
      "/projects/wedding2.png",
      "/projects/wedding3.png"
    ],
    technologies: ['PostgreSQL', 'DynamoDB', 'AWS Lambda', 'EventBridge', 'Terraform'],
    github: 'https://github.com',
    demo: 'https://example.com',
  },
  {
    title: 'Dashboard Website',
    description: 'Eventually-consistent distributed database synchronization system ensuring data integrity across multiple geographic regions',
    images: [
      "/projects/dashboard1.png",
      "/projects/dashboard2.png",
      "/projects/dashboard3.png"
    ],
    technologies: ['PostgreSQL', 'DynamoDB', 'AWS Lambda', 'EventBridge', 'Terraform'],
    github: 'https://github.com',
    demo: 'https://example.com',
  },
  {
    title: 'Company Website',
    description: 'Eventually-consistent distributed database synchronization system ensuring data integrity across multiple geographic regions',
    images: [
      "/projects/company1.png",
      "/projects/company2.png",
      "/projects/company3.png"
    ],
    technologies: ['PostgreSQL', 'DynamoDB', 'AWS Lambda', 'EventBridge', 'Terraform'],
    github: 'https://github.com',
    demo: 'https://example.com',
  },
  {
    title: 'Reel AI Generator',
    description: 'Eventually-consistent distributed database synchronization system ensuring data integrity across multiple geographic regions',
    images: [
      "/projects/reels1.mp4",
      "/projects/reels2.mp4",
    ],
    technologies: ['PostgreSQL', 'DynamoDB', 'AWS Lambda', 'EventBridge', 'Terraform'],
    github: 'https://github.com',
    demo: 'https://example.com',
  },
  {
    title: 'Job Platform App',
    description: 'Eventually-consistent distributed database synchronization system ensuring data integrity across multiple geographic regions',
    images: [
      "/projects/jobplatform1.png",
      "/projects/jobplatform2.png",
      "/projects/jobplatform3.png",
      "/projects/jobplatform4.png",
    ],
    technologies: ['PostgreSQL', 'DynamoDB', 'AWS Lambda', 'EventBridge', 'Terraform'],
    github: 'https://github.com',
    demo: 'https://example.com',
  },
  {
    title: 'Valentine Website',
    description: 'Eventually-consistent distributed database synchronization system ensuring data integrity across multiple geographic regions',
    images: [
      "/projects/valentine1.png",
      "/projects/valentine2.png",
      "/projects/valentine3.png"
    ],
    technologies: ['PostgreSQL', 'DynamoDB', 'AWS Lambda', 'EventBridge', 'Terraform'],
    github: 'https://github.com',
    demo: 'https://example.com',
  }
]

export function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { amount: 0.2 })
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section id="projects" ref={ref} className="h-screen w-screen py-20 
     px-6 mt-auto overflow-y-auto w-full">

      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4">Featured Projects</h2>
          <p className="text-xl text-muted-foreground max-w-2xl">
            A selection of impactful systems and solutions built to solve complex technical challenges
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"
        >
          {projects.map((project, idx) => (
            <motion.div
              key={project.title}
              variants={itemVariants}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="rounded-xl overflow-hidden bg-card border border-border hover:border-accent/50 transition-all duration-300 flex flex-col group"
            >
              {/* Top Image Carousel */}
              <div className="w-full">
                <ProjectCarousel 
                  images={project.images} 
                  onClickImage={() => setSelectedProject(project)} 
                  className="rounded-none border-x-0 border-t-0 mb-0 h-48 sm:h-56"
                />
              </div>

              {/* Card Body */}
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl sm:text-2xl font-bold text-foreground group-hover:text-accent transition-colors mb-2 line-clamp-1">
                  {project.title}
                </h3>
                
                <p className="text-sm text-muted-foreground leading-relaxed mb-4 line-clamp-3">
                  {project.description}
                </p>

                {/* Spacer pushes technologies to bottom uniformly */}
                <div className="flex-grow" />

                {/* Technologies */}
                <div className="pt-4 mt-2 border-t border-border/50">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.slice(0, 4).map((tech) => (
                      <motion.span
                        key={tech}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                        className="px-2.5 py-1 rounded-md bg-secondary/10 text-[11px] font-semibold text-secondary-foreground border border-secondary/20"
                      >
                        {tech}
                      </motion.span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="px-2.5 py-1 rounded-md bg-muted/30 text-[11px] font-semibold text-muted-foreground border border-border/50">
                        +{project.technologies.length - 4}
                      </span>
                    )}
                  </div>
                </div>

                {/* Footer Links (if needed in card) */}
                {(project.github || project.demo) && (
                  <div className="flex gap-3 pt-4 mt-4">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex justify-center items-center gap-1.5 px-3 py-2 rounded-lg border border-border hover:border-foreground hover:bg-foreground/5 transition-all text-xs font-bold"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <Github className="w-3.5 h-3.5" /> Code
                      </a>
                    )}
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex justify-center items-center gap-1.5 px-3 py-2 rounded-lg bg-accent/10 border border-accent/20 hover:bg-accent hover:text-accent-foreground transition-all text-xs font-bold text-accent"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <ExternalLink className="w-3.5 h-3.5" /> Demo
                      </a>
                    )}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <Dialog open={!!selectedProject} onOpenChange={(open) => !open && setSelectedProject(null)}>
        <DialogContent className="max-w-[95vw] sm:max-w-[95vw] md:max-w-[90vw] lg:max-w-7xl w-[95vw] md:w-[90vw] lg:w-[85vw] h-[90vh] md:h-[85vh] p-0 overflow-hidden bg-card/80 backdrop-blur-2xl border border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.5)] rounded-2xl flex flex-col">
          {selectedProject && (
            <div className="flex flex-col md:flex-row h-full w-full">
              {/* Left Side: Images, Full Bleed */}
              <div className="w-full md:w-1/2 h-[35vh] md:h-full relative shrink-0">
                <ProjectCarousel 
                  images={selectedProject.images} 
                  className="h-full w-full mb-0 rounded-none border-none"
                />
              </div>

              {/* Right Side: Details */}
              <div className="w-full md:w-1/2 p-6 md:p-10 flex flex-col overflow-y-auto bg-gradient-to-b from-transparent to-background/50 flex-grow">
                <DialogHeader className="mb-4 md:mb-6 shrink-0 mt-4 md:mt-0">
                  <DialogTitle className="text-2xl md:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white to-white/60 mb-2">
                    {selectedProject.title}
                  </DialogTitle>
                </DialogHeader>

                <div className="flex-grow">
                  <h4 className="text-sm uppercase tracking-wider font-bold text-accent mb-3">About Project</h4>
                  <DialogDescription className="text-base text-muted-foreground/90 leading-relaxed mb-8">
                    {selectedProject.description}
                  </DialogDescription>

                  <h4 className="text-sm uppercase tracking-wider font-bold text-accent mb-4">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2 mb-10">
                    {selectedProject.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-4 py-1.5 rounded-full bg-secondary/10 text-xs font-semibold text-secondary-foreground border border-secondary/20 shadow-[0_0_10px_rgba(var(--secondary),0.1)] relative overflow-hidden group"
                      >
                        <span className="absolute inset-0 bg-gradient-to-r from-secondary/0 via-secondary/10 to-secondary/0 opacity-0 group-hover:opacity-100 transition-opacity animate-pulse"></span>
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Links inside modal */}
                <div className="flex flex-col sm:flex-row gap-4 pt-6 mt-auto border-t border-border/50">
                  {selectedProject.demo && (
                    <a
                      href={selectedProject.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex justify-center items-center gap-2 px-6 py-3 rounded-xl bg-accent text-accent-foreground shadow-[0_0_20px_rgba(var(--accent),0.3)] hover:shadow-[0_0_30px_rgba(var(--accent),0.6)] hover:-translate-y-1 transition-all duration-300 text-sm font-bold"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Live Demo
                    </a>
                  )}
                  {selectedProject.github && (
                    <a
                      href={selectedProject.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex justify-center items-center gap-2 px-6 py-3 rounded-xl border border-white/10 hover:border-white/30 bg-white/5 hover:bg-white/10 transition-all duration-300 text-sm font-bold text-foreground hover:-translate-y-1"
                    >
                      <Github className="w-4 h-4" />
                      View Source
                    </a>
                  )}
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  )
}
