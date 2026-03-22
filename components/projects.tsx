'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { ExternalLink, Github } from 'lucide-react'

interface Project {
  title: string
  description: string
  impact: string
  technologies: string[]
  github?: string
  demo?: string
}

const projects: Project[] = [
  {
    title: 'MNIST Hand Writing Recognition',
    description: 'Distributed payment processing system built on microservices architecture, handling concurrent transactions with sub-100ms latency',
    impact: 'Processes 100K+ transactions per second with 99.99% uptime',
    technologies: ['Go', 'PostgreSQL', 'Kafka', 'gRPC', 'Kubernetes'],
    github: 'https://github.com',
    demo: 'https://example.com',
  },
  {
    title: 'Snake Charmer Machine Learning',
    description: 'Event streaming and real-time analytics infrastructure processing millions of events daily with sub-second query response times',
    impact: 'Reduced analytics latency from 5 minutes to under 1 second',
    technologies: ['Node.js', 'Elasticsearch', 'Redis', 'Apache Kafka', 'GraphQL'],
    github: 'https://github.com',
    demo: 'https://example.com',
  },
  {
    title: 'Simple Piano Tiles',
    description: 'End-to-end observability platform with distributed tracing, metrics aggregation, and intelligent alerting for microservices',
    impact: 'Reduced incident detection time from 30 mins to 2 minutes',
    technologies: ['Jaeger', 'Prometheus', 'Grafana', 'Kubernetes', '.NET Core'],
    github: 'https://github.com',
    demo: 'https://example.com',
  },
  {
    title: 'Fraud Detection Engine',
    description: 'ML-powered real-time fraud detection system using streaming data and advanced anomaly detection algorithms',
    impact: 'Detects 95%+ fraud attempts with minimal false positives',
    technologies: ['Python', 'TensorFlow', 'Kafka', 'PostgreSQL', 'Redis'],
    github: 'https://github.com',
    demo: 'https://example.com',
  },
  {
    title: 'Game Development John Lemon',
    description: 'Zero-trust service communication layer with automatic mTLS, traffic management, and sophisticated routing policies',
    impact: 'Enabled seamless communication for 200+ microservices',
    technologies: ['Envoy', 'Istio', 'gRPC', 'Docker', 'Terraform'],
    github: 'https://github.com',
    demo: 'https://example.com',
  },
  {
    title: 'Pelayanan Imam Katolik',
    description: 'Eventually-consistent distributed database synchronization system ensuring data integrity across multiple geographic regions',
    impact: 'Achieves sub-second replication across 5 continents',
    technologies: ['PostgreSQL', 'DynamoDB', 'AWS Lambda', 'EventBridge', 'Terraform'],
    github: 'https://github.com',
    demo: 'https://example.com',
  },
  {
    title: 'AI All in One Website',
    description: 'Eventually-consistent distributed database synchronization system ensuring data integrity across multiple geographic regions',
    impact: 'Achieves sub-second replication across 5 continents',
    technologies: ['PostgreSQL', 'DynamoDB', 'AWS Lambda', 'EventBridge', 'Terraform'],
    github: 'https://github.com',
    demo: 'https://example.com',
  },
  {
    title: 'Wedding Website',
    description: 'Eventually-consistent distributed database synchronization system ensuring data integrity across multiple geographic regions',
    impact: 'Achieves sub-second replication across 5 continents',
    technologies: ['PostgreSQL', 'DynamoDB', 'AWS Lambda', 'EventBridge', 'Terraform'],
    github: 'https://github.com',
    demo: 'https://example.com',
  },
  {
    title: 'Dashboard Website',
    description: 'Eventually-consistent distributed database synchronization system ensuring data integrity across multiple geographic regions',
    impact: 'Achieves sub-second replication across 5 continents',
    technologies: ['PostgreSQL', 'DynamoDB', 'AWS Lambda', 'EventBridge', 'Terraform'],
    github: 'https://github.com',
    demo: 'https://example.com',
  },
  {
    title: 'Company Website',
    description: 'Eventually-consistent distributed database synchronization system ensuring data integrity across multiple geographic regions',
    impact: 'Achieves sub-second replication across 5 continents',
    technologies: ['PostgreSQL', 'DynamoDB', 'AWS Lambda', 'EventBridge', 'Terraform'],
    github: 'https://github.com',
    demo: 'https://example.com',
  },
  {
    title: 'Reel AI Generator',
    description: 'Eventually-consistent distributed database synchronization system ensuring data integrity across multiple geographic regions',
    impact: 'Achieves sub-second replication across 5 continents',
    technologies: ['PostgreSQL', 'DynamoDB', 'AWS Lambda', 'EventBridge', 'Terraform'],
    github: 'https://github.com',
    demo: 'https://example.com',
  },
  {
    title: 'Job Platform App',
    description: 'Eventually-consistent distributed database synchronization system ensuring data integrity across multiple geographic regions',
    impact: 'Achieves sub-second replication across 5 continents',
    technologies: ['PostgreSQL', 'DynamoDB', 'AWS Lambda', 'EventBridge', 'Terraform'],
    github: 'https://github.com',
    demo: 'https://example.com',
  }
]

export function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

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
    <section id="projects" ref={ref} className="h-[100%] py-20 px-6 mt-auto overflow-y-auto! bg-gray-200">
      <div className="max-w mx-auto">
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
                <div className="inline-block px-4 py-2 rounded-lg bg-accent/10 border border-accent/20">
                  <p className="text-sm font-medium text-accent">
                    {project.impact}
                  </p>
                </div>
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
