import { projects } from "../data/projects";
import { ProjectCard } from "./ProjectCard";

export function Projects() {
  return (
    <section
      id="projects"
      className="mx-auto flex max-w-4xl scroll-mt-20 flex-col gap-6 px-6 py-24"
    >
      <h2 className="text-2xl font-bold text-slate-100">Projects</h2>
      <div className="grid gap-6 sm:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.id} {...project} />
        ))}
      </div>
    </section>
  );
}
