import HomeExpContainer from "./HomeExpContainer";

interface Props {}

const HomeExperience = ({}: Props) => {
  return (
    <div>
      <h1 className="text-center heading-1">Experience</h1>
      <p className="max-w-2xl mx-auto mt-2 text-center ">
        +4 años de experiencia en el desarrollo de software desarrollando y
        diseñando aplicaciones web escalables y responsivas a diferentes tipos
        de industrias.
      </p>

      <HomeExpContainer />
    </div>
  );
};

export default HomeExperience;
