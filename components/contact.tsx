'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { Mail, Linkedin, Github, Twitter } from 'lucide-react'

export function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })
  const [formState, setFormState] = useState({ name: '', email: '', message: '' })

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

  const socialLinks = [
    { icon: Mail, label: 'Email', href: 'mailto:contact@example.com', color: 'hover:text-accent' },
    { icon: Linkedin, label: 'LinkedIn', href: 'https://linkedin.com', color: 'hover:text-accent' },
    { icon: Github, label: 'GitHub', href: 'https://github.com', color: 'hover:text-accent' },
    { icon: Twitter, label: 'Twitter', href: 'https://twitter.com', color: 'hover:text-accent' },
  ]

  return (
    <section id="contact" ref={ref} className="py-20 px-6 bg-card/50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-foreground mb-4">Let's Work Together</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Have an exciting project or opportunity? I'd love to hear from you. Let's build something great together.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-2 gap-12"
        >
          {/* Contact Form */}
          <motion.div variants={itemVariants} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                Full Name
              </label>
              <motion.input
                whileFocus={{ scale: 1.02 }}
                type="text"
                id="name"
                placeholder="John Doe"
                value={formState.name}
                onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-accent focus:outline-none transition-colors"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                Email Address
              </label>
              <motion.input
                whileFocus={{ scale: 1.02 }}
                type="email"
                id="email"
                placeholder="john@example.com"
                value={formState.email}
                onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-accent focus:outline-none transition-colors"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                Message
              </label>
              <motion.textarea
                whileFocus={{ scale: 1.02 }}
                id="message"
                placeholder="Tell me about your project..."
                rows={5}
                value={formState.message}
                onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                className="w-full px-4 py-3 rounded-lg bg-background border border-border focus:border-accent focus:outline-none transition-colors resize-none"
              />
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full px-8 py-4 bg-accent text-accent-foreground rounded-lg font-semibold hover:opacity-90 transition-opacity"
            >
              Send Message
            </motion.button>
          </motion.div>

          {/* Contact Info */}
          <motion.div variants={itemVariants} className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Get In Touch</h3>
              <p className="text-muted-foreground leading-relaxed mb-8">
                I'm actively looking for new opportunities to solve challenging problems and create exceptional software. Whether you have a question or just want to say hi, feel free to reach out!
              </p>
            </div>

            {/* Direct Contact */}
            <div className="space-y-4">
              <div className="p-4 rounded-lg bg-background border border-border hover:border-accent/50 transition-colors">
                <p className="text-sm text-muted-foreground mb-1">Email</p>
                <a href="mailto:contact@example.com" className="text-lg font-semibold text-foreground hover:text-accent transition-colors">
                  contact@example.com
                </a>
              </div>
              <div className="p-4 rounded-lg bg-background border border-border hover:border-accent/50 transition-colors">
                <p className="text-sm text-muted-foreground mb-1">Location</p>
                <p className="text-lg font-semibold text-foreground">San Francisco, CA</p>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <p className="text-sm font-medium text-muted-foreground mb-4">Follow Me</p>
              <div className="flex gap-4">
                {socialLinks.map((link) => (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.2, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                    className={`p-3 rounded-lg bg-card border border-border ${link.color} transition-colors`}
                    title={link.label}
                  >
                    <link.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
