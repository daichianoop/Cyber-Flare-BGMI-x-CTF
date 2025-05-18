"use client"

import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Download, AlertCircle, X } from 'lucide-react'
import Link from "next/link"

export default function Flag1() {
  const [answer, setAnswer] = useState("")
  const [showHint, setShowHint] = useState(false)
  const [isCorrect, setIsCorrect] = useState(false)
  const [bubbles, setBubbles] = useState([])
  const [wrongAttempts, setWrongAttempts] = useState(0)
  const [showWrongMessage, setShowWrongMessage] = useState(false)
  const [showModal, setShowModal] = useState(false)
  const [shake, setShake] = useState(false)
  const containerRef = useRef(null)

  useEffect(() => {
    // Generate bubbles for the animated background
    const newBubbles = Array.from({ length: 60 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 120 + 60, // Increased size
      speed: Math.random() * 50 + 30,
      color: i % 3 === 0 ? "#FFF512" : i % 3 === 1 ? "#DE8D00" : "#9C4100",
    }))
    setBubbles(newBubbles)
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (answer.toLowerCase() === "cyberpeacecorpsak05") {
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
            {bubbles.map((bubble) => (
                <motion.div
                    key={bubble.id}
                    className="absolute rounded-full opacity-25" // Increased opacity
                    style={{
                      backgroundColor: bubble.color,
                      width: `${bubble.size}px`,
                      height: `${bubble.size}px`,
                      left: `${bubble.x}%`,
                      bottom: "-100px",
                      filter: "blur(8px)",
                    }}
                    animate={{
                      y: [0, -window.innerHeight - bubble.size],
                      x: [0, (Math.random() - 0.5) * 300], // More movement
                    }}
                    transition={{
                      duration: bubble.speed,
                      repeat: Number.POSITIVE_INFINITY,
                      repeatType: "loop",
                      ease: "linear",
                      delay: Math.random() * 10,
                    }}
                />
            ))}
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
                  The greatest threat to security is not technology; it&#39;s human error.
                </h1>
                <span className="text-[#FFF512] text-3xl">&#34;</span>
              </div>
              <p className="text-[#FFDE40] text-sm font-['Saira',sans-serif]">- CyberFlare Security Team</p>

              <div className="w-full h-px bg-[#DE8D00] my-8"></div>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-[#FFF512] mb-4 font-['New_Rocker',cursive]">
                <motion.span
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                  Ready for the challenge?
                </motion.span>
              </h2>
              <p className="text-white mb-2 font-['Saira',sans-serif]">
                <span className="text-[#FFDE40] font-bold">FLAG [1 of 5]</span>
              </p>
              <p className="text-gray-300 mb-6 font-['Saira',sans-serif]">
                Download the web activity log file below and analyze it carefully. Find the username of the person who
                accessed the system without authorization. Enter the exact username to proceed to the next clue.
              </p>

              <motion.button
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="bg-[#1A1A18] text-[#FFF512] border-2 border-[#DE8D00] font-bold px-6 py-3 rounded-sm shadow-[4px_4px_0px_0px_#9C4100] hover:shadow-[2px_2px_0px_0px_#9C4100] hover:translate-x-[2px] hover:translate-y-[2px] transition-all duration-200 flex items-center justify-center mb-8 font-['Saira',sans-serif]"
              >
                <Download className="mr-2 h-5 w-5" />
                Download web_activity.log
              </motion.button>

              <form onSubmit={handleSubmit}>
                <div className="mb-6 relative">
                  <label htmlFor="answer" className="block text-white mb-2 font-['Saira',sans-serif]">
                    Username:
                  </label>
                  <input
                      type="text"
                      id="answer"
                      value={answer}
                      onChange={(e) => setAnswer(e.target.value)}
                      className={`w-full p-3 bg-[#090907] border-2 ${showWrongMessage ? 'border-red-500' : 'border-[#DE8D00]'} rounded-sm text-white focus:outline-none focus:border-[#FFF512] font-['Saira',sans-serif]`}
                      placeholder="Enter the unauthorized username"
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
                        Look for unusual access patterns or login times that don&#39;t match normal user behavior. Check for
                        failed login attempts followed by successful ones.
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
                      <Link href="/Tasks/no2">
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
                      Look more carefully at the log file. The unauthorized user might have accessed the system during unusual hours or from an unexpected location.
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
