"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Lock, Home, Clock } from "lucide-react"
import Link from "next/link"

export default function Locked() {
  const [timer, setTimer] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })
  const [particles, setParticles] = useState([])

  useEffect(() => {
    // Generate particles for animated background
    const newParticles = Array.from({ length: 100 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 8 + 2,
      speed: Math.random() * 0.3 + 0.1,
      color: i % 3 === 0 ? "#FFF512" : i % 3 === 1 ? "#DE8D00" : "#9C4100",
    }))
    setParticles(newParticles)
  }, [])

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

  return (
      <>
        {/* Google Fonts Import */}
        <style jsx global>{`
            @import url('https://fonts.googleapis.com/css2?family=New+Rocker&family=Saira:wght@400;600;700;800&display=swap');
        `}</style>

        <main className="min-h-screen bg-[#090907] relative overflow-hidden flex items-center justify-center pt-20">
          {/* Animated Background */}
          <div className="absolute inset-0 overflow-hidden">
            {particles.map((particle) => (
                <motion.div
                    key={particle.id}
                    className="absolute rounded-full opacity-40"
                    style={{
                      backgroundColor: particle.color,
                      width: `${particle.size}px`,
                      height: `${particle.size}px`,
                      left: `${particle.x}%`,
                      top: `${particle.y}%`,
                      boxShadow: `0 0 ${particle.size / 2}px ${particle.color}`,
                    }}
                    animate={{
                      y: ["0%", "100%"],
                      x: [`${particle.x}%`, `${particle.x + (Math.random() * 20 - 10)}%`],
                    }}
                    transition={{
                      duration: 20 / particle.speed,
                      repeat: Number.POSITIVE_INFINITY,
                      repeatType: "reverse",
                      ease: "linear",
                    }}
                />
            ))}
            <div className="absolute inset-0 bg-[#090907]/70" />
          </div>

          {/* Circuit Pattern Overlay */}
          <div className="absolute inset-0 opacity-5">
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
              <pattern id="circuit" width="100" height="100" patternUnits="userSpaceOnUse">
                <path d="M0,0 L100,0 L100,100 L0,100 Z" fill="none" stroke="#FFF512" strokeWidth="0.5" />
                <circle cx="50" cy="50" r="3" fill="#FFF512" />
                <path d="M50,50 L50,0" stroke="#FFF512" strokeWidth="0.5" />
                <path d="M50,50 L100,50" stroke="#FFF512" strokeWidth="0.5" />
                <path d="M50,50 L50,100" stroke="#FFF512" strokeWidth="0.5" />
                <path d="M50,50 L0,50" stroke="#FFF512" strokeWidth="0.5" />
              </pattern>
              <rect width="100%" height="100%" fill="url(#circuit)" />
            </svg>
          </div>

          {/* Main Content */}
          <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
            {/* Title with Lock Icon */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="flex items-center justify-center gap-4 md:gap-6 mb-8"
            >
              {/* Lock Icon */}
              <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ duration: 1, type: "spring", bounce: 0.5 }}
                  className="relative flex-shrink-0"
              >
                <motion.div
                    animate={{
                      scale: [1, 1.1, 1],
                      boxShadow: [
                        "0 0 0px rgba(255, 245, 18, 0)",
                        "0 0 30px rgba(255, 245, 18, 0.8)",
                        "0 0 0px rgba(255, 245, 18, 0)",
                      ],
                    }}
                    transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                    className="w-16 h-16 md:w-20 md:h-20 bg-[#FFF512] rounded-sm flex items-center justify-center border-4 border-[#DE8D00]"
                >
                  <Lock size={32} className="text-[#090907] md:w-10 md:h-10" />
                </motion.div>
                <motion.div
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                    className="absolute -top-1 -right-1 w-6 h-6 md:w-8 md:h-8 border-2 md:border-4 border-dashed border-[#FFF512] rounded-full"
                />
              </motion.div>

              {/* Title */}
              <h1 className="text-3xl md:text-6xl font-extrabold text-[#FFF512] font-['New_Rocker',cursive]">
                <motion.span
                    animate={{
                      textShadow: [
                        "0 0 0px rgba(255, 245, 18, 0)",
                        "0 0 20px rgba(255, 245, 18, 0.8)",
                        "0 0 0px rgba(255, 245, 18, 0)",
                      ],
                    }}
                    transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
                >
                  CHALLENGES LOCKED
                </motion.span>
              </h1>
            </motion.div>

            {/* Subtitle */}
            <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.6 }}
                className="text-xl md:text-2xl text-white mb-8 font-['Saira',sans-serif]"
            >
              Questions will be revealed in:
            </motion.p>

            {/* Large Timer */}
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1, duration: 0.8 }}
                className="bg-[#1A1A18]/90 p-6 md:p-8 rounded-sm border-2 border-[#FFF512] shadow-[8px_8px_0px_0px_#EBB014] mb-12"
            >
              <div className="flex justify-center items-center gap-4 md:gap-8">
                {[
                  { label: "DAYS", value: timer.days },
                  { label: "HOURS", value: timer.hours },
                  { label: "MINUTES", value: timer.minutes },
                  { label: "SECONDS", value: timer.seconds },
                ].map((item, index) => (
                    <motion.div
                        key={item.label}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.2 + index * 0.1, duration: 0.5 }}
                        className="text-center"
                    >
                      <motion.div
                          animate={{
                            scale: [1, 1.02, 1],
                          }}
                          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: index * 0.5 }}
                          className="bg-[#090907] border border-[#DE8D00] rounded-sm p-3 md:p-4 mb-2"
                      >
                        <div className="text-2xl md:text-4xl font-bold text-[#FFF512] font-mono">
                          {item.value.toString().padStart(2, "0")}
                        </div>
                      </motion.div>
                      <div className="text-xs md:text-sm font-bold text-[#FFDE40] tracking-wider font-['Saira',sans-serif]">
                        {item.label}
                      </div>
                    </motion.div>
                ))}
              </div>

              {/* Separator */}
              <div className="flex justify-center items-center mt-6 mb-4">
                <div className="flex-1 h-px bg-[#DE8D00]"></div>
                <motion.div
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                    className="mx-4 text-[#DE8D00]"
                >
                  <Clock size={24} />
                </motion.div>
                <div className="flex-1 h-px bg-[#DE8D00]"></div>
              </div>

              <p className="text-center text-sm md:text-base text-gray-300 font-['Saira',sans-serif]">
                Until CTF challenges unlock
              </p>
            </motion.div>

            {/* Description */}
            <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2, duration: 0.6 }}
                className="text-lg text-gray-300 mb-12 max-w-2xl mx-auto font-['Saira',sans-serif]"
            >
              The Cyber Flare CTF challenges are currently locked. Once the countdown reaches zero, all 5 flags will be
              available for teams to hunt down. Get ready to test your cybersecurity skills!
            </motion.p>

            {/* Home Button */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2.2, duration: 0.6 }}
            >
              <Link href="/">
                <motion.button
                    whileHover={{ scale: 1.05, y: -3 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-[#FFF512] text-[#090907] font-extrabold px-8 py-4 rounded-sm shadow-[6px_6px_0px_0px_#EBB014] hover:shadow-[3px_3px_0px_0px_#EBB014] hover:translate-x-[3px] hover:translate-y-[3px] transition-all duration-200 flex items-center justify-center mx-auto font-['Saira',sans-serif]"
                >
                  <Home className="mr-3 h-5 w-5" />
                  BACK TO HOME
                  <motion.div
                      animate={{ x: [0, 5, 0] }}
                      transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5, repeatType: "reverse" }}
                      className="ml-3"
                  >
                    →
                  </motion.div>
                </motion.button>
              </Link>
            </motion.div>

            {/* Additional Info */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2.5, duration: 0.5 }}
                className="mt-12 p-6 bg-[#090907]/80 border-2 border-[#DE8D00] rounded-sm"
            >
              <h3 className="text-xl font-bold text-[#FFF512] mb-3 font-['New_Rocker',cursive]">WHAT TO EXPECT:</h3>
              <ul className="text-left text-gray-300 space-y-2 font-['Saira',sans-serif]">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-[#FFF512] mr-3" />5 challenging cybersecurity puzzles
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-[#FFF512] mr-3" />
                  Hidden flags throughout the website
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-[#FFF512] mr-3" />
                  Cryptography, steganography, and web exploitation
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-[#FFF512] mr-3" />
                  Team-based competition format
                </li>
              </ul>
            </motion.div>
          </div>
        </main>
      </>
  )
}
