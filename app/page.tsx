"use client";
import { Navigation } from '@/components/navigation'
import { Hero } from '@/components/hero'
import { About } from '@/components/about'
import { Skills } from '@/components/skills'
import { Experience } from '@/components/experience'
import { Projects } from '@/components/projects'
import { Footer } from '@/components/footer'
import { InteractiveBackground } from '@/components/interactiveBackground'
import { useEffect, useRef } from 'react'

const Home = () => {

  const wrapperRef = useRef<HTMLDivElement  | null>(null);
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
      if (e.pointerType === 'touch') return;
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
      if (!isDown || e.pointerType === 'touch') return

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
      <InteractiveBackground />
      <Navigation wrapperRef={wrapperRef} />

      <main className="wrapperAll relative z-10" ref={wrapperRef}>
        <div className="section"><Hero /></div>
        <div className="section"><About /></div>
        <div className="section"><Skills /></div>
        <div className="section"><Experience /></div>
        <div className="section"><Projects /></div>
        <div className="section"><Footer /></div>
      </main>

    </div>
  )
}

export default Home