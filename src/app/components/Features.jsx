"use client"

import { motion } from "framer-motion"
import FeatureCard from "./FeatureCard"
import { Phone, Wifi, Lightbulb, Tv, Wallet, PhoneCall } from "lucide-react"

const Features =() => {
  // Animation variants for staggered animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  return (
    <section className="w-full max-w-7xl mx-auto px-6 md:px-12">
      <div className="flex flex-col items-center text-center mb-16">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-block bg-white text-black font-medium px-6 py-2 rounded-full mb-8"
        >
          Features
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4"
        >
          What you can do with{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">Tabpadi</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-[#ADB7BE] text-lg max-w-3xl"
        >
          With Tabpadi, bills don't pile up, they get sorted fast, easy, and right inside your WhatsApp.
        </motion.p>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        <FeatureCard
          icon={<Phone className="w-8 h-8 text-orange-400" />}
          title="Top Up Airtime — Instantly"
          description="Buy airtime for yourself or loved ones on any network in seconds. No recharge cards, no codes — just a quick chat and you're topped up."
        />

        <FeatureCard
          icon={<Wifi className="w-8 h-8 text-orange-400" />}
          title="Stay Connected Always"
          description="From light bundles to heavy data plans, get the exact data you need, anytime. Fast delivery, all networks, no app-switching needed."
        />

        <FeatureCard
          icon={<Lightbulb className="w-8 h-8 text-orange-400" />}
          title="Pay Electricity Bills"
          description="Settle your prepaid or postpaid electricity bills without leaving your couch. Avoid blackouts with quick, reliable payments at any hour."
        />

        <FeatureCard
          icon={<Tv className="w-8 h-8 text-orange-400" />}
          title="Renew TV Subscriptions"
          description="No disruptions when binge-watching. Pay for DSTV, GOTV, Startimes and more — smooth and instant, so you never miss a match or movie."
        />

        <FeatureCard
          icon={<Wallet className="w-8 h-8 text-orange-400" />}
          title="Fund Your Wallet"
          description="Top up your Tabpadi wallet in advance to make future payments faster. No delays when bills catch you off guard."
        />

        <FeatureCard
          icon={<PhoneCall className="w-8 h-8 text-orange-400" />}
          title="Check Wallet Balance"
          description="In one chat, know exactly how much you have left. Stay in control and plan your next payment without guessing."
        />
      </motion.div>
    </section>
  )
};

export default Features;
