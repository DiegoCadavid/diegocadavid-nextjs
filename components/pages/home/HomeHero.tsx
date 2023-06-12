import Link from "next/link";

interface Props {}

const HomeHero = ({}: Props) => {
  return (
    <div>
      <div className="container mt-4 lg:mt-28 lg:pb-36">
        <p className="text-center text-2xl uppercase lg:text-4xl">I'm</p>
        <h2 className="text-center text-4xl font-bold lg:text-8xl">
          Fullstack Developer
        </h2>
        <div className="mt-1 flex items-start justify-center gap-2 lg:mt-8 lg:gap-10">
          <span className="text-4xl font-bold lg:text-8xl">&</span>
          <div className="relative hidden lg:block">
            <h2 className="text-8xl font-bold uppercase text-primary-500">
              ui/ux
            </h2>
            <div className="absolute -inset-5 -top-2 -z-10 h-fit rounded-lg bg-black p-6 pt-[45%] text-primary-500">
              <p>
                <span className="font-bold">+2 years </span>
                developing software using technologies such as React, Nextjs,
                Tailwind, Nodejs, ExpressJS
              </p>
            </div>
          </div>
          <h2 className="block text-4xl font-bold lg:hidden lg:text-8xl">
            UI/UX
          </h2>
          <h2 className="text-4xl font-bold lg:text-8xl">Designer</h2>
        </div>
        <p className="mt-6 text-center lg:hidden">
          <span className="font-bold">+2 years </span>
          developing software using technologies such as React, Nextjs,
          Tailwind, Nodejs, ExpressJS
        </p>{" "}
      </div>

      {/* Divide */}
      <div className="mx-auto mb-8 mt-8 h-0.5 w-[120px] bg-black lg:mt-20"></div>

      {/* Links */}
      <div className="flex justify-center gap-4">
        <Link className="btn pointer" href="#">
          Contact
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="btn-icon">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
            />
          </svg>
        </Link>
        <Link className="btn btn-outline pointer" href="#">
          CV
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="btn-icon">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M18.375 12.739l-7.693 7.693a4.5 4.5 0 01-6.364-6.364l10.94-10.94A3 3 0 1119.5 7.372L8.552 18.32m.009-.01l-.01.01m5.699-9.941l-7.81 7.81a1.5 1.5 0 002.112 2.13"
            />
          </svg>
        </Link>
      </div>

      {/* Scroll button */}
      <div className="mt-16 flex justify-center">
        <div className="pointer inline-block p-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="pointer-events-none h-6 w-6 animate-bounce">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 5.25l-7.5 7.5-7.5-7.5m15 6l-7.5 7.5-7.5-7.5"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default HomeHero;
