import { Logo } from "@once-ui-system/core";

const person = {
  firstName: "Aymane",
  lastName: "Aallaoui",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Full Stack Engineer",
  avatar: "/images/avatar.jpg",
  email: "binid5600@gmail.com",
  location: "Africa/Casablanca", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English", "Arabic", "French"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: (
    <>
      I occasionally write about design, technology, and share thoughts on the
      intersection of creativity and engineering.
    </>
  ),
};

const social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/aymaneallaoui",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/aymane-aallaoui/",
  },
  {
    name: "X",
    icon: "x",
    link: "https://x.com/aymane_praxe",
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
  },
];

const home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Building scalable software with modern technologies</>,
  featured: {
    display: true,
    title: (
      <>
        Recent project: <strong className="ml-4">Zod-Go</strong>
      </>
    ),
    href: "/work/Zod-go-TypeScript-Inspired-Schema-Validation-for-Go",
  },
  subline: (
    <>
      I'm Aymane, a Full Stack Engineer at <strong>Akera</strong>
      , where I craft scalable software solutions
      <br /> with a focus on backend development. Passionate about Go,
      TypeScript, and building robust infrastructure.
    </>
  ),
};

const about = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from Morocco`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://cal.com/aymane-aallaoui/30min",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        Aymane is a Morocco-based Full Stack Engineer with a passion for
        transforming complex challenges into scalable software solutions. His
        work spans backend development, DevOps, and the convergence of modern
        web technologies with robust infrastructure.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "Akera",
        timeframe: "2024 - Present",
        role: "Full Stack Engineer",
        achievements: [
          <>
            Developing scalable software solutions with a primary focus on
            backend development using Go, TypeScript, and JavaScript.
          </>,
          <>
            Contributing to robust software infrastructure that aligns with
            strategic business goals and technical requirements.
          </>,
        ],
        images: [],
      },
      {
        company: "Valhko",
        timeframe: "September 2024 - December 2024",
        role: "Fullstack & DevOps Engineer",
        achievements: [
          <>
            Worked on full-stack development and DevOps practices in London,
            implementing modern development workflows and infrastructure.
          </>,
          <>
            Collaborated with international teams to deliver high-quality
            software solutions using cloud technologies and automation.
          </>,
        ],
        images: [],
      },
      {
        company: "HARDTEC",
        timeframe: "May 2024 - August 2024",
        role: "Full Stack Engineer",
        achievements: [
          <>
            Developed full-stack applications using modern web technologies,
            contributing to improved system performance and user experience.
          </>,
          <>
            Collaborated with development teams to implement best practices and
            optimize development workflows.
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Studies",
    institutions: [
      {
        name: "École Supérieure de Management de Télécommunication et d'Informatique Sup MTI",
        description: (
          <>
            Currently studying Computer Software Engineering (Ingénierie des
            Systèmes Informatiques), graduating July 2025.
          </>
        ),
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical skills",
    skills: [
      {
        title: "Backend Development",
        description: (
          <>
            Expert in Go (Golang) development, building scalable microservices
            and APIs with focus on performance and reliability.
          </>
        ),
        // optional: leave the array empty if you don't want to display images
        images: [],
      },
      {
        title: "Full-Stack Development",
        description: (
          <>
            Building modern web applications with TypeScript, JavaScript,
            Next.js, and React. Experienced with both SQL and NoSQL databases.
          </>
        ),
        // optional: leave the array empty if you don't want to display images
        images: [],
      },
      {
        title: "DevOps & Cloud",
        description: (
          <>
            AWS certified with experience in cloud infrastructure, Docker, CI/CD
            pipelines, and automated deployment workflows.
          </>
        ),
        // optional: leave the array empty if you don't want to display images
        images: [],
      },
    ],
  },
};

const blog = {
  path: "/blog",
  label: "Blog",
  title: "Writing about tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Development projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  // Images by https://lorant.one
  // These are placeholder images, replace with your own
  images: [
    {
      src: "/images/gallery/horizontal-1.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-2.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-3.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-4.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-1.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-2.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-3.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-4.jpg",
      alt: "image",
      orientation: "vertical",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
