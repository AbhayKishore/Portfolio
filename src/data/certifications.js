const certifications = [
  {
    id: 1,

    title: "AI Builders Lab",

    issuer: "Google for Developers",

    type: "Certification",

    year: "2025",

    featured: true,

    description:
      "Completed a Google-supported programme focused on building practical applications with modern artificial-intelligence technologies.",
  },

  {
    id: 2,

    title: "Workshop on Generative AI",

    issuer: "Academic Workshop",

    type: "Workshop",

    year: "2024",

    featured: true,

    description:
      "Explored the principles, capabilities and practical applications of generative artificial-intelligence models.",
  },

  {
    id: 3,

    title: "AI Applications in Research Writing",

    issuer: "Academic Workshop",

    type: "Workshop",

    year: "2024",

    featured: true,

    description:
      "Examined how artificial-intelligence tools can support academic research, writing and information processing.",
  },

  {
    id: 4,

    title: "Prompt Engineering",

    issuer: "AccelerateX",

    type: "Workshop",

    year: "2024",

    featured: true,

    description:
      "Completed hands-on training in structured prompting, prompt refinement and generative-AI workflows.",
  },

  {
    id: 5,

    title: "Cybersecurity and Ethical Hacking",

    issuer: "Technical Training",

    type: "Training",

    year: "2024",

    featured: true,

    description:
      "Covered cybersecurity fundamentals, common vulnerabilities and introductory ethical-hacking tools.",
  },

  {
    id: 6,

    title: "Advanced Python for Data Analysis",

    issuer: "Technical Training",

    type: "Training",

    year: "2024",

    featured: false,

    description:
      "Developed practical knowledge of Python libraries used for data preparation, analysis and visualisation.",
  },

  {
    id: 7,

    title: "Robotics Workshop",

    issuer: "Technical Workshop",

    type: "Workshop",

    year: "2024",

    featured: false,

    description:
      "Completed introductory practical exercises covering robotic systems, sensors and basic integration concepts.",
  },
];

export const featuredCertifications = certifications.filter(
  (certification) => certification.featured
);

export const certificationTypes = [
  "All",
  ...new Set(
    certifications.map((certification) => certification.type)
  ),
];

export default certifications;