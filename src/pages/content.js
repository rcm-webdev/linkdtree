const today = new Date();
export const formattedDate = today.toLocaleDateString("en-US", {
  year: "numeric",
  month: "long",
  day: "numeric",
});

// Personal Information --> #hero section
export const name = "Roberto Murillo";
export const website = "RCM CODES";
export const designation = "Fullstack Software Engineer";
export const location = "Based in Spokane WA";
export const pronouns = "he/him";
export const resume = "/contact-dev";
export const resume_name = "Resumé";
export const availability = "Available for work";
export const footer_icon = "mdi:cards-playing-heart-multiple";

// About
export const about =
  "I build websites and web applications for my community through 100devs";

// Work Experience --> #work section
export const work = [
  {
    from: "2022",
    to: "Present",
    role: "Full-stack Software Engineer",
    org: "100DEVS",
    org_url: "https://100devs.org",
    location: "Los Angeles, CA (Remote)",
    skills: "Web Development & Contract Work",
  },
  {
    from: "2023",
    to: "Present",
    role: "Full-stack Software Engineer + Designer",
    org: "95 Designs",
    org_url: "https://100devs.org",
    location: "Spokane, WA (Remote)",
    skills: "Web Development & Web Design",
  },
];

// Projects --> #project section
export const projects = [
  {
    from: "2024",
    to: "Present",
    title: "PlantJoy",
    description:
      "PlantJoy is a minimal web application designed to help users track their plant care needs using a plant API",
    url: "/",
    tech: "Full Stack Application, HTML, Tailwind CSS, JavaScript, Express.js, MongoDB, Passport.js",
  },
  {
    from: "2024",
    to: "Present",
    title: "SpellSphere",
    description:
      "SpellSphere is a powerful D&D application that provides quick and comprehensive access to spell information using the dnd5eapi.co API",
    url: "https://safefamilyquahog.com",
    tech: "Full Stack Application, React, Express.js, MongoDB, Passport.js, Typehead.js",
  },
  {
    from: "2024",
    to: "Present",
    title: "Bookworm's Catalog",
    description:
      "Bookworm’s Catalog is an online platform that allows users to organize and manage their personal book collections, providing details about each book and enabling easy searching and tracking.",
    url: "https://roadsafetyquahog.com",
    tech: "Full Stack Application, React, Express.js, MongoDB, Passport.js, RESTful API design, Jest (testing framework)",
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
    date: "27-February, 2024",
    url: "/contact-dev",
    title: "Multi-Step Typeform-like integration",
    description:
      "Embark on a journey with me as we explore a templated Typeform-Like form within my portfolio.",
    post: "View Post",
  },
  {
    date: "15-January, 2024",
    url: "https://hashnode.com/",
    title: "Learning React",
    description:
      "Learning how React works. Dive into my blog post on builing a Quote Generator. Discover how I summoned wisdom, one quote at a time.",
    post: "View Post",
  },
  {
    date: "1-March, 2024",
    url: "https://hashnode.com/",
    title: "Learning Node.js",
    description:
      "Learning how to use Node.js. Explore my blog post to see how I organized a virtual library and brought it to life!.",
    post: "View Post",
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
