export interface Tag {
  title: string;
  color: string;
}

export interface Tags {
  data: {
    DEFAULT: Tag;
    [key: string]: Tag;
  };
}

export interface ProjectLink {
  title: string;
  type: "url" | "icon";
  data: string;
  icon?: string;
}

export interface Project {
  image: string;
  name: string;
  description: string;
  tags: string[];
  links: ProjectLink[];
}

export interface Projects {
  data: Project[];
}

export interface ProjectWithTags extends Omit<Project, "tags"> {
  tags: Tag[];
}
