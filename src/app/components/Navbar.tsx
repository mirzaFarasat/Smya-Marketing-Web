"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Clients", href: "/clients" },
    { name: "Contact", href: "/contact" },
  ]

  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled 
          ? "bg-white/90 backdrop-blur-md shadow-lg" 
          : "bg-gradient-to-r from-teal-700 via-purple-700 to-blue-700"
      }`}
    >
      <div className="container mx-auto px-8">
        <div className="flex items-center justify-between h-24">
          {/* Logo with enhanced hover animation */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Link 
              href="/" 
              className="text-4xl font-bold tracking-tight flex items-center font-montserrat"
            >
              <motion.span 
                className={`px-3 py-1.5 rounded-lg mr-4 shadow-sm ${
                  scrolled 
                    ? "bg-gradient-to-r from-teal-700 to-blue-700 text-white" 
                    : "bg-white text-teal-700"
                }`}
                whileHover={{ rotate: 2 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                SMYA
              </motion.span>
              <motion.span 
                className={`hidden lg:inline font-medium ${
                  scrolled ? "text-gray-800" : "text-white"
                }`}
                whileHover={{ opacity: 0.8 }}
              >
                Marketing
              </motion.span>
            </Link>
          </motion.div>

          {/* Desktop Navigation with enhanced animations */}
          <nav className="hidden md:flex items-center space-x-12">
            {navLinks.map((link) => (
              <motion.div
                key={link.name}
                whileHover={{ y: -2 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Link
                  href={link.href}
                  className={`font-medium text-lg relative group font-open-sans ${
                    scrolled ? "text-gray-800 hover:text-teal-700" : "text-white hover:text-teal-100"
                  }`}
                >
                  {link.name}
                  <motion.span 
                    className="absolute left-0 bottom-[-4px] w-0 h-0.5 bg-teal-300"
                    whileHover={{ width: "100%" }}
                    transition={{ duration: 0.3 }}
                  />
                </Link>
              </motion.div>
            ))}
          </nav>

          {/* Desktop CTA with enhanced animation */}
          <motion.div 
            className="hidden md:block ml-12"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              href="/contact"
              className={`px-8 py-3 rounded-full font-semibold text-lg shadow-md transition-all duration-300 font-montserrat ${
                scrolled 
                  ? "bg-gradient-to-r from-teal-700 to-blue-700 text-white hover:from-teal-600 hover:to-blue-600" 
                  : "bg-white text-teal-700 hover:bg-teal-50 hover:text-teal-800"
              }`}
            >
              Let's Talk
            </Link>
          </motion.div>

          {/* Mobile Menu Button with enhanced animation */}
          <motion.button
            className="md:hidden focus:outline-none"
            onClick={toggleMenu}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            aria-label="Toggle menu"
          >
            <motion.div
              animate={{ rotate: isMenuOpen ? 90 : 0 }}
              transition={{ duration: 0.3 }}
            >
              {isMenuOpen ? (
                <X size={32} className={scrolled ? "text-gray-800" : "text-white"} />
              ) : (
                <Menu size={32} className={scrolled ? "text-gray-800" : "text-white"} />
              )}
            </motion.div>
          </motion.button>
        </div>
      </div>

      {/* Mobile Navigation with enhanced animations */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className={`md:hidden overflow-hidden ${
              scrolled 
                ? "bg-white/95 backdrop-blur-md" 
                : "bg-gradient-to-b from-teal-700 to-purple-700"
            }`}
          >
            <nav className="flex flex-col space-y-8 px-8 py-10">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.name}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    href={link.href}
                    className={`font-medium text-xl py-3 border-b ${
                      scrolled 
                        ? "text-gray-800 border-gray-200 hover:text-teal-700" 
                        : "text-white border-teal-600/30 hover:text-teal-100"
                    } block font-open-sans transition-all duration-300 hover:pl-4`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: navLinks.length * 0.1 }}
              >
                <Link
                  href="/contact"
                  className={`px-8 py-3 rounded-full font-semibold text-lg text-center mt-8 shadow-md transition-all duration-300 font-montserrat block ${
                    scrolled 
                      ? "bg-gradient-to-r from-teal-700 to-blue-700 text-white hover:from-teal-600 hover:to-blue-600" 
                      : "bg-white text-teal-700 hover:bg-teal-50 hover:text-teal-800"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Let's Talk
                </Link>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}