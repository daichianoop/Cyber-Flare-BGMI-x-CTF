"use client"
import Image from "next/image"
import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { AlertCircle, X } from 'lucide-react'
import Link from "next/link"

export default function Flag4() {
  const [answer, setAnswer] = useState("")
  const [showHint, setShowHint] = useState(false)
  const [isCorrect, setIsCorrect] = useState(false)
  const [gridCells, setGridCells] = useState([])
  const [wrongAttempts, setWrongAttempts] = useState(0)
  const [showWrongMessage, setShowWrongMessage] = useState(false)
  const [showModal, setShowModal] = useState(false)
  const [shake, setShake] = useState(false)
  const containerRef = useRef(null)

  useEffect(() => {
    // Generate grid cells for the animated background
    const cells = []
    const gridSize = 8 // Larger cells
    for (let i = 0; i < gridSize; i++) {
      for (let j = 0; j < gridSize; j++) {
        cells.push({
          id: `${i}-${j}`,
          x: (100 / gridSize) * j,
          y: (100 / gridSize) * i,
          delay: Math.random() * 5,
        })
      }
    }
    setGridCells(cells)
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (answer.toLowerCase() === "firewall") {
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
          {/* Animated Grid Background */}
          <div className="absolute inset-0 overflow-hidden">
            {gridCells.map((cell) => (
                <motion.div
                    key={cell.id}
                    className="absolute bg-[#FFF512]/30 border-2 border-[#FFF512]/40" // Increased opacity and border
                    style={{
                      width: `${100 / 8}%`, // Larger cells
                      height: `${100 / 8}%`, // Larger cells
                      left: `${cell.x}%`,
                      top: `${cell.y}%`,
                    }}
                    animate={{
                      opacity: [0.2, 0.6, 0.2], // More opacity variation
                      scale: [1, 1.2, 1], // More scaling
                      borderColor: ["rgba(255, 245, 18, 0.4)", "rgba(255, 245, 18, 0.8)", "rgba(255, 245, 18, 0.4)"], // Border animation
                      boxShadow: [
                        "0 0 0px rgba(255, 245, 18, 0)",
                        "0 0 15px rgba(255, 245, 18, 0.3)",
                        "0 0 0px rgba(255, 245, 18, 0)",
                      ], // Added glow
                    }}
                    transition={{
                      duration: 3, // Faster animation
                      delay: cell.delay,
                      repeat: Number.POSITIVE_INFINITY,
                      repeatType: "reverse",
                    }}
                />
            ))}
            <div className="absolute inset-0 bg-[#090907]/50" />
          </div>

          <div className="max-w-5xl mx-auto bg-[#1A1A18]/90 p-8 md:p-12 rounded-sm border-2 border-[#FFF512] shadow-[8px_8px_0px_0px_#EBB014] relative z-10">
            <div className="text-center mb-10">
              <div className="flex justify-center mb-2">
                <span className="text-[#FFF512] text-3xl">&#34;</span>
                <h1 className="text-xl md:text-2xl text-white font-['New_Rocker',cursive] mx-2">
                  There is nothing more deceptive than an obvious fact.
                </h1>
                <span className="text-[#FFF512] text-3xl">&#34;</span>
              </div>
              <p className="text-[#FFDE40] text-sm font-['Saira',sans-serif]">- Sherlock Holmes</p>

              <div className="w-full h-px bg-[#DE8D00] my-8"></div>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-[#FFF512] mb-4 font-['New_Rocker',cursive]">
                <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8 }}>
                  <motion.span
                      animate={{
                        textShadow: [
                          "0 0 0px rgba(255, 245, 18, 0)",
                          "0 0 15px rgba(255, 245, 18, 0.6)",
                          "0 0 0px rgba(255, 245, 18, 0)",
                        ],
                      }}
                      transition={{ duration: 2.5, repeat: Number.POSITIVE_INFINITY }}
                  >
                    Ready for the challenge?
                  </motion.span>
                </motion.span>
              </h2>
              <p className="text-white mb-2 font-['Saira',sans-serif]">
                <span className="text-[#FFDE40] font-bold">FLAG [4 of 5]</span>
              </p>

              <div className="bg-[#090907] p-6 border-2 border-[#DE8D00] rounded-sm mb-6">
                <p className="text-[#FFDE40] text-lg mb-2 font-['Saira',sans-serif]">
                  Solve the fourth puzzle, and the path will unfold to your next prize. Remember, hidden within the code lies a secret “bacon” — a clever pattern of A’s and B’s waiting to be cracked.
                </p>
                <h3 className="text-xl text-[#FFDE40] mb-4 font-['New_Rocker',cursive]">
                  <motion.span
                      animate={{
                        scale: [1, 1.05, 1],
                        color: ["#FFDE40", "#FFF512", "#FFDE40"],
                      }}
                      transition={{duration: 3, repeat: Number.POSITIVE_INFINITY}}
                  >
                    Riddle (Hint for the Word):
                  </motion.span>
                </h3>
                <p className="text-gray-300 mb-4 font-['Saira',sans-serif] italic">
                  I&#39;m not built of brick or stone,
                  <br/>
                  Yet I guard your digital throne.
                  <br/>I filter traffic, block the unknown—
                  <br/>
                  Silent, unseen, but never alone.
                  <br/>
                  What am I?
                </p>

                <h4 className="text-lg text-[#FFDE40] mb-2 font-['New_Rocker',cursive]">Initial Clue (The Word - Encoded):</h4>
                <div className="p-3 bg-[#1A1A18] border border-[#FFF512] rounded-sm">
                  <p className="text-[#FFF512] font-mono text-center tracking-wider">
                    AABAB ABAAA BAAAB AABAA BABBA AAAAA ABABB ABABB
                  </p>
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
                        This cipher hides messages by turning each letter into a unique pattern of five “A”s and “B”s—perfect for sneaking secrets into ordinary text.
                        <br/> Cipher Hint - Bacon
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

                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-[#FFF512] text-[#090907] border-2 border-[#DE8D00] font-bold px-8 py-3 rounded-sm shadow-[4px_4px_0px_0px_#EBB014] hover:shadow-[2px_2px_0px_0px_#EBB014] hover:translate-x-[2px] hover:translate-y-[2px] transition-all duration-200 animate-pulse font-['Saira',sans-serif]"
                        >
                          <Link href="https://drive.google.com/drive/folders/1Ww53vyBZ41A9jjJS-2PTsljsmI3KtEX-?usp=drive_link" target={"_blank"}>
                          Here&#39;s a clue
                          </Link>
                        </motion.button>

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
                      <Image height={100} width={100}
                          src="/flaga4.gif"
                          alt="Hint"
                          className="w-full h-auto"
                      />
                    </div>

                    <p className="text-white mb-4 font-['Saira',sans-serif]">
                      The answer is a security device that protects networks by filtering traffic.
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
