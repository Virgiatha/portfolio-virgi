import { site } from "@/data/site";

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container grid gap-12 lg:grid-cols-2">
        <div>
          <h2 className="heading">About</h2>
          <div className="mt-8 space-y-6">
            {site.about.map((paragraph, i) => (
              <p key={i} className="copy leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
        <div>
          <h3 className="eyebrow">Skills</h3>
          <dl className="mt-8 space-y-6">
            {site.skills.map((skill, i) => (
              <div key={i} className={i < site.skills.length - 1 ? "border-b border-[var(--line)] pb-6" : ""}>
                <dt className="font-semibold text-[var(--ink)]">{skill.group}</dt>
                <dd className="mt-2 text-sm text-[var(--ink-muted)]">{skill.items}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
