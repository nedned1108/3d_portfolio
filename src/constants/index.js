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
  fuelbi,
  trackerbi,
  fleetflix,
  brian_hwang,
  jorge_tirado
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
    name: "Node JS",
    icon: nodejs,
  },
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
      "Developed a full Spring Boot REST API suite, implementing Spring Security, Hibernate, JPA, and a comprehensive Mockito test suite, improving system reliability and reducing defects by 30%.",
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
      "Built multiple GEOTAB-integrated applications used by 500+ enterprise customers, providing telemetry and fleet data analysis using Angular, TypeScript, SQL Server and Azure Cosmos DB.",
      "Worked closely with cross-functional teams to develop an Internal Order Management application, reducing order update time for Operations and Support teams by 30 - 50% and decreasing manual errors by 25%.",
      "Partnered with a team of four to design and deliver a full-stack internal application for billing, subscriptions, and camera management, driving a 70%+ productivity improvement and reducing processing time from hours to minutes.",
      "Developed a fully automated Shopify storefront with a Business Central connector, streamlining product import/export workflows and inventory sync, which contributed to a 20%+ lift in sales and reduced manual operations by 80%",
      "Created 6+ n8n-based AI agents to oversee 4,000+ dash cameras, enabling automated health checks, firmware updates, and real-time alerts, reducing manual oversight by 90%",
      "Led a team of 3 to launch 20+ marketing websites using React, Node.js and Zoho CRM implementing a centralized config system that cut update time by 70% and contributed to a 20% increase in brand visibility within one quarter",
      "Engineered and deployed full-stack applications to support 7,000+ fleet vehicles, improving driver safety compliance and reducing incident response time by 20% across the fleet",
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
    image: "jorge_tirado",
    linkedin:"https://www.linkedin.com/in/jorgetiradotolosa/"
  },
  {
    testimonial: "Ned is a skilled full stack engineer that developed startrpacks from scratch. He was able to build out the product requirements efficiently, work hard to accommodate for last minute/adhoc requirement changes, and be a great team player. I recommend Ned to work on any challenging task as he is able to develop new skills and problem solve very effectively.",
    name: "Brian Hwang",
    designation: "MBA Candidate at Harvard Business School",
    company: "Stealth Startup",
    image: "brian_hwang",
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
        name: "Angular",
        color: "blue-text-gradient",
      },
      {
        name: "TypeScript",
        color: "green-text-gradient",
      },
      {
        name: "Java",
        color: "pink-text-gradient",
      },
      {
        name: "Google maps api",
        color: "blue-text-gradient",
      },
    ],
    image: '',
    source_code_link: "",
    liveLink: "",
  },
  {
    name: "Fleetflix and CoachingBI",
    descriptions: [
        "Optimized performance and reduce load times by 80% scaling the platform to reliably support 10,000+ active devices.",
        "Designed an interactive timeline feature for browsing camera footage, enabling users to request media from any device and reducing footage retrieval time by 40%.",
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
    image: '',
    source_code_link: "",
    liveLink: "",
  },
  {
    name: "TrackerBI & ColdChainBI",
    descriptions: [
      "Delivered real-time GPS asset tracking solutions for trailers, containers, and equipment, improving asset visibility and reducing loss risk.",
      "Engineered an interactive map dashboard to visualize real-time GPS data from trailers, containers and equipment, resolving 3 high-priority defects improving response times to location incidents by 25%.",
    ], 
    tags: [
      {
        name: "typescript",
        color: "blue-text-gradient",
      },
      {
        name: "Angular",
        color: "green-text-gradient",
      },
      {
        name: "Java",
        color: "pink-text-gradient",
      },
    ],
    image: '',
    source_code_link: "",
    liveLink: "",
  }
];

export { services, technologies, experiences, testimonials, projects };
