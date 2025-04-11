'use client'

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative bg-gray-900 text-white overflow-hidden min-h-[700px] flex items-center font-sans pt-32">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        {/* Animated Gradient Overlay */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0 bg-gradient-to-r from-gray-900/90 via-gray-900/60 to-gray-900/90"
        />
        {/* Animated Background Elements */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.1 }}
          transition={{ duration: 2, delay: 0.5 }}
          className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-500/20 via-transparent to-transparent"
        />
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-8 py-20 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex-1"
          >
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="inline-flex items-center gap-3 px-5 py-2 bg-gray-800/80 rounded-full mb-8 shadow-md"
            >
              <motion.span 
                className="w-2 h-2 bg-blue-500 rounded-full"
                animate={{ 
                  scale: [1, 1.2, 1],
                  opacity: [1, 0.5, 1]
                }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              <span className="text-sm font-medium text-blue-300 font-open-sans">
                We're Accepting New Projects
              </span>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight font-montserrat tracking-tight"
            >
              Transform Your{" "}
              <motion.span 
                className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300"
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "linear",
                }}
                style={{
                  backgroundSize: "200% 200%",
                }}
              >
                Brand Presence
              </motion.span>{" "}
              with 360° Marketing Solutions
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="text-lg md:text-xl text-gray-200 mb-10 max-w-2xl leading-relaxed font-open-sans"
            >
              From strategic planning to digital execution, we deliver
              comprehensive marketing services that drive growth, engagement, and
              measurable ROI for businesses of all sizes.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="flex flex-col sm:flex-row gap-6"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href="/services"
                  className="relative group bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300 text-center overflow-hidden font-montserrat"
                >
                  <motion.span 
                    className="relative z-10 flex items-center justify-center"
                    whileHover={{ x: 5 }}
                  >
                    Discover Our Solutions
                    <motion.span 
                      className="ml-3 inline-block"
                      animate={{ x: [0, 5, 0] }}
                      transition={{ 
                        duration: 1.5,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    >
                      →
                    </motion.span>
                  </motion.span>
                  <motion.span 
                    className="absolute inset-0 bg-gradient-to-r from-blue-700 to-cyan-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    whileHover={{ opacity: 1 }}
                  />
                </Link>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href="#contact"
                  className="px-8 py-4 rounded-full font-semibold text-lg border-2 border-blue-500 text-blue-300 hover:border-blue-400 hover:text-blue-200 transition-all duration-300 text-center group flex items-center justify-center font-montserrat"
                >
                  <motion.span 
                    className="relative"
                    whileHover={{ x: 5 }}
                  >
                    <motion.span 
                      className="absolute -bottom-1 left-0 w-full h-0.5 bg-blue-400"
                      initial={{ scaleX: 0 }}
                      whileHover={{ scaleX: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                    Schedule Free Consultation
                  </motion.span>
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Hero Image */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex-1 relative mt-10 lg:mt-0"
          >
            <motion.div 
              className="relative w-full max-w-lg mx-auto aspect-[4/3] overflow-hidden rounded-2xl border-4 border-gray-800/50 shadow-2xl"
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 0 30px rgba(59, 130, 246, 0.4)"
              }}
              transition={{ duration: 0.3 }}
            >
              <Image
                src="/images/hero3.jpg"
                alt="Global technology and marketing solutions"
                fill
                className="object-cover"
                priority
              />
              <motion.div 
                className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent"
                whileHover={{ opacity: 0.5 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}