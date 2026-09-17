import { experience } from "../data/experience";
import { ExperienceCard } from "./ExperienceCard";

export function WorkExperience() {
  return (
    <section
      id="experience"
      className="mx-auto flex max-w-4xl scroll-mt-20 flex-col gap-6 px-6 py-24"
    >
      <h2 className="text-2xl font-bold text-slate-100">Work Experience</h2>
      <div className="flex flex-col gap-6">
        {experience.map((experienceEntry) => (
          <ExperienceCard key={experienceEntry.id} {...experienceEntry} />
        ))}
      </div>
    </section>
  );
}
