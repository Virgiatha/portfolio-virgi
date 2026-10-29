import Link from "next/link";
import { ArrowUpRight, ExternalLink, Mail, MapPin } from "lucide-react";
import { site } from "@/data/site";

export default function Contact() {
  return (
    <section id="contact" className="section bg-[var(--ink)] text-[var(--surface)]">
      <div className="container">
        <div className="mb-14">
          <p className="eyebrow eyebrow-accent">Contact</p>
          <h2 className="heading mt-6">Open to full-stack, data, and AI roles.</h2>
          <p className="lead mt-6 max-w-2xl">Email fastest. Available for full-time or contract work.</p>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          <a
            href={`mailto:${site.email}`}
            className="group flex min-h-36 flex-col justify-between rounded-[var(--radius-lg)] border border-[var(--line-strong)] bg-[var(--surface)] p-7 text-[var(--ink)] transition-all hover:border-[var(--accent)] hover:shadow-lg"
          >
            <div>
              <Mail size={22} className="text-[var(--accent)]" strokeWidth={2.2} />
              <p className="eyebrow mt-6">Email</p>
            </div>
            <div className="flex items-center justify-between pt-5">
              <span className="font-semibold">{site.email}</span>
              <ArrowUpRight size={18} className="text-[var(--ink-muted)] transition-transform group-hover:rotate-12 group-hover:text-[var(--accent)]" strokeWidth={2.2} />
            </div>
          </a>
          <Link
            href={site.linkedin}
            target="_blank"
            rel="noreferrer"
            className="group flex min-h-36 flex-col justify-between rounded-[var(--radius-lg)] border border-[var(--line-strong)] bg-[var(--surface)] p-7 text-[var(--ink)] transition-all hover:border-[var(--accent)] hover:shadow-lg"
          >
            <div>
              <ExternalLink size={22} className="text-[var(--accent)]" strokeWidth={2.2} />
              <p className="eyebrow mt-6">LinkedIn</p>
            </div>
            <div className="flex items-center justify-between pt-5">
              <span className="font-semibold">{site.shortName}</span>
              <ArrowUpRight size={18} className="text-[var(--ink-muted)] transition-transform group-hover:rotate-12 group-hover:text-[var(--accent)]" strokeWidth={2.2} />
            </div>
          </Link>
          <div className="flex min-h-36 flex-col justify-between rounded-[var(--radius-lg)] border border-[rgba(255,255,255,.15)] bg-transparent p-7 text-[var(--surface)]">
            <div>
              <MapPin size={22} className="text-[var(--accent)]" strokeWidth={2.2} />
              <p className="eyebrow mt-6" style={{ color: "rgba(255, 255, 255, .65)" }}>Based in</p>
            </div>
            <p className="pt-5 font-semibold">{site.location}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
