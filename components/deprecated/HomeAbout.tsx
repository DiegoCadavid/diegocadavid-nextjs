import HomeAboutDesktop from "./HomeAboutDesktop";
import HomeAboutPhone from "./HomeAboutPhone";

interface Props {}

const HomeAbout = ({}: Props) => {
  return (
    <div className=" h-viewport-desktop | flex flex-col justify-center items-center  ">
      

      <p className="text-2xl lg:text-4xl xl:text-5xl uppercase">I'm</p>
      <h2 className="mt-8 | text-6xl lg:text-7xl xl:text-8xl font-bold uppercase text-center ">
        Fullstack <br className="block lg:hidden" /> developer
      </h2>

      
      <HomeAboutPhone />
      <HomeAboutDesktop />

    </div>
  );
};

export default HomeAbout;
