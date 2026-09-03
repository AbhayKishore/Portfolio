const projects = [
  {
    id: 1,

    slug: "fitconnect",

    title: "FitConnect",

    category: "web",

    status: "shipped",

    featured: true,

    image: "/assets/fitness-app.png",

    shortDescription:
      "A full-stack gym management platform with role-based access, AI-supported workout recommendations and nutrition tracking.",

    description:
      "FitConnect is a full-stack fitness and gym management platform designed to support administrators, trainers and members. It combines membership management, workout planning, nutrition tracking and AI-supported recommendations within one application.",

    problem:
      "Gym management processes are often distributed across spreadsheets, paper records and disconnected communication channels. FitConnect was developed to centralise these activities in one accessible digital platform.",

    technologies: [
      "Django",
      "Python",
      "MySQL",
      "HTML",
      "CSS",
      "Bootstrap",
      "AJAX",
    ],

    github:
      "https://github.com/AbhayKishore/fitness-app-django",

    liveDemo: "",

    year: "2025",

    role: "Full-Stack Developer",
  },

  {
    id: 2,

    slug: "ai-resume-evaluator",

    title: "AI Resume Evaluator",

    category: "ai",

    status: "shipped",

    featured: true,

    image: "/assets/resume-analyzer.png",

    shortDescription:
      "An AI-assisted application that evaluates résumés, measures ATS compatibility and provides actionable improvement recommendations.",

    description:
      "The AI Resume Evaluator is a web application that uses Google Gemini to analyse résumé content. It provides an ATS-oriented score, identifies missing information and generates recommendations that help users improve the structure and relevance of their résumé.",

    problem:
      "Applicants often receive little feedback about why their résumés are rejected or how effectively the documents communicate their experience. The application provides immediate, structured and actionable feedback.",

    technologies: [
      "Flask",
      "Python",
      "Google Gemini",
      "Generative AI",
      "HTML",
      "CSS",
      "Bootstrap",
    ],

    github:
      "https://github.com/AbhayKishore/AI-Resume-Evaluator",

    liveDemo: "",

    year: "2025",

    role: "Full-Stack Developer",
  },
  /*{
  id: 3,
  slug: "project-name",
  title: "Project Name",
  category: "web",
  status: "in-development",
  featured: false,
  image: "/assets/project-image.png",
  shortDescription: "Short summary of the project.",
  description: "Longer explanation of the project.",
  problem: "The problem addressed by the project.",
  technologies: ["React", "Node.js"],
  github: "https://github.com/...",
  liveDemo: "",
  year: "2026",
  role: "Full-Stack Developer",
},*/
];

export const projectFilters = [
  {
    value: "all",
    label: "All",
  },
  {
    value: "web",
    label: "Web Development",
  },
  {
    value: "ai",
    label: "AI & Machine Learning",
  },
];

export const featuredProjects = projects.filter(
  (project) => project.featured
);

export const shippedProjects = projects.filter(
  (project) => project.status === "shipped"
);

export const shippedProjectCount = shippedProjects.length;

export default projects;