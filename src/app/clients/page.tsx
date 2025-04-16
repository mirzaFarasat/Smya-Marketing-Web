'use client'

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function ClientsPage() {
  const clients = [
    { name: "Client 1", industry: "Technology" },
    { name: "Client 2", industry: "E-commerce" },
    { name: "Client 3", industry: "Healthcare" },
    { name: "Client 4", industry: "Finance" },
  ];

  // Array of client image paths (extendable for more images)
  const clientImages = [
    "/client.jpg",
    "/client2.jpg",
    "/client3.jpg",
    "/client4.jpg",
    // Add more images here, e.g., "/images/client-5.jpg", "/images/client-6.jpg", etc.
  ];

  // Array of case study image paths (extendable for more images)
  const caseStudyImages = [
    "/images/case-study-2.jpg", // Stack of coins with hand
    "/images/case-study-1.jpg", // Hands holding social media icons
    "/images/case-study-3.jpg", // Healthcare building and social media integration
    // Add more images here, e.g., "/images/case-study-4.jpg", etc.
  ];

  const caseStudies = [
    {
      client: "Tech Innovators",
      title: "Increasing Brand Awareness Through Strategic Social Media",
      description:
        "How we helped a tech startup increase their social media engagement by 300% and grow their audience by 150% in just six months.",
    },
    {
      client: "Global Retail",
      title: "E-commerce Conversion Rate Optimization",
      description:
        "A comprehensive strategy that increased online sales by 75% and improved customer retention rates for a major retail brand.",
    },
    {
      client: "Health Solutions",
      title: "Content Marketing for Healthcare Professionals",
      description:
        "Creating authoritative content that positioned our client as a thought leader in the healthcare industry and drove qualified leads.",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

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
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
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
  };

  return (
    <div className="container mx-auto px-4 py-16 md:py-24">
      {/* Clients Header Section */}
      <motion.section 
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="max-w-4xl mx-auto mb-16 text-center pt-12 md:pt-16" // Added padding-top here
      >
        <motion.h1 
          variants={itemVariants}
          className="text-4xl md:text-5xl font-bold mb-6 text-gray-900"
        >
          Our{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-purple-600">
            Clients
          </span>
        </motion.h1>
        <motion.p 
          variants={itemVariants}
          className="text-xl text-gray-700 leading-relaxed"
        >
          We&apos;ve had the privilege of working with a wide range of brands across
          different industries. From tech startups to global corporations, our
          diverse clientele is a testament to our adaptability and expertise.
        </motion.p>
      </motion.section>

      {/* Clients Grid */}
      <motion.section 
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20"
      >
        {clients.map((client, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            whileHover="hover"
            className="flex flex-col items-center"
          >
            <motion.div 
              className="relative h-[100px] w-[180px] mb-4 bg-gray-50 rounded-md flex items-center justify-center shadow-sm overflow-hidden"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <Image
                src={clientImages[index] || "/images/client-1.jpg"}
                alt={client.name}
                width={180}
                height={100}
                className="object-contain p-4"
                style={{ maxWidth: "100%", height: "auto" }}
              />
            </motion.div>
            <motion.h3 
              className="font-medium text-gray-900 text-center"
              whileHover={{ color: "#0d9488" }}
            >
              {client.name}
            </motion.h3>
            <motion.p 
              className="text-sm text-gray-600 text-center mt-1"
              whileHover={{ scale: 1.05 }}
            >
              {client.industry}
            </motion.p>
          </motion.div>
        ))}
      </motion.section>

      {/* Case Studies Section */}
      <motion.section 
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="mb-20"
      >
        <motion.h2 
          variants={itemVariants}
          className="text-3xl font-bold mb-10 text-center text-gray-900"
        >
          Featured{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-purple-600">
            Case Studies
          </span>
        </motion.h2>
        <div className="grid md:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover="hover"
              className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden"
            >
              <motion.div 
                className="relative h-[200px] bg-gray-50"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <Image
                  src={caseStudyImages[index] || "/placeholder.svg?height=200&width=400"}
                  alt={study.title}
                  fill
                  className="object-cover"
                />
              </motion.div>
              <div className="p-6">
                <motion.p 
                  className="text-sm text-gray-600 mb-2 uppercase tracking-wider"
                  whileHover={{ color: "#0d9488" }}
                >
                  {study.client}
                </motion.p>
                <motion.h3 
                  className="text-xl font-semibold mb-3 text-gray-900"
                  whileHover={{ scale: 1.02 }}
                >
                  {study.title}
                </motion.h3>
                <motion.p 
                  className="text-gray-700 mb-4 leading-relaxed"
                  whileHover={{ scale: 1.01 }}
                >
                  {study.description}
                </motion.p>
                <motion.div whileHover={{ x: 5 }}>
                  <Link
                    href="#"
                    className="text-gray-900 font-medium hover:underline inline-flex items-center"
                  >
                    Read case study
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 ml-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        viewport={{ once: true }}
        className="bg-gradient-to-r from-teal-600 to-purple-600 p-8 md:p-12 rounded-lg text-center relative overflow-hidden"
      >
        <motion.div
          className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/10 via-transparent to-transparent"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <div className="relative z-10">
          <motion.h2 
            className="text-2xl md:text-3xl font-semibold mb-6 text-white"
            whileHover={{ scale: 1.02 }}
          >
            Ready to become our next success story?
          </motion.h2>
          <motion.p 
            className="text-white mb-8 max-w-2xl mx-auto leading-relaxed"
            whileHover={{ scale: 1.01 }}
          >
            Join our growing list of satisfied clients and see how SMYA can help
            transform your marketing efforts and drive exceptional results for your
            business.
          </motion.p>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              href="/contact"
              className="inline-block bg-white text-teal-600 px-8 py-3 rounded-md font-medium hover:bg-teal-50 transition-colors duration-300"
            >
              Contact us today
            </Link>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
}