import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { twMerge } from "tailwind-merge"

export function ProjectCarousel({ images, onClickImage, className }: { images: string[], onClickImage?: () => void, className?: string }) {

    const [index, setIndex] = useState(0)

    const next = () => {
        setIndex((prev) => (prev + 1) % images.length)
    }

    const prev = () => {
        setIndex((prev) => (prev - 1 + images.length) % images.length)
    }

    return (
        <div className={twMerge("relative w-full h-48 rounded-lg overflow-hidden border border-border mb-4", className)}>

            <motion.div
                animate={{ x: `-${index * 100}%` }}
                transition={{ duration: 0.4 }}
                className="flex w-full h-full"
            >
                {images.map((media, i) => {

                    const isVideo = media.endsWith(".mp4") || media.endsWith(".webm")

                    return (
                        <div key={i} className="relative min-w-full h-full cursor-pointer" onClick={onClickImage}>

                            {isVideo ? (
                                <video
                                    src={media}
                                    className="w-full h-full object-cover"
                                    autoPlay
                                    muted
                                    loop
                                    playsInline
                                />
                            ) : (
                                <Image
                                    src={media}
                                    alt="project screenshot"
                                    fill
                                    className="object-cover"
                                />
                            )}

                        </div>
                    )
                })}
            </motion.div>

            {/* left button */}
            <button
                onClick={prev}
                className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/40 backdrop-blur p-2 rounded-full"
            >
                <ChevronLeft className="w-4 h-4 text-white" />
            </button>

            {/* right button */}
            <button
                onClick={next}
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/40 backdrop-blur p-2 rounded-full"
            >
                <ChevronRight className="w-4 h-4 text-white" />
            </button>

        </div>
    )
}