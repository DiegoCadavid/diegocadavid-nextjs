import Layout from "../components/layout/Layout";
import HomeHero from "../components/pages/home/HomeHero";

interface Props {}

const Index = ({}: Props) => {
  return (
    <Layout>
      <HomeHero />
    </Layout>
  );
};

export default Index;
