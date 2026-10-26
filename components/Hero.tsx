import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Download } from "lucide-react";
import { site } from "@/data/site";

export default function Hero() {
  return (
    <section id="home" className="section pt-32 sm:pt-40">
      <div className="container grid items-center gap-12 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <p className="eyebrow">{site.eyebrow}</p>
          <h1 className="mt-6 text-[var(--text-hero)] font-semibold leading-[1.05] tracking-tight" style={{ fontFamily: "var(--font-heading)" }}>
            {site.name}
          </h1>
          <p className="copy mt-6 max-w-2xl text-lg">{site.heroSubline}</p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Link href="/#projects" className="button button-primary">
              View projects <ArrowRight size={16} />
            </Link>
            <a href={site.cv} target="_blank" rel="noreferrer" className="button button-secondary">
              <Download size={16} /> Download CV
            </a>
            <a
              href={site.linkedin}
              target="_blank"
              rel="noreferrer"
              className="px-2 py-2 text-sm text-[var(--ink-muted)] underline-offset-4 transition-colors hover:text-[var(--ink)] hover:underline"
            >
              LinkedIn
            </a>
          </div>
        </div>
        <div className="lg:col-span-5">
          <div className="relative mx-auto aspect-[4/5] w-full max-w-sm overflow-hidden rounded-[var(--radius)] border border-[var(--line)]">
            <Image
              src="/images/virgi-atha-raditya.webp"
              alt="Portrait of Virgi Atha Raditya"
              fill
              priority
              sizes="(max-width: 1024px) 80vw, 420px"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
