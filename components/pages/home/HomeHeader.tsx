import Image from "next/image";
import moonImg from "../../../public/images/moon.jpg";

interface Props {}

const HomeHeader = ({}: Props) => {
  return (
    <header className="relative | container h-viewport-desktop | flex flex-col justify-center items-center lg:items-start">
      <div className="font-bold text-6xl md:text-8xl lg:tracking-wider 2xl:text-9xl | flex flex-col items-center gap-2 lg:gap-8 lg:items-start ">
        <p>I CAN</p>
        <p>CREATE</p>
        <p>YOUR</p>
        <p>
          WORLD<span className="hidden lg:inline">.</span>
        </p>
      </div>
      <div className="absolute  left-2/3 inset-y-24 | hidden lg:block">
        <Image
          src={moonImg}
          alt="moon"
          className="w-full h-full | object-cover"
        />
      </div>
    </header>
  );
};

export default HomeHeader;
