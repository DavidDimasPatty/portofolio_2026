"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState, useEffect } from "react";

type NavigationProps = {
  wrapperRef: React.RefObject<HTMLDivElement | null>;
};

export function Navigation({ wrapperRef }: NavigationProps) {

  const [showNav, setShowNav] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {

    const container = wrapperRef.current
    if (!container) return

    const handleScroll = () => {

      const sectionIndex = Math.round(
        container.scrollLeft / window.innerWidth
      )

      setShowNav(sectionIndex === 0)

    }

    container.addEventListener("scroll", handleScroll)

    return () => {
      container.removeEventListener("scroll", handleScroll)
    }

  }, [wrapperRef])

  return (
    <motion.nav
      initial={{ opacity: 0, y: -40 }}
      animate={{
        opacity: showNav ? 1 : 0,
        y: showNav ? 0 : -80,
      }}
      transition={{ duration: 0.35 }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled
          ? "bg-transparent "
          : "bg-transparent"
        }`}
    >

      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">

        <Link
          href="/#"
          className="text-2xl font-bold hover:text-accent transition-colors text-muted-foreground"
        >
          {"<vid />"}
        </Link>

        <a
          href="#contact"
          className="px-4 py-2 rounded-lg bg-accent text-accent-foreground font-medium hover:opacity-90 transition-opacity text-sm"
        >
          Contact
        </a>

      </div>

    </motion.nav>
  );
}