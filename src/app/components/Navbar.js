"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [timer, setTimer] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  useEffect(() => {
    const targetDate = new Date("2025-05-31T16:00:00") // May 31st, 2025 at 4:00 PM

    const interval = setInterval(() => {
      const now = new Date()
      const difference = targetDate.getTime() - now.getTime()

      if (difference <= 0) {
        clearInterval(interval)
        setTimer({ days: 0, hours: 0, minutes: 0, seconds: 0 })
        return
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24))
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60))
      const seconds = Math.floor((difference % (1000 * 60)) / 1000)

      setTimer({ days, hours, minutes, seconds })
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
      <>
        {/* Google Fonts Import */}
        <style jsx global>{`
            @import url('https://fonts.googleapis.com/css2?family=New+Rocker&family=Saira:wght@400;600;700;800&display=swap');
        `}</style>

        <header
            className={`${scrolled ? "bg-[#090907]/95 backdrop-blur-sm" : "bg-[#090907]"} text-white sticky top-0 z-50 transition-all duration-300`}
        >
          {/* Compact Countdown Timer */}
          <div className="bg-[#FFF512] text-[#090907] py-0.5 px-2 text-center font-bold">
            <div className="flex justify-center items-center gap-2 text-xs">
              <span>EVENT STARTS:</span>
              <div className="flex gap-1">
                <span className="font-mono uppercase">{timer.days.toString().padStart(2, "0")}d</span>
                <span>:</span>
                <span className="font-mono uppercase">{timer.hours.toString().padStart(2, "0")}h</span>
                <span>:</span>
                <span className="font-mono uppercase">{timer.minutes.toString().padStart(2, "0")}m</span>
                <span>:</span>
                <span className="font-mono uppercase">{timer.seconds.toString().padStart(2, "0")}s</span>
              </div>
            </div>
          </div>

          <div className="max-w-7xl mx-auto px-4 py-2 flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  className="relative"
              >
                <Image src="/logo.png" alt="Cyber Flare Logo" width={180} height={180} />
                <motion.div
                    className="absolute -bottom-1 -right-1 bg-[#FFF512] h-3 w-3"
                    animate={{
                      scale: [1, 1.2, 1],
                      rotate: [0, 5, 0, -5, 0],
                      boxShadow: [
                        "0 0 0px rgba(255, 245, 18, 0.8)",
                        "0 0 10px rgba(255, 245, 18, 0.8)",
                        "0 0 0px rgba(255, 245, 18, 0.8)",
                      ],
                    }}
                    transition={{
                      repeat: Number.POSITIVE_INFINITY,
                      duration: 3,
                      repeatType: "reverse",
                    }}
                />
              </motion.div>
              <div className="hidden sm:block">
                <motion.h1
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    className="font-extrabold text-lg tracking-wider text-[#FFF512] font-['New_Rocker',cursive]"
                >
                  CYBER FLARE
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                    className="text-xs tracking-widest -mt-1 text-[#FFDE40] font-['Saira',sans-serif]"
                >
                  BGMI × CTF EVENT
                </motion.p>
              </div>
            </div>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex space-x-6">
              <ul className="flex space-x-6 font-['Saira',sans-serif]">
                <li>
                  <Link href="/" className="text-sm font-bold uppercase hover:text-[#FFF512] relative group">
                    Home
                    <span className="absolute -bottom-1 left-0 w-0 h-[3px] bg-[#FFF512] group-hover:w-full transition-all duration-300 block" />
                  </Link>
                </li>
                <li>
                  <Link href="/Task/flag1" className="text-sm font-bold uppercase hover:text-[#FFF512] relative group">
                    Flag 1
                    <span className="absolute -bottom-1 left-0 w-0 h-[3px] bg-[#FFF512] group-hover:w-full transition-all duration-300 block" />
                  </Link>
                </li>
                <li>
                  <Link href="/Task/flag2" className="text-sm font-bold uppercase hover:text-[#FFF512] relative group">
                    Flag 2
                    <span className="absolute -bottom-1 left-0 w-0 h-[3px] bg-[#FFF512] group-hover:w-full transition-all duration-300 block" />
                  </Link>
                </li>
                <li>
                  <Link href="/Task/flag3" className="text-sm font-bold uppercase hover:text-[#FFF512] relative group">
                    Flag 3
                    <span className="absolute -bottom-1 left-0 w-0 h-[3px] bg-[#FFF512] group-hover:w-full transition-all duration-300 block" />
                  </Link>
                </li>
                <li>
                  <Link href="/Task/flag4" className="text-sm font-bold uppercase hover:text-[#FFF512] relative group">
                    Flag 4
                    <span className="absolute -bottom-1 left-0 w-0 h-[3px] bg-[#FFF512] group-hover:w-full transition-all duration-300 block" />
                  </Link>
                </li>
                <li>
                  <Link href="/Task/flag5" className="text-sm font-bold uppercase hover:text-[#FFF512] relative group">
                    Flag 5
                    <span className="absolute -bottom-1 left-0 w-0 h-[3px] bg-[#FFF512] group-hover:w-full transition-all duration-300 block" />
                  </Link>
                </li>
                <li>
                  <Link href="/Chef" className="text-sm font-bold uppercase hover:text-[#FFF512] relative group">
                   Our Team
                    <span className="absolute -bottom-1 left-0 w-0 h-[3px] bg-[#FFF512] group-hover:w-full transition-all duration-300 block" />
                  </Link>
                </li>
              </ul>
            </nav>

            {/* Register Button */}
            <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="hidden md:flex items-center bg-[#FFF512] text-[#090907] font-extrabold px-5 py-2 rounded-sm shadow-[4px_4px_0px_0px_#EBB014] hover:shadow-[2px_2px_0px_0px_#EBB014] hover:translate-x-[2px] hover:translate-y-[2px] transition-all duration-200 font-['Saira',sans-serif]"
            >
              <Link href={"https://forms.gle/Y3URDGjK4UwhwFC98"}>REGISTER NOW</Link>
              <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5, repeatType: "reverse" }}
                  className="ml-2"
              >
                →
              </motion.div>
            </motion.button>

            {/* Mobile Menu Toggle */}
            <motion.button
                className="lg:hidden flex items-center justify-center w-10 h-10 rounded-sm bg-[#090907] border-2 border-[#FFF512]"
                onClick={() => setIsOpen(!isOpen)}
                whileTap={{ scale: 0.9 }}
            >
              {isOpen ? <X size={24} className="text-[#FFF512]" /> : <Menu size={24} className="text-[#FFF512]" />}
            </motion.button>
          </div>

          {/* Mobile Dropdown */}
          <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="lg:hidden bg-[#090907] border-t-2 border-[#DE8D00] px-4 pb-4 space-y-4 font-['Saira',sans-serif]"
                >
                  <ul className="space-y-4">
                    <li>
                      <Link href="/" className="block text-sm font-bold uppercase text-white hover:text-[#FFF512]">
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link href="/Task/flag1" className="block text-sm font-bold uppercase text-white hover:text-[#FFF512]">
                        Flag 1
                      </Link>
                    </li>
                    <li>
                      <Link href="/Task/flag2" className="block text-sm font-bold uppercase text-white hover:text-[#FFF512]">
                        Flag 2
                      </Link>
                    </li>
                    <li>
                      <Link href="/Task/flag3" className="block text-sm font-bold uppercase text-white hover:text-[#FFF512]">
                        Flag 3
                      </Link>
                    </li>
                    <li>
                      <Link href="/Task/flag4" className="block text-sm font-bold uppercase text-white hover:text-[#FFF512]">
                        Flag 4
                      </Link>
                    </li>
                    <li>
                      <Link href="/Task/flag5" className="block text-sm font-bold uppercase text-white hover:text-[#FFF512]">
                        Flag 5
                      </Link>
                    </li>
                    <li>
                      <Link href="/Chef" className="block text-sm font-bold uppercase text-white hover:text-[#FFF512]">
                       Our Team
                      </Link>
                    </li>
                  </ul>

                  <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full bg-[#FFF512] text-[#090907] font-extrabold px-4 py-3 mt-2 rounded-sm shadow-[4px_4px_0px_0px_#EBB014] hover:shadow-[2px_2px_0px_0px_#EBB014] hover:translate-x-[2px] hover:translate-y-[2px] transition-all duration-200 flex justify-center items-center"
                  >
                    <Link href={"https://forms.gle/Y3URDGjK4UwhwFC98"}>REGISTER NOW</Link>
                    <motion.span
                        animate={{ x: [0, 5, 0] }}
                        transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5, repeatType: "reverse" }}
                        className="ml-2"
                    >
                      →
                    </motion.span>
                  </motion.button>
                </motion.div>
            )}
          </AnimatePresence>
        </header>
      </>
  )
}
