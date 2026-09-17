import type { Experience } from "../data/types";

export function ExperienceCard({
  title,
  company,
  location,
  startDate,
  endDate,
  description,
  tags,
  logo,
}: Experience) {
  return (
    <div className="flex gap-4 rounded-lg border border-slate-800 bg-slate-900 p-6">
      {logo && (
        <img
          src={logo}
          alt={`${company} logo`}
          className="h-12 w-12 shrink-0 rounded object-contain"
        />
      )}
      <div className="flex flex-1 flex-col gap-2">
        <div className="flex flex-col justify-between gap-1 sm:flex-row sm:items-baseline">
          <h3 className="text-lg font-semibold text-slate-100">
            {title} · {company}
          </h3>
          <span className="text-sm text-slate-400">
            {startDate} – {endDate}
          </span>
        </div>
        <p className="text-sm text-slate-400">{location}</p>
        <ul className="list-inside list-disc space-y-1 text-slate-300">
          {description.map((point) => (
            <li key={point}>{point}</li>
          ))}
        </ul>
        <div className="mt-2 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-slate-800 px-3 py-1 text-xs text-slate-300 border-2 border-blue-800"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
