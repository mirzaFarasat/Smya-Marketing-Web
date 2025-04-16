"use client";

import Link from "next/link"
import { Facebook, Instagram, Linkedin, Twitter, Mail, Phone, MapPin } from "lucide-react"
import { motion } from "framer-motion"

export default function Footer() {
  const currentYear = new Date().getFullYear()

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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  }

  const socialIconVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
    hover: {
      scale: 1.2,
      rotate: 360,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 10,
      },
    },
  }

  return (
    <footer className="bg-gray-900 text-white pt-20 pb-12 relative overflow-hidden">
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
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16"
        >
          {/* Brand Column */}
          <motion.div variants={itemVariants} className="max-w-xs">
            <motion.h2
              className="text-3xl font-bold mb-6 text-white"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              SMYA
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="text-gray-400 mb-8 leading-relaxed"
            >
              We transform brands through innovative digital strategies that deliver measurable results and sustainable growth.
            </motion.p>
            <motion.div
              variants={containerVariants}
              className="flex space-x-5"
            >
              {[
                { icon: Facebook, label: "Facebook" },
                { icon: Twitter, label: "Twitter" },
                { icon: Instagram, label: "Instagram" },
                { icon: Linkedin, label: "LinkedIn" },
              ].map((social) => (
                <motion.div
                  key={social.label}
                  variants={socialIconVariants}
                  whileHover="hover"
                >
                  <Link
                    href="#"
                    className="text-gray-400 hover:text-primary-400 transition-colors duration-300"
                    aria-label={social.label}
                  >
                    <social.icon size={22} />
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Services Column */}
          <motion.div variants={itemVariants}>
            <motion.h3
              className="text-xl font-semibold mb-6 text-white"
              whileHover={{ color: "#6366f1" }}
              transition={{ duration: 0.2 }}
            >
              Our Services
            </motion.h3>
            <motion.ul
              variants={containerVariants}
              className="space-y-4"
            >
              {[
                "Digital Strategy",
                "Brand Development",
                "Content Marketing",
                "Social Media Management",
                "Performance Marketing",
                "Marketing Automation"
              ].map((service) => (
                <motion.li
                  key={service}
                  variants={itemVariants}
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Link
                    href={`/services#${service.toLowerCase().replace(' ', '-')}`}
                    className="text-gray-400 hover:text-primary-400 transition-colors duration-300 flex items-start group"
                  >
                    <motion.span
                      className="inline-block w-1 h-1 mt-2.5 mr-2 bg-gray-400 rounded-full group-hover:bg-primary-400 transition-colors duration-300"
                      whileHover={{ scale: 1.5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    />
                    {service}
                  </Link>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>

          {/* Company Column */}
          <motion.div variants={itemVariants}>
            <motion.h3
              className="text-xl font-semibold mb-6 text-white"
              whileHover={{ color: "#6366f1" }}
              transition={{ duration: 0.2 }}
            >
              Company
            </motion.h3>
            <motion.ul
              variants={containerVariants}
              className="space-y-4"
            >
              {[
                { name: "About Us", path: "/about" },
                { name: "Case Studies", path: "/work" },
                { name: "Contact", path: "/contact" }
              ].map((item) => (
                <motion.li
                  key={item.name}
                  variants={itemVariants}
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Link
                    href={item.path}
                    className="text-gray-400 hover:text-primary-400 transition-colors duration-300 flex items-start group"
                  >
                    <motion.span
                      className="inline-block w-1 h-1 mt-2.5 mr-2 bg-gray-400 rounded-full group-hover:bg-primary-400 transition-colors duration-300"
                      whileHover={{ scale: 1.5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    />
                    {item.name}
                  </Link>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>

          {/* Contact Column */}
          <motion.div variants={itemVariants}>
            <motion.h3
              className="text-xl font-semibold mb-6 text-white"
              whileHover={{ color: "#6366f1" }}
              transition={{ duration: 0.2 }}
            >
              Get In Touch
            </motion.h3>
            <motion.address
              variants={containerVariants}
              className="not-italic text-gray-400 space-y-5"
            >
              <motion.div
                variants={itemVariants}
                className="flex group"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <MapPin className="flex-shrink-0 mt-1 mr-3 text-primary-400 group-hover:text-primary-300 transition-colors duration-300" size={18} />
                <p>Address- A-116 URBTECH TRADE CENTRE <br />SEC - 132 NOIDA -201304</p>
              </motion.div>
              <motion.div
                variants={itemVariants}
                className="flex group"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Mail className="flex-shrink-0 mt-1 mr-3 text-primary-400 group-hover:text-primary-300 transition-colors duration-300" size={18} />
                <a href="mailto:hello@smya.com" className="hover:text-primary-400 transition-colors duration-300">
                Contact@smya360.com
                </a>
              </motion.div>
              <motion.div
                variants={itemVariants}
                className="flex group"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Phone className="flex-shrink-0 mt-1 mr-3 text-primary-400 group-hover:text-primary-300 transition-colors duration-300" size={18} />
                <a href="tel:+12125551234" className="hover:text-primary-400 transition-colors duration-300">
                  +1 (212) 555-1234
                </a>
              </motion.div>
            </motion.address>
          </motion.div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center"
        >
          <motion.p
            className="text-gray-500 text-sm mb-4 md:mb-0"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            © {currentYear} SMYA Marketing. All rights reserved.
          </motion.p>
          <motion.div
            variants={containerVariants}
            className="flex space-x-8"
          >
              {[
                { name: "Privacy Policy", path: "/PrivacyPolicy" },
                { name: "Terms of Service", path: "/TermsOfService" },
                { name: "Cookie Policy", path: "/CookiePolicy" },
              ].map((item) => (
                <motion.div
                  key={item.name}
                  variants={itemVariants}
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Link
                    href={item.path}
                    className="text-gray-500 hover:text-primary-400 transition-colors duration-300 text-sm"
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </footer>
    )
}