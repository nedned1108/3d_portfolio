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
  csharp,
  net,
  angular,
  fleethoster,
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
    id: "experience",
    title: "Experience",
  },
  {
    id: "work",
    title: "Projects",
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
  {
    title: "Web Developer",
    icon: web,
  },
];

const technologies = [
  {
    name: "TypeScript",
    icon: typescript
  },
  {
    name: "Java",
    icon: java
  },
  {
    name: "C#",
    icon: csharp
  },
  {
    name: "Angular",
    icon: angular
  },
  {
    name: "Spring Boot",
    icon: spring,
  },
  {
    name: ".NET",
    icon: net,
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
    name: "PostgreSQL",
    icon: postgresql,
  }
];

const experiences = [
  {
    title: "Bachelor's Degree of Science",
    company_name: "Clayton State University",
    icon: csu,
    iconBg: "#E6DEDD", //#383E56
    date: "Jan 2019 - July 2022",
    points: [
      "Bachelor degree of Science",
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
    title: "Full-stack Software Engineer Intern",
    company_name: "Stealth Startup",
    icon: stealthstartup,
    iconBg: "#383E56", // "#E6DEDD",
    date: "April 2023 - June 2023",
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
    date: "June 2023 - December 2023",
    points: [
      "Developed a full suite Spring Boot REST API, implementing Spring Security, Hibernate, JPA, and Mockito Test Suite.",
      "Database Design - designed databases under principles of Normalization and ACID and SOLID patterns.",
      "Managed multiple teams of 2 - 3 developers contributing to effectively deliver a range of full-stack web applications.",
      "Followed Agile/Scrum methodology to plan, implement, develop and test 3+ projects."
    ],
  },
  {
    title: "Full-stack Software Engineer",
    company_name: "Fleet Hoster",
    icon: fleethoster,
    iconBg: "#383E56",
    date: "December 2023 - current",
    points: [
      "Built multiple GEOTAB-integrated applications serving thousands of users for telemetry and fleet data analysis using Angular, TypeScript, and .Net Core in combination with SQL Server and Azure Cosmos Database.",
      "Worked closely with cross-functional teams to develop an Internal Order Management application in .NET Core and Angular, streamlining order updates for Operations and Support teams.",
      "Partnered with a team of four to design and deliver a full-stack internal application for billing, subscriptions, and camera management, driving a 70% productivity improvement across the company.",
      "Developed a fully integrated Shopify storefront with Business Central connector to automate product import/export workflows and inventory management, resulting in a 20% increase in sales.",
      "Created 6+ n8n-based AI agents to oversee and update 4,000+ dash cameras, enabling automated workflows and real-time alerts.",
      "Led a team of 3 to deliver 20+ marketing websites using React, Node.js and Zoho CRM with a centralized configuration system for streamlined management and updates in under 4 weeks, contributing to an 25% increase in overall brand recognition.",
      "Engineered and deployed full-stack applications to support over 7,000 fleet vehicles, improving safety metrics and reducing incident response time by 20%.",
      "Collaborated in a 6-person agile team, contributing to code reviews, CI/CD improvements, and cross-platform integrations."
    ],
  },
];

const testimonials = [
  {
    testimonial: "I highly recommend Ned as a Full-Stack Engineer. He played a key role in building our platform from scratch. Ned's responsiveness and attentiveness to our requests were exceptional, making collaboration smooth and efficient. Additionally, his initiative in implementing new features significantly improved the customer experience. It has been a pleasure working with Ned, and I confidently endorse him for any future projects.",
    name: "Jorge Tirado Tolosa",
    designation: "MBA Candidate at Harvard Business School",
    company: "Stealth Startup",
    image: "https://media.licdn.com/dms/image/D4E03AQEf7zo-d52k9w/profile-displayphoto-shrink_800_800/0/1669142573120?e=1704326400&v=beta&t=ZIhmXWE89DvRswpCicX-fsFRoFeN4YkGh36OqfUsrEI",
    linkedin:"https://www.linkedin.com/in/jorgetiradotolosa/"
  },
  {
    testimonial: "Ned is a skilled full stack engineer that developed startrpacks from scratch. He was able to build out the product requirements efficiently, work hard to accommodate for last minute/adhoc requirement changes, and be a great team player. I recommend Ned to work on any challenging task as he is able to develop new skills and problem solve very effectively.",
    name: "Brian Hwang",
    designation: "MBA Candidate at Harvard Business School",
    company: "Stealth Startup",
    image: "https://media.licdn.com/dms/image/D4E03AQHcYwc2MYWUnQ/profile-displayphoto-shrink_800_800/0/1675536339821?e=1704326400&v=beta&t=uGtfJksqERw5RJYR99FYbqeVc97i1I30lHbtivHsfJI",
    linkedin:"https://www.linkedin.com/in/c13brianhwang/"
  }
];

const projects = [
  {
    name: "FuelBI",
    descriptions: [
      "Re-architected both front-end and backend systems to support millions of real-time fuel transaction tracking per week and fraud detection across thousands of fleet vehicles.",
      "Visualized fuel KPIs, transaction maps and reports for 40+ enterprise customers, improving transparency and audit efficiency."
    ],
    tags: [
      {
        name: "angular",
        color: "blue-text-gradient",
      },
      {
        name: "TypeScript",
        color: "green-text-gradient",
      },
      {
        name: "C#",
        color: "pink-text-gradient",
      },
      {
        name: ".NET",
        color: "blue-text-gradient",
      },
    ],
    image: fuelbi,
    source_code_link: "",
    liveLink: "",
  },
  {
    name: "Fleetflix and CoachingBI",
    descriptions: [
        "Designed a feature enabling users to browse camera footage via an interactive timeline and seamlessly request media from any device.",
        "Optimized performance for a smart dashcam management platform, reducing loading by 80% and able to handle 1000+ devices with ease."
    ],
    tags: [
      {
        name: "JavaScript",
        color: "blue-text-gradient",
      },
      {
        name: "Blazor",
        color: "green-text-gradient",
      },
      {
        name: "AWS",
        color: "pink-text-gradient",
      },
    ],
    image: fleetflix,
    source_code_link: "",
    liveLink: "",
  },
  {
    name: "TrackerBI & ColdChainBI",
    descriptions: [
      "Delivered real-time GPS asset tracking solutions for trailers, containers, and equipment, improving asset visibility and reducing loss risk.",
      "Engineered interactive map dashboard to visualize real-time GPS data from trailers, containers and equipment, resolving 3 critical bugs improving response times to location incidents by 25%.",
    ], 
    tags: [
      {
        name: "typescript",
        color: "blue-text-gradient",
      },
      {
        name: "C#",
        color: "green-text-gradient",
      },
      {
        name: ".NET",
        color: "pink-text-gradient",
      },
    ],
    image: trackerbi,
    source_code_link: "",
    liveLink: "",
  }
];

export { services, technologies, experiences, testimonials, projects };
