"use client"
import Image from "next/image"
import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { AlertCircle, Trophy, X, CheckCircle } from "lucide-react"

export default function Flag5() {
  const [initialAnswer, setInitialAnswer] = useState("")
  const [finalAnswer, setFinalAnswer] = useState("")
  const [showHint, setShowHint] = useState(false)
  const [isInitialCorrect, setIsInitialCorrect] = useState(false)
  const [isFinalCorrect, setIsFinalCorrect] = useState(false)
  const [showCelebration, setShowCelebration] = useState(false)
  const [confetti, setConfetti] = useState([])
  const [randomPassword, setRandomPassword] = useState("P@ssw0rd123!")
  const [wrongAttempts, setWrongAttempts] = useState(0)
  const [showWrongMessage, setShowWrongMessage] = useState(false)
  const [showModal, setShowModal] = useState(false)
  const [showCorrectModal, setShowCorrectModal] = useState(false)
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

  const handleInitialSubmit = (e) => {
    e.preventDefault()
    if (initialAnswer.toLowerCase() === "phishing") {
      setIsInitialCorrect(true)
      setShowCorrectModal(true)
    } else {
      // Wrong answer
      setWrongAttempts((prev) => prev + 1)
      setShowWrongMessage(true)
      setShake(true)
      setInitialAnswer("")

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

  const handleFinalSubmit = (e) => {
    e.preventDefault()
    if (finalAnswer.toLowerCase() === "ddos attack") {
      setIsFinalCorrect(true)
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
      // Wrong answer for final flag
      setShowWrongMessage(true)
      setShake(true)
      setFinalAnswer("")

      setTimeout(() => {
        setShowWrongMessage(false)
      }, 2000)

      setTimeout(() => {
        setShake(false)
      }, 500)
    }
  }

  const handleReset = () => {
    setInitialAnswer("")
    setFinalAnswer("")
    setShowHint(false)
    setIsInitialCorrect(false)
    setIsFinalCorrect(false)
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
            className={`min-h-screen bg-[#090907] py-10 px-4 relative overflow-hidden ${shake ? "glitch" : ""} ${isFinalCorrect ? "celebration" : ""}`}
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
                <p className="text-[#FFDE40] text-lg mb-2 font-['Saira',sans-serif]">
                  Crack the riddle and submit the correct word to reveal a hidden hint. Use that hint to uncover and enter
                  the final flag.
                </p>
                <h3 className="text-xl text-[#FFDE40] mb-4 font-['New_Rocker',cursive]">
                  <motion.span
                      animate={{
                        scale: [1, 1.05, 1],
                        color: ["#FFDE40", "#FFF512", "#FFDE40"],
                      }}
                      transition={{ duration: 2.5, repeat: Number.POSITIVE_INFINITY }}
                  >
                    Riddle (Hint for the Word):
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

                <h4 className="text-lg text-[#FFDE40] mb-2 font-['New_Rocker',cursive]">
                  Initial Clue (The Word -Encoded):
                </h4>
                <div className="p-3 bg-[#1A1A18] border border-[#FFF512] rounded-sm mb-4">
                  <p className="text-white font-mono text-center font-['Saira',sans-serif]">16 8 9 19 8 9 14 7</p>
                </div>

                <div className="p-3 bg-[#1A1A18] border border-[#DE8D00] rounded-sm mt-2">
                  <p className="text-[#FFDE40] font-mono text-sm font-['Saira',sans-serif]">
                    <span className="font-bold">Decoding Hint:</span> Remember that the words have weight and the answer
                    isn&#39;t encrypted… it&#39;s encoded in numbers. Trust the order, follow the form, and the final flag is
                    yours.
                  </p>
                </div>
              </div>

              {/* Initial Clue Form */}
              <form onSubmit={handleInitialSubmit} className="mb-8">
                <div className="mb-6 relative">
                  <label
                      htmlFor="initialAnswer"
                      className="block text-white mb-2 font-['Saira',sans-serif] text-lg font-bold"
                  >
                    Initial Clue:
                  </label>
                  <input
                      type="text"
                      id="initialAnswer"
                      value={initialAnswer}
                      onChange={(e) => setInitialAnswer(e.target.value)}
                      disabled={isInitialCorrect}
                      className={`w-full p-3 bg-[#090907] border-2 ${showWrongMessage ? "border-red-500" : isInitialCorrect ? "border-green-500" : "border-[#DE8D00]"} rounded-sm text-white focus:outline-none focus:border-[#FFF512] font-['Saira',sans-serif] ${isInitialCorrect ? "opacity-50" : ""}`}
                      placeholder="Enter the word from the riddle"
                  />
                  {isInitialCorrect && (
                      <div className="absolute right-3 top-10 text-green-500">
                        <CheckCircle size={24} />
                      </div>
                  )}

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

                {!isInitialCorrect && (
                    <div className="flex justify-center gap-4">
                      <motion.button
                          type="submit"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="bg-[#1A1A18] text-white border-2 border-[#DE8D00] font-bold px-8 py-3 rounded-sm shadow-[4px_4px_0px_0px_#9C4100] hover:shadow-[2px_2px_0px_0px_#9C4100] hover:translate-x-[2px] hover:translate-y-[2px] transition-all duration-200 font-['Saira',sans-serif]"
                      >
                        Submit Initial Clue
                      </motion.button>
                    </div>
                )}
              </form>

              {/* Final Flag Form - Only show after initial is correct */}
              {isInitialCorrect && (
                  <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
                    <div className="bg-[#090907] p-6 border-2 border-[#FFF512] rounded-sm mb-6">
                      <h3 className="text-xl text-[#FFF512] mb-4 font-['New_Rocker',cursive]">Hidden Hint Revealed:</h3>
                      <div
                          className="bg-[#090907] p-6 border-2 border-[#FFF512] rounded-sm mb-6 relative overflow-hidden">
                        {/* Animated background pattern */}
                        <div className="absolute inset-0 opacity-5">
                          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                            <pattern id="treasure-pattern" width="50" height="50" patternUnits="userSpaceOnUse">
                              <circle cx="25" cy="25" r="2" fill="#FFF512"/>
                              <path d="M25,25 L25,0 M25,25 L50,25 M25,25 L25,50 M25,25 L0,25" stroke="#FFF512"
                                    strokeWidth="0.5"/>
                            </pattern>
                            <rect width="100%" height="100%" fill="url(#treasure-pattern)"/>
                          </svg>
                        </div>

                        <motion.h3
                            className="text-xl text-[#FFF512] mb-4 font-['New_Rocker',cursive] flex items-center"
                            animate={{
                              textShadow: [
                                "0 0 0px rgba(255, 245, 18, 0)",
                                "0 0 10px rgba(255, 245, 18, 0.8)",
                                "0 0 0px rgba(255, 245, 18, 0)",
                              ],
                            }}
                            transition={{duration: 3, repeat: Number.POSITIVE_INFINITY}}
                        >
                          🕵️‍♀️ TREASURE HUNT REVEALED:
                        </motion.h3>

                        <div className="relative z-10 space-y-4">
                          <motion.p
                              className="text-[#FFDE40] font-['Saira',sans-serif] text-lg leading-relaxed"
                              initial={{opacity: 0, x: -20}}
                              animate={{opacity: 1, x: 0}}
                              transition={{delay: 0.2}}
                          >
                            You&#39;ve traced every trail, decoded every hint... now only one mystery remains.
                            <br/>
                            <span className="text-[#FFF512] font-bold">The final flag — the treasure — isn&#39;t here, but rather lies hidden in a neighbor&#39;s page.</span>
                          </motion.p>

                          <motion.div
                              className="bg-[#1A1A18] p-4 border-l-4 border-[#DE8D00] rounded-sm"
                              initial={{opacity: 0, y: 20}}
                              animate={{opacity: 1, y: 0}}
                              transition={{delay: 0.4}}
                          >
                            <p className="text-white font-['Saira',sans-serif] mb-2">
                              <span className="text-[#FFF512] font-bold">🔍 SEARCH PROTOCOL:</span>
                            </p>
                            <p className="text-gray-300 font-['Saira',sans-serif]">
                              Scour the neighborhood. Leave no element unturned.
                              <br/>
                              You&#39;re looking for the spot that marks <span
                                className="text-[#FFF512] font-bold text-xl">&#34;X.&#34;</span>
                            </p>
                            <p className="text-[#FFDE40] mt-2 font-['Saira',sans-serif] italic mb-2">
                              <span className="text-[#FFF512] font-bold">🐦 HISTORICAL DATA:</span>
                            </p>
                            <p className="text-gray-300 font-['Saira',sans-serif]">
                              Once, the air was filled with tweets, a digital birdsong echoing far and wide.
                              <br/>
                              But now, the birds are gone… and only the <span
                                className="text-[#FFF512] font-bold text-xl">&#34;X&#34;</span> stands where they used to sing.
                            </p>
                          </motion.div>

                          {/* Intelligence Hint */}
                          <motion.div
                              className="bg-[#090907] p-4 border-2 border-[#FFF512] rounded-sm"
                              initial={{opacity: 0, scale: 0.9}}
                              animate={{opacity: 1, scale: 1}}
                              transition={{delay: 0.8}}
                              whileHover={{
                                boxShadow: "0 0 20px rgba(255, 245, 18, 0.3)",
                                scale: 1.02
                              }}
                          >
                            <motion.p
                                className="text-[#FFF512] font-['New_Rocker',cursive] text-lg mb-2 flex items-center justify-center"
                                animate={{
                                  textShadow: [
                                    "0 0 0px rgba(255, 245, 18, 0)",
                                    "0 0 8px rgba(255, 245, 18, 0.6)",
                                    "0 0 0px rgba(255, 245, 18, 0)",
                                  ],
                                }}
                                transition={{duration: 2.5, repeat: Number.POSITIVE_INFINITY}}
                            >
                              🔍 RECONNAISSANCE HINT:
                            </motion.p>
                            <p className="text-[#FFDE40] font-['Saira',sans-serif] text-center mb-2">
                              You need to <span className="text-[#FFF512] font-bold">learn more about us</span> to get
                              to the flag...
                            </p>
                            <motion.div
                                animate={{x: [0, 5, 0]}}
                                transition={{duration: 1.5, repeat: Number.POSITIVE_INFINITY}}
                                className="text-[#DE8D00] text-center text-xl"
                            >
                              →
                            </motion.div>
                          </motion.div>

                          <motion.div
                              className="bg-[#1A1A18] p-4 border-2 border-[#FFF512] rounded-sm text-center"
                              initial={{opacity: 0, scale: 0.9}}
                              animate={{opacity: 1, scale: 1}}
                              transition={{delay: 1}}
                              whileHover={{scale: 1.02}}
                          >
                            <motion.p
                                className="text-[#FFF512] font-['New_Rocker',cursive] text-lg mb-2"
                                animate={{
                                  scale: [1, 1.05, 1],
                                }}
                                transition={{duration: 2, repeat: Number.POSITIVE_INFINITY}}
                            >
                              🎯 FINAL DIRECTIVE:
                            </motion.p>
                            <p className="text-[#FFDE40] font-['Saira',sans-serif] font-bold">
                              Find that <span className="text-[#FFF512] text-xl">&#34;X.&#34;</span> That&#39;s your mark. That&#39;s
                              your key.
                            </p>
                            <p className="text-white font-['Saira',sans-serif] mt-2">
                              And there — beneath the quiet — lies your treasure. <span
                                className="text-[#FFF512]">🏴‍☠️</span>
                            </p>
                          </motion.div>

                          {/* Decorative elements */}
                          <div className="flex justify-center items-center mt-6">
                            <div className="flex-1 h-px bg-[#DE8D00]"></div>
                            <motion.div
                                animate={{rotate: [0, 360]}}
                                transition={{duration: 10, repeat: Number.POSITIVE_INFINITY, ease: "linear"}}
                                className="mx-4 text-[#FFF512] text-2xl"
                            >
                              ⚡
                            </motion.div>
                            <div className="flex-1 h-px bg-[#DE8D00]"></div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <form onSubmit={handleFinalSubmit}>
                      <div className="mb-6 relative">
                        <label
                            htmlFor="finalAnswer"
                            className="block text-white mb-2 font-['Saira',sans-serif] text-lg font-bold"
                        >
                          Final Flag:
                        </label>
                        <p className="text-gray-300 mb-2 font-['Saira',sans-serif] text-sm">
                          Enter the final flag to complete the CTF
                        </p>
                        <input
                            type="text"
                            id="finalAnswer"
                            value={finalAnswer}
                            onChange={(e) => setFinalAnswer(e.target.value)}
                            disabled={isFinalCorrect}
                            className={`w-full p-3 bg-[#090907] border-2 ${isFinalCorrect ? "border-green-500" : "border-[#DE8D00]"} rounded-sm text-white focus:outline-none focus:border-[#FFF512] font-['Saira',sans-serif] ${isFinalCorrect ? "opacity-50" : ""}`}
                            placeholder="Enter the final flag"
                        />
                        {isFinalCorrect && (
                            <div className="absolute right-3 top-12 text-green-500">
                              <CheckCircle size={24}/>
                            </div>
                        )}
                      </div>

                      <div className="flex justify-center gap-4 mt-8">
                        <motion.button
                            type="button"
                            onClick={handleReset}
                            whileHover={{scale: 1.05}}
                            whileTap={{scale: 0.95}}
                            className="bg-[#1A1A18] text-white border-2 border-[#DE8D00] font-bold px-8 py-3 rounded-sm shadow-[4px_4px_0px_0px_#9C4100] hover:shadow-[2px_2px_0px_0px_#9C4100] hover:translate-x-[2px] hover:translate-y-[2px] transition-all duration-200 font-['Saira',sans-serif]"
                        >
                          Reset
                        </motion.button>

                        {!isFinalCorrect ? (
                            <motion.button
                                type="submit"
                                whileHover={{scale: 1.05}}
                                whileTap={{scale: 0.95}}
                                className="bg-[#1A1A18] text-white border-2 border-[#DE8D00] font-bold px-8 py-3 rounded-sm shadow-[4px_4px_0px_0px_#9C4100] hover:shadow-[2px_2px_0px_0px_#9C4100] hover:translate-x-[2px] hover:translate-y-[2px] transition-all duration-200 font-['Saira',sans-serif]"
                            >
                              Submit Final Flag
                            </motion.button>
                        ) : (
                            <a href="https://forms.google.com" target="_blank" rel="noopener noreferrer">
                              <motion.button
                                  whileHover={{scale: 1.05}}
                                  whileTap={{scale: 0.95}}
                                  className="bg-[#FFF512] text-[#090907] border-2 border-[#DE8D00] font-bold px-8 py-3 rounded-sm shadow-[4px_4px_0px_0px_#EBB014] hover:shadow-[2px_2px_0px_0px_#EBB014] hover:translate-x-[2px] hover:translate-y-[2px] transition-all duration-200 animate-pulse font-['Saira',sans-serif] flex items-center"
                              >
                                <Trophy className="mr-2 h-5 w-5"/> SUBMIT ALL FLAGS
                              </motion.button>
                            </a>
                        )}
                      </div>
                    </form>
                  </motion.div>
              )}

              {isFinalCorrect && (
                  <motion.div
                      initial={{opacity: 0, y: 20}}
                      animate={{opacity: 1, y: 0}}
                      className="mt-8 p-6 bg-[#090907] border-2 border-[#FFF512] rounded-sm text-center"
                  >
                    <h3 className="text-2xl font-bold text-[#FFF512] mb-4 font-['New_Rocker',cursive]">CONGRATULATIONS!</h3>
                    <p className="text-white mb-4 font-['Saira',sans-serif]">
                      You&#39;ve successfully completed all 5 flags of the Cyber Flare CTF challenge! Your cybersecurity
                      skills are impressive.
                    </p>
                    <p className="text-[#FFDE40] mb-6 font-['Saira',sans-serif]">
                      Please submit all the flags you&#39;ve collected in the Google Form to officially complete the
                      challenge.
                    </p>

                    <a
                        href="https://forms.google.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center bg-[#DE8D00] text-[#090907] font-bold px-6 py-3 rounded-sm shadow-[4px_4px_0px_0px_#9C4100] hover:shadow-[2px_2px_0px_0px_#9C4100] hover:translate-x-[2px] hover:translate-y-[2px] transition-all duration-200 font-['Saira',sans-serif]"
                    >
                      Open Google Form <Trophy className="ml-2 h-4 w-4"/>
                    </a>
                  </motion.div>
              )}
            </div>
          </div>

          {/* Correct Answer Modal */}
          <AnimatePresence>
            {showCorrectModal && (
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
                        onClick={() => setShowCorrectModal(false)}
                        className="absolute top-2 right-2 text-white hover:text-[#FFF512]"
                    >
                      <X size={24} />
                    </button>

                    <div className="text-center">
                      <CheckCircle size={48} className="text-green-500 mx-auto mb-4" />
                      <h3 className="text-xl text-[#FFF512] mb-4 font-['New_Rocker',cursive]">Correct Answer!</h3>

                      <p className="text-white mb-4 font-['Saira',sans-serif]">
                        Great job! You&#39;ve uncovered the final flag. Find the Final answer and submit it to complete
                        the challenge. This time there is no cipers or encryption involved. Final answer is a Test of Wits.
                      </p>

                      <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          onClick={() => setShowCorrectModal(false)}
                          className="bg-[#FFF512] text-[#090907] font-bold px-6 py-2 rounded-sm"
                      >
                        Continue
                      </motion.button>
                    </div>
                  </motion.div>
                </motion.div>
            )}
          </AnimatePresence>

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
                      <Image height={100} width={100} src="/flaga5.gif" alt="Hint" className="w-full h-auto" />
                    </div>

                    <p className="text-white mb-4 font-['Saira',sans-serif]">
                      It is a type of cyber attack that involves deceptive emails or messages to trick users.
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
