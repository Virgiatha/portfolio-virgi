import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/data/projects";
import { Reveal } from "./Reveal";

export default function ProjectCard({ project, reverse = false, compact = false }: { project: Project; reverse?: boolean; compact?: boolean }) {
  if (compact) {
    return (
      <Reveal className="project-row project-surface group h-full" >
        <article data-project={project.slug} className="project-surface flex h-full flex-col overflow-hidden rounded-[2rem] border border-white/10 bg-white/[.06] p-3 transition-colors hover:bg-white/[.09]">
          <Link href={`/projects/${project.slug}`} className="media-frame relative block aspect-[16/11] rounded-[1.35rem]"><Image src={project.image} alt={project.imageAlt} fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" /><span className="absolute right-3 top-3 grid size-11 place-items-center rounded-full bg-[var(--project-accent)] text-black transition-transform group-hover:rotate-12"><ArrowUpRight size={19} /></span></Link>
          <div className="flex flex-1 flex-col p-4 sm:p-5"><div className="flex items-center justify-between text-white/65"><span className="text-xs font-bold">{project.number}</span><span className="text-[10px] font-bold uppercase tracking-[.14em]">{project.category}</span></div><h3 className="mt-8 text-4xl font-black leading-[.92] tracking-[-.055em] text-white">{project.shortTitle}</h3><p className="mt-4 text-sm leading-6 text-white/70">{project.summary}</p><div className="mt-auto flex flex-wrap gap-2 pt-7">{project.technologies.slice(0, 4).map((tech) => <span className="rounded-full border border-white/25 px-3 py-1.5 text-[10px] font-bold text-white/80" key={tech}>{tech}</span>)}</div></div>
        </article>
      </Reveal>
    );
  }

  return (
    <Reveal className="project-row project-surface py-5">
      <article data-project={project.slug} className="project-surface grid overflow-hidden rounded-[2.25rem] bg-[var(--paper)] p-3 text-black lg:grid-cols-[1.05fr_.95fr]">
        <Link href={`/projects/${project.slug}`} className={`media-frame relative aspect-[16/11] rounded-[1.7rem] lg:aspect-auto lg:min-h-[34rem] ${reverse ? "lg:order-2" : ""}`}><Image src={project.image} alt={project.imageAlt} fill sizes="(max-width: 1024px) 100vw, 55vw" className="object-cover" /></Link>
        <div className={`flex min-h-[30rem] flex-col p-5 sm:p-8 ${reverse ? "lg:order-1" : ""}`}>
          <div className="flex items-center justify-between"><span className="grid size-11 place-items-center rounded-full bg-[var(--project-accent)] text-sm font-black">{project.number}</span><span className="max-w-[55%] text-right text-[10px] font-bold uppercase tracking-[.14em] text-black/45">{project.category}</span></div>
          <h3 className="mt-12 text-[clamp(3rem,5vw,5.6rem)] font-black leading-[.88] tracking-[-.07em]">{project.shortTitle}</h3><p className="copy mt-6 max-w-xl">{project.summary}</p>
          <div className="mt-6 flex flex-wrap gap-2">{project.technologies.slice(0, 5).map((tech) => <span className="chip" key={tech}>{tech}</span>)}</div>
          <Link href={`/projects/${project.slug}`} className="group mt-auto flex items-center justify-between border-t border-black/15 pt-5 text-xs font-black uppercase tracking-[.1em]"><span>Explore case study</span><span className="grid size-12 place-items-center rounded-full bg-black text-white transition-transform group-hover:rotate-12 group-hover:bg-[var(--cobalt)]"><ArrowUpRight size={19} /></span></Link>
        </div>
      </article>
    </Reveal>
  );
}
