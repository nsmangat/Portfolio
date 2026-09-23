import { projects } from "../data/projects";
import { ProjectCard } from "./ProjectCard";

export function Projects() {
  return (
    <section
      id="projects"
      className="mx-auto flex max-w-4xl scroll-mt-16 flex-col gap-6 border-t border-line px-6 py-20"
    >
      <h2 className="text-2xl font-bold text-ink">Projects</h2>
      <div className="grid gap-8 sm:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.id} {...project} />
        ))}
      </div>
    </section>
  );
}
