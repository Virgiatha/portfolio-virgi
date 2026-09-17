import Image from "next/image";
import { ArrowUpRight, Award } from "lucide-react";
import { certifications } from "@/data/certifications";
import { Reveal } from "./Reveal";

export default function Certifications() {
  return (
    <section aria-labelledby="certifications-heading" className="section bg-[#e6e8ff]">
      <div className="shell"><div className="grid gap-7 lg:grid-cols-[1fr_auto] lg:items-end"><div><p className="eyebrow text-[var(--cobalt)]">05 / Credentials</p><h2 id="certifications-heading" className="heading mt-5">PROOF OF<br /><span className="text-[var(--cobalt)]">PROGRESS.</span></h2></div><div className="flex items-center gap-3 rounded-2xl bg-white/60 p-4 text-sm text-black/55"><Award className="text-[var(--cobalt)]" size={22} /><span>Click any certificate<br />to view full size</span></div></div>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{certifications.map((certificate, index) => <Reveal key={certificate.title} delay={index * .06}><a href={certificate.image} target="_blank" rel="noreferrer" className="group block h-full overflow-hidden rounded-[1.75rem] bg-white p-3 soft-shadow"><div className="relative aspect-[4/3] overflow-hidden rounded-[1.25rem] bg-[#f5f5f2]"><Image src={certificate.image} alt={`${certificate.title} certificate issued by ${certificate.issuer}`} fill sizes="(max-width: 640px) 100vw, 25vw" className="object-contain transition-transform duration-500 group-hover:scale-[1.04]" /><span className="absolute right-3 top-3 grid size-9 place-items-center rounded-full bg-black text-white opacity-0 transition-opacity group-hover:opacity-100"><ArrowUpRight size={16} /></span></div><div className="px-2 pb-2 pt-5"><p className="text-[10px] font-bold uppercase tracking-[.15em] text-[var(--cobalt)]">{certificate.issuer}</p><h3 className="mt-2 font-black leading-tight tracking-[-.025em]">{certificate.title}</h3></div></a></Reveal>)}</div>
      </div>
    </section>
  );
}
