import { experience } from "@/data/experience";

export default function Experience() {
  return (
    <section id="experience" className="section">
      <div className="container">
        <p className="eyebrow-rule">Experience</p>
        <h2 className="heading mt-6">Where I&apos;ve worked</h2>
        <div className="mt-14">
          {experience.map((item) => (
            <article
              key={`${item.role}-${item.organization}`}
              className="grid gap-3 border-t border-[var(--line)] py-8 last:border-b sm:grid-cols-[160px_1fr] sm:gap-8"
            >
              <div className="eyebrow pt-1.5">{item.date || "Date not listed"}</div>
              <div>
                <h3 className="subheading">{item.role}</h3>
                <p className="mt-1 text-sm font-medium text-[var(--accent)]">{item.organization}</p>
                <p className="copy mt-4 max-w-[70ch] text-sm">{item.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
