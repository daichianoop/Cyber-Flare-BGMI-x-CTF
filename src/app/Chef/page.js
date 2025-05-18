"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X } from "lucide-react"
import Image from "next/image"

const teamMembers = [
  {
    name: "Alex Chen",
    role: "Event Director",
    image: "/placeholder.svg?height=400&width=400",
  },
  {
    name: "Sarah Johnson",
    role: "CTF Challenge Designer",
    image: "/placeholder.svg?height=400&width=400",
  },
  {
    name: "Raj Patel",
    role: "BGMI Tournament Manager",
    image: "/placeholder.svg?height=400&width=400",
  },
  {
    name: "Maria Rodriguez",
    role: "UI/UX Designer",
    image: "/placeholder.svg?height=400&width=400",
  },
  {
    name: "David Kim",
    role: "Community Manager",
    image: "/placeholder.svg?height=400&width=400",
  },
  {
    name: "Olivia Wang",
    role: "Marketing Lead",
    image: "/placeholder.svg?height=400&width=400",
  },
  {
    name: "James Wilson",
    role: "Cybersecurity Expert",
    image: "/placeholder.svg?height=400&width=400",
  },
  {
    name: "Aisha Patel",
    role: "QA Lead",
    image: "/placeholder.svg?height=400&width=400",
  },
  {
    name: "Michael Chang",
    role: "Technical Director",
    image: "/placeholder.svg?height=400&width=400",
  },
  {
    name: "Emma Thompson",
    role: "Content Creator",
    image: "/placeholder.svg?height=400&width=400",
  },
]

export default function Chef() {
  return (
      <>
        {/* Google Fonts Import */}
        <style>{`
        @import url('https://fonts.googleapis.com/css2?family=New+Rocker&family=Saira:wght@400;600;700;800&display=swap');
      `}</style>

        <main className="min-h-screen bg-[#090907] text-white">
          {/* Hero Section */}
          <section className="relative py-20 overflow-hidden">
            <div className="absolute inset-0 bg-[url('/placeholder.svg?height=800&width=1600')] bg-cover bg-center opacity-20" />
            <div className="absolute inset-0 bg-gradient-to-b from-[#090907] via-transparent to-[#090907]" />

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

            <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
              <motion.h1
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.6 }}
                  className="text-5xl md:text-7xl font-extrabold mb-4 text-[#FFF512] inline-block relative font-['New_Rocker',cursive]"
              >
                OUR TEAM
                <motion.div
                    className="absolute -bottom-2 left-0 h-1 w-full bg-[#EBB014]"
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ delay: 0.6, duration: 0.8 }}
                />
              </motion.h1>
              <motion.p
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                  className="text-xl max-w-2xl mx-auto mb-12 text-gray-300 font-['Saira',sans-serif]"
              >
                Meet the talented individuals behind the Cyber Flare event who work tirelessly to create the ultimate BGMI
                × CTF experience.
              </motion.p>
            </div>
          </section>

          {/* Team Members Grid */}
          <section className="py-16 bg-[#1A1A18]">
            <div className="max-w-7xl mx-auto px-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                {teamMembers.map((member, index) => (
                    <TeamMemberCard key={index} member={member} index={index} />
                ))}
              </div>
            </div>
          </section>

          {/* Join Our Team Section */}
          <section className="py-20 bg-[#090907]">
            <div className="max-w-7xl mx-auto px-4 text-center">
              <motion.h2
                  initial={{ y: 30, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="text-4xl font-extrabold mb-4 text-[#FFF512] inline-block relative font-['New_Rocker',cursive]"
              >
                VOLUNTEER WITH US
                <motion.div
                    className="absolute -bottom-2 left-0 h-1 w-full bg-[#EBB014]"
                    initial={{ width: 0 }}
                    whileInView={{ width: "100%" }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3, duration: 0.6 }}
                />
              </motion.h2>
              <motion.p
                  initial={{ y: 30, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                  className="text-xl max-w-2xl mx-auto mb-8 text-gray-300 font-['Saira',sans-serif]"
              >
                Passionate about gaming and cybersecurity? We&#39;re always looking for volunteers to help make our events
                even better.
              </motion.p>
              <motion.button
                  initial={{ y: 30, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                  whileHover={{ scale: 1.05, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-[#FFF512] text-[#090907] font-extrabold px-8 py-4 rounded-sm shadow-[6px_6px_0px_0px_#EBB014] hover:shadow-[3px_3px_0px_0px_#EBB014] hover:translate-x-[3px] hover:translate-y-[3px] transition-all duration-200 font-['Saira',sans-serif]"
              >
                JOIN OUR TEAM
              </motion.button>
            </div>
          </section>
        </main>
      </>
  )
}

function TeamMemberCard({ member, index }) {
  const [isHovered, setIsHovered] = useState(false)

  return (
      <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1, duration: 0.5 }}
          className="relative group"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
      >
        <div className="bg-[#090907] border-4 border-[#DE8D00] rounded-sm overflow-hidden shadow-[8px_8px_0px_0px_#9C4100] hover:shadow-[4px_4px_0px_0px_#9C4100] hover:translate-x-[4px] hover:translate-y-[4px] transition-all duration-300">
          <div className="aspect-square overflow-hidden relative">
            <Image
                src={member.image || "/placeholder.svg"}
                alt={member.name}
                width={400}
                height={400}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />

            {/* Overlay with social icons */}
            <AnimatePresence>
              {isHovered && (
                  <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="absolute inset-0 bg-[#090907]/80 flex items-center justify-center gap-4"
                  >
                    {[
                      { icon: <X size={24} />, color: "hover:bg-black" },
                    ].map((social, socialIndex) => (
                        <motion.a
                            key={socialIndex}
                            href="#"
                            initial={{ scale: 0, rotate: -30 }}
                            animate={{ scale: 1, rotate: 0 }}
                            transition={{ delay: socialIndex * 0.1, type: "spring" }}
                            whileHover={{ y: -5, scale: 1.2 }}
                            whileTap={{ scale: 0.9 }}
                            className={`w-12 h-12 bg-[#FFF512] ${social.color} text-[#090907] flex items-center justify-center rounded-sm border-2 border-[#090907] transition-colors duration-300`}
                        >
                          {social.icon}
                        </motion.a>
                    ))}
                  </motion.div>
              )}
            </AnimatePresence>
          </div>

          <div className="p-4 bg-[#090907]">
            <h3 className="text-xl font-bold text-[#FFF512] font-['New_Rocker',cursive]">{member.name}</h3>
            <p className="text-[#FFDE40] font-['Saira',sans-serif]">{member.role}</p>
          </div>
        </div>
      </motion.div>
  )
}
