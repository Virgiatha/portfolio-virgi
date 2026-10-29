import { site } from "@/data/site";

export default function Footer() {
  return (
    <footer className="bg-[var(--ink)] text-[var(--surface)]">
      <div className="container flex flex-col items-start gap-6 border-t border-[rgba(255,255,255,.12)] py-10 text-sm sm:flex-row sm:items-center sm:justify-between">
        <p className="font-medium opacity-75">© 2026 {site.name}</p>
        <div className="flex flex-wrap gap-6">
          <a className="link-quiet" style={{ color: "rgba(255, 255, 255, .7)" }} href={site.linkedin} target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <a className="link-quiet" style={{ color: "rgba(255, 255, 255, .7)" }} href={`mailto:${site.email}`}>
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
