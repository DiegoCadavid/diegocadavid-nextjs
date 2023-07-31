import Link from "next/link";
import AboutCard from "../pages/shared/about-card/AboutCard";
import Nav from "../pages/shared/nav/Nav";

interface Props {
  children: React.ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <div>
      {/* Banner */}
      <img
        src="https://pictures-omega.vercel.app/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdd4p0ksdu%2Fimage%2Fupload%2Fv1689033454%2Flps2gbevczpgyxq4vbob.jpg&w=1920&q=75"
        alt=""
        className="object-cover w-full h-32 sm:h-48 lg:h-64"
      />

      <div className="flex flex-col items-center gap-2 -mt-12 xl:hidden">
        <img
          src="https://pictures-omega.vercel.app/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdd4p0ksdu%2Fimage%2Fupload%2Fv1688957902%2Fboadqmqfzmgruxo4ynij.png&w=1080&q=75"
          alt=""
          className="w-24 h-24 rounded-lg"
        />
        <div className="flex flex-col items-center max-w-md px-4 text-sm text-center dark:text-zinc-400">
          <h1 className="text-xl font-bold dark:text-zinc-300">DiegoCadavid</h1>
          <p className="mt-2 ">✨ NextJS Frontend | 🤖 C#/Nodejs Backend</p>
          <p className="mt-2">
            I am student of Colombia. I really love create cool sites and clone
            big sites like Pinterest, Twitter, Spotify and more!
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="mx-auto mt-2 max-w-[1760px] gap-6 px-4 sm:px-12 xl:mt-4 xl:flex 2xl:max-w-[1762px] ">
        {/* Left side */}
        <div className="mx-0 w-[360px] flex-shrink-0 xl:-mt-48">
          <div className="hidden top-8 xl:block">
            <AboutCard />
            <p className="hidden mt-4 text-sm text-zinc-400 dark:text-zinc-600 xl:block">
              <span className="font-semibold">SITE IN DEVELOPMENT</span> | DiegoCadavid (c) 2018. Thanks to all those who have supported me so far. 
            </p>
          </div>
        </div>

        {/* Right side */}
        <div className="flex-1">
          <Nav />
          {children}
        </div>
      </div>
    </div>
  );
};

export default Layout;
