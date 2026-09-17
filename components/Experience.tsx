import { BriefcaseBusiness } from "lucide-react";
import { experience } from "@/data/experience";
import { Reveal } from "./Reveal";

export default function Experience() {
  return (
    <section id="experience" className="section">
      <div className="shell grid gap-12 lg:grid-cols-[.72fr_1.28fr]">
        <div className="lg:sticky lg:top-28 lg:self-start"><p className="eyebrow">04 / Experience</p><h2 className="heading mt-5">LEARNING<br />BY <span className="text-[var(--cobalt)]">DOING.</span></h2><p className="copy mt-7 max-w-md">Roles that shaped how I build, collaborate, teach, and solve technical problems in real environments.</p><div className="mt-8 grid size-16 place-items-center rounded-2xl bg-black text-[var(--accent)]"><BriefcaseBusiness size={26} /></div></div>
        <ol className="relative space-y-4 before:absolute before:bottom-10 before:left-[2.15rem] before:top-10 before:w-px before:bg-black/10 sm:before:left-[2.65rem]">{experience.map((item, index) => <li key={`${item.role}-${item.organization}`}><Reveal className="bento-card relative grid grid-cols-[48px_1fr] gap-4 bg-white/70 p-4 text-[var(--ink)] transition-transform hover:-translate-y-1 sm:grid-cols-[64px_1fr] sm:p-6"><span className="relative z-10 grid size-10 place-items-center rounded-full bg-black text-xs font-black text-[var(--accent)] sm:size-12">0{index + 1}</span><div className="pb-2"><p className="text-[11px] font-bold uppercase tracking-[.14em] text-[var(--cobalt)]">{item.organization}</p><h3 className="mt-3 text-2xl font-black tracking-[-.045em] sm:text-3xl">{item.role}</h3><p className="mt-4 max-w-2xl text-sm leading-6 text-[var(--muted)]">{item.description}</p></div></Reveal></li>)}</ol>
      </div>
    </section>
  );
}
