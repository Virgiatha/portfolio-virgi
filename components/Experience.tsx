import { experience } from "@/data/experience";

export default function Experience() {
  return (
    <section id="experience" className="section">
      <div className="container">
        <h2 className="heading">Experience</h2>
        <div className="mt-12 space-y-8">
          {experience.map((item) => (
            <article
              key={`${item.role}-${item.organization}`}
              className="grid gap-6 border-b border-[var(--line)] pb-8 last:border-0 sm:grid-cols-[140px_1fr]"
            >
              <div className="text-sm font-medium text-[var(--ink-muted)]">{item.date || "Date not listed"}</div>
              <div>
                <h3 className="font-semibold text-[var(--ink)]">{item.role}</h3>
                <p className="mt-1 text-sm text-[var(--ink-muted)]">{item.organization}</p>
                <p className="copy mt-4 text-sm">{item.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
