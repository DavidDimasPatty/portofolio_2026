"use client";
import { Navigation } from '@/components/navigation'
import { Hero } from '@/components/hero'
import { About } from '@/components/about'
import { Skills } from '@/components/skills'
import { Experience } from '@/components/experience'
import { Projects } from '@/components/projects'
import { Footer } from '@/components/footer'
import { useEffect, useRef } from 'react'

const Home = () => {

  const wrapperRef = useRef<HTMLElement | null>(null);

  useEffect(() => {

    const wrapper = wrapperRef.current
    if (!wrapper) return

    let isDown = false
    let startX = 0
    let scrollLeft = 0

    const handleWheel = (e: WheelEvent) => {
      wrapper.scrollLeft += e.deltaY
    }

    const handlePointerDown = (e: PointerEvent) => {
      isDown = true
      startX = e.clientX
      scrollLeft = wrapper.scrollLeft
      wrapper.style.cursor = "grabbing"
    }

    const handlePointerUp = () => {
      isDown = false
      wrapper.style.cursor = "grab"
    }

    const handlePointerMove = (e: PointerEvent) => {

      if (!isDown) return

      const walk = (e.clientX - startX) * 2
      wrapper.scrollLeft = scrollLeft - walk
    }

    wrapper.addEventListener("wheel", handleWheel)

    wrapper.addEventListener("pointerdown", handlePointerDown)
    wrapper.addEventListener("pointerup", handlePointerUp)
    wrapper.addEventListener("pointerleave", handlePointerUp)
    wrapper.addEventListener("pointermove", handlePointerMove)

    return () => {

      wrapper.removeEventListener("wheel", handleWheel)

      wrapper.removeEventListener("pointerdown", handlePointerDown)
      wrapper.removeEventListener("pointerup", handlePointerUp)
      wrapper.removeEventListener("pointerleave", handlePointerUp)
      wrapper.removeEventListener("pointermove", handlePointerMove)

    }

  }, [])

  return (
    <div>

      <Navigation />

      <main className="wrapperAll" ref={wrapperRef}>

        <div className="section bg-gray-200"><Hero /></div>
        <div className="section bg-gray-200"><About /></div>
        <div className="section"><Skills /></div>
        <div className="section"><Experience /></div>
        <div className="section"><Projects /></div>
        <div className="section"><Footer /></div>

      </main>

    </div>
  )
}

export default Home