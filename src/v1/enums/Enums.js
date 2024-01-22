
const Role = ["jobseeker", "recruiter", "notset"];
const Months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const LevelOfStudy = {
  HS: "High School",
  AA: "Associate Degree",
  BA: "Bachelor's Degree",
  MA: "Master's Degree",
  PHD: "Doctoral Degree",
  HND: "Higher National Diploma",
  MSC: "Master of Science",
  SSCE: "Senior Secondary Certificate Examination",
  ND: "National Diploma",
  
};

const InternshipOptions = {
  internDuration: ["3 months", "6 months", "9 months", "12 months"],
  internType: ["Paid", "Unpaid"],
  jobTitles: [
    "Back-end developer",
    "Cloud/software architect",
    "Cloud/software developer",
    "Cloud/software applications engineer",
    "Cloud system administrator",
    "Cloud system engineer",
    "DevOps engineer",
    "Front-end developer",
    "Full-stack developer",
    "Java developer",
    "Platform engineer",
    "Release manager",
    "Reliability engineer",
    "Software engineer",
    "Software quality assurance analyst",
    "UI (user interface) designer",
    "UX (user experience) designer",
    "Web developer",
  ],
  englishProficiency: ["Beginner", "Advanced", "Fluent", "Native"],
};

module.exports = {
  Role,
  Months,
  LevelOfStudy,
  InternshipOptions,
};
