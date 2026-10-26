"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { site } from "@/data/site";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState<string>("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = site.nav
      .map((item) => document.getElementById(item.href.split("#")[1]))
      .filter(Boolean) as HTMLElement[];
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: "-35% 0px -55%", threshold: [0, 0.25, 0.6] },
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 bg-[var(--bg)] transition-colors ${
        scrolled ? "border-b border-[var(--line)]" : "border-b border-transparent"
      }`}
    >
      <nav aria-label="Primary" className="container flex h-16 items-center justify-between">
        <Link href="/" className="text-base font-semibold tracking-tight" style={{ fontFamily: "var(--font-heading)" }}>
          {site.name}
        </Link>
        <div className="hidden items-center gap-1 md:flex">
          {site.nav.map((item) => {
            const id = item.href.split("#")[1];
            return (
              <Link
                key={item.label}
                href={item.href}
                className={`flex min-h-11 items-center rounded-[var(--radius-pill)] px-3 text-sm transition-colors ${
                  active === id ? "text-[var(--accent)]" : "text-[var(--ink-muted)] hover:text-[var(--ink)]"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
          <a href={`mailto:${site.email}`} className="button button-primary ml-2">
            Email me
          </a>
        </div>
        <button
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          className="grid size-11 place-items-center rounded-[var(--radius)] border border-[var(--line)] md:hidden"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>
      {open && (
        <div id="mobile-menu" className="border-t border-[var(--line)] bg-[var(--bg)] md:hidden">
          <div className="container flex flex-col py-2">
            {site.nav.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setOpen(false)}
                className="flex min-h-11 items-center border-b border-[var(--line)] text-sm text-[var(--ink)] last:border-0"
              >
                {item.label}
              </Link>
            ))}
            <a
              href={`mailto:${site.email}`}
              onClick={() => setOpen(false)}
              className="button button-primary my-4 self-start"
            >
              Email me
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
