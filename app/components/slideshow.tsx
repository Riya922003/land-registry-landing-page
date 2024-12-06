'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

const images = [
  {
    src: "https://images.fonearena.com/blog/wp-content/uploads/2012/06/Google-Maps-3D.jpg",
    alt: "3D Aerial View of Urban Property"
  },
  {
    src: "https://lh3.googleusercontent.com/po95s-us_e1MCr49s8kdFnsWLmU39eGe9i61ZBbMYqXLpxoaR52h2eH2ZeL4Mw4cRKRcFTOKuu1Fd-jYWiwYSXG2ikoFlZeWovsV-g=rw-e365-w1425",
    alt: "Detailed 3D City Map View"
  },
  {
    src: "/placeholder.svg?height=400&width=800&text=Blockchain+Technology",
    alt: "Blockchain Technology Visualization"
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-yeSYRLWFJTB2gxjQTsgnc2hnk78exB.png",
    alt: "Split View of Urban Map Layouts"
  }
]

export default function Slideshow() {
  const [currentImage, setCurrentImage] = useState(0)
  const [nextImage, setNextImage] = useState(1)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length)
      setNextImage((prevImage) => (prevImage + 1) % images.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="relative h-[400px] w-full border-4 border-slate-800 shadow-lg overflow-hidden">
      {images.map((image, index) => (
        <Image
          key={image.src}
          src={image.src}
          alt={image.alt}
          fill
          className={`object-cover transition-opacity duration-1000 ${
            index === currentImage ? 'opacity-100' : 
            index === nextImage ? 'opacity-0' : 'hidden'
          }`}
        />
      ))}
    </div>
  )
}

