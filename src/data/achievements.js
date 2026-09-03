const achievements = [
  {
    id: 1,

    title: "Class Topper",

    category: "Academic Achievement",

    year: "2022",

    icon: "bi-trophy-fill",

    featured: true,

    description:
      "Achieved the class-topper position during the first semester of the Bachelor of Computer Applications programme at Rajagiri College.",
  },

  {
    id: 2,

    title: "International Conference Presentation",

    category: "Research Presentation",

    year: "2025",

    icon: "bi-easel2-fill",

    featured: true,

    description:
      "Presented research on artificial intelligence in cybersecurity at an international academic conference.",
  },

  {
    id: 3,

    title: "National Conference Presentation",

    category: "Research Presentation",

    year: "2023",

    icon: "bi-journal-text",

    featured: true,

    description:
      "Presented research on AI-generated deepfakes and their cybersecurity implications at a national academic conference.",
  },
];

export const featuredAchievements = achievements.filter(
  (achievement) => achievement.featured
);

export default achievements;