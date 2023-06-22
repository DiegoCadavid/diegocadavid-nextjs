import Layout from "../components/layout/Layout";
import HomeExperience from "../components/pages/home/homeExperience/HomeExperience";
import HomeHero from "../components/pages/home/homeHero/HomeHero";
import HomeTecnologies from "../components/pages/home/homeTecnologies/HomeTecnologies";

interface Props {}

const Index = ({}: Props) => {
  return (
    <Layout>
      <HomeHero />
      <div className="mx-auto my-20 h-0.5 w-1/2 bg-black lg:hidden" />
      <HomeExperience />
      <HomeTecnologies />      
      
    </Layout>
  );
};

export default Index;
