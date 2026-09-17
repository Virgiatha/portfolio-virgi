import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, ArrowUpRight, ExternalLink } from "lucide-react";
import type { Project } from "@/data/projects";
import { projects } from "@/data/projects";
import { Reveal } from "./Reveal";

function TextSection({ number, title, children }: { number: string; title: string; children: React.ReactNode }) {
  return <Reveal className="bento-card grid gap-6 bg-white/70 p-6 text-[var(--ink)] sm:p-8 md:grid-cols-[150px_1fr]"><div><span className="grid size-10 place-items-center rounded-full bg-[var(--cobalt)] text-xs font-black text-white">{number}</span><h2 className="mt-4 text-xs font-black uppercase tracking-widest">{title}</h2></div><div className="copy max-w-3xl">{children}</div></Reveal>;
}

export default function ProjectDetail({ project }: { project: Project }) {
  const index = projects.findIndex((item) => item.slug === project.slug);
  const previous = projects[(index - 1 + projects.length) % projects.length];
  const next = projects[(index + 1) % projects.length];

  return (
    <main>
      <section className="hero-grid relative overflow-hidden pb-16 pt-32 text-[var(--paper)] sm:pt-40">
        <div className="hero-glow -right-32 top-10 size-[30rem] bg-[var(--cobalt)] opacity-30 blur-[100px]" />
        <div className="shell relative"><Link href="/#projects" className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-[11px] font-bold uppercase tracking-widest text-white/70 backdrop-blur hover:bg-white hover:text-black"><ArrowLeft size={14} /> All projects</Link><div className="mt-14 grid items-end gap-10 lg:grid-cols-[1.35fr_.65fr]"><div><p className="eyebrow text-[var(--accent)]">{project.number} / {project.category}</p><h1 className="mt-5 text-[clamp(3.4rem,8.5vw,8rem)] font-black leading-[.84] tracking-[-.075em]">{project.title}</h1></div><dl className="grid grid-cols-2 gap-6 rounded-3xl border border-white/15 bg-white/5 p-5 text-sm backdrop-blur">{project.role && <div><dt className="text-[10px] uppercase tracking-widest text-white/45">Role</dt><dd className="mt-2 font-bold">{project.role}</dd></div>}<div><dt className="text-[10px] uppercase tracking-widest text-white/45">Discipline</dt><dd className="mt-2 font-bold">{project.category}</dd></div></dl></div>{project.metric && <div className="mt-14 flex items-end gap-5 border-t border-white/15 pt-6"><strong className="text-[clamp(4.5rem,13vw,11rem)] leading-none tracking-[-.08em] text-[var(--accent)]">{project.metric.value}</strong><span className="max-w-36 pb-3 text-[10px] font-bold uppercase tracking-widest text-white/55">{project.metric.label}</span></div>}</div>
      </section>

      <div className="shell relative -mt-6 py-6 sm:-mt-8 sm:py-10"><div className="media-frame soft-shadow relative aspect-[16/9] rounded-[2rem] border-[6px] border-[var(--paper)]"><Image src={project.image} alt={project.imageAlt} fill priority sizes="100vw" className="object-cover" /></div></div>

      <section className="section pt-10"><div className="shell space-y-4"><TextSection number="01" title="Overview"><p>{project.overview}</p>{project.publication && <a href={project.publication} target="_blank" rel="noreferrer" className="button button-dark mt-6">Read publication <ExternalLink size={15} /></a>}</TextSection><TextSection number="02" title="Problem"><p>{project.problem}</p></TextSection><TextSection number="03" title="Approach"><p>{project.solution}</p></TextSection><TextSection number="04" title="Features"><ul className="grid gap-2 sm:grid-cols-2">{project.features.map((feature) => <li key={feature} className="rounded-2xl bg-[var(--surface)] p-5 text-base font-bold text-[var(--ink)]">{feature}</li>)}</ul></TextSection><TextSection number="05" title="Technology"><div className="flex flex-wrap gap-2">{project.technologies.map((technology) => <span key={technology} className="chip text-[var(--ink)]">{technology}</span>)}</div></TextSection><TextSection number="06" title="Results & insights"><ul className="space-y-4">{project.results.map((result) => <li key={result} className="relative pl-6 before:absolute before:left-0 before:top-[.65em] before:size-2 before:rounded-full before:bg-[var(--cobalt)]">{result}</li>)}</ul></TextSection>{(project.role || project.roleDescription) && <TextSection number="07" title="My role"><p>{project.role && <strong className="text-[var(--ink)]">{project.role}. </strong>}{project.roleDescription}</p></TextSection>}</div></section>

      {project.gallery && <section className="pb-24"><div className="shell"><p className="eyebrow mb-6">Project evidence</p>{project.gallery.map((image) => <div key={image.src} className="media-frame soft-shadow relative aspect-[16/9] rounded-[2rem]"><Image src={image.src} alt={image.alt} fill sizes="100vw" className="object-contain" /></div>)}</div></section>}

      <nav aria-label="Project navigation" className="bg-[var(--surface)] py-8"><div className="shell grid gap-3 sm:grid-cols-2"><Link href={`/projects/${previous.slug}`} className="group flex min-h-44 flex-col justify-between rounded-[1.75rem] bg-white p-6 transition-transform hover:-translate-y-1"><span className="eyebrow flex items-center gap-2"><ArrowLeft size={15} /> Previous project</span><strong className="text-2xl tracking-[-.04em]">{previous.shortTitle}</strong></Link><Link href={`/projects/${next.slug}`} className="group flex min-h-44 flex-col items-end justify-between rounded-[1.75rem] bg-[var(--cobalt)] p-6 text-right text-white transition-transform hover:-translate-y-1"><span className="eyebrow flex items-center gap-2">Next project <ArrowRight size={15} /></span><strong className="text-2xl tracking-[-.04em]">{next.shortTitle}</strong></Link></div></nav>
      <section className="bg-black py-24 text-white"><div className="shell flex flex-col gap-7 sm:flex-row sm:items-end sm:justify-between"><h2 className="heading">HAVE A PROJECT<br /><span className="text-[var(--accent)]">IN MIND?</span></h2><a href="mailto:virgiatharaditya37@gmail.com" className="button border-[var(--accent)] bg-[var(--accent)] text-black">Let&apos;s talk <ArrowUpRight size={16} /></a></div></section>
    </main>
  );
}
