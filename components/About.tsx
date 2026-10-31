import Image from "next/image";
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
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {skill.items.map((item) => (
                      <li key={item.label} className="chip gap-2">
                        {item.icon && (
                          <Image
                            src={`/images/skills/${item.icon}.svg`}
                            alt=""
                            width={16}
                            height={16}
                            className="size-4 shrink-0"
                          />
                        )}
                        <span>{item.label}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
