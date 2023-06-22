import HomeTecContainer from "./HomeTecContainer";

interface Props {}

const HomeTecnologies = ({}: Props) => {
  return (
    <div className="container flex flex-col items-center mt-16 lg:mt-24">
      <h2 className="text-center heading-1">Tecnologias</h2>
      <p className="max-w-2xl mt-2 text-center ">
        Como desarrollador FullStack mis areas de especializacion incluyen
        Nextjs, Tailwind, NodeJS, etc, Ademas cuento con una experiencia y
        formacion en el desarrollo de interfacez
      </p>

      <HomeTecContainer />
    </div>
  );
};

export default HomeTecnologies;
