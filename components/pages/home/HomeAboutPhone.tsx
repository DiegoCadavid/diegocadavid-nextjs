interface Props {}

const HomeAboutPhone = ({}: Props) => {
  return (
    <div className="flex lg:hidden flex-col items-center">
      <p className="my-5 | text-2xl lg:text-5xl uppercase">&</p>
      <h2 className="text-6xl font-bold uppercase text-center">
        UI/UX <br /> DESIGNER
      </h2>

      <a href="#" className="mt-5 | uppercase underline text-2xl font-medium">
        About me
      </a>
    </div>
  );
};

export default HomeAboutPhone;
