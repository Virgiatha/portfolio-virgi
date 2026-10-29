import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Project } from "@/data/projects";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="card-link group flex flex-col overflow-hidden rounded-[var(--radius)] border border-[var(--line)] bg-[var(--bg)] transition-colors hover:border-[var(--ink-muted)]">
      <Link href={`/projects/${project.slug}`} className="media-frame">
        <Image
          src={project.image}
          alt={project.imageAlt}
          width={640}
          height={400}
          sizes="(max-width: 768px) 100vw, 50vw"
          className="aspect-[16/10] w-full object-cover"
        />
      </Link>
      <div className="flex flex-1 flex-col p-6 sm:p-8">
        <div className="eyebrow flex items-center gap-2">
          {project.year && <span>{project.year}</span>}
          <span aria-hidden>·</span>
          <span>{project.category}</span>
        </div>
        <h3 className="subheading mt-4">
          <Link href={`/projects/${project.slug}`} className="hover:text-[var(--accent)]">
            {project.shortTitle}
          </Link>
        </h3>
        <p className="copy mt-3 line-clamp-3 text-sm">{project.summary}</p>
        {project.metric && (
          <div className="mt-6 border-t border-[var(--line)] pt-5">
            <p className="stat-value text-[var(--accent)]">{project.metric.value}</p>
            <p className="mt-1 text-xs text-[var(--ink-muted)]">{project.metric.label}</p>
          </div>
        )}
        <div className="mt-6 flex flex-wrap gap-2">
          {project.technologies.slice(0, 4).map((tech) => (
            <span key={tech} className="chip">
              {tech}
            </span>
          ))}
        </div>
        <Link
          href={`/projects/${project.slug}`}
          className="mt-6 inline-flex items-center gap-1.5 pt-4 text-sm font-semibold text-[var(--ink)] transition-colors group-hover:text-[var(--accent)]"
        >
          Read case study <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </article>
  );
}
