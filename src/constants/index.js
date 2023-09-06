import { s } from "maath/dist/misc-7d870b3c.esm";
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
  java,
  spring,
  appacademy,
  bpsos,
  csu,
  gsu,
  ega,
  cognixia,
  stealthstartup,
  mybnb,
  gulp,
  shootstarter,
  social_media_management,
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
    id: "feedback",
    title: "Feedback",
  },
  // {
  //   id: "contact",
  //   title: "Contact",
  // },
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
    title: "Java Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "Java",
    icon: java
  },
  {
    name: "Spring Boot",
    icon: spring,
  },
  {
    name: "SQL",
    icon: sql,
  },
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
    name: "PostgreSQL",
    icon: postgresql,
  }
];

const experiences = [
  {
    title: "Associate's Degree of Science",
    company_name: "Georgia Perimeter College - Georgia State University",
    icon: gsu,
    iconBg: "#E6DEDD",
    date: "January 2016 - December 2018",
    points: [
      "Outstanding student Award in Statistics",
    ],
  },
  {
    title: "Bachelor's Degree of Science in Health Science",
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
  {
    title: "Full-stack Software Engineer Volunteer",
    company_name: "Stealth Startup",
    icon: stealthstartup,
    iconBg: "#383E56", // "#E6DEDD",
    date: "May 2023 - September 2023",
    points: [
      "Built the initial platform for a startup founded by 2 Harvard Business School students with the mission of providing trusted recommendations by everyone.",
      "Contributing to the early phase process resulted in the successful deployment of the first functional test version within a time frame of 2 weeks.",
      "Designed and developed front-end and back-end of an application yielding an intuitive and streamlined user experience."
    ],
  },
  {
    title: "Java Developer",
    company_name: "Cognixia USA",
    icon: cognixia,
    iconBg: "#E6DEDD",
    date: "June 2023 - September 2023",
    points: [
      "Database Design - designed databases under principles of Normalization and ACID and SOLID patterns.",
      "Develop a full suite Spring Boot REST API, implementing Spring Security, Hibernate, JPA, and Mockito Test Suite"
    ],
  },
];

const testimonials = [
  {
    testimonial: "I highly recommend Ned as a Full-Stack Engineer. He played a key role in building our platform from scratch. Ned's responsiveness and attentiveness to our requests were exceptional, making collaboration smooth and efficient. Additionally, his initiative in implementing new features significantly improved the customer experience. It has been a pleasure working with Ned, and I confidently endorse him for any future projects.",
    name: "Jorge Tirado Tolosa",
    designation: "MBA Candidate at Harvard Business School",
    company: "Stealth Startup",
    image: "https://media.licdn.com/dms/image/D4E03AQEf7zo-d52k9w/profile-displayphoto-shrink_800_800/0/1669142573120?e=1697673600&v=beta&t=IRlPHVP7cSjdFAwOZmZIVb6BUEB2EPTdEW_x4KAkW6w",
  },
  {
    testimonial: "Ned is a skilled full stack engineer that developed startrpacks from scratch. He was able to build out the product requirements efficiently, work hard to accommodate for last minute/adhoc requirement changes, and be a great team player. I recommend Ned to work on any challenging task as he is able to develop new skills and problem solve very effectively.",
    name: "Brian Hwang",
    designation: "MBA Candidate at Harvard Business School",
    company: "Stealth Startup",
    image: "https://media.licdn.com/dms/image/D4E03AQHcYwc2MYWUnQ/profile-displayphoto-shrink_800_800/0/1675536339821?e=1697673600&v=beta&t=Bvj9-hDiZFM6U7CrtS9VktNfyMTpto_7wJM1PGUinyA",
  }
];

const projects = [
  {
    name: "Shootstarter",
    descriptions: [
      "Project funding website inspired by Kickstarter using Python and Flask server",
      "A web application that allows users to create and fund crowdfunding projects.",
      "Managed the frontend state of application using React and Redux.",
      "Customized multiple frontend functions to handle data and ensure a seamless user experience.",
      "Utilized chat-bot as an AI assistant"
    ],
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
        name: "ai-chatbot",
        color: "pink-text-gradient",
      },
    ],
    image: shootstarter,
    source_code_link: "https://github.com/nedned1108/capstone-project-shootstarter",
    liveLink: "https://shootstarter.onrender.com",
  },
  {
    name: "Social Account Manager",
    descriptions: [
      "Back-end project that allows users to manage their social media accounts.",
      "Led a team of 3 building the project using Java and Spring Boot in 4 days.",
      "Managed Authentication and Authorization using Spring Security to ensure the security of the application.",
      "Tested the application using Mockito and JUnit to improve the reliability of the application.",
    ],
    tags: [
      {
        name: "java",
        color: "blue-text-gradient",
      },
      {
        name: "springboot",
        color: "green-text-gradient",
      },
      {
        name: "mockito",
        color: "pink-text-gradient",
      },
    ],
    image: social_media_management,
    source_code_link: "https://github.com/nedned1108/Social-Media-Accounts-Management",
    liveLink: "https://github.com/nedned1108/Social-Media-Accounts-Management",
  },
  {
    name: "Gulp",
    descriptions: [
      "Crowd-sourced reviews about businesses using Python and Flask server",
      "Led a group of four software engineers through the planning and building phase of Gulp",
      "Integrated Google Maps API to provide business locations, improving the website’s functionality",
      "Designed search features and categories for a user-friendly interface",
    ], 
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
    image: gulp,
    source_code_link: "https://github.com/glwo/pong-grp10-proj",
    liveLink: "https://gulp.onrender.com/",
  },
  {
    name: "Mybnb",
    descriptions: [
      "Platform for users to list rental properties, book rentals, and leave reviews",
      "Set up Express RESTful API for streamlined data management and operation",
      "Connected to PostgreSQL Render backend to store and update database",
      "Ensured the functionality and reliability of endpoints, responses, and error handling by conducting API testing with Postman."
    ],
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
    image: mybnb,
    source_code_link: "https://github.com/nedned1108/API-project",
    liveLink: "https://airbnb-api-project-znib.onrender.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
