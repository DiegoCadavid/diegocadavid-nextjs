import Link from "next/link";
import { GetStaticProps } from "next";
import Layout from "../components/layouts/Layout";
import ProjectItem from "../components/pages/projects/ProjectItem";

import formatProjects from "../helpers/formatProjects";

import projectsData from "../data/projects.json";
import tagsData from "../data/tags.json";
import { ProjectWithTags, Projects } from "../types/data";

interface Props {
  projects: ProjectWithTags[];
}

export const getStaticProps: GetStaticProps = async () => {
  const projects = formatProjects(projectsData as Projects, tagsData);
  return {
    props: {
      projects,
    },
  };
};

const homePage = ({ projects }: Props) => {
  return (
    <Layout>
      <div className="grid gap-6 pb-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-2 2xl:grid-cols-3">
        {projects.map((project) => {
          return <ProjectItem key={project.name} {...project} />;
        })}
      </div>
    </Layout>
  );
};

export default homePage;
