import HomeWorkItem from "./HomeWorkItem";

interface Props {}

const HomeWorkContainer = ({}: Props) => {
  return (
    <div className="flex flex-col lg:flex-row w-full max-w-5xl gap-4 md:gap-6 mt-4">
     <HomeWorkItem />
     <HomeWorkItem />
     <HomeWorkItem />
    </div>
  );
};

export default HomeWorkContainer;
