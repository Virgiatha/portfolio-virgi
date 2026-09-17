import { projects } from "@/data/projects";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  const featuredSlugs = ["mbg-sentiment-analysis", "sibisa"];
  const featured = featuredSlugs.map((slug) => projects.find((project) => project.slug === slug)!);
  const more = projects.filter((project) => !featuredSlugs.includes(project.slug));
  return (
    <section id="projects" className="section bg-[var(--night)] text-white">
      <div className="shell">
        <div className="mb-12 flex items-end justify-between"><div><p className="eyebrow text-[var(--accent)]">03 / Selected projects</p><h2 className="heading mt-5">WORK THAT<br /><span className="text-white/65">MAKES AN IMPACT.</span></h2></div><p className="hidden max-w-xs text-right text-sm leading-6 text-white/65 md:block">Four selected projects across research, software development, and connected technology.</p></div>
        {featured.map((project, index) => <ProjectCard key={project.slug} project={project} reverse={index % 2 === 1} />)}
        <div className="mb-7 mt-20 flex items-center gap-5"><h2 className="subheading whitespace-nowrap">MORE EXPLORATIONS</h2><span className="h-px flex-1 bg-white/15" /></div>
        <div className="grid gap-5 lg:grid-cols-2">{more.map((project, index) => <ProjectCard key={project.slug} project={project} compact reverse={index % 2 === 0} />)}</div>
      </div>
    </section>
  );
}
