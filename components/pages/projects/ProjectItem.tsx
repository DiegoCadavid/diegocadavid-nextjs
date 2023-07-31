import Link from "next/link";

interface Props {}

const ProjectItem = ({}: Props) => {
  return (
    <div className="overflow-hidden border rounded-lg border-stroke-500 bg-background-400 dark:border-stroke-dark-500 dark:bg-background-dark-400">
      <img
        src="https://pictures-omega.vercel.app/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdd4p0ksdu%2Fimage%2Fupload%2Fv1690775206%2Foudqapgmdp5who8oq9rj.png&w=1920&q=75"
        alt=""
        className=""
      />

      <div className="p-2">
        <h3 className="mt-2 font-bold">Picture</h3>
        <p className="mt-2 text-zinc-400">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit
          deleniti, repellat facere dolor qui.
        </p>
        <Link
          href="#"
          className="flex items-center justify-center gap-2 py-2 mt-4 text-sm rounded bg-background-200 text-zinc-500 hover:gap-3 hover:text-zinc-800 dark:bg-background-dark-200 dark:text-zinc-400 dark:hover:text-zinc-300">
          Website{" "}
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
        </Link>
      </div>
    </div>
  );
};

export default ProjectItem;
