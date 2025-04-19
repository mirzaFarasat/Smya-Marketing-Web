"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X, MessageCircle } from "lucide-react"
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
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled 
          ? "bg-transparent" 
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo with enhanced visibility */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            animate={scrolled ? { scale: 1.05 } : { scale: 1 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Link 
              href="/" 
              className="text-4xl font-bold tracking-tight flex items-center font-montserrat"
            >
              <motion.span 
                className={`px-3 py-1.5 rounded-lg mr-4 shadow-lg ${
                  scrolled 
                    ? "bg-gradient-to-r from-teal-600 to-blue-600 text-white" 
                    : "bg-white text-teal-700"
                }`}
                whileHover={{ rotate: 2, scale: 1.05 }}
                style={{ 
                  boxShadow: scrolled 
                    ? "0 0 0 2px rgba(255,255,255,0.3), 0 4px 6px rgba(0,0,0,0.1)" 
                    : "0 4px 6px rgba(0,0,0,0.1)"
                }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                SMYA
              </motion.span>
              <motion.span 
                className={`hidden lg:inline font-medium ${
                  scrolled ? "text-teal-500" : "text-white"
                }`}
                style={{
                  textShadow: scrolled 
                    ? "0 0 4px rgba(0,0,0,0.5)" 
                    : "0 0 4px rgba(0,0,0,0.3)"
                }}
                whileHover={{ opacity: 0.8 }}
              >
                Marketing
              </motion.span>
            </Link>
          </motion.div>

          {/* Desktop Navigation - with background to ensure visibility */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <motion.div
                key={link.name}
                whileHover={{ y: -2, scale: 1.05 }}
                animate={scrolled ? { scale: 1.1 } : {}}
                transition={{ type: "spring", stiffness: 400 }}
              >
                <Link
                  href={link.href}
                  className={`font-medium text-sm relative group px-3 py-1 rounded-md transition-all duration-300 ${
                    scrolled 
                      ? "text-teal-600 bg-white/80 hover:bg-white shadow-sm" 
                      : "text-white bg-black/20 backdrop-blur-sm hover:bg-black/30"
                  }`}
                >
                  {link.name}
                  <motion.span 
                    className={`absolute left-0 bottom-[-2px] w-0 h-px ${
                      scrolled ? "bg-teal-500" : "bg-white/60"
                    }`}
                    whileHover={{ width: "100%" }}
                    transition={{ duration: 0.2 }}
                  />
                </Link>
              </motion.div>
            ))}
          </nav>

          {/* Desktop CTA - with improved visibility and matching icon */}
          <motion.div 
            className="hidden md:flex"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            animate={scrolled ? { scale: 1.1 } : { scale: 1 }}
          >
            <Link
              href="/contact"
              className={`px-5 py-2 rounded-full text-xs font-medium flex items-center gap-2 transition-all duration-300 ${
                scrolled 
                  ? "bg-white text-teal-700 shadow-md hover:bg-gray-100 border border-teal-200" 
                  : "bg-black/30 backdrop-blur-sm text-white border border-white/40 hover:bg-black/40"
              }`}
            >
              <MessageCircle 
                size={14} 
                strokeWidth={2} 
                className={scrolled ? "text-teal-700" : "text-white"} 
                fill={scrolled ? "rgba(20, 184, 166, 0.2)" : "rgba(255, 255, 255, 0.1)"}
              />
              Let&apos;s Talk
            </Link>
          </motion.div>

          {/* Mobile Menu Button - with background to ensure visibility */}
          <motion.div
            className={`md:hidden p-2 rounded-full transition-all duration-200 ${
              scrolled 
                ? "bg-white shadow-md hover:bg-gray-100 border border-teal-200" 
                : "bg-black/30 backdrop-blur-sm hover:bg-black/40"
            }`}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            animate={scrolled ? { scale: 1.15 } : {}}
          >
            <motion.button
              onClick={toggleMenu}
              className="focus:outline-none flex items-center justify-center"
              aria-label="Toggle menu"
            >
              <motion.div
                animate={{ rotate: isMenuOpen ? 90 : 0 }}
                transition={{ duration: 0.2 }}
              >
                {isMenuOpen ? (
                  <X 
                    size={scrolled ? 28 : 24} 
                    strokeWidth={1.5} 
                    className={scrolled ? "text-teal-700" : "text-white"} 
                  />
                ) : (
                  <Menu 
                    size={scrolled ? 28 : 24} 
                    strokeWidth={1.5} 
                    className={scrolled ? "text-teal-700" : "text-white"} 
                  />
                )}
              </motion.div>
            </motion.button>
          </motion.div>
        </div>
      </div>

      {/* Mobile Navigation with improved visibility */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className={`md:hidden overflow-hidden ${
              scrolled 
                ? "bg-white/90 backdrop-blur-md shadow-lg" 
                : "bg-black/70 backdrop-blur-md"
            }`}
          >
            <nav className="flex flex-col space-y-4 px-6 py-6">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.name}
                  initial={{ x: -10, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <Link
                    href={link.href}
                    className={`font-medium text-sm py-2 block transition-all duration-200 hover:pl-2 ${
                      scrolled 
                        ? "text-teal-700 hover:text-teal-800 hover:bg-teal-50 rounded-md px-2" 
                        : "text-white hover:bg-white/10 rounded-md px-2"
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: navLinks.length * 0.05 }}
                className="pt-2"
              >
                <Link
                  href="/contact"
                  className={`px-5 py-2 rounded-full text-xs font-medium inline-flex items-center gap-2 transition-all duration-200 ${
                    scrolled 
                      ? "bg-white text-teal-700 border border-teal-200 hover:bg-gray-100 shadow-sm" 
                      : "bg-black/30 backdrop-blur-sm text-white border border-white/40 hover:bg-black/40"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  <MessageCircle 
                    size={14} 
                    strokeWidth={2} 
                    className={scrolled ? "text-teal-700" : "text-white"} 
                    fill={scrolled ? "rgba(20, 184, 166, 0.2)" : "rgba(255, 255, 255, 0.1)"}
                  />
                  Let&apos;s Talk
                </Link>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}