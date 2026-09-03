const education = [
  {
    id: 1,

    startDate: "2026-04",

    endDate: null,

    displayDate: "Apr 2026 – Present",

    degree: "M.Sc. Data and Knowledge Engineering",

    institution: "Otto von Guericke University Magdeburg",

    location: "Magdeburg, Germany",

    status: "ongoing",

    specialization:
      "Data Engineering, Artificial Intelligence and Knowledge-Based Systems",

    details: [],
  },

  {
    id: 2,

    startDate: "2022-08",

    endDate: "2025-05",

    displayDate: "Aug 2022 – May 2025",

    degree: "Bachelor of Computer Applications",

    shortDegree: "BCA",

    institution:
      "Rajagiri College of Management and Applied Sciences",

    location: "Kakkanad, India",

    status: "completed",

    grade: "CGPA: 8.8 / 10.0",

    specialization:
      "Software Development, Databases, Computer Science Fundamentals and Applied Artificial Intelligence",

    details: [
      "Achieved the class-topper position during the first semester.",
      "Studied programming, data structures, databases, operating systems, computer networks, cloud computing and Android development.",
    ],
  },

  {
    id: 3,

    startDate: "2020-09",

    endDate: "2022-07",

    displayDate: "Sep 2020 – Jul 2022",

    degree: "Senior School Certificate",

    shortDegree: "Class XII",

    institution: "Assisi Vidyaniketan Public School",

    location: "Ernakulam, India",

    status: "completed",

    specialization: "",

    details: [],
  },

  {
    id: 4,

    startDate: "2019-06",

    endDate: "2020-07",

    displayDate: "Jun 2019 – Jul 2020",

    degree: "Secondary School Examination",

    shortDegree: "Class X",

    institution: "Assisi Vidyaniketan Public School",

    location: "Ernakulam, India",

    status: "completed",

    specialization: "",

    details: [],
  },
];

export const currentEducation = education.find(
  (item) => item.status === "ongoing"
);

export const completedEducation = education.filter(
  (item) => item.status === "completed"
);

export default education;