import Link from "next/link";
import { ArrowUpRight, ExternalLink, Mail, MapPin } from "lucide-react";
import { site } from "@/data/site";

export default function Contact() {
  return (
    <section id="contact" className="section bg-[var(--ink)] text-[var(--surface)]">
      <div className="container">
        <div className="mb-12">
          <p className="eyebrow text-[var(--accent)]">Contact</p>
          <h2 className="heading mt-4">Open to full-stack, data, and AI roles.</h2>
          <p className="copy mt-6 max-w-2xl">The fastest way to reach me is email.</p>
        </div>
        <div className="grid gap-6 sm:grid-cols-3">
          <a
            href={`mailto:${site.email}`}
            className="group flex min-h-32 flex-col justify-between rounded-[var(--radius)] border border-[var(--line)] bg-[var(--surface)] p-6 text-[var(--ink)] transition-colors hover:border-[var(--accent)]"
          >
            <div>
              <Mail size={20} className="text-[var(--accent)]" />
              <p className="mt-6 text-xs font-medium uppercase tracking-wide text-[var(--ink-muted)]">Email</p>
            </div>
            <div className="flex items-center justify-between pt-4">
              <span className="font-medium">{site.email}</span>
              <ArrowUpRight size={16} className="transition-transform group-hover:rotate-12" />
            </div>
          </a>
          <Link
            href={site.linkedin}
            target="_blank"
            rel="noreferrer"
            className="group flex min-h-32 flex-col justify-between rounded-[var(--radius)] border border-[var(--line)] bg-[var(--surface)] p-6 text-[var(--ink)] transition-colors hover:border-[var(--accent)]"
          >
            <div>
              <ExternalLink size={20} className="text-[var(--accent)]" />
              <p className="mt-6 text-xs font-medium uppercase tracking-wide text-[var(--ink-muted)]">LinkedIn</p>
            </div>
            <div className="flex items-center justify-between pt-4">
              <span className="font-medium">{site.shortName}</span>
              <ArrowUpRight size={16} className="transition-transform group-hover:rotate-12" />
            </div>
          </Link>
          <div className="flex min-h-32 flex-col justify-between rounded-[var(--radius)] border border-[var(--line)] bg-[var(--surface)] p-6 text-[var(--ink)]">
            <div>
              <MapPin size={20} className="text-[var(--accent)]" />
              <p className="mt-6 text-xs font-medium uppercase tracking-wide text-[var(--ink-muted)]">Based in</p>
            </div>
            <p className="font-medium">{site.location}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
