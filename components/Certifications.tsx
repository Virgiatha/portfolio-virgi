import Image from "next/image";
import { certifications } from "@/data/certifications";

export default function Certifications() {
  const featuredTitles = ["MSIB Batch 7 — AI 4 Jobs", "R Fundamental for Data Science"];
  const featured = certifications.filter((c) => featuredTitles.includes(c.title));
  const others = certifications.filter((c) => !featuredTitles.includes(c.title));

  return (
    <section id="certifications" className="section bg-[var(--surface)]">
      <div className="container">
        <h2 className="heading">Certifications</h2>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((cert) => (
            <a
              key={cert.title}
              href={cert.image}
              target="_blank"
              rel="noreferrer"
              className="group block overflow-hidden rounded-[var(--radius)] border border-[var(--line)] transition-colors hover:border-[var(--ink-muted)]"
            >
              <div className="relative aspect-[4/3] bg-[var(--bg)]">
                <Image
                  src={cert.image}
                  alt={`Certificate: ${cert.title}, ${cert.issuer}`}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-contain p-2"
                />
              </div>
              <div className="p-4">
                <p className="text-xs font-medium text-[var(--ink-muted)]">{cert.issuer}</p>
                <h3 className="mt-2 font-semibold text-[var(--ink)]">{cert.title}</h3>
              </div>
            </a>
          ))}
          {others.map((cert) => (
            <a
              key={cert.title}
              href={cert.image}
              target="_blank"
              rel="noreferrer"
              className="group block overflow-hidden rounded-[var(--radius)] border border-[var(--line)] opacity-75 transition-opacity hover:opacity-100"
            >
              <div className="relative aspect-[4/3] bg-[var(--bg)]">
                <Image
                  src={cert.image}
                  alt={`Certificate: ${cert.title}, ${cert.issuer}`}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-contain p-2"
                />
              </div>
              <div className="p-4">
                <p className="text-xs font-medium text-[var(--ink-muted)]">{cert.issuer}</p>
                <h3 className="mt-2 text-sm font-medium text-[var(--ink)]">{cert.title}</h3>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
