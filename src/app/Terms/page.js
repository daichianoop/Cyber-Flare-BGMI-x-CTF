"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Shield, AlertTriangle, Users, Trophy, Clock, FileText, CheckCircle } from "lucide-react"
import Link from "next/link"

export default function Terms() {
  const [particles, setParticles] = useState([])
  const [activeSection, setActiveSection] = useState(null)

  useEffect(() => {
    // Generate particles for animated background
    const newParticles = Array.from({ length: 80 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 8 + 2,
      speed: Math.random() * 0.3 + 0.1,
      color: i % 3 === 0 ? "#FFF512" : i % 3 === 1 ? "#DE8D00" : "#9C4100",
    }))
    setParticles(newParticles)
  }, [])

  const sections = [
    {
      id: "general",
      title: "General Terms",
      icon: <FileText className="w-6 h-6" />,
      content: [
        "By participating in the Cyber Flare BGMI × CTF event, you agree to abide by all terms and conditions outlined herein.",
        "Participants must be at least 16 years old or have parental consent to participate.",
        "Registration is mandatory and must be completed before the event deadline.",
        "All information provided during registration must be accurate and truthful.",
        "The organizers reserve the right to modify these terms at any time with prior notice.",
      ],
    },
    {
      id: "bgmi",
      title: "BGMI Tournament Rules",
      icon: <Trophy className="w-6 h-6" />,
      content: [
        "Teams must consist of exactly 4 players. No substitutions allowed after registration.",
        "All matches will be played on Erangle and Miramar maps as specified by organizers.",
        "Use of any third-party software, hacks, or cheats is strictly prohibited and will result in immediate disqualification.",
        "Players must use their registered in-game names during all matches.",
        "Teams must join the match lobby 15 minutes before the scheduled start time.",
        "Any form of teaming with other squads is prohibited and will lead to disqualification.",
        "Disputes must be reported immediately to tournament officials with video evidence.",
        "The decision of tournament officials is final and binding.",
      ],
    },
    {
      id: "ctf",
      title: "CTF Challenge Rules",
      icon: <Shield className="w-6 h-6" />,
      content: [
        "Only teams that qualify from the BGMI tournament phase can participate in the CTF challenge.",
        "Teams have a limited time window to find and submit all 5 flags.",
        "Use of any tools, AI, ML, or external assistance is permitted and encouraged.",
        "Sharing of flags or solutions between teams is strictly prohibited.",
        "All flag submissions must be made through the official Google Form provided.",
        "Flags are case-sensitive and must be entered exactly as found.",
        "Teams may attempt the challenges multiple times on the website, but only the final Google Form submission counts.",
        "Any attempt to hack, exploit, or damage the CTF infrastructure will result in immediate disqualification and potential legal action.",
      ],
    },
    {
      id: "conduct",
      title: "Code of Conduct",
      icon: <Users className="w-6 h-6" />,
      content: [
        "All participants must maintain respectful and professional behavior throughout the event.",
        "Harassment, discrimination, or toxic behavior of any kind will not be tolerated.",
        "Use of offensive language, hate speech, or inappropriate content is prohibited.",
        "Participants must respect the decisions of organizers and officials.",
        "Any form of cheating, including but not limited to exploiting bugs or using unauthorized tools in BGMI, is forbidden.",
        "Participants are responsible for their own equipment and internet connectivity.",
        "Sharing of personal information of other participants without consent is prohibited.",
      ],
    },
    {
      id: "prizes",
      title: "Prizes & Awards",
      icon: <Trophy className="w-6 h-6" />,
      content: [
        "Prizes will be awarded based on overall performance in both BGMI and CTF phases.",
        "Prize distribution will occur within 30 days of event completion.",
        "Winners must provide valid identification and contact information for prize collection.",
        "Prizes are non-transferable and cannot be exchanged for cash equivalents.",
        "Tax implications, if any, are the responsibility of the prize recipients.",
        "Organizers reserve the right to substitute prizes of equal or greater value if necessary.",
      ],
    },
    {
      id: "technical",
      title: "Technical Requirements",
      icon: <Clock className="w-6 h-6" />,
      content: [
        "Participants must have a stable internet connection for the duration of the event.",
        "BGMI must be installed and updated to the latest version on participants' devices.",
        "For CTF challenges, participants need access to a web browser and basic computing tools.",
        "Technical issues on the participant's end will not be grounds for match postponement or replay.",
        "Organizers will provide technical support for platform-related issues only.",
        "Screen recording during BGMI matches may be required for verification purposes.",
      ],
    },
    {
      id: "liability",
      title: "Liability & Disclaimers",
      icon: <AlertTriangle className="w-6 h-6" />,
      content: [
        "Participation in this event is at your own risk. Organizers are not liable for any damages or losses.",
        "Organizers are not responsible for technical failures, internet connectivity issues, or device malfunctions.",
        "The event may be postponed, modified, or cancelled due to unforeseen circumstances.",
        "Organizers reserve the right to disqualify participants who violate any rules or terms.",
        "By participating, you grant organizers the right to use your gameplay footage, screenshots, and likeness for promotional purposes.",
        "Organizers are not responsible for any disputes between team members or participants.",
      ],
    },
  ]

  return (
      <>
        {/* Google Fonts Import */}
        <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=New+Rocker&family=Saira:wght@400;600;700;800&display=swap');
      `}</style>

        <main className="min-h-screen bg-[#090907] relative overflow-hidden">
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

          <div className="relative z-10 py-20 px-4">
            {/* Header */}
            <div className="max-w-7xl mx-auto text-center mb-16">
              <motion.h1
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.6 }}
                  className="text-5xl md:text-7xl font-extrabold mb-4 text-[#FFF512] inline-block relative font-['New_Rocker',cursive]"
              >
                TERMS & CONDITIONS
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
                  className="text-xl max-w-3xl mx-auto text-gray-300 font-['Saira',sans-serif]"
              >
                Please read these terms and conditions carefully before participating in the Cyber Flare BGMI × CTF event.
                By registering and participating, you agree to comply with all rules and regulations outlined below.
              </motion.p>
            </div>


            {/* Terms Sections */}
            <div className="max-w-7xl mx-auto space-y-8">
              {sections.map((section, index) => (
                  <motion.div
                      key={section.id}
                      id={section.id}
                      initial={{ y: 50, opacity: 0 }}
                      whileInView={{ y: 0, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1, duration: 0.6 }}
                      className="pr-1 bg-[#1A1A18]/90 p-8 rounded-sm border-2 border-[#FFF512] shadow-[8px_8px_0px_0px_#EBB014]"
                  >
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-12 h-12 bg-[#FFF512] text-[#090907] rounded-sm flex items-center justify-center">
                        {section.icon}
                      </div>
                      <h2 className="text-3xl font-bold text-[#FFF512] font-['New_Rocker',cursive]">{section.title}</h2>
                    </div>

                    <div className="space-y-4">
                      {section.content.map((item, itemIndex) => (
                          <motion.div
                              key={itemIndex}
                              initial={{ x: -20, opacity: 0 }}
                              whileInView={{ x: 0, opacity: 1 }}
                              viewport={{ once: true }}
                              transition={{ delay: itemIndex * 0.1, duration: 0.4 }}
                              className="flex items-start gap-3"
                          >
                            <div className="flex-shrink-0 w-2 h-2 bg-[#FFF512] rounded-full mt-2" />
                            <p className="text-gray-300 font-['Saira',sans-serif] leading-relaxed">{item}</p>
                          </motion.div>
                      ))}
                    </div>
                  </motion.div>
              ))}
            </div>

            {/* Important Notice */}
            <div className="max-w-7xl mx-auto mt-12">
              <motion.div
                  initial={{ y: 30, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="bg-[#090907] p-8 rounded-sm border-2 border-[#DE8D00] shadow-[6px_6px_0px_0px_#9C4100]"
              >
                <div className="flex items-center gap-4 mb-4">
                  <AlertTriangle className="w-8 h-8 text-[#FFF512]" />
                  <h3 className="text-2xl font-bold text-[#FFF512] font-['New_Rocker',cursive]">Important Notice</h3>
                </div>
                <p className="text-white mb-4 font-['Saira',sans-serif]">
                  These terms and conditions are subject to change. Participants will be notified of any updates via email
                  and official communication channels. Continued participation after changes constitutes acceptance of the
                  modified terms.
                </p>
                <p className="text-[#FFDE40] font-bold font-['Saira',sans-serif]">Last Updated: January 27, 2025</p>
              </motion.div>
            </div>

            {/* Agreement Section */}
            <div className="max-w-7xl mx-auto mt-12">
              <motion.div
                  initial={{ y: 30, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="pr-1 bg-[#1A1A18]/90 p-8 rounded-sm border-2 border-[#FFF512] shadow-[8px_8px_0px_0px_#EBB014] text-center"
              >
                <div className="flex items-center justify-center gap-4 mb-6">
                  <CheckCircle className="w-8 h-8 text-green-500" />
                  <h3 className="text-2xl font-bold text-[#FFF512] font-['New_Rocker',cursive]">Agreement</h3>
                </div>
                <p className="text-white mb-6 font-['Saira',sans-serif] max-w-3xl mx-auto">
                  By participating in the Cyber Flare BGMI × CTF event, you acknowledge that you have read, understood,
                  and agree to be bound by these terms and conditions. If you do not agree with any part of these terms,
                  please do not participate in the event.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Link href="/">
                    <motion.button
                        whileHover={{ scale: 1.05, y: -3 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-[#FFF512] text-[#090907] font-extrabold px-8 py-4 rounded-sm shadow-[6px_6px_0px_0px_#EBB014] hover:shadow-[3px_3px_0px_0px_#EBB014] hover:translate-x-[3px] hover:translate-y-[3px] transition-all duration-200 font-['Saira',sans-serif]"
                    >
                      BACK TO HOME
                    </motion.button>
                  </Link>
                  <Link href="https://docs.google.com/forms/d/e/1FAIpQLSe95xSVEXq1rJThoQ24po8j4agITcGTKY7vFQoI8fah0yF94g/viewform">
                    <motion.button
                        whileHover={{ scale: 1.05, y: -3 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-transparent border-2 border-[#FFF512] text-[#FFF512] font-extrabold px-8 py-4 rounded-sm shadow-[6px_6px_0px_0px_#EBB014] hover:shadow-[3px_3px_0px_0px_#EBB014] hover:translate-x-[3px] hover:translate-y-[3px] transition-all duration-200 font-['Saira',sans-serif]"
                    >
                      REGISTER NOW
                    </motion.button>
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </main>
      </>
  )
}
