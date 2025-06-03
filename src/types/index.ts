export interface Skill {
  icon: string;
  name: string;
}

export interface ExternalLink {
  text: string;
  link: string;
}

export interface Project {
  slug: string;
  title: string;
  description: string;
  image: string;
  alt: string;
  subtitle: string;
  skills: Skill[];
  skillsExtended?: Skill[];
  images: string[];
  externalLinks: ExternalLink[];
}

export interface PlaygroundProject {
  link: string;
  title: string;
  image: string;
  alt: string;
  subtitle: string;
}
