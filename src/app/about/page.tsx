"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function AboutPage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
    hover: {
      scale: 1.02,
      y: -5,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 10,
      },
    },
  };

  const statVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
    hover: {
      scale: 1.1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 10,
      },
    },
  };

  return (
    <div className="bg-white min-h-screen font-sans">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative bg-gray-900 pt-32 pb-28 md:pt-40 md:pb-32 overflow-hidden"
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.1 }}
          transition={{ duration: 2 }}
          className="absolute inset-0"
        >
          <Image
            src="/placeholder.svg?height=400&width=1600"
            alt="Background pattern"
            fill
            className="object-cover"
          />
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="container mx-auto px-6 relative z-10"
        >
          <motion.div
            variants={itemVariants}
            className="max-w-3xl mx-auto text-center"
          >
            <motion.h1
              className="text-4xl md:text-5xl font-semibold text-white mb-6 tracking-tight font-montserrat"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              About SMYA Marketing
            </motion.h1>
            <motion.div
              className="w-20 h-1 bg-teal-500 mx-auto mb-8"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            />
            <motion.p
              variants={itemVariants}
              className="text-lg md:text-xl text-gray-200 leading-relaxed font-open-sans"
            >
              Strategic marketing expertise driving your success since 2018
            </motion.p>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Main Content */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
        className="container mx-auto px-6 py-16 md:py-24"
      >
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-5 gap-12">
            {/* Sidebar */}
            <motion.div
              variants={containerVariants}
              className="md:col-span-2 space-y-8"
            >
              <motion.div
                variants={cardVariants}
                whileHover="hover"
                className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm"
              >
                <motion.h3
                  className="text-lg font-medium text-gray-900 mb-4 font-montserrat"
                  whileHover={{ color: "#0d9488" }}
                  transition={{ duration: 0.2 }}
                >
                  Our Expertise
                </motion.h3>
                <motion.ul
                  variants={containerVariants}
                  className="space-y-3 font-open-sans"
                >
                  {[
                    "Strategic Planning",
                    "Brand Development",
                    "Digital Marketing",
                    "Content Creation",
                    "Analytics & Reporting",
                  ].map((item) => (
                    <motion.li
                      key={item}
                      variants={itemVariants}
                      whileHover={{ x: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                      className="flex items-center"
                    >
                      <motion.div
                        className="w-2 h-2 rounded-full bg-teal-500 mr-2"
                        whileHover={{ scale: 1.5 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      />
                      <span className="text-gray-700">{item}</span>
                    </motion.li>
                  ))}
                </motion.ul>
              </motion.div>

              <motion.div
                variants={cardVariants}
                whileHover="hover"
                className="bg-gray-900 p-6 rounded-lg text-white shadow-sm"
              >
                <motion.h3
                  className="text-lg font-medium mb-4 font-montserrat"
                  whileHover={{ color: "#0d9488" }}
                  transition={{ duration: 0.2 }}
                >
                  Our Impact
                </motion.h3>
                <motion.div
                  variants={containerVariants}
                  className="grid grid-cols-1 gap-4 font-open-sans"
                >
                  {[
                    { number: "250+", label: "Successful Projects" },
                    { number: "85%", label: "Client Retention Rate" },
                    { number: "12+", label: "Industry Awards" },
                  ].map((stat) => (
                    <motion.div
                      key={stat.label}
                      variants={statVariants}
                      whileHover="hover"
                    >
                      <motion.p
                        className="text-3xl font-semibold"
                        whileHover={{ scale: 1.1 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        {stat.number}
                      </motion.p>
                      <p className="text-sm text-gray-300">{stat.label}</p>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Main Content */}
            <motion.div
              variants={containerVariants}
              className="md:col-span-3 prose prose-lg max-w-none font-open-sans"
            >
              <motion.p
                variants={itemVariants}
                className="text-xl font-medium text-gray-900 mb-6 leading-tight font-montserrat"
              >
                SMYA Marketing – Precision. Innovation. Results.
              </motion.p>

              <motion.p
                variants={itemVariants}
                className="text-gray-700"
              >
                Founded in 2018, SMYA Marketing is a premier agency dedicated to delivering exceptional marketing solutions. Our mission is to empower businesses through strategic insight, innovative execution, and a relentless focus on measurable outcomes. We bring together a team of seasoned professionals—strategists, creatives, and analysts—who excel at turning vision into value.
              </motion.p>

              <motion.p
                variants={itemVariants}
                className="text-gray-700"
              >
                We partner closely with our clients, offering tailored strategies that address their unique objectives. From emerging startups to established enterprises, SMYA provides the expertise and resources to navigate the complexities of today&apos;s market and achieve sustainable growth.
              </motion.p>

              <motion.p
                variants={itemVariants}
                className="text-gray-700 font-medium mt-6"
              >
                Our approach is grounded in three core principles:
              </motion.p>

              <motion.ul
                variants={containerVariants}
                className="space-y-2"
              >
                {[
                  {
                    title: "Strategic Precision",
                    description: "Data-driven plans aligned with your goals.",
                  },
                  {
                    title: "Innovative Execution",
                    description: "Creative solutions that distinguish your brand.",
                  },
                  {
                    title: "Proven Impact",
                    description: "Tangible results that advance your business.",
                  },
                ].map((item) => (
                  <motion.li
                    key={item.title}
                    variants={itemVariants}
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <strong className="text-gray-900 font-montserrat">
                      {item.title}
                    </strong>{" "}
                    – {item.description}
                  </motion.li>
                ))}
              </motion.ul>

              <motion.p
                variants={itemVariants}
                className="text-gray-700 mt-6"
              >
                At SMYA, we&apos;re committed to excellence and collaboration. Let&apos;s work together to elevate your brand and achieve extraordinary success.
              </motion.p>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}