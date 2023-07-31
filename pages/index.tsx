import Link from "next/link";
import Layout from "../components/layouts/Layout";
import ProjectItem from "../components/pages/projects/ProjectItem";

interface Props {}

const homePage = ({}: Props) => {
  return (
    <Layout>
      <div className="grid gap-6 pb-8 mt-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-2 2xl:grid-cols-3">
        {[...new Array(5)].map((_, i) => {
          return <ProjectItem key={i} />;
        })}
      </div>
    </Layout>
  );
};

export default homePage;
