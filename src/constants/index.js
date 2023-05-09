import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  express,
  flask,
  postgresql,
  python,
  sql,
  meta,
  starbucks,
  tesla,
  shopify,
  appacademy,
  bpsos,
  csu,
  gsu,
  ega,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Full-stack Software Engineer",
    icon: backend,
  },
  {
    title: "Frontend Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Express JS",
    icon: express,
  },
  {
    name: "Flask",
    icon: flask,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "PostgreSQL",
    icon: postgresql,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Associate's Degree",
    company_name: "Georgia Perimeter College - Georgia State University",
    icon: gsu,
    iconBg: "#E6DEDD",
    date: "January 2016 - December 2018",
    points: [
      "Outstanding student Award in Statistics",
    ],
  },
  {
    title: "Bachelor's Degree",
    company_name: "Clayton State University",
    icon: csu,
    iconBg: "#E6DEDD", //#383E56
    date: "Jan 2019 - May 2022",
    points: [
      "Bachelor degree of Science in Health Sciences with 3.3 GPA",
    ],
  },
  {
    title: "Project Coordinator",
    company_name: "Eastern Glass and Aluminum",
    icon: ega,
    iconBg: "#E6DEDD",
    date: "August 2020 - July 2021",
    points: [
      "Coordinate 4+ projects to improve processes and workflow operations while ensuring compliance with company, general contractors, and subcontractors resulting in a net profit increase of over $100,000.",
      "Planned, established and communicated project deliverables to meet deadlines and maintain project schedules.",
      "Worked with project teams and contractors to ensure effective collaboration and timely completion of tasks.",
    ],
  },
  {
    title: "Internship",
    company_name: "Boat People SOS",
    icon: bpsos,
    iconBg: "#E6DEDD", //#383E56
    date: "December 2021 - April 2022",
    points: [
      "Utilized Practice Fusion, a cloud-based health record platform to create and update health histories for 100+ new patients.",
      "Coordinated between patients and doctors to ensure effective communication and streamlined care.",
    ],
  },
  {
    title: "Full-stack Software Engineer Certification",
    company_name: "App Academy",
    icon: appacademy,
    iconBg: "#E6DEDD",
    date: "September 2022 - March 2023",
    points: [
      "1000+ hours Immersive software development course with focus on full stack web development.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Shootstarter",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "flask",
        color: "green-text-gradient",
      },
      {
        name: "kommunicate",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Gulp",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "javascript",
        color: "blue-text-gradient",
      },
      {
        name: "react",
        color: "green-text-gradient",
      },
      {
        name: "googleapi",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Mybnb",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "express",
        color: "green-text-gradient",
      },
      {
        name: "postgresql",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
