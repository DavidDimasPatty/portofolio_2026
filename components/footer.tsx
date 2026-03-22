'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Github, Linkedin, Twitter, Mail } from 'lucide-react'

export function Footer() {
  const currentYear = new Date().getFullYear()

  const footerLinks = [
    { label: 'Home', href: '#' },
    { label: 'About', href: '#about' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
  ]

  const socialLinks = [
    { icon: Github, href: 'https://github.com', label: 'GitHub' },
    { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: Twitter, href: 'https://twitter.com', label: 'Twitter' },
    { icon: Mail, href: 'mailto:contact@example.com', label: 'Email' },
  ]

  return (
  <div className='h-screen 
  w-screen py-20 px-6 overflow-y-auto flex-col lg:items-center' id='contact'>
    <div className="max-w-5xl mx-auto px-6 pt-20 pb-16 text-center">

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-5xl font-bold mb-6"
      >
        Let's Build Something Great Together
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="text-muted-foreground max-w-2xl mx-auto mb-8"
      >
        I'm always interested in discussing distributed systems,
        scalable backend architecture, or exciting engineering
        opportunities.
      </motion.p>

      <motion.a
        href="mailto:contact@example.com"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="inline-block px-6 py-3 bg-accent text-black font-medium rounded-lg hover:opacity-90 transition"
      >
        Get In Touch
      </motion.a>

    </div>

    {/* MAIN FOOTER */}
    <div className="max-w-6xl mx-auto px-6 py-12">

      <div className="grid grid-cols-1 md:grid-cols-4 gap-10">

        {/* BRAND */}
        <div>
          <h3 className="text-2xl font-bold">{'<vid />'}</h3>
          <p className="text-muted-foreground text-sm mt-3">
            Senior Backend Engineer specializing in distributed systems,
            microservices architecture, and high-performance infrastructure.
          </p>
        </div>

        {/* NAVIGATION */}
        <div>
          <h4 className="font-semibold mb-4">Navigation</h4>
          <ul className="space-y-2">
            {footerLinks.map(link => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="text-sm text-muted-foreground hover:text-foreground transition"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* RESOURCES */}
        <div>
          <h4 className="font-semibold mb-4">Resources</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><a href="#">Blog</a></li>
            <li><a href="#">Engineering Notes</a></li>
            <li><a href="#">Resume</a></li>
            <li><a href="#">Open Source</a></li>
          </ul>
        </div>

        {/* SOCIAL */}
        <div>
          <h4 className="font-semibold mb-4">Connect</h4>
          <div className="flex gap-3">
            {socialLinks.map(link => (
              <motion.a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                className="p-2 rounded-lg border border-border hover:border-accent hover:text-accent transition"
              >
                <link.icon className="w-4 h-4" />
              </motion.a>
            ))}
          </div>
        </div>

      </div>

      {/* DIVIDER */}
      <div className="border-t border-border my-10" />

      {/* COPYRIGHT */}
      <div className="flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">

        <p>© {currentYear} David Patty. All rights reserved.</p>

        <div className="flex gap-6 mt-4 md:mt-0">
          <a href="#" className="hover:text-foreground">Privacy</a>
          <a href="#" className="hover:text-foreground">Terms</a>
          <a href="#" className="hover:text-foreground">Sitemap</a>
        </div>

      </div>

    </div>

  </div>
  )
}
