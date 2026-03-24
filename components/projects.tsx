'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { ExternalLink, Github } from 'lucide-react'
import { ProjectCarousel } from '@/components/ui/projectCarrousel'
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
     px-6 mt-auto overflow-y-auto! bg-gray-200 ">

      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-foreground mb-4">Featured Projects</h2>
          <p className="text-xl text-muted-foreground max-w-2xl">
            A selection of impactful systems and solutions built to solve complex technical challenges
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3"
        >
          {projects.map((project, idx) => (
            <motion.div
              key={project.title}
              variants={itemVariants}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="p-8 rounded-xl bg-card border border-border hover:border-accent/50 transition-all duration-300 flex flex-col group"
            >
              {/* Header */}
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-foreground group-hover:text-accent transition-colors mb-3">
                  {project.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  {project.description}
                </p>
                {/* <div className="inline-block px-4 py-2 rounded-lg bg-accent/10 border border-accent/20">
                  <p className="text-sm font-medium text-accent">
                    {project.impact}
                  </p>
                </div> */}
                <ProjectCarousel images={project.images} />
              </div>

              {/* Spacer */}
              <div className="flex-grow" />

              {/* Technologies */}
              <div className="mb-6 pt-6 border-t border-border">
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <motion.span
                      key={tech}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                      className="px-3 py-1 rounded-full bg-secondary/20 text-xs font-medium text-secondary border border-secondary/30"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </div>

              {/* Links */}
              <div className="flex gap-4">
                {project.github && (
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-2 px-4 py-2 rounded-lg border border-border hover:border-accent hover:text-accent transition-colors text-sm font-medium"
                  >
                    <Github className="w-4 h-4" />
                    Code
                  </motion.a>
                )}
                {project.demo && (
                  <motion.a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-2 px-4 py-2 rounded-lg bg-accent/10 border border-accent/30 hover:bg-accent hover:border-accent hover:text-accent-foreground transition-colors text-sm font-medium"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Demo
                  </motion.a>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
