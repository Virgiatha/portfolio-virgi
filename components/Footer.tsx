import { site } from "@/data/site";

export default function Footer() {
  return (
    <footer className="bg-[var(--ink)] text-[var(--surface)]">
      <div className="container flex flex-col gap-4 border-t border-[var(--line)] py-8 text-sm sm:flex-row sm:items-center sm:justify-between">
        <p className="font-medium">© 2026 {site.name}</p>
        <div className="flex gap-6">
          <a className="transition-colors hover:text-[var(--accent)]" href={site.linkedin} target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <a className="transition-colors hover:text-[var(--accent)]" href={`mailto:${site.email}`}>
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
