export interface Skill {
  icon: string;
  name: string;
}

export interface ExternalLink {
  text: string;
  link: string;
}

export interface SEO {
  title: string;
  description: string;
  keywords: string[];
}

export interface Project {
  seo: SEO;
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
  extLink: string;
  title: string;
  image: string;
  alt: string;
  subtitle: string;
}
