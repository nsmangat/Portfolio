import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import type { Project } from "../data/types";

export function ProjectCard({ name, description, tags, link, image }: Project) {
  return (
    <div className="flex flex-col overflow-hidden rounded-lg border border-slate-800 bg-slate-900">
      {image && (
        <img
          src={image}
          alt={`${name} image`}
          className="aspect-video w-full object-cover"
        />
      )}
      <div className="flex flex-1 flex-col gap-2 p-6">
        <h3 className="text-lg font-semibold text-slate-100">{name}</h3>
        <p className="text-sm text-slate-300">{description}</p>
        <div className="mt-2 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border-2 border-blue-800 bg-slate-800 px-3 py-1 text-xs text-slate-300"
            >
              {tag}
            </span>
          ))}
        </div>
        <a
          href={link}
          target="_blank"
          rel="noreferrer"
          className="mt-3 inline-flex items-center gap-1.5 text-sm text-slate-300 transition-colors hover:text-white"
        >
          View Project
          <FaArrowUpRightFromSquare className="h-3 w-3" />
        </a>
      </div>
    </div>
  );
}
