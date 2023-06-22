import HomeWorkContainer from "./HomeWorkContainer";

interface Props {}

const HomeWork = ({}: Props) => {
  return (
    <div className="container mt-16 lg:mt-24 flex  w-full flex-col items-center">
      <h2 className="heading-1 text-center">Projects</h2>
      <HomeWorkContainer />
    </div>
  );
};

export default HomeWork;
