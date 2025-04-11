"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Clients() {
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
      y: -10,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 10,
      },
    },
  };

  return (
    <section className="py-20 md:py-28 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white overflow-hidden relative">
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
        {/* Header Section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="max-w-4xl mx-auto text-center mb-20"
        >
          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-primary"
          >
            Our Work
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto"
          >
            We've partnered with remarkable clients—from ambitious startups to industry leaders—crafting campaigns that resonate and deliver measurable impact.
          </motion.p>
        </motion.div>

        {/* Grid of Client Projects */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 mb-16"
        >
          {[1, 2, 3].map((item) => (
            <motion.div
              key={item}
              variants={cardVariants}
              whileHover="hover"
              className="group bg-gray-800 rounded-xl overflow-hidden shadow-lg"
            >
              <motion.div
                className="relative h-[250px] overflow-hidden"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.5 }}
              >
                <Image
                  src={`/images/case-study-review.jpg`}
                  alt={`Case study ${item}`}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <motion.div
                  initial={{ opacity: 0.8 }}
                  whileHover={{ opacity: 0.6 }}
                  transition={{ duration: 0.3 }}
                  className="absolute inset-0 bg-gradient-to-t from-gray-900/70 to-transparent"
                />
              </motion.div>
              <motion.div
                className="p-7"
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <motion.h3
                  className="text-2xl font-semibold mb-4 text-white tracking-tight"
                  whileHover={{ color: "#6366f1" }}
                  transition={{ duration: 0.2 }}
                >
                  Client Project {item}
                </motion.h3>
                <motion.p
                  className="text-gray-400 mb-5 leading-relaxed text-base"
                  whileHover={{ color: "#9ca3af" }}
                  transition={{ duration: 0.2 }}
                >
                  A tailored marketing strategy that delivered outstanding results, empowering our client to surpass their goals.
                </motion.p>
                <motion.div
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Link
                    href="/clients"
                    className="inline-flex items-center text-primary font-medium text-lg hover:text-primary-dark transition-colors duration-200 group/link"
                  >
                    View Case Study
                    <motion.span
                      className="ml-2"
                      animate={{
                        x: [0, 5, 0],
                      }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    >
                      →
                    </motion.span>
                  </Link>
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call-to-Action Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Link
              href="/clients"
              className="inline-block bg-primary text-white px-10 py-4 rounded-full font-semibold text-lg shadow-md hover:bg-primary-dark hover:shadow-xl transition-all duration-300"
            >
              Explore All Work
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}