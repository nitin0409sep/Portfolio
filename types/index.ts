export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

export interface Contact {
  email: string;
  tel: string;
  social: SocialLink[];
}

export interface Education {
  school: string;
  degree: string;
  start: string;
  end: string;
  grade: string;
}

export interface Work {
  company: string;
  link: string;
  badges: string[];
  title: string;
  logo: string;
  start: string;
  end: string;
  description: string;
}

export interface ProjectLink {
  label: string;
  href: string;
}

export interface Project {
  title: string;
  techStack: string[];
  description: string;
  link: ProjectLink;
}

export interface ResumeData {
  name: string;
  initials: string;
  location: string;
  locationLink: string;
  about: string;
  summary: string;
  avatarUrl: string;
  personalWebsiteUrl: string;
  contact: Contact;
  education: Education[];
  work: Work[];
  skills: string[];
  projects: Project[];
}
