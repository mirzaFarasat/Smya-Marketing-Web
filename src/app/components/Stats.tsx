'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'
import CountUp from 'react-countup'

interface StatProps {
  number: number
  label: string
  suffix?: string
  prefix?: string
}

function StatCounter({ number, label, suffix = '', prefix = '' }: StatProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const [startCounter, setStartCounter] = useState(false)

  useEffect(() => {
    if (isInView) {
      setStartCounter(true)
    }
  }, [isInView])

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="flex flex-col items-center"
    >
      <motion.div
        className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-[#FF6B6B] to-[#4ECDC4] bg-clip-text text-transparent"
        style={{ fontFamily: 'var(--font-syne)' }}
      >
        {startCounter && (
          <CountUp
            start={0}
            end={number}
            duration={2.5}
            suffix={suffix}
            prefix={prefix}
            separator=","
          />
        )}
      </motion.div>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mt-4 text-lg text-gray-300 font-medium"
      >
        {label}
      </motion.p>
    </motion.div>
  )
}

export default function Stats() {
  const stats = [
    { number: 150, label: 'Projects Completed', suffix: '+' },
    { number: 95, label: 'Happy Clients', suffix: '%' },
    { number: 10, label: 'Years Experience', suffix: '+' },
    { number: 24, label: 'Support Hours', suffix: '/7' },
  ]

  return (
    <section className="relative py-16 md:py-24 px-4 bg-[#0A0F1C] overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute -top-1/2 -left-1/2 h-[120vh] w-[120vw] rounded-full bg-gradient-to-r from-[#FF6B6B] to-[#4ECDC4] opacity-10 blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-2 sm:grid-cols-4 gap-8 md:gap-12"
        >
          {stats.map((stat, index) => (
            <StatCounter
              key={index}
              number={stat.number}
              label={stat.label}
              suffix={stat.suffix}
            />
          ))}
        </motion.div>
      </div>
    </section>
  )
} 