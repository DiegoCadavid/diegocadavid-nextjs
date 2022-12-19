import Layout from "../components/layout/Layout";
import HomeAbout from "../components/pages/home/HomeAbout";
import HomeHeader from "../components/pages/home/HomeHeader";

interface Props {}

const Index = ({}: Props) => {
  return (
    <Layout>
      <HomeHeader />
      <HomeAbout />
      <div className="bg-black text-primary-500 p-20 text-center">
        <p className=" text-4xl font-bold">
          
          Website in development, come back later!
        </p>
        <p className="mt-2"> Created by <a className="underline underline-offset-4" href="https://github.com/DiegoCadavid">@DiegoCadavid</a> </p>
      </div>
    </Layout>
  );
};

export default Index;
