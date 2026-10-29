import { site } from "@/data/site";

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <div className="grid gap-16 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <h2 className="heading">About</h2>
            <div className="mt-8 space-y-5">
              {site.about.map((paragraph, i) => (
                <p key={i} className="copy max-w-[65ch]">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
          <div className="lg:col-span-5">
            <p className="eyebrow-rule">Skills</p>
            <div className="mt-8 grid gap-6">
              {site.skills.map((skill) => (
                <div key={skill.group} className="panel p-6">
                  <h3 className="stat-value">{skill.group}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-[var(--ink-muted)]">{skill.items}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
