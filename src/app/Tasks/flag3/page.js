"use client"

import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { AlertCircle, X } from 'lucide-react'
import Link from "next/link"

export default function Flag3() {
  const [answer, setAnswer] = useState("")
  const [showHint, setShowHint] = useState(false)
  const [isCorrect, setIsCorrect] = useState(false)
  const [particles, setParticles] = useState([])
  const [wrongAttempts, setWrongAttempts] = useState(0)
  const [showWrongMessage, setShowWrongMessage] = useState(false)
  const [showModal, setShowModal] = useState(false)
  const [shake, setShake] = useState(false)
  const containerRef = useRef(null)

  useEffect(() => {
    // Generate random particles for the animated background
    const newParticles = Array.from({ length: 120 }, (_, i) => ({
      // Increased count
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 12 + 3, // Increased size
      speed: Math.random() * 0.5 + 0.1,
      color: i % 3 === 0 ? "#FFF512" : i % 3 === 1 ? "#DE8D00" : "#9C4100",
    }))
    setParticles(newParticles)
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (answer.toLowerCase() === "password") {
      setIsCorrect(true)
      // Success animation
      const container = containerRef.current
      if (container) {
        container.classList.add("success-flash")
        setTimeout(() => {
          container.classList.remove("success-flash")
        }, 1000)
      }
    } else {
      // Wrong answer
      setWrongAttempts(prev => prev + 1)
      setShowWrongMessage(true)
      setShake(true)
      setAnswer("")

      // Hide wrong message after 2 seconds
      setTimeout(() => {
        setShowWrongMessage(false)
      }, 2000)

      // Reset shake after animation completes
      setTimeout(() => {
        setShake(false)
      }, 500)

      // Show modal after 5 wrong attempts
      if (wrongAttempts >= 4) {
        setShowModal(true)
      }
    }
  }

  const handleReset = () => {
    setAnswer("")
    setShowHint(false)
    setIsCorrect(false)
  }

  return (
      <>
        {/* Google Fonts Import */}
        <style jsx global>{`
            @import url('https://fonts.googleapis.com/css2?family=New+Rocker&family=Saira:wght@400;600;700;800&display=swap');

            .success-flash {
                animation: successFlash 1s ease;
            }

            @keyframes successFlash {
                0%, 100% { box-shadow: 0 0 0 rgba(255, 245, 18, 0); }
                50% { box-shadow: 0 0 30px rgba(255, 245, 18, 0.8); }
            }

            .glitch {
                animation: glitch 0.5s ease;
            }

            @keyframes glitch {
                0%, 100% { transform: translate(0); }
                20% { transform: translate(-5px, 5px); }
                40% { transform: translate(5px, -5px); }
                60% { transform: translate(-3px, -3px); }
                80% { transform: translate(3px, 3px); }
            }
        `}</style>

        <main
            className={`min-h-screen bg-[#090907] py-10 px-4 relative overflow-hidden ${shake ? 'glitch' : ''}`}
            ref={containerRef}
        >
          {/* Animated Background */}
          <div className="absolute inset-0 overflow-hidden">
            {particles.map((particle) => (
                <motion.div
                    key={particle.id}
                    className="absolute rounded-full opacity-60" // Increased opacity
                    style={{
                      backgroundColor: particle.color,
                      width: `${particle.size}px`,
                      height: `${particle.size}px`,
                      left: `${particle.x}%`,
                      top: `${particle.y}%`,
                      boxShadow: `0 0 ${particle.size/2}px ${particle.color}`, // Added glow
                    }}
                    animate={{
                      y: ["0%", "100%"],
                      x: [`${particle.x}%`, `${particle.x + (Math.random() * 30 - 15)}%`], // More movement
                    }}
                    transition={{
                      duration: 15 / particle.speed, // Faster animation
                      repeat: Number.POSITIVE_INFINITY,
                      repeatType: "reverse",
                      ease: "linear",
                    }}
                />
            ))}
            <div className="absolute inset-0 bg-[#090907]/60" />
          </div>

          {/* Circuit Pattern Overlay */}
          <div className="absolute inset-0 opacity-10">
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

          <div className="max-w-5xl mx-auto bg-[#1A1A18]/90 p-8 md:p-12 rounded-sm border-2 border-[#FFF512] shadow-[8px_8px_0px_0px_#EBB014] relative z-10">
            <div className="text-center mb-10">
              <div className="flex justify-center mb-2">
                <span className="text-[#FFF512] text-3xl">&#34;</span>
                <h1 className="text-xl md:text-2xl text-white font-['New_Rocker',cursive] mx-2">
                  The weakest link in the security chain is the human element.
                </h1>
                <span className="text-[#FFF512] text-3xl">&#34;</span>
              </div>
              <p className="text-[#FFDE40] text-sm font-['Saira',sans-serif]">- Kevin Mitnick</p>

              <div className="w-full h-px bg-[#DE8D00] my-8"></div>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-[#FFF512] mb-4 font-['New_Rocker',cursive]">
                <motion.span
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6 }}
                >
                  Ready for the challenge?
                </motion.span>
              </h2>
              <p className="text-white mb-2 font-['Saira',sans-serif]">
                <span className="text-[#FFDE40] font-bold">FLAG [3 of 5]</span>
              </p>

              <div className="bg-[#090907] p-6 border-2 border-[#DE8D00] rounded-sm mb-6">
                <h3 className="text-xl text-[#FFDE40] mb-4 font-['New_Rocker',cursive]">
                  <motion.span
                      animate={{
                        y: [0, -5, 0],
                        color: ["#FFDE40", "#FFF512", "#FFDE40"],
                      }}
                      transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
                  >
                    Riddle:
                  </motion.span>
                </h3>
                <p className="text-gray-300 mb-4 font-['Saira',sans-serif] italic">
                  I&#39;m a key you can&#39;t hold or see,
                  <br />A secret dance of letters, numbers, three.
                  <br />I guard the gate to realms unknown—
                  <br />
                  Fail my test, you&#39;re locked alone!
                  <br />
                  What am I?
                </p>

                <h4 className="text-lg text-[#FFDE40] mb-2 font-['New_Rocker',cursive]">Initial Clue:</h4>
                <div className="p-3 bg-[#1A1A18] border border-[#FFF512] rounded-sm">
                  <p className="text-[#FFF512] font-mono text-center tracking-wider">112 97 115 115 119 111 114 100</p>
                </div>
              </div>

              <form onSubmit={handleSubmit}>
                <div className="mb-6 relative">
                  <label htmlFor="answer" className="block text-white mb-2 font-['Saira',sans-serif]">
                    Answer:
                  </label>
                  <input
                      type="text"
                      id="answer"
                      value={answer}
                      onChange={(e) => setAnswer(e.target.value)}
                      className={`w-full p-3 bg-[#090907] border-2 ${showWrongMessage ? 'border-red-500' : 'border-[#DE8D00]'} rounded-sm text-white focus:outline-none focus:border-[#FFF512] font-['Saira',sans-serif]`}
                      placeholder="Enter your answer"
                  />

                  {/* Wrong answer message */}
                  <AnimatePresence>
                    {showWrongMessage && (
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0 }}
                            className="absolute left-0 -bottom-6 text-red-500 text-sm font-['Saira',sans-serif]"
                        >
                          Wrong answer. Try again!
                        </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <div className="mb-4">
                  <button
                      type="button"
                      onClick={() => setShowHint(!showHint)}
                      className="text-[#DE8D00] flex items-center text-sm font-['Saira',sans-serif] hover:text-[#FFF512] transition-colors"
                  >
                    <AlertCircle className="h-4 w-4 mr-1" /> Hint
                  </button>
                  {showHint && (
                      <motion.div
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="mt-2 p-3 bg-[#090907] border border-[#DE8D00] rounded-sm text-[#FFDE40] text-sm font-['Saira',sans-serif]"
                      >
                        The numbers in the clue are ASCII values. Convert each number to its corresponding ASCII character
                        to reveal the answer.
                      </motion.div>
                  )}
                </div>

                <div className="flex justify-center gap-4 mt-8">
                  <motion.button
                      type="button"
                      onClick={handleReset}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="bg-[#1A1A18] text-white border-2 border-[#DE8D00] font-bold px-8 py-3 rounded-sm shadow-[4px_4px_0px_0px_#9C4100] hover:shadow-[2px_2px_0px_0px_#9C4100] hover:translate-x-[2px] hover:translate-y-[2px] transition-all duration-200 font-['Saira',sans-serif]"
                  >
                    Reset
                  </motion.button>

                  {!isCorrect ? (
                      <motion.button
                          type="submit"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="bg-[#1A1A18] text-white border-2 border-[#DE8D00] font-bold px-8 py-3 rounded-sm shadow-[4px_4px_0px_0px_#9C4100] hover:shadow-[2px_2px_0px_0px_#9C4100] hover:translate-x-[2px] hover:translate-y-[2px] transition-all duration-200 font-['Saira',sans-serif]"
                      >
                        Submit
                      </motion.button>
                  ) : (
                      <Link href="/Tasks/no4">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-[#FFF512] text-[#090907] border-2 border-[#DE8D00] font-bold px-8 py-3 rounded-sm shadow-[4px_4px_0px_0px_#EBB014] hover:shadow-[2px_2px_0px_0px_#EBB014] hover:translate-x-[2px] hover:translate-y-[2px] transition-all duration-200 animate-pulse font-['Saira',sans-serif]"
                        >
                          Here&#39;s a clue
                        </motion.button>
                      </Link>
                  )}
                </div>
              </form>
            </div>
          </div>

          {/* Modal after 5 wrong attempts */}
          <AnimatePresence>
            {showModal && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
                >
                  <motion.div
                      initial={{ scale: 0.8, y: 20 }}
                      animate={{ scale: 1, y: 0 }}
                      exit={{ scale: 0.8, y: 20 }}
                      className="bg-[#1A1A18] p-6 rounded-sm border-2 border-[#FFF512] max-w-md w-full relative"
                  >
                    <button
                        onClick={() => setShowModal(false)}
                        className="absolute top-2 right-2 text-white hover:text-[#FFF512]"
                    >
                      <X size={24} />
                    </button>

                    <h3 className="text-xl text-[#FFF512] mb-4 font-['New_Rocker',cursive]">Need a better hint?</h3>

                    <div className="mb-4 border-2 border-[#DE8D00] rounded-sm overflow-hidden">
                      <img
                          src="/placeholder.svg?height=300&width=400"
                          alt="Hint"
                          className="w-full h-auto"
                      />
                    </div>

                    <p className="text-white mb-4 font-['Saira',sans-serif]">
                      The numbers in the clue are ASCII values. Each number represents a character. For example, 112 in ASCII is the letter &#39;p&#39;. Convert all the numbers to see what word they spell.
                    </p>

                    <div className="text-center">
                      <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          onClick={() => setShowModal(false)}
                          className="bg-[#FFF512] text-[#090907] font-bold px-6 py-2 rounded-sm"
                      >
                        Got it
                      </motion.button>
                    </div>
                  </motion.div>
                </motion.div>
            )}
          </AnimatePresence>
        </main>
      </>
  )
}
