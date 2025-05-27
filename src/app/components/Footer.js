"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export default function Footer() {
  const footerLinks = [
    {
      title: "EVENT",
      links: [
        { name: "Register", href: "https://docs.google.com/forms/d/e/1FAIpQLSe95xSVEXq1rJThoQ24po8j4agITcGTKY7vFQoI8fah0yF94g/viewform" },
        { name: "Rules", href: "/Terms" },
        { name: "Schedule", href: "https://www.instagram.com/cpc_kiit/" },
      ],
    },
    {
      title: "SUPPORT",
      links: [
        { name: "Demo", href: "/Demo" },
        { name: "Terms of Service", href: "/Terms" },
      ],
    },
    {
      title: "COMMUNITY",
      links: [
        { name: "Discord", href: "https://discord.gg/cyberflare" },
        { name: "Whatsapp", href: "https://chat.whatsapp.com/KLX8wnrxpYn7EJxZvE42SD" },
      ],
    },
  ]

  return (
      <>
        {/* Google Fonts Import */}
        <style jsx global>{`
            @import url('https://fonts.googleapis.com/css2?family=New+Rocker&family=Saira:wght@400;600;700;800&display=swap');
        `}</style>

        <footer className="bg-[#090907] text-white border-t-4 border-[#DE8D00]">
          <div className="max-w-7xl mx-auto px-4 py-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Logo and Description */}
              <div className="space-y-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="flex items-center gap-2"
                >
                  <div className="relative">
                    <Image src="/logo.png" alt="Cyber Flare Logo" width={80} height={80} />
                    <div className="absolute -bottom-1 -right-1 bg-[#FFF512] h-2 w-2" />
                  </div>
                  <div>
                    <h2 className="font-extrabold text-xl tracking-wider text-[#FFF512] font-['New_Rocker',cursive]">
                      CYBER FLARE
                    </h2>
                    <p className="text-xs tracking-widest -mt-1 text-[#FFDE40] font-['Saira',sans-serif]">
                      BGMI × CTF EVENT
                    </p>
                  </div>
                </motion.div>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1, duration: 0.5 }}
                    className="text-gray-400 max-w-xs font-['Saira',sans-serif]"
                >
                  The ultimate dual-challenge event combining BGMI gameplay and cybersecurity skills. Compete, decode, and
                  capture the flags to win.
                </motion.p>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    className="flex space-x-4"
                >
                  {/* LinkedIn */}
                  <motion.a
                      href="https://www.linkedin.com/company/cpc-kiit/posts/?feedView=all"
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.9 }}
                      className="bg-[#FFF512] border border-[#DE8D00] w-10 h-10 flex items-center justify-center rounded-sm text-[#FFF512] hover:bg-blue-600 hover:text-white transition-all duration-300"
                  >
                    <Image src="/linkedin.png" alt="LinkedIn" width={20} height={20} />
                  </motion.a>

                  {/* Instagram */}
                  <motion.a
                      href="https://www.instagram.com/cpc_kiit/"
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.9 }}
                      className="bg-[#FFF512] border border-[#DE8D00] w-10 h-10 flex items-center justify-center rounded-sm text-[#FFF512] hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 hover:text-white transition-all duration-300"
                  >
                    <Image src="/instagram.png" alt="Instagram" width={20} height={20} />
                  </motion.a>
                </motion.div>
              </div>

              {/* Footer Links */}
              {footerLinks.map((section, sectionIndex) => (
                  <motion.div
                      key={sectionIndex}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.1 * (sectionIndex + 1), duration: 0.5 }}
                      className="space-y-4"
                  >
                    <h3 className="font-bold text-lg text-[#FFF512] border-b-2 border-[#DE8D00] pb-2 inline-block font-['New_Rocker',cursive]">
                      {section.title}
                    </h3>
                    <ul className="space-y-2 font-['Saira',sans-serif]">
                      {section.links.map((link, linkIndex) => (
                          <li key={linkIndex}>
                            <motion.a
                                href={link.href}
                                target={link.href.startsWith("http") ? "_blank" : "_self"}
                                rel={link.href.startsWith("http") ? "noopener noreferrer" : ""}
                                className="text-gray-300 hover:text-[#FFF512] transition-colors duration-300 flex items-center group"
                                whileHover={{ x: 5 }}
                            >
                              <span className="w-0 h-0.5 bg-[#FFF512] mr-0 group-hover:w-2 group-hover:mr-2 transition-all duration-300"></span>
                              {link.name}
                            </motion.a>
                          </li>
                      ))}
                    </ul>
                  </motion.div>
              ))}
            </div>

            {/* Copyright */}
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="border-t border-[#DE8D00]/30 mt-12 pt-6 text-center text-gray-400 font-['Saira',sans-serif]"
            >
              <p className="animate-pulse">© 2025 CYBER FLARE - BGMI × CTF EVENT. All rights reserved.</p>
            </motion.div>
          </div>
        </footer>
      </>
  )
}
