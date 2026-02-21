"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-start overflow-hidden bg-[#230064] px-4 pt-20 pb-12 text-white transition-colors duration-500 sm:px-6 sm:pt-24 lg:px-8 xl:justify-start xl:pt-0">
      {/* Subtle Background Glows */}
      <div className="absolute top-[-15%] left-[-15%] h-[60%] w-[60%] rounded-full bg-[#4c02c0] opacity-10 blur-[130px] sm:top-[-10%] sm:left-[-10%]" />
      <div className="absolute bottom-[-15%] right-[-15%] h-[60%] w-[60%] rounded-full bg-[#2a0166] opacity-20 blur-[130px] sm:bottom-[-10%] sm:right-[-10%]" />

      {/* Header / Logo */}
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="z-20 mb-4 flex w-full justify-center sm:mb-6 lg:-mt-10 xl:-mt-16 xl:-mb-10"
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
      <div className="relative z-10 -mt-14 flex w-full max-w-7xl flex-col items-center text-center sm:-mt-20 lg:-mt-12 xl:-mt-18">
        {/* The "Coming Soon" Text Stack */}
        <div className="relative mb-0 flex w-full items-center justify-center sm:mb-0">
          {/* Large Primary Text - Bold and Clear */}
          <motion.h1
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 0.8, scale: 1 }}
            transition={{ duration: 1.5, delay: 0.2 }}
            className="font-serif pointer-events-none whitespace-nowrap select-none text-[clamp(1.5rem,11vw,10rem)] font-normal tracking-[0.1em] uppercase sm:tracking-[0.2em]"
          >
            COMING SOON
          </motion.h1>
        </div>

        {/* Tagline */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.8 }}
          transition={{ duration: 1, delay: 1.8 }}
          className="relative z-10 mt-0 flex w-full flex-col items-center gap-4 px-4 sm:mt-2 lg:-mt-7 sm:gap-6"
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
        animate={{ opacity: 0.6 }}
        transition={{ duration: 1, delay: 2.2 }}
        className="absolute bottom-6 z-30 text-[11px] font-medium tracking-[0.3em] uppercase text-black sm:bottom-10 sm:text-[13px] sm:tracking-[0.4em] lg:text-[16px] xl:text-[18px]"
      >
        <span>Something exciting is brewing</span>
      </motion.footer>

      {/* Car Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, delay: 1, ease: "easeOut" }}
        className="absolute bottom-0 left-0 z-0 h-[45vh] w-full min-h-[300px] overflow-hidden sm:h-[50vh] lg:-bottom-24 lg:h-[55vh] xl:-bottom-28 xl:h-[68vh]"
      >
        <div className="relative h-full w-full">
          <Image
            src="/cars-hero.jpg"
            alt="Premium Vehicles"
            fill
            className="object-cover object-bottom"
            priority
          />
          {/* Seamless Blend Overlay - Hides Sky and Blends to Background */}
          <div
            className="absolute inset-0 z-10 pointer-events-none"
            style={{
              background: "linear-gradient(to bottom, #230064 0%, rgba(35, 0, 100, 0.4) 10%, rgba(35, 0, 100, 0.1) 25%, transparent 50%)"
            }}
          />
          {/* subtle darkness at bottom */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent z-20 pointer-events-none" />
        </div>
      </motion.div>
    </main>
  );
}
