import Link from "next/link";

interface Props {}

const HomeHeroAboutMe = () => {
  return (
    <p>
      <span className="font-bold">i'm Diego Cadavid</span>, Fullstack Developer
      and UI/UX Designer using technologies like React, NextJS, TailwindCSS...
    </p>
  );
};

const HomeHero = ({}: Props) => {
  return (
    <div className="flex-col justify-center mt-12 lg:flex lg:min-h-view">
      <div className="container lg:pb-36">
        <p className="text-2xl text-center uppercase lg:text-4xl">I'm</p>
        <h1 className="text-4xl font-bold text-center lg:text-8xl">
          Fullstack Developer
        </h1>
        <div className="flex items-start justify-center gap-2 mt-1 lg:mt-8 lg:gap-10">
          <span className="text-4xl font-bold lg:text-8xl">&</span>
          <div className="relative hidden lg:block">
            <h2 className="font-bold uppercase text-8xl text-primary-500">
              ui/ux
            </h2>
            <div className="absolute -inset-5 -top-2 -z-10 h-fit rounded-2xl bg-black p-6 pt-[45%] text-primary-500">
              <HomeHeroAboutMe />
            </div>
          </div>
          <h1 className="block text-4xl font-bold lg:hidden lg:text-8xl">
            UI/UX
          </h1>
          <h2 className="text-4xl font-bold lg:text-8xl">Designer</h2>
        </div>
        <div className="mt-6 text-center lg:hidden">
          <HomeHeroAboutMe />
        </div>{" "}
      </div>

      {/* Divide */}
      <div className="mx-auto mb-8 mt-8 h-0.5 w-[120px] bg-black lg:mt-20"></div>

      {/* Links */}
      <div className="flex justify-center gap-4">
        <Link className="btn pointer w-[150px]" href="#">
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
        <Link className="btn btn-outline pointer w-[150px]" href="#">
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
      <div className="justify-center hidden mt-16 md:flex">
        <div className="inline-block p-2 pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 pointer-events-none animate-bounce">
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
