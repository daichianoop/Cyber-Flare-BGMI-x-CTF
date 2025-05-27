"use client"
import Image from "next/image"
import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { AlertCircle, X } from 'lucide-react'
import Link from "next/link"

export default function Flag2() {
  const [answer, setAnswer] = useState("")
  const [showHint, setShowHint] = useState(false)
  const [isCorrect, setIsCorrect] = useState(false)
  const [hexagons, setHexagons] = useState([])
  const [wrongAttempts, setWrongAttempts] = useState(0)
  const [showWrongMessage, setShowWrongMessage] = useState(false)
  const [showModal, setShowModal] = useState(false)
  const [shake, setShake] = useState(false)
  const containerRef = useRef(null)

  useEffect(() => {
    // Generate hexagons for the animated background
    const newHexagons = Array.from({ length: 60 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 120 + 80,
      rotation: Math.random() * 360,
      color: i % 3 === 0 ? "#FFF512" : i % 3 === 1 ? "#DE8D00" : "#9C4100",
      delay: Math.random() * 5,
    }))
    setHexagons(newHexagons)
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (answer.toLowerCase() === "sandbox") {
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
          {/* Animated Hexagon Background */}
          <div className="absolute inset-0 overflow-hidden">
            {hexagons.map((hexagon) => (
                <motion.div
                    key={hexagon.id}
                    className="absolute opacity-30"
                    style={{
                      left: `${hexagon.x}%`,
                      top: `${hexagon.y}%`,
                      width: `${hexagon.size}px`,
                      height: `${hexagon.size}px`,
                      filter: "blur(5px)",
                    }}
                    initial={{ opacity: 0 }}
                    animate={{
                      opacity: [0.2, 0.4, 0.2],
                      rotate: [hexagon.rotation, hexagon.rotation + 360],
                      scale: [1, 1.4, 1],
                    }}
                    transition={{
                      duration: 8,
                      delay: hexagon.delay,
                      repeat: Number.POSITIVE_INFINITY,
                      repeatType: "loop",
                    }}
                >
                  <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                    <polygon
                        points="50 0, 93.3 25, 93.3 75, 50 100, 6.7 75, 6.7 25"
                        fill="none"
                        stroke={hexagon.color}
                        strokeWidth="2"
                    />
                  </svg>
                </motion.div>
            ))}
            <div className="absolute inset-0 bg-[#090907]/50" />
          </div>

          <div className="max-w-5xl mx-auto bg-[#1A1A18]/90 p-8 md:p-12 rounded-sm border-2 border-[#FFF512] shadow-[8px_8px_0px_0px_#EBB014] relative z-10">
            <div className="text-center mb-10">
              <div className="flex justify-center mb-2">
                <span className="text-[#FFF512] text-3xl">&#34;</span>
                <h1 className="text-xl md:text-2xl text-white font-['New_Rocker',cursive] mx-2">
                  Security is not a product, but a process.
                </h1>
                <span className="text-[#FFF512] text-3xl">&#34;</span>
              </div>
              <p className="text-[#FFDE40] text-sm font-['Saira',sans-serif]">- Bruce Schneier</p>
              <div className="w-full h-px bg-[#DE8D00] my-8"></div>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-[#FFF512] mb-4 font-['New_Rocker',cursive]">
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
              </h2>
              <p className="text-white mb-2 font-['Saira',sans-serif]">
                <span className="text-[#FFDE40] font-bold">FLAG [2 of 5]</span>
              </p>

              <div className="bg-[#090907] p-6 border-2 border-[#DE8D00] rounded-sm mb-6">
                <h3 className="text-xl text-[#FFDE40] mb-4 font-['New_Rocker',cursive]">
                  <p className="text-[#FFDE40] text-lg mb-2 font-['Saira',sans-serif]">
                    Solve The 2nd Problem, and you&#39;ll unlock the second flag. This won&#39;t be straightforward—some
                    signals hide in the noise, others in the silence.
                  </p>
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
                  A realm confined, yet vast in scope,
                  <br/>
                  No grains of sand, but threats I probe.
                  <br/>
                  In my walls, both child and code
                  <br/>
                  Find safety where freedoms erode.
                  <br/>
                  What am I?
                </p>

                <h4 className="text-lg text-[#FFDE40] mb-2 font-['New_Rocker',cursive]">Initial Clue (The Word - Encoded):</h4>
                <div className="p-3 bg-[#1A1A18] border border-[#FFF512] rounded-sm mb-2">
                  <p className="text-[#FFF512] font-mono text-center tracking-wider">
                    000 01 10 100 1000 111 1001
                  </p>
                </div>
                <div className="p-3 bg-[#1A1A18] border border-[#DE8D00] rounded-sm">
                  <p className="text-[#FFDE40] font-mono text-sm font-['Saira',sans-serif]">
                    <span className="font-bold">Decoding Hint:</span> This binary sequence doesn&#39;t use standard
                    ASCII or
                    UTF-8 encoding. Think of it as a direct representation of the concept of a COMMUNICATION technique.
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
                      className={`w-full p-3 bg-[#090907] border-2 ${showWrongMessage ? "border-red-500" : "border-[#DE8D00]"} rounded-sm text-white focus:outline-none focus:border-[#FFF512] font-['Saira',sans-serif]`}
                      placeholder="Enter your answer"
                  />

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
                        For the word - Think about environments where code is executed in isolation for security purposes.<br/>
                        For the Encoding Technique -  Listen closely to the silent chatter — in patterns, dots, and dashes scatter.<br/> <br/>
                        <span className={"text-emerald-400"}>During World War II,secret messages were often sent using a special code using
                          patterns of dots and dashes over radio waves. This simple and reliable method, known for its secrecy and versatility,
                          was a key tool in military communication and helped the Allied forces succeed in many battles.
</span>
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
                          <Link href="https://drive.google.com/drive/folders/1vIQ15Krv0WePeCq78Kg5qzSGNpBeZBW6?usp=sharing" target={"_blank"}>
                          Here&#39;s the Flag
                          </Link>
                        </motion.button>

                  )}
                </div>
              </form>
            </div>
          </div>

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
                      <Image
                          height={300}
                          width={400}
                          src="/flaga2.gif"
                          alt="Hint"
                          className="w-full h-auto"
                      />
                    </div>
                    <p className="text-white mb-4 font-['Saira',sans-serif]">
                      Think about a controlled environment where code can be executed safely.
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