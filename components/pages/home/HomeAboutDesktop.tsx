interface Props {}

const HomeAboutDesktop = ({}: Props) => {
  return (
    <div className="mt-12 pb-40 | font-bold lg:text-7xl xl:text-8xl | hidden lg:flex gap-20">
      <p>&</p>
      {/* ux / ui + content */}
      <div className="relative | text-primary-500 | flex flex-col gap-6 ">
        <h2 className="uppercaseas tracking-wider">UI/UX</h2>
        <div className="absolute -inset-8 lg:-bottom-52 xl:-bottom-44 -z-10 | px-8 lg:pt-36 xl:pt-40 | text-lg font-normal | bg-black ">
          <h3 className="uppercase font-medium">About me</h3>
          <p className="text-base ">
            I'm Diego, i have 5 year of eperience in the web development, i have
            16 year old.
          </p>
        </div>
      </div>
      <h2 className="uppercase">Designer</h2>
    </div>
  );
};

export default HomeAboutDesktop;
