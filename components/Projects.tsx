import { projects } from "@/data/projects";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  return (
    <section id="projects" className="section border-y border-[var(--line)] bg-[var(--surface)]">
      <div className="container">
        <div className="mb-16">
          <p className="eyebrow-rule">Projects</p>
          <h2 className="heading mt-6">Selected work</h2>
          <p className="lead mt-4 max-w-xl">Research, software, and hardware work, each with a short case study.</p>
        </div>
        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((project) => <ProjectCard key={project.slug} project={project} />)}
        </div>
      </div>
    </section>
  );
}
