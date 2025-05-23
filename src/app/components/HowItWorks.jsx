"use client"

import { motion } from "framer-motion"
import Link from "next/link"

const HowItWorksSection = () => {
  const steps = [
    {
      number: 1,
      title: "Open Tabpadi",
      description: "Launch the app or chat with us on WhatsApp — whichever you prefer. You're ready to go.",
    },
    {
      number: 1, // This is intentionally 1 to match the image, though it should logically be 2
      title: "Select a Service",
      description: "Pick what you want (airtime, data, electricity, or TV), fill in the basics, and confirm.",
    },
    {
      number: 1, // This is intentionally 1 to match the image, though it should logically be 3
      title: "Pay & Get Instant Confirmation",
      description: "Make your payment securely and get a quick notification — all sorted in seconds.",
    },
  ]

  return (
    <section className="w-full max-w-7xl mx-auto px-6 md:px-12 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute -left-20 top-40 w-96 h-96 opacity-10 z-0">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path
            fill="#e67e22"
            d="M45.7,-76.9C58.9,-69.2,69.3,-55.4,76.4,-40.5C83.5,-25.6,87.3,-9.5,85.8,6.2C84.3,21.9,77.6,37.2,67.1,49.2C56.6,61.2,42.2,69.8,27.1,74.8C11.9,79.8,-4,81.1,-19.6,77.8C-35.2,74.5,-50.5,66.5,-62.3,54.6C-74.1,42.7,-82.4,26.9,-84.6,10.1C-86.8,-6.7,-82.9,-24.5,-74.1,-39.2C-65.3,-53.9,-51.5,-65.5,-36.8,-72.3C-22.1,-79.1,-6.4,-81.1,8.9,-79.8C24.2,-78.5,32.5,-84.6,45.7,-76.9Z"
            transform="translate(100 100)"
          />
        </svg>
      </div>

      <div className="absolute -right-20 bottom-20 w-96 h-96 opacity-10 z-0">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path
            fill="#e67e22"
            d="M39.9,-65.7C51.1,-58.5,59.5,-46.3,65.2,-33.1C70.9,-19.9,73.9,-5.7,71.8,7.5C69.7,20.7,62.5,32.9,52.8,42.2C43.1,51.5,30.9,57.9,17.8,62.1C4.7,66.3,-9.3,68.3,-22.6,65.7C-35.9,63.1,-48.5,55.9,-57.8,45.2C-67.1,34.5,-73.1,20.3,-74.8,5.3C-76.5,-9.7,-73.9,-25.5,-65.8,-37.4C-57.7,-49.3,-44.1,-57.3,-30.8,-63.3C-17.5,-69.3,-4.4,-73.3,8.1,-71.9C20.6,-70.5,28.7,-72.9,39.9,-65.7Z"
            transform="translate(100 100)"
          />
        </svg>
      </div>

      <div className="relative z-10">
        <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-16">
          <div className="mb-8 md:mb-0">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-block bg-white text-black font-medium px-6 py-2 rounded-full mb-8"
            >
              How It Works
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4"
            >
              Easy steps to{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500">
                get started
              </span>
            </motion.h2>
          </div>

          <motion.p
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-[#ADB7BE] text-lg max-w-xs"
          >
            It only takes a few taps to handle all your bills effortlessly.
          </motion.p>
        </div>

        <div className="space-y-12 relative z-10">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              className="flex items-start"
            >
              <div className="w-12 h-12 rounded-full border border-orange-500 flex items-center justify-center mr-6 flex-shrink-0">
                <span className="text-orange-500 font-medium">{step.number}</span>
              </div>
              <div>
                <h3 className="text-white text-xl font-bold mb-2">{step.title}</h3>
                <p className="text-[#ADB7BE] max-w-2xl">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-12"
        >
          <Link href="https://wa.me/">
            <button className="px-8 py-4 rounded-full bg-gradient-to-r from-orange-400 to-red-500 text-white font-medium hover:shadow-lg transition-shadow">
              Get Started
            </button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
};

export default HowItWorksSection;
