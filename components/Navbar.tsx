"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const links = ["Home", "About", "Projects", "Experience", "Contact"];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("Home");

  useEffect(() => {
    const sections = links.map((label) => document.getElementById(label.toLowerCase())).filter(Boolean) as HTMLElement[];
    const observer = new IntersectionObserver((entries) => {
      const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
      if (visible) setActive(visible.target.id[0].toUpperCase() + visible.target.id.slice(1));
    }, { rootMargin: "-35% 0px -55%", threshold: [0, .25, .6] });
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 pt-3 sm:pt-5">
      <nav aria-label="Main navigation" className="shell flex h-14 items-center justify-between rounded-full border border-white/60 bg-[rgba(244,245,239,.88)] px-3 shadow-[0_12px_45px_rgba(0,0,0,.12)] backdrop-blur-xl sm:px-5">
        <Link href="/#home" className="flex items-center gap-2 pl-1 text-lg font-black tracking-[-.05em]"><span className="grid size-7 place-items-center rounded-full bg-black text-[10px] text-[var(--accent)]">VA</span>Virgi<span className="text-[var(--cobalt)]"></span></Link>
        <div className="hidden items-center gap-7 md:flex">
          {links.map((label) => (
            <Link key={label} href={`/#${label.toLowerCase()}`} className={`rounded-full px-3 py-2 text-[11px] font-bold uppercase tracking-[.1em] transition-colors ${active === label ? "bg-black text-white" : "hover:bg-black/5"}`}>
              {label}
            </Link>
          ))}
        </div>
        <button onClick={() => setOpen(!open)} aria-expanded={open} aria-label={open ? "Close menu" : "Open menu"} className="grid size-10 place-items-center rounded-full bg-black text-white md:hidden">
          {open ? <X size={21} /> : <Menu size={21} />}
        </button>
      </nav>
      {open && (
        <div className="shell mt-2 rounded-3xl border border-black/10 bg-[var(--paper)] p-3 shadow-2xl md:hidden">
          {links.map((label, index) => <Link key={label} href={`/#${label.toLowerCase()}`} onClick={() => setOpen(false)} className="flex items-center justify-between border-b border-black/10 px-2 py-3.5 text-sm font-bold last:border-0"><span>0{index + 1}</span><span>{label}</span></Link>)}
        </div>
      )}
    </header>
  );
}
