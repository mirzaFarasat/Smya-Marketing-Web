'use client'

import { ArrowRight, Globe, Megaphone, Share2, Users } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"

const Services = () => {
  const services = [
    {
      icon: <Globe className="h-10 w-10" />,
      title: "Performance Marketing",
      description: "Marketing that delivers measurable results and maximum ROI.",
      gradient: "from-blue-500 to-blue-300",
      bgColor: "bg-blue-50",
    },
    {
      icon: <Megaphone className="h-10 w-10" />,
      title: "Branding",
      description: "Crafting memorable brand identities and consistent messaging.",
      gradient: "from-purple-500 to-purple-300",
      bgColor: "bg-purple-50",
    },
    {
      icon: <Share2 className="h-10 w-10" />,
      title: "Social Media Management",
      description: "Building relationships, growing audiences, and boosting visibility.",
      gradient: "from-pink-500 to-pink-300",
      bgColor: "bg-pink-50",
    },
    {
      icon: <Users className="h-10 w-10" />,
      title: "Influencer Marketing",
      description: "Amplifying reach and credibility through trusted voices.",
      gradient: "from-orange-500 to-orange-300",
      bgColor: "bg-orange-50",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  }

  return (
    <section className="relative py-20 md:py-28 bg-gradient-to-b from-gray-50 to-white font-sans overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-100 rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-100 rounded-full opacity-20 blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="inline-block mb-4 text-sm font-semibold tracking-wider text-blue-600 uppercase font-open-sans bg-blue-50 px-4 py-1 rounded-full"
          >
            Our Expertise
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-gray-800 to-gray-600 font-montserrat tracking-tight"
          >
            Comprehensive Digital Solutions
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg md:text-xl text-gray-600 leading-relaxed font-open-sans max-w-3xl mx-auto"
          >
            We help brands reach the right people with the right message at the right time through data-driven strategies and creative excellence.
          </motion.p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ 
                scale: 1.02,
                transition: { duration: 0.2 }
              }}
              className={`group relative ${service.bgColor} p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 overflow-hidden`}
            >
              {/* Decorative gradient overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-5 group-hover:opacity-10 transition-opacity duration-300`}></div>
              
              <div
                className={`relative flex items-center justify-center w-16 h-16 mb-6 rounded-xl bg-gradient-to-r ${service.gradient} text-white shadow-lg`}
              >
                {service.icon}
              </div>
              <h3 className="relative text-xl md:text-2xl font-semibold mb-4 text-gray-800 font-montserrat group-hover:text-gray-900 transition-colors">
                {service.title}
              </h3>
              <p className="relative text-gray-600 mb-6 leading-relaxed font-open-sans">
                {service.description}
              </p>
              <Link
                href="/services"
                className="relative inline-flex items-center text-gray-900 font-medium group-hover:text-blue-600 transition-colors font-open-sans"
              >
                Learn More
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16"
        >
          <Link
            href="/services"
            className="inline-flex items-center justify-center px-8 py-4 rounded-full font-semibold text-white bg-gradient-to-r from-gray-800 to-gray-600 hover:from-gray-900 hover:to-gray-700 transition-all shadow-md hover:shadow-lg font-montserrat group"
          >
            Explore All Services
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

export default Services