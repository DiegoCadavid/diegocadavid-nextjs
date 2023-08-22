import Link from "next/link";
import { GetStaticProps } from "next";
import Layout from "../components/layouts/Layout";
import ProjectItem from "../components/pages/projects/ProjectItem";

import formatProjects from "../helpers/formatProjects";

import projectsData from "../data/projects.json";
import tagsData from "../data/tags.json";
import { ProjectWithTags, Projects } from "../types/data";

interface Props {

}

// export const getStaticProps: GetStaticProps = async () => {
//   const projects = formatProjects(projectsData as Projects, tagsData);
//   return {
//     props: {
//       projects,
//     },
//   };
// };

const homePage = ({ }: Props) => {
  return (
    <div className="flex items-center justify-center min-h-screen text-2xl font-semibold">
      In development
    </div>
  );
};

export default homePage;
