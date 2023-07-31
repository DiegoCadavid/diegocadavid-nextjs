import { ProjectWithTags, Projects, Tags } from "../types/data";

const formatProjects = (
  projectsData: Projects,
  tagsData: Tags
): ProjectWithTags[] => {
  const projects: ProjectWithTags[] = projectsData.data.map((project) => {
    const projectTags = project.tags.map((tag) => {
      const data = tagsData.data;
      return data[tag] || { title: tag, color: tagsData.data.DEFAULT.color };
    });

    const { tags, ...data } = project;
    return { tags: projectTags, ...data };
  }) as ProjectWithTags[];

  return projects;
};

export default formatProjects;
