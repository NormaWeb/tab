"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { usePathname } from "next/navigation"

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const isActive = (path) => {
    return pathname === path
  }

  return (
    <div className="md:hidden">
      <button onClick={toggleMenu} className="text-white p-2" aria-label={isOpen ? "Close menu" : "Open menu"}>
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute top-16 left-0 right-0 bg-[#121212] border-t border-[#333] z-50"
          >
            <div className="flex flex-col p-4 space-y-4">
              <Link
                href="/"
                className={`text-white hover:text-orange-400 transition-colors py-2 ${
                  isActive("/") ? "border-l-2 border-orange-500 pl-2" : ""
                }`}
                onClick={toggleMenu}
              >
                Home
              </Link>
              <Link
                href="/features"
                className={`text-white hover:text-orange-400 transition-colors py-2 ${
                  isActive("/features") ? "border-l-2 border-orange-500 pl-2" : ""
                }`}
                onClick={toggleMenu}
              >
                Features
              </Link>
              <Link
                href="/how-it-works"
                className={`text-white hover:text-orange-400 transition-colors py-2 ${
                  isActive("/how-it-works") ? "border-l-2 border-orange-500 pl-2" : ""
                }`}
                onClick={toggleMenu}
              >
                How It Works
              </Link>
              <Link
                href="/about"
                className={`text-white hover:text-orange-400 transition-colors py-2 ${
                  isActive("/about") ? "border-l-2 border-orange-500 pl-2" : ""
                }`}
                onClick={toggleMenu}
              >
                About Us
              </Link>
              <Link href="https://wa.me/" className="w-full" onClick={toggleMenu}>
                <button className="w-full px-6 py-3 rounded-full bg-gradient-to-r from-orange-400 to-red-500 text-white font-medium">
                  Chat on WhatsApp
                </button>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default MobileMenu;
