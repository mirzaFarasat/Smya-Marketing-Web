'use client'

import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { useEffect, useState } from 'react'

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const cursorX = useMotionValue(0)
  const cursorY = useMotionValue(0)

  const springConfig = { damping: 25, stiffness: 200 }
  const springX = useSpring(cursorX, springConfig)
  const springY = useSpring(cursorY, springConfig)

  const rotateX = useTransform(springY, [-500, 500], [15, -15])
  const rotateY = useTransform(springX, [-500, 500], [-15, 15])

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e
      const x = clientX - window.innerWidth / 2
      const y = clientY - window.innerHeight / 2
      setMousePosition({ x, y })  
      cursorX.set(x)
      cursorY.set(y)
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-[#0A0F1C]">
      {/* Animated Gradient Blobs */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -top-1/2 -left-1/2 h-[120vh] w-[120vw] rounded-full bg-gradient-to-r from-[#FF6B6B] to-[#4ECDC4] opacity-20 blur-xl"
          style={{
            x: springX,
            y: springY,
            rotateX,
            rotateY,
          }}
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
            borderRadius: ["30% 70% 70% 30% / 30% 30% 70% 70%", "60% 40% 30% 70% / 60% 30% 70% 40%", "30% 70% 70% 30% / 30% 30% 70% 70%"],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        />
        <motion.div
          className="absolute -bottom-1/2 -right-1/2 h-[120vh] w-[120vw] rounded-full bg-gradient-to-r from-[#6B66FF] to-[#FF6B6B] opacity-20 blur-xl"
          style={{
            x: springX,
            y: springY,
            rotateX: rotateX,
            rotateY: rotateY,
          }}
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [90, 0, 90],
            borderRadius: ["60% 40% 30% 70% / 60% 30% 70% 40%", "30% 70% 70% 30% / 30% 30% 70% 70%", "60% 40% 30% 70% / 60% 30% 70% 40%"],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 flex min-h-screen items-center justify-center px-4">
        <div className="max-w-4xl text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-space-grotesk text-4xl font-bold leading-tight text-white sm:text-5xl md:text-6xl lg:text-7xl tracking-tight"
            style={{
              textShadow: '0 0 20px rgba(0,0,0,0.2)',
            }}
          >
            Transform Your{" "}
            <span className="bg-gradient-to-r from-[#FF6B6B] to-[#4ECDC4] bg-clip-text text-transparent">
              Brand Presence
            </span>{" "}
            with 360° Marketing Solutions
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-8 text-lg text-gray-300 sm:text-xl max-w-2xl mx-auto"
          >
            From strategic planning to digital execution, we deliver comprehensive
            marketing services that drive growth, engagement, and measurable ROI
            for businesses of all sizes.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="rounded-full bg-white px-8 py-3 text-lg font-semibold text-[#0A0F1C] transition-all hover:bg-opacity-90 shadow-lg hover:shadow-xl"
            >
              Get Started
            </motion.button>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="rounded-full border border-white px-8 py-3 text-lg font-semibold text-white transition-all hover:bg-white hover:text-[#0A0F1C] shadow-lg hover:shadow-xl"
            >
              Learn More
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
