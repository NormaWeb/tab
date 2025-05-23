"use client"

// import  React from "react";
import { motion } from "framer-motion"

const FeatureCard = ({ icon, title, description }) => {
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  return (
    <motion.div variants={cardVariants} className="bg-[#1A1A1A] rounded-lg p-8 flex flex-col items-center text-center">
      <div className="w-16 h-16 rounded-full bg-[#222222] flex items-center justify-center mb-6">{icon}</div>
      <h3 className="text-white text-xl font-bold mb-4">{title}</h3>
      <p className="text-[#ADB7BE]">{description}</p>
    </motion.div>
  );
};

export default FeatureCard;
