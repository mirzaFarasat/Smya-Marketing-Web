"use client"

import { ArrowRight, BarChart, Globe, Megaphone, PenTool, Share2, Users } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"

export default function ServicesPage() {
  const services = [
    {
      icon: <Globe className="h-12 w-12 text-teal-600" />,
      title: "Digital Marketing",
      description:
        "Boost your online impact with cutting-edge strategies that drive traffic, engagement, and conversions.",
      accentColor: "teal-600",
    },
    {
      icon: <Share2 className="h-12 w-12 text-purple-600" />,
      title: "Social Media Management",
      description:
        "Grow your audience and amplify your brand with expert social media management that delivers results.",
      accentColor: "purple-600",
    },
    {
      icon: <Users className="h-12 w-12 text-orange-600" />,
      title: "Influencer Marketing",
      description:
        "Tap into influential voices to expand your reach and build trust with your target audience.",
      accentColor: "orange-600",
    },
    {
      icon: <PenTool className="h-12 w-12 text-blue-600" />,
      title: "Content Creation",
      description:
        "Stand out with bold, creative content that captures attention and tells your brand\'s story.",
      accentColor: "blue-600",
    },
    {
      icon: <BarChart className="h-12 w-12 text-green-600" />,
      title: "Analytics & Reporting",
      description:
        "Gain clarity with precise analytics and actionable insights to supercharge your campaigns.",
      accentColor: "green-600",
    },
    {
      icon: <Megaphone className="h-12 w-12 text-red-600" />,
      title: "Brand Strategy",
      description:
        "Shape a powerful brand identity that cuts through the noise and connects with your market.",
      accentColor: "red-600",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.4,
        ease: "easeOut",
      },
    },
  }

  const cardVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.4,
        ease: "easeOut",
      },
    },
    hover: {
      y: -5,
      transition: {
        duration: 0.2,
      },
    },
  }

  return (
    <div className="bg-white min-h-screen font-sans">
      <section className="container mx-auto px-8 py-24 md:py-32">
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="max-w-4xl mx-auto mb-20 text-center"
        >
          <motion.h1 
            variants={itemVariants}
            className="text-5xl md:text-6xl font-bold mb-6 text-gray-900 font-montserrat tracking-tight"
          >
            Unleash Your Brand\'s{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-purple-600">
              Potential
            </span>
          </motion.h1>
          <motion.p 
            variants={itemVariants}
            className="text-xl md:text-2xl text-gray-700 leading-relaxed max-w-3xl mx-auto font-open-sans"
          >
            We\'re a marketing agency that turns ideas into impact with innovative, results-driven solutions.
          </motion.p>
        </motion.div>

        <motion.div 
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 max-w-7xl mx-auto"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover="hover"
              className="bg-white p-8 rounded-lg shadow-md border border-gray-100 hover:shadow-lg group relative overflow-hidden"
            >
              <div className={`absolute top-0 left-0 w-full h-1 bg-${service.accentColor}`} />
              
              <div className="flex justify-center mb-6">
                {service.icon}
              </div>
              
              <h3 className="text-xl font-semibold mb-4 text-gray-900 text-center font-montserrat">
                {service.title}
              </h3>
              
              <p className="text-gray-600 text-base text-center leading-relaxed mb-6 font-open-sans">
                {service.description}
              </p>
              
              <div className="text-center">
                <Link
                  href="#"
                  className={`inline-flex items-center text-${service.accentColor} font-medium hover:text-${service.accentColor.replace('600', '700')} font-open-sans`}
                >
                  Learn More
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
          className="mt-24 bg-gradient-to-r from-teal-600 to-purple-600 p-10 md:p-14 rounded-lg shadow-lg relative"
        >
          <div className="max-w-4xl mx-auto text-center">
            <motion.h2 
              className="text-3xl md:text-4xl font-bold mb-6 text-white font-montserrat tracking-tight"
            >
              Ready to Make Waves?
            </motion.h2>
            
            <motion.p 
              className="text-white text-lg md:text-xl leading-relaxed mb-8 max-w-2xl mx-auto font-open-sans"
            >
              Let\'s craft a marketing strategy that grabs attention, drives growth, and sets you apart. Your success starts here.
            </motion.p>
            
            <Link
              href="#"
              className="inline-flex items-center bg-white text-teal-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-teal-50 hover:text-teal-700 shadow-md font-montserrat"
            >
              Let\'s Get Started
              <ArrowRight className="ml-3 h-6 w-6" />
            </Link>
          </div>
        </motion.div>
      </section>
    </div>
  )
}