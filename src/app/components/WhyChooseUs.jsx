"use client"

import { motion } from "framer-motion"
import { Clock, Zap, User, Shield } from "lucide-react"

const WhyChooseSection = () => {
  const features = [
    {
      icon: <Clock className="w-6 h-6 text-orange-400" />,
      title: "24/7 Availability",
      description: "Tabpadi doesn't sleep. We're always open.",
    },
    {
      icon: <Zap className="w-6 h-6 text-orange-400" />,
      title: "Fast & Instant",
      description: "No waiting, your bills get settled immediately.",
    },
    {
      icon: <User className="w-6 h-6 text-orange-400" />,
      title: "User-Friendly",
      description: "No complicated apps or processes.",
    },
    {
      icon: <Shield className="w-6 h-6 text-orange-400" />,
      title: "Secure Transactions",
      description: "Your data and payments are safe with us.",
    },
  ]

  return (
    <section className="w-full py-20 px-6 md:px-12 bg-[#121212]">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-16">
          <div className="mb-8 md:mb-0">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="inline-block bg-white text-black font-medium px-6 py-2 rounded-full mb-8"
            >
              Why Choose Tabpadi?
            </motion.div>
          </div>

          <motion.p
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-[#ADB7BE] text-lg max-w-md"
          >
            Tabpadi is made for people who love easy, stress-free payments
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {features.map((feature, index) => (
            <div key={index} className="bg-[#1A1A1A] border border-[#333] rounded-lg p-6 flex flex-col">
              <div className="w-12 h-12 rounded-full bg-[#222222] flex items-center justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-white text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-[#ADB7BE]">{feature.description}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
};

export default WhyChooseSection;
