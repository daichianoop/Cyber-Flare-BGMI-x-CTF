"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { ExternalLink, Play } from "lucide-react"
import Link from "next/link"

export default function Demo() {
  const [particles, setParticles] = useState([])
  const [isPlaying, setIsPlaying] = useState(false)

  useEffect(() => {
    // Generate random particles for the animated background
    const newParticles = Array.from({ length: 80 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 8 + 2,
      speed: Math.random() * 0.5 + 0.1,
      color: i % 3 === 0 ? "#FFF512" : i % 3 === 1 ? "#DE8D00" : "#9C4100",
    }))
    setParticles(newParticles)
  }, [])

  return (
      <>
        {/* Google Fonts Import */}
        <style jsx global>{`
            @import url('https://fonts.googleapis.com/css2?family=New+Rocker&family=Saira:wght@400;600;700;800&display=swap');
        `}</style>

        <main className="min-h-screen bg-[#090907] py-20 px-4 relative overflow-hidden">
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
                    }}
                    animate={{
                      y: ["0%", "100%"],
                      x: [`${particle.x}%`, `${particle.x + (Math.random() * 20 - 10)}%`],
                    }}
                    transition={{
                      duration: 15 / particle.speed,
                      repeat: Number.POSITIVE_INFINITY,
                      repeatType: "reverse",
                      ease: "linear",
                    }}
                />
            ))}
            <div className="absolute inset-0 bg-[#090907]/80" />
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

          <div className="max-w-4xl mx-auto bg-[#1A1A18]/90 p-8 md:p-12 rounded-sm border-2 border-[#FFF512] shadow-[8px_8px_0px_0px_#EBB014] relative z-10">
            <div className="text-center mb-10">
              <div className="flex justify-center mb-2">
                <span className="text-[#FFF512] text-3xl">&#34;</span>
                <motion.h1
                    className="text-xl md:text-2xl text-white font-['New_Rocker',cursive] mx-2"
                    animate={{
                      textShadow: [
                        "0 0 0px rgba(255, 245, 18, 0)",
                        "0 0 10px rgba(255, 245, 18, 0.5)",
                        "0 0 0px rgba(255, 245, 18, 0)",
                      ],
                    }}
                    transition={{ duration: 2.5, repeat: Number.POSITIVE_INFINITY }}
                >
                  Collect all flags to complete the Cyber Flare CTF challenge
                </motion.h1>
                <span className="text-[#FFF512] text-3xl">&#34;</span>
              </div>
              <p className="text-[#FFDE40] text-sm font-['Saira',sans-serif]">- Cyber Flare CTF Demo</p>

              <div className="w-full h-px bg-[#DE8D00] my-8"></div>
            </div>

            <div className="mb-8">
              <motion.h2
                  className="text-2xl md:text-3xl font-bold text-[#FFF512] mb-6 font-['New_Rocker',cursive]"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7 }}
              >
                <motion.span
                    animate={{
                      scale: [1, 1.03, 1],
                      color: ["#FFF512", "#FFDE40", "#FFF512"],
                    }}
                    transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
                >
                  Flag Collection Demo
                </motion.span>
              </motion.h2>

              <div className="bg-[#090907] p-6 border-2 border-[#DE8D00] rounded-sm mb-8">
                <motion.h3
                    className="text-xl text-[#FFDE40] mb-4 font-['New_Rocker',cursive]"
                    animate={{
                      x: [0, 5, 0],
                      textShadow: [
                        "0 0 0px rgba(255, 245, 18, 0)",
                        "0 0 8px rgba(255, 245, 18, 0.6)",
                        "0 0 0px rgba(255, 245, 18, 0)",
                      ],
                    }}
                    transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                >
                  Instructions:
                </motion.h3>
                <ol className="list-decimal list-inside space-y-2 text-white font-['Saira',sans-serif]">
                  <li>Complete each challenge to collect all 5 flags</li>
                  <li>Each flag is a specific word or phrase related to cybersecurity</li>
                  <li>Once you have all 5 flags, submit them via the Google Form</li>
                  <li>You can try as many times as you want on the website</li>
                  <li>Only your final Google Form submission will be counted</li>
                </ol>
              </div>

              {/* Video Player */}
              <div className="mb-8">
                <motion.h3
                    className="text-xl text-[#FFDE40] mb-4 font-['New_Rocker',cursive]"
                    animate={{
                      y: [0, -3, 0],
                      color: ["#FFDE40", "#FFF512", "#FFDE40"],
                    }}
                    transition={{ duration: 2.5, repeat: Number.POSITIVE_INFINITY }}
                >
                  Explanation Video:
                </motion.h3>
                <div className="relative pb-[56.25%] h-0 overflow-hidden rounded-sm border-2 border-[#DE8D00]">
                  <div className="absolute inset-0 bg-[#090907] flex items-center justify-center">
                    {isPlaying ? (
                        <div className="w-full h-full bg-black flex items-center justify-center">
                          <p className="text-white font-['Saira',sans-serif]">Video is playing...</p>
                        </div>
                    ) : (
                        <div className="w-full h-full flex flex-col items-center justify-center">
                          <motion.div
                              whileHover={{ scale: 1.1 }}
                              whileTap={{ scale: 0.9 }}
                              className="w-20 h-20 rounded-full bg-[#FFF512] flex items-center justify-center cursor-pointer"
                              onClick={() => setIsPlaying(true)}
                          >
                            <Play size={40} className="text-[#090907] ml-2" />
                          </motion.div>
                          <p className="text-white mt-4 font-['Saira',sans-serif]">Click to play tutorial video</p>
                        </div>
                    )}
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
                {[1, 2, 3, 4, 5].map((num) => (
                    <Link href={`/Tasks/no${num}`} key={num}>
                      <motion.div
                          whileHover={{ scale: 1.05, y: -5 }}
                          whileTap={{ scale: 0.95 }}
                          className="bg-[#1A1A18] p-4 rounded-sm border-2 border-[#DE8D00] shadow-[4px_4px_0px_0px_#9C4100] hover:shadow-[2px_2px_0px_0px_#9C4100] hover:translate-x-[2px] hover:translate-y-[2px] transition-all duration-200 flex flex-col items-center justify-center text-center"
                      >
                        <motion.div
                            animate={{
                              scale: [1, 1.1, 1],
                              rotate: [0, 5, 0, -5, 0],
                            }}
                            transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, delay: num * 0.2 }}
                            className="w-12 h-12 bg-[#FFF512] text-[#090907] rounded-sm flex items-center justify-center font-bold text-xl mb-2"
                        >
                          {num}
                        </motion.div>
                        <h4 className="text-[#FFF512] font-bold font-['New_Rocker',cursive] mb-1">Flag {num}</h4>
                        <p className="text-white text-sm font-['Saira',sans-serif]">Click to start challenge</p>
                      </motion.div>
                    </Link>
                ))}
              </div>

              <div className="mt-8 text-center">
                <a
                    href="https://forms.google.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center bg-[#FFF512] text-[#090907] font-bold px-8 py-4 rounded-sm shadow-[6px_6px_0px_0px_#EBB014] hover:shadow-[3px_3px_0px_0px_#EBB014] hover:translate-x-[3px] hover:translate-y-[3px] transition-all duration-200 font-['Saira',sans-serif]"
                >
                  <motion.span
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
                      className="flex items-center"
                  >
                    Submit All Flags <ExternalLink className="ml-2 h-5 w-5" />
                  </motion.span>
                </a>
              </div>
            </div>

            <div className="bg-[#090907] p-6 border-2 border-[#DE8D00] rounded-sm">
              <motion.h3
                  className="text-xl text-[#FFDE40] mb-4 font-['New_Rocker',cursive]"
                  animate={{
                    textShadow: [
                      "0 0 0px rgba(255, 245, 18, 0)",
                      "0 0 8px rgba(255, 245, 18, 0.6)",
                      "0 0 0px rgba(255, 245, 18, 0)",
                    ],
                  }}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
              >
                Important Notes:
              </motion.h3>
              <ul className="list-disc list-inside space-y-2 text-white font-['Saira',sans-serif]">
                <li>Submissions on the website are not monitored</li>
                <li>You may try as many times as you want on the website</li>
                <li>The Google Form is the final answer submission method</li>
                <li>Make sure to double-check your flags before submitting</li>
                <li>All flags are case-sensitive</li>
              </ul>
            </div>
          </div>
        </main>
      </>
  )
}
