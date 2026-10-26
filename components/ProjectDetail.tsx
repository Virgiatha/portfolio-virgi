import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, ExternalLink } from "lucide-react";
import type { Project } from "@/data/projects";
import { projects } from "@/data/projects";
import { site } from "@/data/site";

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="border-t border-[var(--line)] py-10">
      <h2 className="subheading">{title}</h2>
      <div className="copy mt-4 max-w-[68ch] space-y-4">{children}</div>
    </section>
  );
}

export default function ProjectDetail({ project }: { project: Project }) {
  const index = projects.findIndex((item) => item.slug === project.slug);
  const next = projects[(index + 1) % projects.length];

  return (
    <main className="pt-28">
      <div className="container max-w-[720px]">
        <Link
          href="/#projects"
          className="inline-flex items-center gap-2 text-sm text-[var(--ink-muted)] transition-colors hover:text-[var(--ink)]"
        >
          <ArrowLeft size={15} /> All projects
        </Link>

        <p className="eyebrow mt-10">{project.category}</p>
        <h1 className="mt-4 text-[var(--text-hero)] font-semibold leading-[1.05] tracking-tight" style={{ fontFamily: "var(--font-heading)" }}>
          {project.title}
        </h1>
        <p className="copy mt-6 max-w-[68ch] text-lg">{project.summary}</p>

        <dl className="mt-10 grid gap-6 border-y border-[var(--line)] py-6 text-sm sm:grid-cols-3">
          {project.role && (
            <div>
              <dt className="text-xs uppercase tracking-wide text-[var(--ink-muted)]">Role</dt>
              <dd className="mt-2 font-medium">{project.role}</dd>
            </div>
          )}
          {project.year && (
            <div>
              <dt className="text-xs uppercase tracking-wide text-[var(--ink-muted)]">Year</dt>
              <dd className="mt-2 font-medium">{project.year}</dd>
            </div>
          )}
          <div>
            <dt className="text-xs uppercase tracking-wide text-[var(--ink-muted)]">Discipline</dt>
            <dd className="mt-2 font-medium">{project.category}</dd>
          </div>
        </dl>
        {project.publication && (
          <a href={project.publication} target="_blank" rel="noreferrer" className="button button-secondary mt-6">
            Read publication <ExternalLink size={15} />
          </a>
        )}
      </div>

      <div className="container mt-12">
        <div className="media-frame">
          <Image
            src={project.image}
            alt={project.imageAlt}
            width={1200}
            height={675}
            priority
            sizes="(max-width: 1120px) 100vw, 1120px"
            className="aspect-[16/9] w-full object-cover"
          />
        </div>
      </div>

      <div className="container mt-8 max-w-[720px]">
        <Section title="Problem">
          <p>{project.problem}</p>
        </Section>
        <Section title="Approach">
          <p>{project.solution}</p>
        </Section>
        <Section title="What I built">
          <ul className="space-y-2">
            {project.features.map((feature) => (
              <li key={feature} className="flex gap-3">
                <span className="mt-2 size-1.5 shrink-0 rounded-full bg-[var(--accent)]" />
                {feature}
              </li>
            ))}
          </ul>
        </Section>
        {project.metric && (
          <Section title="Result">
            <p className="text-2xl font-semibold text-[var(--ink)]" style={{ fontFamily: "var(--font-heading)" }}>
              {project.metric.value}
            </p>
            <p className="text-sm">{project.metric.label}</p>
            <ul className="mt-4 space-y-2">
              {project.results.map((result) => (
                <li key={result} className="flex gap-3">
                  <span className="mt-2 size-1.5 shrink-0 rounded-full bg-[var(--accent)]" />
                  {result}
                </li>
              ))}
            </ul>
          </Section>
        )}
        <Section title="Stack">
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((technology) => (
              <span key={technology} className="chip">
                {technology}
              </span>
            ))}
          </div>
        </Section>
        {project.gallery?.map((image) => (
          <figure key={image.src} className="border-t border-[var(--line)] py-10">
            <div className="media-frame">
              <Image
                src={image.src}
                alt={image.alt}
                width={1200}
                height={675}
                sizes="(max-width: 1120px) 100vw, 1120px"
                className="w-full object-contain"
              />
            </div>
            <figcaption className="mt-3 text-sm text-[var(--ink-muted)]">{image.alt}</figcaption>
          </figure>
        ))}
      </div>

      <div className="container mt-8 max-w-[720px]">
        <p className="eyebrow">Next project</p>
        <Link
          href={`/projects/${next.slug}`}
          className="group mt-4 flex items-center justify-between border-t border-[var(--line)] pt-6"
        >
          <span className="subheading">{next.shortTitle}</span>
          <ArrowRight size={20} className="text-[var(--ink-muted)] transition-transform group-hover:translate-x-1" />
        </Link>
      </div>

      <div className="container mt-16 max-w-[720px] pb-24">
        <p className="copy text-sm">
          Questions about this project?{" "}
          <a href={`mailto:${site.email}`} className="text-[var(--accent)] underline-offset-4 hover:underline">
            Email me
          </a>
          .
        </p>
      </div>
    </main>
  );
}
