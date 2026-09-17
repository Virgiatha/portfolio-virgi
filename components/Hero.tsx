"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowDownRight, Download} from "lucide-react";
import { motion } from "motion/react";

export default function Hero() {
  return (
    <section id="home" className="hero-grid relative min-h-svh overflow-hidden text-white">
      <div className="hero-glow -right-32 top-0 size-[34rem] bg-[var(--cobalt)] opacity-30 blur-[100px]" />
      <div className="hero-glow -left-24 bottom-0 size-96 bg-[var(--accent)] opacity-10 blur-[110px]" />
      <div className="shell relative grid min-h-svh items-center gap-10 pb-7 pt-28 lg:grid-cols-[1fr_360px] lg:pb-10">
        <div className="relative z-10">
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: .1 }} className="eyebrow mb-4 text-white/55">Computer Science Graduate / 2026</motion.p>
          <motion.h1 initial={{ opacity: 0, y: 45 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .85, delay: .08, ease: [0.22, 1, 0.36, 1] }} className="display hero-word max-w-5xl">VIRGI ATHA<br /><span className="text-[var(--accent)]">RADITYA</span></motion.h1>
          <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .65, delay: .3 }} className="mt-8 grid max-w-4xl gap-6 border-t border-white/15 pt-6 sm:grid-cols-[1fr_auto] sm:items-end">
            <p className="max-w-2xl text-[clamp(1.05rem,1.7vw,1.35rem)] leading-relaxed text-white/70">I design and build intelligent digital products across <span className="font-semibold text-white">data, AI, web, and IoT</span>—turning complex ideas into useful experiences.</p>
            <div className="flex flex-wrap gap-2"><Link href="#projects" className="button border-[var(--accent)] bg-[var(--accent)] text-black">Explore work <ArrowDownRight size={16} /></Link><a href="/downloads/Virgi Atha Raditya_CV_SE" download className="button border-white/25 bg-white/5 text-white hover:bg-white hover:text-black">Download CV <Download size={15} /></a></div>
          </motion.div>
        </div>
        <motion.aside initial={{ opacity: 0, scale: .94, y: 25 }} animate={{ opacity: 1, scale: 1, y: 0 }} transition={{ duration: .85, delay: .22, ease: [0.22, 1, 0.36, 1] }} className="relative mx-auto w-full max-w-[360px] lg:mx-0">
          <div className="absolute -inset-3 translate-x-3 translate-y-3 rounded-[2rem] bg-[var(--accent)]" />
          <div className="glass-panel relative overflow-hidden rounded-[2rem] p-2">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[1.5rem] bg-[#e10d12]"><Image src="/images/pas foto latar merah jas hitam_compress.jpg" alt="Virgi Atha Raditya in professional attire" fill priority sizes="(max-width: 1024px) 80vw, 360px" className="object-cover" /></div>
          </div>
        </motion.aside>
      </div>
    </section>
  );
}
