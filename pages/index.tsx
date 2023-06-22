import Layout from "../components/layout/Layout";
import HomeContact from "../components/pages/home/homeContact/HomeContact";
import HomeExperience from "../components/pages/home/homeExperience/HomeExperience";
import HomeHero from "../components/pages/home/homeHero/HomeHero";
import HomeTecnologies from "../components/pages/home/homeTecnologies/HomeTecnologies";
import HomeWork from "../components/pages/home/homeWork/HomeWork";

interface Props {}

const Index = ({}: Props) => {
  return (
    <Layout>
      <HomeHero />
      <div className="mx-auto my-20 h-0.5 w-1/2 bg-black lg:hidden" />
      <HomeExperience />
      <HomeTecnologies />
      <HomeWork />
      <HomeContact />
      <div className="bg-black py-8 text-white">
        <div className="container">
          <h2 className="heading-1 mb-2">New portfolio in development!</h2>
          <p>
            I am currently in the process of creating a new portfolio with a
            different style to which I aspire, so the development of this
            portfolio will be interrupted.
          </p>
          <p>
            The new portfolio will be available soon and I apologize to the new
            people who aspired to see this portfolio finished.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Index;
