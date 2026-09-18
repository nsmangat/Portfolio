import { experience } from "../data/experience";
import { ExperienceCard } from "./ExperienceCard";

export function WorkExperience() {
  return (
    <section
      id="experience"
      className="mx-auto flex max-w-2xl scroll-mt-16 flex-col gap-6 border-t border-line px-6 py-20"
    >
      <h2 className="text-2xl font-bold text-ink">Work Experience</h2>
      <div className="flex flex-col gap-8">
        {experience.map((experienceEntry) => (
          <ExperienceCard key={experienceEntry.id} {...experienceEntry} />
        ))}
      </div>
    </section>
  );
}
