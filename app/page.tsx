"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-[#3c0196] px-4 py-12 text-white transition-colors duration-500">
      {/* Subtle Background Glows */}
      <div className="absolute top-[-10%] left-[-10%] h-[50%] w-[50%] rounded-full bg-[#4c02c0] opacity-10 blur-[120px]" />
      <div className="absolute bottom-[-10%] right-[-10%] h-[50%] w-[50%] rounded-full bg-[#2a0166] opacity-20 blur-[120px]" />

      {/* Header / Logo */}
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="z-20 mb-12 flex w-full justify-center sm:mb-20"
      >
        <Image
          src="/Fix2.png"
          alt="LetsDeal Logo"
          width={180}
          height={60}
          className="h-auto w-auto max-w-[140px] sm:max-w-[180px]"
          priority
        />
      </motion.header>

      {/* Main Content Area */}
      <div className="relative z-10 flex flex-col items-center text-center">
        {/* The "Coming Soon" Text Stack */}
        <div className="relative mb-12 flex items-center justify-center sm:mb-16">
          {/* Large Background Text - Single Line and wide */}
          <motion.h1
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 0.12, scale: 1 }}
            transition={{ duration: 1.5, delay: 0.2 }}
            className="font-serif pointer-events-none whitespace-nowrap select-none text-5xl font-light tracking-[0.25em] uppercase sm:text-7xl md:text-8xl lg:text-[10rem]"
          >
            COMING SOON
          </motion.h1>

          {/* Elegant Overlay Text - Script font */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 1 }}
            className="font-script absolute left-1/2 top-1/2 w-full -translate-x-1/2 -translate-y-[40%] text-4xl font-normal text-[#fdfcf0] sm:text-5xl md:text-6xl lg:text-7xl"
            style={{ textShadow: "0 2px 15px rgba(0,0,0,0.05)" }}
          >
            Coming Soon
          </motion.div>
        </div>

        {/* Tagline */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.8 }}
          transition={{ duration: 1, delay: 1.8 }}
          className="flex flex-col items-center gap-4"
        >
          <p className="max-w-2xl text-sm font-light tracking-[0.3em] uppercase sm:text-base md:text-lg">
            The easiest way to trade assets online.
          </p>
          <div className="h-[1px] w-8 bg-white/30" />
        </motion.div>
      </div>

      {/* Footer Decoration */}
      <motion.footer
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.4 }}
        transition={{ duration: 1, delay: 2.2 }}
        className="absolute bottom-10 z-10 text-[10px] font-light tracking-[0.4em] uppercase"
      >
        <span>Something exciting is brewing</span>
      </motion.footer>
    </main>
  );
}
