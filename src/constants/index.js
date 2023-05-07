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
  meta,
  starbucks,
  tesla,
  shopify,
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
    title: "Front-end Developer",
    icon: web,
  },
  // {
  //   title: "React Native Developer",
  //   icon: mobile,
  // },
  {
    title: "Full-stack Software Engineer",
    icon: backend,
  },
  // {
  //   title: "Content Creator",
  //   icon: creator,
  // },
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
  // {
  //   name: "TypeScript",
  //   icon: typescript,
  // },
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
  // {
  //   name: "MongoDB",
  //   icon: mongodb,
  // },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  // {
  //   name: "figma",
  //   icon: figma,
  // },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Associate's Degree",
    company_name: "Georgia Perimeter College - Georgia State University",
    icon: starbucks,
    iconBg: "#383E56",
    date: "January 2016 - December 2018",
    points: [
      "Outstanding student Award in Statistics",
    ],
  },
  {
    title: "Bachelor's Degree",
    company_name: "Clayton State University",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Jan 2019 - May 2022",
    points: [
      "Bachelor degree of Science in Health Sciences with 3.3 GPA",
    ],
  },
  {
    title: "Project Coordinator",
    company_name: "Eastern Glass and Aluminum",
    icon: meta,
    iconBg: "#383E56",
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
    icon: meta,
    iconBg: "#E6DEDD",
    date: "December 2021 - April 2022",
    points: [
      "Utilized Practice Fusion, a cloud-based health record platform to create and update health histories for 100+ new patients.",
      "Coordinated between patients and doctors to ensure effective communication and streamlined care.",
    ],
  },
  {
    title: "Full-stack Software Engineer Certification",
    company_name: "App Academy",
    icon: shopify,
    iconBg: "#383E56",
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
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
