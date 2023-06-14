import HomeExpItem from "./HomeExpItem";

interface Props {}

const HomeExpContainer = ({}: Props) => {
  return (
    <div className="flex flex-col max-w-5xl gap-8 p-6 mx-auto mt-6 border-2 border-black rounded-2xl">
      <HomeExpItem
        jobTitle="Fullstack JS & UI/UX Designer"
        companyName="PrettyRad"
        startDate={"2022-12-28"}
        description="Soy parte de unos de los principales desarrollares fullstack de
          Prettyrad Studios. Prettyrad es una agencia de desarrollo web que se
          enfoca en soluciones radicales para grandes problemas el cual se
          conforma de un equipo distribuido por América y Europa."
      />

      <div className="h-0.5 w-full bg-black"></div>

      <HomeExpItem
        jobTitle="Fullstack JS & UI/UX Designer"
        companyName="Freelancer"
        startDate={"2022-09-01"}
        endDate="2022-12-28"
        description="Soy parte de unos de los principales desarrollares fullstack de
          Prettyrad Studios. Prettyrad es una agencia de desarrollo web que se
          enfoca en soluciones radicales para grandes problemas el cual se
          conforma de un equipo distribuido por América y Europa."
      />
    </div>
  );
};

export default HomeExpContainer;
