'use client'

import { motion } from 'framer-motion'

export default function About() {
  return (
    <section className="relative py-16 md:py-24 px-6 md:px-12 lg:px-24 bg-gradient-to-b from-white to-gray-50 text-black overflow-hidden font-poppins">
      {/* Add this to your <head> in the main layout file */}
      {/* <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;800&family=Inter:wght@400;500;600&display=swap" rel="stylesheet"> */}

      {/* Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div 
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.1 }}
          transition={{ duration: 2, delay: 0.5 }}
          className="absolute top-10 left-0 w-64 h-64 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl"
        />
        <motion.div 
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.1 }}
          transition={{ duration: 2, delay: 1 }}
          className="absolute bottom-0 right-0 w-80 h-80 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl"
        />
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 md:mb-20"
        >
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-block mb-4 md:mb-6 text-sm font-inter font-medium tracking-widest text-gray-600 uppercase bg-gray-100 px-4 py-1 rounded-full"
          >
            Our Identity
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-6 md:mb-8 leading-tight tracking-tight"
          >
            <motion.span 
              className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600"
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
              Who We Are
            </motion.span>
          </motion.h2>
          <motion.div 
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex justify-center"
          >
            <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full" />
          </motion.div>
        </motion.div>

        {/* Main Content */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 items-start font-inter"
        >
          {/* Mission */}
          <motion.div 
            whileHover={{ scale: 1.03, y: -5 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="bg-white p-6 md:p-8 rounded-3xl shadow-xl border border-gray-100"
          >
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-blue-600 mb-4 md:mb-6 text-4xl md:text-5xl font-poppins font-extrabold tracking-tight"
            >
              01
            </motion.div>
            <h3 className="text-xl md:text-2xl font-poppins font-semibold mb-3 md:mb-4 text-gray-900">Our Mission</h3>
            <p className="text-gray-700 leading-relaxed text-sm md:text-base">
              To empower brands with innovative, results-driven marketing strategies that fuel sustainable growth and measurable success.
            </p>
          </motion.div>

          {/* Core Paragraph */}
          <motion.div 
            whileHover={{ scale: 1.03, y: -5 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="bg-gradient-to-br from-white to-gray-100 p-6 md:p-8 rounded-3xl shadow-xl border border-gray-100"
          >
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-base md:text-lg leading-relaxed text-gray-800 font-medium"
            >
              We&apos;re a <span className="font-poppins font-bold text-blue-600">performance-obsessed</span> marketing agency partnering with bold, visionary brands. By blending <span className="font-poppins font-bold text-purple-600">data-driven insights</span> with <span className="font-poppins font-bold text-pink-600">creative brilliance</span>, we deliver campaigns that captivate and convert.
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="mt-6 md:mt-8 flex justify-center"
            >
              <motion.button 
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 md:px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-poppins font-semibold text-base md:text-lg rounded-full shadow-md hover:shadow-xl transition-all duration-300 flex items-center gap-2 group"
              >
                Discover Our Story
                <motion.span
                  animate={{ x: [0, 5, 0] }}
                  transition={{ 
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  →
                </motion.span>
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Values */}
          <motion.div 
            whileHover={{ scale: 1.03, y: -5 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="bg-white p-6 md:p-8 rounded-3xl shadow-xl border border-gray-100"
          >
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-purple-600 mb-4 md:mb-6 text-4xl md:text-5xl font-poppins font-extrabold tracking-tight"
            >
              02
            </motion.div>
            <h3 className="text-xl md:text-2xl font-poppins font-semibold mb-3 md:mb-4 text-gray-900">Our Values</h3>
            <p className="text-gray-700 leading-relaxed text-sm md:text-base">
              Integrity, innovation, and impact are our cornerstones. We define success by the growth we ignite for our clients.
            </p>
          </motion.div>
        </motion.div>

        {/* Call-to-Action Banner */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-20 bg-gradient-to-r from-blue-600 to-purple-600 p-8 rounded-3xl shadow-2xl text-white text-center font-inter"
        >
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="text-2xl md:text-3xl font-poppins font-bold mb-4 tracking-tight"
          >
            Ready to Transform Your Brand?
          </motion.h3>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 1 }}
            className="text-gray-100 mb-6 leading-relaxed"
          >
            Let&apos;s collaborate to create something extraordinary. Your success starts here.
          </motion.p>
          <motion.button 
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-white text-blue-600 font-poppins font-semibold rounded-full shadow-md hover:bg-gray-100 transition-all duration-300"
          >
            Get in Touch
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}