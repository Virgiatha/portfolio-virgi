import Image from "next/image";
import { certifications } from "@/data/certifications";

export default function Certifications() {
  return (
    <section id="certifications" className="section bg-[var(--surface)]">
      <div className="container">
        <p className="eyebrow-rule">Credentials</p>
        <h2 className="heading mt-6">Certifications</h2>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {certifications.map((cert) => (
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
                  className="object-contain p-3"
                />
              </div>
              <div className="p-4">
                <p className="eyebrow">{cert.issuer}</p>
                <h3 className="subheading mt-2">{cert.title}</h3>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
