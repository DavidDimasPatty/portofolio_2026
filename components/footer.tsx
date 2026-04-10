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
    { icon: Mail, href: 'mailto:ddimaspatty@gmail.com', label: 'Email' },
  ]

  return (
    <section className='w-full h-full py-8 md:py-16 px-4 md:px-6 overflow-y-auto flex flex-col justify-start' id='contact'>

      {/* CTA Card Section */}
      <div className="max-w-5xl mx-auto w-full mb-8 md:mb-16 relative mt-10 md:mt-0 shrink-0">
        {/* Glow effect behind card */}
        <div className="absolute inset-0 bg-gradient-to-r from-accent/20 via-transparent to-secondary/20 blur-3xl -z-10 rounded-3xl" />

        <div className="bg-card/40 backdrop-blur-xl border border-white/10 rounded-2xl md:rounded-[2rem] p-6 sm:p-10 md:p-16 text-center shadow-[0_0_50px_rgba(0,0,0,0.3)]">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 md:mb-6 text-transparent bg-clip-text bg-gradient-to-r from-white via-white/90 to-white/60"
          >
            Let's Build Something <br className="hidden sm:block" /> Great Together
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-muted-foreground/90 max-w-2xl mx-auto mb-10 leading-relaxed font-medium"
          >
            I'm always interested in discussing distributed systems, scalable backend architecture, or exciting engineering opportunities.
          </motion.p>

          <motion.a
            href="mailto:ddimaspatty@gmail.com?subject=Halo%20David%20Patty"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-accent to-accent/80 text-accent-foreground font-bold rounded-xl shadow-[0_0_30px_rgba(var(--accent),0.4)] hover:shadow-[0_0_40px_rgba(var(--accent),0.6)] transition-all duration-300 text-lg"
          >
            <Mail className="w-5 h-5" />
            Get In Touch
          </motion.a>
        </div>
      </div>

      {/* MAIN FOOTER */}
      <div className="max-w-6xl mx-auto w-full px-6 py-8 bg-black/20 backdrop-blur-md rounded-3xl border border-white/5 shrink-0 mt-auto mb-10 md:mb-0">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">

          {/* BRAND */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-accent to-secondary flex items-center justify-center font-bold text-white shadow-lg">D</div>
              <h3 className="text-xl font-bold tracking-wider">DAVID</h3>
            </div>
            <p className="text-muted-foreground/80 text-sm leading-relaxed mb-6 font-medium">
              Software Engineer specializing in distributed systems, microservices architecture, and high-performance infrastructure.
            </p>
            {/* SOCIAL */}
            <div className="flex gap-3">
              {socialLinks.map(link => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="p-2.5 rounded-lg border border-white/10 bg-white/5 hover:border-accent hover:bg-accent/10 hover:text-accent transition-all duration-300 text-muted-foreground shadow-sm"
                >
                  <link.icon className="w-4 h-4" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* NAVIGATION */}
          <div>
            <h4 className="text-sm font-bold tracking-[0.15em] uppercase text-foreground mb-6 flex items-center lg:justify-center gap-2">
              <span className="w-2 h-2 rounded-full bg-accent" /> Navigation
            </h4>
            <ul className="space-y-3 justify-items-start lg:flex flex-row justify-center gap-4">
              {footerLinks.map(link => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm font-medium text-muted-foreground/80 hover:text-accent transition-colors flex items-center justify-start gap-2 group"
                  >
                    <span className="w-0 h-0.5 bg-accent transition-all group-hover:w-3" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* RESOURCES */}
          {/* <div>
            <h4 className="text-sm font-bold tracking-[0.15em] uppercase text-foreground mb-6 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-secondary" /> Resources
            </h4>
            <ul className="space-y-3">
              {[
                { label: 'Blog', href: '#' },
                { label: 'Engineering Notes', href: '#' },
                { label: 'Resume', href: '#' },
                { label: 'Open Source', href: '#' }
              ].map(link => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm font-medium text-muted-foreground/80 hover:text-secondary transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div> */}

          {/* CONTACT INFO */}
          <div>
            <h4 className="text-sm font-bold tracking-[0.15em] uppercase text-foreground mb-6 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-white/80" /> Contact
            </h4>
            <ul className="space-y-4 text-sm font-medium text-muted-foreground/80">
              <li>Based in Jakarta, Indonesia</li>
              <li>Available for remote work worldwide</li>
              <li>
                <a href="mailto:ddimaspatty@gmail.com" className="text-accent hover:underline decoration-accent/50 underline-offset-4">
                  ddimaspatty@gmail.com
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* DIVIDER */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent my-8" />

        {/* COPYRIGHT */}
        <div className="flex flex-col md:flex-row justify-between items-center text-xs text-muted-foreground/60 font-medium">
          <p>© {currentYear} David Dimas Patty. All rights reserved.</p>

        </div>

      </div>

    </section>
  )
}
