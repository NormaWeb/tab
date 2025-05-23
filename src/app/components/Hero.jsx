"use client"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"

const HeroSection = () => {
  return (
    <section className="w-full py-12 px-6 md:px-12 lg:py-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-xl"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
            Say{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">
              goodbye
            </span>{" "}
            to
            <br />
            bill payment
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">
              hassles!
            </span>
          </h1>

          <p className="text-[#ADB7BE] text-lg mt-6 mb-8">
            With Tabpadi, settle your airtime, data, electricity, and TV bills effortlessly on WhatsApp.
          </p>

          <Link href="https://wa.me/" className="inline-block">
            <button className="px-8 py-4 rounded-full bg-gradient-to-r from-orange-400 to-red-500 text-white font-medium hover:shadow-lg transition-shadow">
              Chat on WhatsApp
            </button>
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="relative flex justify-center lg:justify-end"
        >
          <div className="w-[280px] h-[280px] md:w-[400px] md:h-[400px] rounded-full overflow-hidden bg-[#1A1A1A] relative">
            <Image
              src="/public/her.PNG"
              alt="Person using Tabpadi on phone"
              width={500}
              height={500}
              className="object-cover w-full h-full"
            />
          </div>
        </motion.div>
      </div>
    </section>
 );
};

export default HeroSection;
