"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import MobileMenu from "./MobileMenu"
import { usePathname } from "next/navigation"


const navLinks = [
  {
    title: "Home",
    path: "#home",
  },
  {
    title: "About",
    path: "#about",
  },
  {
    title: "Projects",
    path: "#projects",
  },
  {
    title: "Contact",
    path: "#contact",
  },
  {
    title: "Blogs",
    path: "#blogs",
  },
];

const Navbar = () => {
  const pathname = usePathname()

  const isActive = (path) => {
    return pathname === path
  }

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full py-4 px-6 md:px-12 flex justify-between items-center"
    >
      <Link href="/" className="flex items-center">
        <h1 className="text-3xl font-bold">
          <span className="text-white">Tab</span>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">padi</span>
        </h1>
      </Link>

      <MobileMenu />

      <nav className="hidden md:flex items-center space-x-8">
        <Link
          href="/"
          className={`text-white hover:text-orange-400 transition-colors font-medium ${
            isActive("/") ? "border-b-2 border-orange-500 pb-1" : ""
          }`}
        >
          Home
        </Link>
        <Link
          href="/features"
          className={`text-white hover:text-orange-400 transition-colors font-medium ${
            isActive("/features") ? "border-b-2 border-orange-500 pb-1" : ""
          }`}
        >
          Features
        </Link>
        <Link
          href="/how-it-works"
          className={`text-white hover:text-orange-400 transition-colors font-medium ${
            isActive("/how-it-works") ? "border-b-2 border-orange-500 pb-1" : ""
          }`}
        >
          How It Works
        </Link>
        <Link
          href="/about"
          className={`text-white hover:text-orange-400 transition-colors font-medium ${
            isActive("/about") ? "border-b-2 border-orange-500 pb-1" : ""
          }`}
        >
          About Us
        </Link>
      </nav>

      <Link href="https://wa.me/" className="hidden md:block">
        <button className="px-6 py-3 rounded-full bg-gradient-to-r from-orange-400 to-red-500 text-white font-medium hover:shadow-lg transition-shadow">
          Chat on WhatsApp
        </button>
      </Link>
    </motion.header>
  )
};

export default Navbar;
