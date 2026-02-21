"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-start overflow-hidden bg-[#3c0196] px-4 pt-20 pb-12 text-white transition-colors duration-500 sm:px-6 sm:pt-24 lg:px-8 xl:justify-start xl:pt-0">
      {/* Subtle Background Glows */}
      <div className="absolute top-[-15%] left-[-15%] h-[60%] w-[60%] rounded-full bg-[#4c02c0] opacity-10 blur-[130px] sm:top-[-10%] sm:left-[-10%]" />
      <div className="absolute bottom-[-15%] right-[-15%] h-[60%] w-[60%] rounded-full bg-[#2a0166] opacity-20 blur-[130px] sm:bottom-[-10%] sm:right-[-10%]" />

      {/* Header / Logo */}
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="z-20 mb-8 flex w-full justify-center sm:mb-12 xl:-mb-16"
      >
        <div className="relative h-56 w-full max-w-[340px] sm:h-72 sm:max-w-[500px] md:h-80 md:max-w-[600px] lg:h-48 lg:w-96 xl:h-64 xl:w-[32rem]">
          <Image
            src="/Fix2.png"
            alt="LetsDeal Logo"
            fill
            className="object-contain"
            priority
          />
        </div>
      </motion.header>

      {/* Main Content Area */}
      <div className="relative z-10 flex w-full max-w-7xl flex-col items-center text-center">
        {/* The "Coming Soon" Text Stack */}
        <div className="relative mb-12 flex w-full items-center justify-center sm:mb-16">
          {/* Large Background Text - Single Line and wide */}
          <motion.h1
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 0.12, scale: 1 }}
            transition={{ duration: 1.5, delay: 0.2 }}
            className="font-serif pointer-events-none whitespace-nowrap select-none text-[clamp(1.5rem,11vw,10rem)] font-normal tracking-[0.1em] uppercase sm:tracking-[0.2em]"
          >
            COMING SOON
          </motion.h1>

          {/* Elegant Overlay Text - Script font */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 1 }}
            className="font-script absolute left-1/2 top-1/2 w-full -translate-x-1/2 -translate-y-[15%] text-[clamp(2.5rem,15vw,8rem)] font-light text-[#fdfcf0] sm:-translate-y-[20%]"
            style={{ textShadow: "0 2px 10px rgba(0,0,0,0.05)" }}
          >
            Coming Soon
          </motion.div>
        </div>

        {/* Tagline */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.8 }}
          transition={{ duration: 1, delay: 1.8 }}
          className="flex w-full flex-col items-center gap-4 px-4 sm:gap-6"
        >
          <p className="max-w-2xl text-[clamp(0.65rem,3vw,1.125rem)] font-light tracking-[0.2em] uppercase leading-relaxed sm:tracking-[0.3em]">
            The easiest way to trade assets online.
          </p>
          <div className="h-[1px] w-8 bg-white/30 sm:w-12" />
        </motion.div>
      </div>

      {/* Footer Decoration */}
      <motion.footer
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.4 }}
        transition={{ duration: 1, delay: 2.2 }}
        className="absolute bottom-12 z-10 text-[9px] font-light tracking-[0.3em] uppercase sm:bottom-16 sm:text-[10px] sm:tracking-[0.4em]"
      >
        <span>Something exciting is brewing</span>
      </motion.footer>
    </main>
  );
}
