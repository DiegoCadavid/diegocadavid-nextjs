import Link from "next/link";
import { ProjectWithTags } from "../../../types/data";

interface Props extends ProjectWithTags {}

const ProjectItem = ({ image, name, description, tags, links }: Props) => {
  return (
    <div className="flex flex-col overflow-hidden transition-transform ease-out border rounded-lg border-stroke-500 bg-background-400 dark:border-stroke-dark-500 dark:bg-background-dark-400">
      <img src={image} alt={`${name} image`} className="" />

      <div className="flex flex-col flex-grow gap-2 p-2">
        <h3 className="mt-2 text-lg font-bold">{name}</h3>
        <p className="flex-grow overflow-auto scrollbar max-h-16 text-zinc-400">
          {description}
        </p>

        <div className="flex gap-2 py-2 overflow-auto scrollbar">
          {tags.map((tag) => {
            return (
              <div
                key={tag.title}
                className="px-2 py-1 text-sm border rounded-full"
                style={{
                  borderColor: tag.color,
                  color: tag.color,
                }}>
                {tag.title}
              </div>
            );
          })}
        </div>

        <div className="flex gap-2 mt-2">
          {links.map((link, i) => {
            if (link.type === "icon") {
              return (
                <a
                  key={i}
                  title={link.title}
                  href={link.data}
                  target="_blank"
                  className="flex items-center justify-center w-10 h-10 gap-2 text-sm rounded bg-background-200 text-zinc-500 hover:gap-3 hover:text-zinc-800 dark:bg-background-dark-200 dark:text-zinc-400 dark:hover:text-zinc-300">
                  <img src={link.icon} className="w-6 h-6" />
                </a>
              );
            }

            return (
              <a
                key={i}
                href={link.data}
                target="_blank"
                title={link.title}
                className="flex items-center justify-center flex-1 h-10 gap-2 text-sm rounded bg-background-200 text-zinc-500 hover:gap-3 hover:text-zinc-800 dark:bg-background-dark-200 dark:text-zinc-400 dark:hover:text-zinc-300">
                {link.title}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-4 h-4">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                  />
                </svg>
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ProjectItem;
