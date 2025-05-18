"use client"

import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { AlertCircle, Trophy, X } from 'lucide-react'

export default function Flag5() {
  const [answer, setAnswer] = useState("")
  const [showHint, setShowHint] = useState(false)
  const [isCorrect, setIsCorrect] = useState(false)
  const [showCelebration, setShowCelebration] = useState(false)
  const [confetti, setConfetti] = useState([])
  const [randomPassword, setRandomPassword] = useState("P@ssw0rd123!")
  const [wrongAttempts, setWrongAttempts] = useState(0)
  const [showWrongMessage, setShowWrongMessage] = useState(false)
  const [showModal, setShowModal] = useState(false)
  const [shake, setShake] = useState(false)
  const containerRef = useRef(null)

  useEffect(() => {
    // Generate animated elements for the background
    const lines = Array.from({ length: 60 }, (_, i) => ({
      // Increased count
      id: i,
      x1: Math.random() * 100,
      y1: Math.random() * 100,
      x2: Math.random() * 100,
      y2: Math.random() * 100,
      width: Math.random() * 6 + 2, // Increased width
      color: i % 3 === 0 ? "#FFF512" : i % 3 === 1 ? "#DE8D00" : "#9C4100",
      delay: Math.random() * 2,
      duration: Math.random() * 6 + 3, // Faster animation
    }))
    setConfetti(lines)

    // Random password generator with * and # that encodes "I am always there, but you need to find me"
    const message = "i am always there but you need to find me"
    let position = 0

    const passwordInterval = setInterval(() => {
      let newPassword = ""
      for (let i = 0; i < 20; i++) {
        // Use the current character from the message to determine * or #
        // * for spaces, # for letters
        if (position >= message.length) position = 0

        const char = message[position]
        newPassword += char === " " ? "*" : "#"
        position++
      }
      setRandomPassword(newPassword)
    }, 2000)

    return () => clearInterval(passwordInterval)
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (answer.toLowerCase() === "phishing") {
      setIsCorrect(true)
      setShowCelebration(true)
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

            .celebration {
                animation: celebrate 1s ease;
            }

            @keyframes celebrate {
                0%, 100% { transform: scale(1); }
                50% { transform: scale(1.05); }
            }
        `}</style>

        <main
            className={`min-h-screen bg-[#090907] py-10 px-4 relative overflow-hidden ${shake ? 'glitch' : ''} ${isCorrect ? 'celebration' : ''}`}
            ref={containerRef}
        >
          {/* Animated Background */}
          <div className="absolute inset-0 overflow-hidden">
            {confetti.map((line) => (
                <motion.div
                    key={line.id}
                    className="absolute"
                    style={{
                      width: "200px", // Increased width
                      height: `${line.width}px`,
                      backgroundColor: line.color,
                      left: `${line.x1}%`,
                      top: `${line.y1}%`,
                      transformOrigin: "left center",
                      opacity: 0.7, // Increased base opacity
                    }}
                    animate={{
                      left: [`${line.x1}%`, `${line.x2}%`],
                      top: [`${line.y1}%`, `${line.y2}%`],
                      opacity: [0.4, 0.9, 0.4], // More opacity variation
                      boxShadow: [
                        "0 0 0px rgba(255, 245, 18, 0)",
                        "0 0 15px rgba(255, 245, 18, 0.6)",
                        "0 0 0px rgba(255, 245, 18, 0)",
                      ], // Added glow
                    }}
                    transition={{
                      duration: line.duration,
                      delay: line.delay,
                      repeat: Number.POSITIVE_INFINITY,
                      repeatType: "loop",
                    }}
                />
            ))}
            <div className="absolute inset-0 bg-[#090907]/70" />
          </div>

          {/* Celebration Animation */}
          {showCelebration && (
              <div className="absolute inset-0 z-20 pointer-events-none">
                {Array.from({ length: 150 }).map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-4 h-4 rounded-full"
                        style={{
                          backgroundColor: i % 3 === 0 ? "#FFF512" : i % 3 === 1 ? "#DE8D00" : "#9C4100",
                          top: "50%",
                          left: "50%",
                          boxShadow: `0 0 10px ${i % 3 === 0 ? "#FFF512" : i % 3 === 1 ? "#DE8D00" : "#9C4100"}`,
                        }}
                        initial={{ scale: 0 }}
                        animate={{
                          scale: [0, 1, 0],
                          x: [0, (Math.random() - 0.5) * 1000],
                          y: [0, (Math.random() - 0.5) * 1000],
                          opacity: [0, 1, 0],
                        }}
                        transition={{
                          duration: 3,
                          delay: Math.random() * 0.5,
                          ease: "easeOut",
                        }}
                    />
                ))}
              </div>
          )}

          <div className="max-w-5xl mx-auto bg-[#1A1A18]/90 p-8 md:p-12 rounded-sm border-2 border-[#FFF512] shadow-[8px_8px_0px_0px_#EBB014] relative z-10">
            <div className="text-center mb-10">
              <div className="flex justify-center mb-2">
                <span className="text-[#FFF512] text-3xl">&#34;</span>
                <h1 className="text-xl md:text-2xl text-white font-['New_Rocker',cursive] mx-2">
                  The most dangerous click might be the one you never suspect.
                </h1>
                <span className="text-[#FFF512] text-3xl">&#34;</span>
              </div>
              <p className="text-[#FFDE40] text-sm font-['Saira',sans-serif]">- Cyber Flare Security Team</p>

              <div className="w-full h-px bg-[#DE8D00] my-8"></div>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-[#FFF512] mb-4 font-['New_Rocker',cursive]">
                <motion.span
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                >
                  <motion.span
                      animate={{
                        textShadow: [
                          "0 0 0px rgba(255, 245, 18, 0)",
                          "0 0 15px rgba(255, 245, 18, 0.8)",
                          "0 0 0px rgba(255, 245, 18, 0)",
                        ],
                      }}
                      transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                  >
                    Ready for the challenge?
                  </motion.span>
                </motion.span>
              </h2>
              <p className="text-white mb-2 font-['Saira',sans-serif]">
                <span className="text-[#FFDE40] font-bold">FLAG [5 of 5]</span>
              </p>

              <div className="bg-[#090907] p-6 border-2 border-[#DE8D00] rounded-sm mb-6">
                <h3 className="text-xl text-[#FFDE40] mb-4 font-['New_Rocker',cursive]">
                  <motion.span
                      animate={{
                        scale: [1, 1.05, 1],
                        color: ["#FFDE40", "#FFF512", "#FFDE40"],
                      }}
                      transition={{ duration: 2.5, repeat: Number.POSITIVE_INFINITY }}
                  >
                    Riddle:
                  </motion.span>
                </h3>
                <p className="text-gray-300 mb-4 font-['Saira',sans-serif] italic">
                  I cast a net with bait disguised as friends,
                  <br />A click, a slip—your data meets its end.
                  <br />
                  No rod or reel, but hooks in every line,
                  <br />
                  What am I, the thief of peace of mind?
                </p>

                <p className="text-white font-bold mb-4 font-['Saira',sans-serif] text-center">It is always there</p>

                <div className="p-3 bg-[#1A1A18] border border-[#FFF512] rounded-sm mb-4">
                  <motion.p
                      className="text-[#FFF512] font-mono text-center tracking-wider"
                      animate={{ opacity: [0.7, 1, 0.7] }}
                      transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                  >
                    {randomPassword}
                  </motion.p>
                </div>

                <h4 className="text-lg text-[#FFDE40] mb-2 font-['New_Rocker',cursive]">Initial Clue:</h4>
                <div className="p-3 bg-[#1A1A18] border border-[#FFF512] rounded-sm mb-4">
                  <p className="text-white font-mono text-center font-['Saira',sans-serif]">
                    The answer is hidden in plain sight, but sometimes we need to look at things from a different angle.
                  </p>
                </div>

                <h4 className="text-lg text-[#FFDE40] mb-2 font-['New_Rocker',cursive]">
                  Still not see it? Here&#39;s another clue:
                </h4>
                <div className="p-3 bg-[#1A1A18] border border-[#FFF512] rounded-sm">
                  <p className="text-[#FFF512] font-mono text-center tracking-wider">16 8 9 19 8 9 14 7</p>
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
                        The numbers in the clue represent positions in the alphabet (A=1, B=2, etc.). Decode them to reveal
                        the answer. Think about deceptive emails or messages that trick users into revealing sensitive
                        information.
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
                      <a href="https://forms.google.com" target="_blank" rel="noopener noreferrer">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-[#FFF512] text-[#090907] border-2 border-[#DE8D00] font-bold px-8 py-3 rounded-sm shadow-[4px_4px_0px_0px_#EBB014] hover:shadow-[2px_2px_0px_0px_#EBB014] hover:translate-x-[2px] hover:translate-y-[2px] transition-all duration-200 animate-pulse font-['Saira',sans-serif] flex items-center"
                        >
                          <Trophy className="mr-2 h-5 w-5" /> SUBMIT ALL FLAGS
                        </motion.button>
                      </a>
                  )}
                </div>
              </form>

              {isCorrect && (
                  <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="mt-8 p-6 bg-[#090907] border-2 border-[#FFF512] rounded-sm text-center"
                  >
                    <h3 className="text-2xl font-bold text-[#FFF512] mb-4 font-['New_Rocker',cursive]">CONGRATULATIONS!</h3>
                    <p className="text-white mb-4 font-['Saira',sans-serif]">
                      You&#39;ve successfully completed all 5 flags of the Cyber Flare CTF challenge! Your cybersecurity skills
                      are impressive.
                    </p>
                    <p className="text-[#FFDE40] mb-6 font-['Saira',sans-serif]">
                      Please submit all the flags you&#39;ve collected in the Google Form to officially complete the challenge.
                    </p>

                    <a
                        href="https://forms.google.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center bg-[#DE8D00] text-[#090907] font-bold px-6 py-3 rounded-sm shadow-[4px_4px_0px_0px_#9C4100] hover:shadow-[2px_2px_0px_0px_#9C4100] hover:translate-x-[2px] hover:translate-y-[2px] transition-all duration-200 font-['Saira',sans-serif]"
                    >
                      Open Google Form <Trophy className="ml-2 h-4 w-4" />
                    </a>
                  </motion.div>
              )}
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
                      The numbers in the clue represent positions in the alphabet. For example, 16 is the letter &#39;P&#39;. This type of cyber attack involves deceptive emails or messages that trick users into revealing sensitive information.
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
