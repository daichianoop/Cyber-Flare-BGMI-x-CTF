"use client"

import Link from "next/link"
import { ArrowLeft, Flag, AlertTriangle } from "lucide-react"

export default function NotFound() {
  return (
      <>
        {/* Google Fonts Import */}
        <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=New+Rocker&family=Saira:wght@400;600;700;800&display=swap');
      `}</style>

        <main className="min-h-screen bg-[#090907] text-white flex flex-col items-center justify-center p-4">
          <div className="max-w-3xl w-full text-center">
            {/* 404 Header */}
            <div className="relative mb-8">
              <h1 className="text-8xl md:text-9xl font-extrabold text-[#FFF512] font-['New_Rocker',cursive] relative z-10">
                404
              </h1>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-9xl md:text-[10rem] text-[#FFF512]/10 font-['New_Rocker',cursive] z-0">
                404
              </div>
              <div className="absolute -bottom-2 left-0 right-0 h-1 bg-[#EBB014]" />
            </div>

            {/* Flag Icon */}
            <div className="flex justify-center mb-6">
              <div className="p-4 rounded-sm bg-[#1A1A18] text-[#FFF512] border-2 border-[#FFF512] shadow-[4px_4px_0px_0px_#EBB014]">
                <Flag className="w-12 h-12" />
              </div>
            </div>

            {/* Message */}
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white font-['New_Rocker',cursive]">FLAG NOT FOUND</h2>

            <div className="bg-[#1A1A18] p-6 rounded-sm border-2 border-[#DE8D00] shadow-[6px_6px_0px_0px_#9C4100] mb-8 max-w-xl mx-auto">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 mt-1">
                  <AlertTriangle className="w-6 h-6 text-[#FFF512]" />
                </div>
                <p className="text-lg text-gray-300 font-['Saira',sans-serif] text-left">
                  The page you&#39;re looking for doesn&#39;t exist or has been moved to another location. This flag might be
                  hidden elsewhere in cyberspace.
                </p>
              </div>
            </div>


            {/* Return Home Button */}
            <Link href="/">
              <button className="bg-[#FFF512] text-[#090907] font-extrabold px-8 py-4 rounded-sm shadow-[6px_6px_0px_0px_#EBB014] hover:shadow-[3px_3px_0px_0px_#EBB014] hover:translate-x-[3px] hover:translate-y-[3px] transition-all duration-200 font-['Saira',sans-serif] flex items-center mx-auto">
                <ArrowLeft className="mr-2 w-5 h-5" />
                RETURN TO BASE
              </button>
            </Link>
          </div>

          {/* Binary Code Background */}
          <div className="fixed inset-0 overflow-hidden z-[-1] opacity-10 pointer-events-none">
            <div className="absolute inset-0">
              <div className="text-[#FFF512] font-mono text-xs whitespace-nowrap">
                {"01001110 01001111 01010100 00100000 01000110 01001111 01010101 01001110 01000100 ".repeat(100)}
              </div>
            </div>
          </div>
        </main>
      </>
  )
}

