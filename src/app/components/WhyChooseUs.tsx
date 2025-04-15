"use client";

import { CheckCircle } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

interface Reason {
  title: string;
  description: string;
}

const WhyChooseUs = () => {
  const reasons: Reason[] = [
    {
      title: "Strategic Approach",
      description: "We craft data-driven strategies meticulously tailored to your unique business objectives and audience.",
    },
    {
      title: "Creative Excellence",
      description:
        "Our expert creatives produce captivating content designed to engage, inspire, and leave a lasting impression.",
    },
    {
      title: "Proven Results",
      description:
        "Our proven track record showcases measurable success for businesses of all scales and industries.",
    },
    {
      title: "Transparent Reporting",
      description:
        "Gain clear insights with detailed, actionable reports highlighting the ROI of your marketing investment.",
    },
    {
      title: "Dedicated Support",
      description:
        "A committed team stands by your side, offering personalized support whenever you need it most.",
    },
    {
      title: "Industry Expertise",
      description:
        "Leverage our deep cross-industry knowledge to elevate your campaigns with cutting-edge insights.",
    },
  ];

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

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white overflow-hidden relative">
      {/* Animated background elements */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.1 }}
        transition={{ duration: 2 }}
        className="absolute inset-0 overflow-hidden"
      >
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 45, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute -top-40 -left-40 w-80 h-80 bg-primary/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, -45, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute -bottom-40 -right-40 w-80 h-80 bg-primary/20 rounded-full blur-3xl"
        />
      </motion.div>

      <div className="container mx-auto px-6 max-w-7xl relative">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
          {/* Left Column - Text Content */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
            className="max-w-lg"
          >
            <motion.h2
              variants={itemVariants}
              className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-8 md:mb-12 leading-tight"
            >
              Why Choose{" "}
              <motion.span
                className="text-primary bg-primary/10 px-2 py-1 rounded-md inline-block"
                whileHover={{
                  scale: 1.05,
                  backgroundColor: "rgba(99, 102, 241, 0.2)",
                }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                SMYA
              </motion.span>
            </motion.h2>

            <motion.div
              variants={containerVariants}
              className="space-y-8 md:space-y-10"
            >
              {reasons.map((reason, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{
                    x: 10,
                    transition: { type: "spring", stiffness: 300 },
                  }}
                  className="flex items-start group"
                >
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <CheckCircle className="h-6 w-6 md:h-7 md:w-7 text-primary flex-shrink-0 mt-1 transition-colors group-hover:text-primary-dark" />
                  </motion.div>
                  <motion.div
                    className="ml-4 md:ml-6"
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <motion.h3
                      className="text-lg md:text-xl lg:text-2xl font-semibold text-gray-900 mb-2 md:mb-3 tracking-tight"
                      whileHover={{ color: "#6366f1" }}
                      transition={{ duration: 0.2 }}
                    >
                      {reason.title}
                    </motion.h3>
                    <motion.p
                      className="text-sm md:text-base lg:text-lg text-gray-700 leading-relaxed"
                      whileHover={{ color: "#4b5563" }}
                      transition={{ duration: 0.2 }}
                    >
                      {reason.description}
                    </motion.p>
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Column - Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative h-[400px] md:h-[500px] lg:h-[600px] rounded-2xl overflow-hidden shadow-2xl"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0"
            >
              <Image
                src="/images/marketing-tablet-hand.jpg"
                alt="SMYA Marketing Excellence"
                fill
                className="object-cover filter brightness-95 contrast-105"
                priority
              />
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
                className="absolute inset-0 bg-gradient-to-t from-gray-900/40 to-transparent"
              />
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="absolute bottom-4 md:bottom-6 left-4 md:left-6 text-white"
              >
                <motion.p
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="text-base md:text-lg font-medium opacity-90"
                >
                  Elevate Your Brand with SMYA
                </motion.p>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;