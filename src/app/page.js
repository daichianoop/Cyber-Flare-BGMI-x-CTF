"use client"

import Image from "next/image"
import Link from "next/link"
import { Clock, Trophy, Flag, Cpu, Brain, Users, Map, Crosshair, Award } from "lucide-react"

export default function Home() {
  return (
      <>
        {/* Google Fonts Import */}
        <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=New+Rocker&family=Saira:wght@400;600;700;800&display=swap');
      `}</style>

        <main className="min-h-screen bg-[#090907] text-white">
          {/* Hero Section */}
          <section className="relative h-[90vh] overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#090907] z-10" />
            <div className="absolute inset-0 bg-cover bg-center opacity-80" />

            {/* Glitch Effect Overlay */}
            <div className="absolute inset-0 bg-[#090907]/30 z-5 overflow-hidden">
              <div
                  className="absolute inset-0 opacity-10"
                  style={{
                    backgroundImage: "url('/placeholder.svg?height=400&width=400')",
                    backgroundSize: "100px 100px",
                  }}
              />
            </div>

            <div className="relative z-20 max-w-7xl mx-auto px-4 h-full flex flex-col justify-center bg-[url('/1.jpg')] bg-cover bg-center bg-no-repeat ">
                <div className="max-w-3xl">
                  <div
                      className="inline-block bg-[#FFF512] text-[#090907] px-4 py-1 mb-4 font-bold text-sm tracking-wider shadow-[4px_4px_0px_0px_#EBB014] font-['Saira',sans-serif]">
                    BGMI × CAPTURE THE FLAG
                  </div>

                  <h1 className="text-5xl md:text-7xl font-extrabold mb-2 text-[#FFF512] tracking-wider leading-tight font-['New_Rocker',cursive]">
                    <span className="block">CYBER</span>
                    <span className="block text-white">FLARE</span>
                    <span className="text-2xl md:text-3xl text-[#FFDE40] block mt-2 font-['Saira',sans-serif]">
                  HACK • DECODE • CONQUER
                </span>
                  </h1>

                  <p className="text-lg mb-8 max-w-lg font-['Saira',sans-serif]">
                    Dominate the battlegrounds of Erangle and Miramar, then unleash your cyber skills to hunt down 5
                    hidden
                    flags. Only the elite will claim victory in this dual-challenge event.
                  </p>

                  <div className="flex flex-wrap gap-4">
                    <button
                        className="bg-[#FFF512] text-[#090907] font-extrabold px-8 py-4 rounded-sm shadow-[6px_6px_0px_0px_#EBB014] hover:shadow-[3px_3px_0px_0px_#EBB014] hover:translate-x-[3px] hover:translate-y-[3px] transition-all duration-200 font-['Saira',sans-serif]">
                      REGISTER TEAM
                    </button>
                    <button
                        className="bg-[#090907] border-2 border-[#FFF512] text-[#FFF512] font-extrabold px-8 py-4 rounded-sm shadow-[6px_6px_0px_0px_#EBB014] hover:shadow-[3px_3px_0px_0px_#EBB014] hover:translate-x-[3px] hover:translate-y-[3px] transition-all duration-200 font-['Saira',sans-serif]">
                      EVENT DETAILS
                    </button>
                  </div>
                </div>

            </div>

            {/* Scrolling Binary Code Effect - Simplified */}
            <div className="absolute bottom-0 left-0 right-0 h-20 overflow-hidden z-15 opacity-30">
              <div className="text-[#FFF512] font-mono text-xs whitespace-nowrap">
                {"01001000 01000001 01000011 01001011 00100000 01010100 01001000 01000101 00100000 01010000 01001100 01000001 01001110 01000101 01010100 ".repeat(
                    20,
                )}
              </div>
            </div>
          </section>

          {/* Event Details Section */}
          <section className="py-20 bg-[#090907]">
            <div className="max-w-7xl mx-auto px-4">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-extrabold mb-4 text-[#FFF512] inline-block relative font-['New_Rocker',cursive]">
                  EVENT DETAILS
                  <div className="absolute -bottom-2 left-0 h-1 w-full bg-[#EBB014]"/>
                </h2>
                <p className="text-lg max-w-2xl mx-auto text-gray-300 font-['Saira',sans-serif]">
                  A groundbreaking event combining BGMI gameplay with cybersecurity challenges
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {[
                  {
                    title: "BATTLEGROUNDS",
                    description: "Compete in Erangle and Miramar maps. Top teams advance to the CTF phase.",
                    icon: <Crosshair className="w-8 h-8"/>,
                    color: "#FFF512",
                  },
                  {
                    title: "HIDDEN FLAGS",
                    description: "Hunt for 5 concealed flags across the website by solving complex puzzles.",
                    icon: <Flag className="w-8 h-8"/>,
                    color: "#FFDE40",
                  },
                  {
                    title: "TIMED CHALLENGE",
                    description: "Beat the clock to find all flags before your opponents do.",
                    icon: <Clock className="w-8 h-8" />,
                    color: "#EBB014",
                  },
                  {
                    title: "EPIC REWARDS",
                    description: "Claim exclusive prizes for mastering both the battlefield and cyberspace.",
                    icon: <Award className="w-8 h-8" />,
                    color: "#DE8D00",
                  },
                ].map((feature, index) => (
                    <div
                        key={index}
                        className="bg-[#1A1A18] p-6 rounded-sm border-2 border-[#DE8D00] shadow-[6px_6px_0px_0px_#9C4100] hover:shadow-[3px_3px_0px_0px_#9C4100] hover:translate-x-[3px] hover:translate-y-[3px] transition-all duration-200"
                    >
                      <div className="text-4xl mb-4 flex justify-center">
                        <div className="p-3 rounded-sm bg-[#090907] text-[#FFF512] border border-[#FFF512]">
                          {feature.icon}
                        </div>
                      </div>
                      <h3 className="text-xl font-bold mb-2 text-[#FFDE40] text-center font-['New_Rocker',cursive]">
                        {feature.title}
                      </h3>
                      <p className="text-gray-300 text-center font-['Saira',sans-serif]">{feature.description}</p>
                    </div>
                ))}
              </div>
            </div>
          </section>

          {/* BGMI Tournament Section */}
          <section className="py-20 bg-[#1A1A18] relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('/placeholder.svg?height=800&width=1600')] bg-cover bg-center opacity-5" />

            <div className="max-w-7xl mx-auto px-4 relative z-10">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-extrabold mb-4 text-[#FFF512] inline-block relative font-['New_Rocker',cursive]">
                  BGMI TOURNAMENT
                  <div className="absolute -bottom-2 left-0 h-1 w-full bg-[#EBB014]" />
                </h2>
                <p className="text-lg max-w-2xl mx-auto text-gray-300 font-['Saira',sans-serif]">
                  Battle for supremacy and earn your spot in the CTF challenge
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="space-y-8 font-['Saira',sans-serif]">
                    <div className="bg-[#090907] p-6 rounded-sm border-2 border-[#FFF512] shadow-[6px_6px_0px_0px_#EBB014]">
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-12 h-12 bg-[#FFF512] text-[#090907] rounded-sm flex items-center justify-center">
                          <Map className="w-6 h-6" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold mb-2 text-[#FFDE40] font-['New_Rocker',cursive]">
                            BATTLEGROUNDS
                          </h3>
                          <p>
                            Compete across the iconic maps of Erangle and Miramar. Navigate diverse terrains from urban
                            areas to open fields, showcasing your tactical prowess and gunplay skills.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-[#090907] p-6 rounded-sm border-2 border-[#FFF512] shadow-[6px_6px_0px_0px_#EBB014]">
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-12 h-12 bg-[#FFF512] text-[#090907] rounded-sm flex items-center justify-center">
                          <Users className="w-6 h-6" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold mb-2 text-[#FFDE40] font-['New_Rocker',cursive]">
                            SQUAD FORMAT
                          </h3>
                          <p>
                            Form a squad of 4 players to battle against other teams. Coordinate strategies, share
                            resources, and work together to secure victory and qualification for the CTF phase.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-[#090907] p-6 rounded-sm border-2 border-[#FFF512] shadow-[6px_6px_0px_0px_#EBB014]">
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-12 h-12 bg-[#FFF512] text-[#090907] rounded-sm flex items-center justify-center">
                          <Trophy className="w-6 h-6" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold mb-2 text-[#FFDE40] font-['New_Rocker',cursive]">
                            QUALIFICATION
                          </h3>
                          <p>
                            Top 10-20 teams on the scoresheet will advance to the CTF challenge. Every kill and placement
                            matters in your quest to qualify for the next phase.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <div className="relative">
                    <div className="bg-[#090907] border-4 border-[#FFF512] rounded-sm overflow-hidden shadow-[12px_12px_0px_0px_#EBB014]">
                      <Image
                          src="/poster.webp"
                          alt="BGMI Tournament"
                          width={600}
                          height={600}
                          className="w-full h-auto"
                      />
                    </div>

                    {/* Decorative Elements */}
                    <div className="absolute -top-5 -right-5 w-16 h-16 border-4 border-dashed border-[#FFF512] rounded-full" />
                    <div className="absolute -bottom-3 -left-3 w-24 h-6 bg-[#FFF512]" />
                    <div className="absolute top-1/2 -right-3 w-6 h-24 bg-[#FFF512]" />
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Point System Section */}
          <section className="py-20 bg-[#090907]">
            <div className="max-w-7xl mx-auto px-4">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-extrabold mb-4 text-[#FFF512] inline-block relative font-['New_Rocker',cursive]">
                  POINT SYSTEM
                  <div className="absolute -bottom-2 left-0 h-1 w-full bg-[#EBB014]" />
                </h2>
                <p className="text-lg max-w-2xl mx-auto text-gray-300 font-['Saira',sans-serif]">
                  How teams are scored in the BGMI tournament
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="relative">
                    <div className="bg-[#1A1A18] border-4 border-[#DE8D00] rounded-sm overflow-hidden shadow-[12px_12px_0px_0px_#9C4100]">
                      <Image
                          src="/ps.webp"
                          alt="Point System"
                          width={600}
                          height={600}
                          className="w-full h-auto"
                      />
                    </div>

                    {/* Decorative Elements */}
                    <div className="absolute -top-3 -left-3 w-24 h-6 bg-[#FFF512]" />
                    <div className="absolute -bottom-3 -right-3 w-6 h-24 bg-[#FFF512]" />
                  </div>
                </div>

                <div>
                  <div className="bg-[#1A1A18] p-8 rounded-sm border-2 border-[#DE8D00] shadow-[6px_6px_0px_0px_#9C4100]">
                    <h3 className="text-2xl font-bold mb-6 text-[#FFF512] font-['New_Rocker',cursive]">SCORING SYSTEM</h3>

                    <div className="space-y-6 font-['Saira',sans-serif]">
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-10 h-10 bg-[#FFF512] text-[#090907] rounded-sm flex items-center justify-center font-bold text-xl">
                          1
                        </div>
                        <div>
                          <h4 className="text-xl font-bold mb-1 text-[#FFDE40] font-['New_Rocker',cursive]">
                            PLACEMENT POINTS
                          </h4>
                          <p className="text-gray-300">
                            Teams earn points based on their final position in each match, from 10 points for 1st place
                            down to 1 point for 8th place.
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-10 h-10 bg-[#FFF512] text-[#090907] rounded-sm flex items-center justify-center font-bold text-xl">
                          2
                        </div>
                        <div>
                          <h4 className="text-xl font-bold mb-1 text-[#FFDE40] font-['New_Rocker',cursive]">
                            QUALIFICATION
                          </h4>
                          <p className="text-gray-300">
                            Top 10-20 teams on the scoresheet qualify for the CTF challenge phase of the competition.
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-10 h-10 bg-[#FFF512] text-[#090907] rounded-sm flex items-center justify-center font-bold text-xl">
                          3
                        </div>
                        <div>
                          <h4 className="text-xl font-bold mb-1 text-[#FFDE40] font-['New_Rocker',cursive]">MAPS</h4>
                          <p className="text-gray-300">
                            All matches will be played on Erangle and Miramar maps, with equal weighting for points.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* CTF Challenge Section */}
          <section className="py-20 bg-[#1A1A18] relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('/placeholder.svg?height=800&width=1600')] bg-cover bg-center opacity-5" />

            <div className="max-w-7xl mx-auto px-4 relative z-10">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-extrabold mb-4 text-[#FFF512] inline-block relative font-['New_Rocker',cursive]">
                  CTF CHALLENGE
                  <div className="absolute -bottom-2 left-0 h-1 w-full bg-[#EBB014]" />
                </h2>
                <p className="text-lg max-w-2xl mx-auto text-gray-300 font-['Saira',sans-serif]">
                  Test your cybersecurity skills by finding hidden flags
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  {
                    title: "5 HIDDEN FLAGS",
                    description: "Find all five flags hidden across various elements or phrases on the website.",
                    icon: <Flag className="w-8 h-8" />,
                  },
                  {
                    title: "DECODE & BRUTE FORCE",
                    description: "Use your technical skills to decode clues and find the hidden flags.",
                    icon: <Cpu className="w-8 h-8" />,
                  },
                  {
                    title: "USE ANY TOOLS",
                    description: "Teams can use any tools including AI or ML to help solve the challenges.",
                    icon: <Brain className="w-8 h-8" />,
                  },
                ].map((feature, index) => (
                    <div
                        key={index}
                        className="bg-[#090907] p-8 rounded-sm border-2 border-[#FFF512] shadow-[6px_6px_0px_0px_#EBB014] hover:shadow-[3px_3px_0px_0px_#EBB014] hover:translate-x-[3px] hover:translate-y-[3px] transition-all duration-200"
                    >
                      <div className="text-4xl mb-6 flex justify-center">
                        <div className="p-4 rounded-sm bg-[#1A1A18] text-[#FFF512] border border-[#FFF512]">
                          {feature.icon}
                        </div>
                      </div>
                      <h3 className="text-xl font-bold mb-3 text-[#FFF512] text-center font-['New_Rocker',cursive]">
                        {feature.title}
                      </h3>
                      <p className="text-gray-300 text-center font-['Saira',sans-serif]">{feature.description}</p>
                    </div>
                ))}
              </div>

              <div className="mt-16 bg-[#090907] p-8 rounded-sm border-2 border-[#DE8D00] shadow-[6px_6px_0px_0px_#9C4100]">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-2xl font-bold mb-4 text-[#FFF512] font-['New_Rocker',cursive]">
                      FLAG SUBMISSION
                    </h3>
                    <p className="text-gray-300 mb-4 font-['Saira',sans-serif]">
                      Once you&#39;ve found a flag, submit it through the Google Form provided to your team. All flags must be
                      submitted before the time limit expires.
                    </p>
                    <ul className="space-y-2 font-['Saira',sans-serif]">
                      {[
                        "Each flag has a specific format",
                        "Flags are case-sensitive",
                        "Submit all flags in one form",
                        "Time-restricted challenge",
                        "Points awarded for each correct flag",
                      ].map((item, index) => (
                          <li key={index} className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-[#FFF512]" />
                            <span>{item}</span>
                          </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-col justify-center">
                    <div className="bg-[#1A1A18] p-6 rounded-sm border border-[#FFF512]">
                      <h4 className="text-xl font-bold mb-3 text-[#FFF512] font-['New_Rocker',cursive]">HINT</h4>
                      <p className="text-gray-300 font-mono font-['Saira',sans-serif]">
                        Look for patterns in the code, hidden messages in images, and unusual text formatting. The first
                        flag might be hiding in plain sight.
                      </p>
                      <div className="mt-4 p-3 bg-[#090907] rounded-sm border border-[#DE8D00] font-mono text-sm text-[#FFDE40] overflow-x-auto">
                        <code>flag&#123;th1s_1s_4n_3x4mpl3_fl4g&#125;</code>
                      </div>
                    </div>

                    <button className="mt-6 bg-[#FFF512] text-[#090907] font-extrabold px-6 py-3 rounded-sm shadow-[4px_4px_0px_0px_#EBB014] hover:shadow-[2px_2px_0px_0px_#EBB014] hover:translate-x-[2px] hover:translate-y-[2px] transition-all duration-200 flex justify-center items-center font-['Saira',sans-serif]">
                      SUBMISSION FORM
                      <span className="ml-2">→</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-20 bg-[#090907] relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('/placeholder.svg?height=800&width=1600')] bg-cover bg-center opacity-10" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#090907] to-transparent" />

            <div className="max-w-7xl mx-auto px-4 relative z-10">
              <div className="max-w-2xl">
                <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-[#FFF512] font-['New_Rocker',cursive]">
                  READY FOR THE CHALLENGE?
                </h2>
                <p className="text-xl mb-8 font-['Saira',sans-serif]">
                  Register your team now for the ultimate test of gaming and cybersecurity skills. Do you have what it
                  takes to capture all the flags?
                </p>
                <div className="flex flex-wrap gap-4">
                  <button className="bg-[#FFF512] text-[#090907] font-extrabold px-8 py-4 rounded-sm shadow-[6px_6px_0px_0px_#EBB014] hover:shadow-[3px_3px_0px_0px_#EBB014] hover:translate-x-[3px] hover:translate-y-[3px] transition-all duration-200 font-['Saira',sans-serif]">
                    REGISTER NOW
                  </button>
                  <Link href="/Chef">
                    <button className="bg-transparent border-2 border-[#FFF512] text-[#FFF512] font-extrabold px-8 py-4 rounded-sm shadow-[6px_6px_0px_0px_#EBB014] hover:shadow-[3px_3px_0px_0px_#EBB014] hover:translate-x-[3px] hover:translate-y-[3px] transition-all duration-200 font-['Saira',sans-serif]">
                      MEET THE TEAM
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </section>
        </main>
      </>
  )
}
