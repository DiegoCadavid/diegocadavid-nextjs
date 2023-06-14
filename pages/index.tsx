import Layout from "../components/layout/Layout";
import HomeExperience from "../components/pages/home/homeExperience/HomeExperience";
import HomeHero from "../components/pages/home/homeHero/HomeHero";

interface Props {}

const Index = ({}: Props) => {
  return (
    <Layout>
      <HomeHero />
      <HomeExperience />
    </Layout>
  );
};

export default Index;
