const today = new Date();
export const formattedDate = today.toLocaleDateString("en-US", {
  year: "numeric",
  month: "long",
  day: "numeric",
});

// Personal Information --> #hero section
export const name = "Roberto Murillo";
export const website = "RCM CODES";
export const designation = "Software Engineer";
export const location = "Based in Spokane WA";
export const pronouns = "he/him";
export const resume = "/contact-dev";
export const resume_name = "Resumé";
export const availability = "Available for work";
export const footer_icon = "mdi:cards-playing-heart-multiple";

// About
export const about =
  "I build websites and web applications for my community through";

// Work Experience --> #work section
export const work = [
  {
    from: "2022",
    to: "Present",
    role: "Full-stack Software Engineer",
    org: "100DEVS",
    org_url: "https://100devs.org",
    location: "Los Angeles, CA (Remote)",
    skills: "Web Development",
  },
  {
    from: "2023",
    to: "Present",
    role: "Full-stack Software Engineer + Designer",
    org: "9Five Studio",
    org_url: "https://100devs.org",
    location: "Spokane, WA (Remote)",
    skills: "Web Development + Web Design",
  },
];

// Projects --> #project section
export const projects = [
  {
    from: "2023",
    to: "Present",
    title: "PlantJoy",
    description:
      "A project to improve safety standards in Quahog by implementing innovative safety measures.",
    url: "https://projectgriffin.com",
    tech: "Safety Equipment, Training Programs, Community Outreach",
  },
  {
    from: "2023",
    to: "2022",
    title: "SpellSphere",
    description:
      "An initiative to promote safety awareness among families in Quahog.",
    url: "https://safefamilyquahog.com",
    tech: "Workshops, Educational Material, Public Events",
  },
  {
    from: "2020",
    to: "2021",
    title: "Road Safety Initiative",
    description:
      "A campaign to enhance road safety and reduce accidents in Quahog.",
    url: "https://roadsafetyquahog.com",
    tech: "Traffic Analysis, Signage Improvement, Public Awareness",
  },
];

//NOW --> #now section
export const now = [
  {
    title: "What I'm working on:",
    list: [
      "Building NinetyFive Designs Website",
      "Learning Object-Oriented Programming",
      "Buidling Websites for various clients",
      "Early planning for a minimal web application called PlantJoy",
    ],
    url_name: "now",
    url: "https://nownownow.com/about",
  },
  {
    title: "Also, I'm currently:",
    list: ["Reading: Dune", "Listening: ", "Watching: One Piece"],
    url_name: "",
    url: "",
  },
];

//Hobbies --> #hobbies in now section

// Education --> #education section
export const education = [
  {
    from: "1995",
    to: "1999",
    institute: "Quahog High School",
    course: "High School Diploma",
    location: "Quahog, Rhode Island",
  },
  {
    from: "1999",
    to: "2003",
    institute: "Quahog Community College",
    course: "Bachelor of Science in Safety Management",
    location: "Quahog, Rhode Island",
  },
  {
    from: "2003",
    to: "2005",
    institute: "Safety University",
    course: "Master of Science in Safety Engineering",
    location: "Boston, Massachusetts",
  },
];

// Contact --> #contact section
export const contact = [
  {
    source_name: "Email",
    source: "peter.griffin@example.com",
  },
  {
    source_name: "Twitter",
    source: "https://twitter.com/PeterGriffin",
  },
  {
    source_name: "LinkedIn",
    source: "https://www.linkedin.com/in/peter-griffin",
  },
];

// Certifications --> #certificate section

export const certificates = [
  {
    issued: "2005",
    title: "Certified Safety Inspector",
    org: "National Safety Association",
    url: "https://certi.com/url",
    description: "Certification in safety inspection and risk assessment.",
  },
  {
    issued: "2006",
    title: "Emergency Response Training",
    org: "Quahog Safety Department",
    url: "https://certi.com/url",
    description:
      "Training in handling emergency situations and crisis management.",
  },
  {
    issued: "2007",
    title: "Safety Leadership Workshop",
    org: "Safety Leaders International",
    url: "https://certi.com/url",
    description: "Leadership training in safety management and communication.",
  },
];

// Blogs --> #blogs section
export const blogs = [
  {
    date: "12-July, 2023",
    url: "/contact-dev",
    title: "Multi-Step Typeform-like integration",
    description: "Join me in my journey in creating a Typeform-Like form.",
    publisher: "Yours Truly",
  },
  {
    date: "25-June, 2023",
    url: "https://medium.com/",
    title: "Top 10 Safety Tips for Families",
    description:
      "Learn the best safety practices for families to ensure a secure environment.",
    publisher: "Safety Monthly",
  },
];

// Achievements --> #achievement section
export const achievements = [
  {
    title: "Safety Hero Award",
    year: "2020",
    decription:
      "Recognized for outstanding contributions to improving safety standards in Quahog.",
  },
  {
    title: "Safety Innovation Prize",
    year: "2018",
    decription:
      "Awarded for implementing innovative safety measures that yielded significant improvements.",
  },
  {
    title: "Community Safety Ambassador",
    year: "2015",
    decription:
      "Honored for promoting safety awareness and education in the Quahog community.",
  },
  {
    title: "Safety Campaign Excellence",
    year: "2013",
    decription:
      "Acknowledged for leading a successful safety campaign that reached thousands of residents.",
  },
];
