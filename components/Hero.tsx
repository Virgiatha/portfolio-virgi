import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Download, ExternalLink } from "lucide-react";
import { site } from "@/data/site";

export default function Hero() {
  return (
    <section id="home" className="section pt-32 sm:pt-48">
      <div className="container grid items-center gap-16 lg:grid-cols-12">
        <div className="lg:col-span-6">
          <p className="eyebrow">{site.eyebrow}</p>
          <h1 className="heading-hero mt-6">{site.name}</h1>
          <p className="lead mt-8 max-w-xl">{site.heroSubline}</p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Link href="/#projects" className="button button-lg button-primary">
              View projects <ArrowRight size={18} strokeWidth={2.2} />
            </Link>
            <a href={site.cv} target="_blank" rel="noreferrer" className="button button-lg button-secondary">
              <Download size={18} strokeWidth={2.2} /> CV
            </a>
          </div>
          <a
            href={site.linkedin}
            target="_blank"
            rel="noreferrer"
            className="link-accent mt-6 inline-flex items-center gap-2 text-sm font-medium"
          >
            <ExternalLink size={16} /> LinkedIn
          </a>
        </div>
        <div className="lg:col-span-6">
          <div className="relative mx-auto aspect-[4/5] w-full max-w-md overflow-hidden rounded-[var(--radius-lg)] border-2 border-[var(--line-strong)]">
            <Image
              src="/images/virgi-atha-raditya.webp"
              alt="Portrait of Virgi Atha Raditya"
              fill
              priority
              sizes="(max-width: 1024px) 80vw, 480px"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
