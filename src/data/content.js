/**
 * Single source of truth for every piece of copy on the site.
 * Edit here — no component needs to change.
 *
 * Skill entries carry a `slug` that maps to a Simple Icons brand logo. After
 * changing any slug, run `npm run icons` to regenerate `src/data/brandIcons.js`.
 * A `null` slug (or one with no matching logo) falls back to a colored monogram
 * tile using the entry's `hex`.
 */

export const profile = {
  name: 'Raghavendra Kulkarni',
  shortName: 'Raghavendra',
  initials: 'RK',
  role: 'Software Engineer',
  tagline:
    'Software engineer building scalable, high-performance full-stack and AI-powered applications using Java, Python, React, and cloud technologies.',
  location: 'Boston, MA',
  photo: '/profile1.jpg',
  resume: '/Raghavendra-Kulkarni-Resume.pdf',
  email: 'kulkarni.ragh@northeastern.edu',
  phone: '857-654-2114',
  links: {
    github: 'https://github.com/Raghav242',
    linkedin: 'https://www.linkedin.com/in/raghavendra-kulkarni-599815185/',
  },
}

export const stats = [
  { value: '3+', label: 'Years building software' },
  { value: '3.86', label: 'Graduate GPA' },
  { value: '30+', label: 'Tools and technologies' },
]

export const about = {
intro: [
  `Hey, I’m Raghav 👋 I’m a software engineer who likes building things that are fast, useful, and actually make it to production.`,
  `I’ve built AI platforms that turn hours of work into minutes, backend systems handling thousands of requests a day, distributed GPU pipelines for LLM and speech workloads, and cloud automation that replaces hours of manual setup.`,
  `I’m happiest somewhere between backend engineering, AI, and infrastructure — chasing down a slow API, designing a system that needs to scale, or figuring out how to turn a cool model into a product people can actually use.`,
  `Fast is a feature. Boring technology is underrated. If it isn’t instrumented, it isn’t done.`,
],
  facts: [
    { label: 'Location', value: 'Boston, MA' },
    { label: 'Expected graduation', value: 'December 2026' },
    { label: 'Focus', value: 'Backend · AI · Full-Stack' },
    { label: 'Status', value: 'Open to full-time roles' },
  ],
}

export const education = [
  {
    school: 'Northeastern University',
    degree: 'Master of Science in Computer Science',
    detail: 'GPA 3.86',
    location: 'Boston, MA',
    period: 'Aug 2024 – Dec 2026',
    current: true,
  },
  {
    school: 'Visvesvaraya Technological University',
    degree: 'Bachelor of Engineering, Information Science and Engineering',
    detail: null,
    location: 'Bengaluru, India',
    period: 'Aug 2018 – Jul 2022',
    current: false,
  },
]

/**
 * Ordered most-recent first, so the current role leads. Collapsed, an entry
 * shows only `logo`, `company`, `role`, `period` and `location`; everything
 * from `summary` down lives in the detail panel. `initials` is the fallback if
 * the logo file is missing, and `metrics` may be omitted.
 *
 * `narrative` is an array of paragraphs — the story of the role in plain
 * language, not a re-run of the resume bullets.
 */
export const experience = [
  {
    id: 'dash',
    role: 'AI Software Engineer — DASH AI Hub',
    company: 'Northeastern University',
    initials: 'NU',
    logo: '/logos/northeastern.png',
    location: 'Boston, MA',
    period: 'Sep 2025 – Dec 2025 · Sep 2026 – Present',
    summary:
      'Building AI systems for faculty — grading platforms, retrieval pipelines, and the inference infrastructure underneath them.',
    metrics: [
      { value: '8h → 30m', label: 'Essay grading time' },
      { value: '10+', label: 'Faculty adopted' },
      { value: '300+', label: 'Students reached' },
    ],
    stack: [
      'Next.js',
      'Flask',
      'FastAPI',
      'LangGraph',
      'LlamaIndex',
      'Qdrant',
      'Celery',
      'RabbitMQ',
      'Redis',
      'Whisper',
    ],
    narrative: [
      `At DASH, I build AI tools for faculty and students. I helped build an essay-grading platform with Next.js, Flask, and LangGraph that cut grading time from 8+ hours to under 30 minutes and now supports 300+ students. I also built a RAG pipeline with LlamaIndex and Qdrant to bring course-specific context into the system.`,
      `More recently, I've been building an AI presentation coach using Next.js, FastAPI, and PostgreSQL. I also built the distributed pipeline behind it using Celery, RabbitMQ, and Redis to handle transcription, LLM evaluation, and F5-TTS voice generation without slowing down the user experience.`,
    ],
  },
  {
    id: 'vicor',
    role: 'Software Engineer Intern',
    company: 'Vicor Corporation',
    initials: 'VC',
    logo: '/logos/vicor.svg',
    location: 'Andover, MA',
    period: 'Jan 2026 – Aug 2026',
    summary:
      'Built the APIs behind a distributed engineering-data platform, and spent a lot of time making slow things fast.',
    metrics: [
      { value: '80s → 2s', label: 'Page latency' },
      { value: '10,000+', label: 'Daily transactions' },
      { value: '95%+', label: 'Test coverage' },
    ],
    stack: ['Java', 'Spring Boot', 'SAP ERP', 'Oracle', 'Docker', 'GitHub Actions', 'JUnit 5'],
    narrative: [
      `I built and scaled Java and Spring Boot REST APIs for engineering workflows, handling 10,000+ daily transactions across multiple data sources. One of my biggest improvements was taking a workflow from over 80 seconds to around 2 seconds by introducing lazy loading, request consolidation, and server-side caching, improving the experience for 200+ engineers.`,
      `I also worked on reliability and maintainability, building CI/CD workflows with GitHub Actions and Docker and refactoring tightly coupled service and data-access code. I added JUnit 5 and Mockito test coverage across APIs, services, and integrations, helping catch regressions earlier and make the codebase easier to change safely.`,
    ],
  },
  {
    id: 'cognizant',
    role: 'Software Engineer',
    company: 'Cognizant Technology Solutions',
    initials: 'CT',
    logo: '/logos/cognizant.png',
    location: 'Bengaluru, India',
    period: 'Oct 2022 – Aug 2024',
    summary:
      'Worked on a multi-cloud provisioning platform that replaced manual, SSH-based server operations.',
    metrics: [
      { value: '40+ hrs', label: 'Saved per environment' },
      { value: '500+', label: 'Enterprise tenants' },
      { value: '3 clouds', label: 'AWS, Azure, HANA' },
    ],
    stack: ['React', 'Python', 'Terraform', 'Kubernetes', 'AWS', 'Azure', 'SAP HANA Cloud'],
    narrative: [
      `I worked on a multi-cloud platform that automated infrastructure provisioning across AWS, Azure, and SAP HANA Cloud. I built React and Python components along with Terraform, Kubernetes, and Helm configurations to automate provisioning, scaling, and environment setup.`,
      `I also built Python automation for infrastructure lifecycle workflows that previously required a lot of manual work. Across 500+ enterprise tenants, this eliminated roughly 40 hours of setup per environment and made deployments much more repeatable and reliable.`,
    ],
  },
  {
    id: 'cognizant-intern',
    role: 'Software Engineer Intern',
    company: 'Cognizant Technology Solutions',
    initials: 'CT',
    logo: '/logos/cognizant.png',
    location: 'Bengaluru, India',
    period: 'Apr 2022 – Sep 2022',
    summary: 'Migrated core modules of a high-traffic system off .NET and cleaned up the SQL underneath.',
    metrics: [
      { value: '−40%', label: 'Page latency' },
      { value: '300K+', label: 'Users affected' },
      { value: '6 mo', label: 'Internship' },
    ],
    stack: ['Java', 'Angular', '.NET', 'SQL'],
    narrative: [
      `Six months spent migrating core modules of a high-traffic distributed system from .NET onto Java and Angular. The rewrite was the visible half; the other half was untangling the SQL queries underneath it, which cut page latency by 40% and put an end to the timeouts that 300K+ users had been running into.`,
    ],
  },
]

/**
 * Entries with `placeholder: true` render a "Planned" badge and muted styling.
 * Fill in the copy, drop the flag, and add links — nothing else needs editing.
 */
export const projects = [
  {
    name: 'Learnbot',
    blurb:
      'A RAG teaching assistant used by 50+ finance students, combining Canvas content ingestion, Pinecone semantic search, and Claude for course-specific guidance.',
    highlights: [
      'Canvas ingestion feeding Pinecone semantic search',
      'Answers scoped to academic-integrity constraints',
    ],
    stack: ['React', 'Flask', 'Pinecone', 'Claude', 'RAG'],
    links: { github: null, demo: null },
  },
  {
    name: 'DASH API',
    blurb:
      'A self-service platform for running open-source LLMs on an on-premises GPU server, giving faculty and students time-boxed access to scarce hardware.',
    highlights: [
      'Reservable time slots with time-bound credentials',
      'Access over REST APIs or SSH on a Linux GPU host',
    ],
    stack: ['React', 'Flask', 'REST APIs', 'Linux', 'GPU Infrastructure'],
    links: { github: null, demo: null },
  },
  {
    name: 'Agentic Workflow Engine',
    placeholder: true,
    blurb:
      'An orchestration layer where LLM agents plan, call tools, and hand off work, with tracing throughout.',
    highlights: [
      'Describe the agent loop and tool-calling design',
      'Note retries, failure modes, and evaluation',
    ],
    stack: ['Python', 'LangGraph', 'Claude', 'FastAPI'],
    links: { github: null, demo: null },
  },
  {
    name: 'PlanVoyage',
    blurb:
      'A full-stack travel planning platform that helps users discover destinations, create personalized day-by-day itineraries, and manage complete trips in one place.',
    highlights: [
      'Streamlined destination discovery and itinerary creation',
      'Implemented role-based access control for secure trip management',
    ],
    stack: ['React', 'Node.js', 'Express', 'REST APIs'],
    links: { github: null, demo: null },
},
  // {
  //   name: 'Realtime Voice Assistant',
  //   placeholder: true,
  //   blurb:
  //     'Placeholder — a low-latency speech-to-speech assistant streaming transcription, reasoning, and replies in one loop.',
  //   highlights: [
  //     'Describe the streaming audio pipeline',
  //     'Note the latency budget and the ASR and TTS models',
  //   ],
  //   stack: ['Python', 'FastAPI', 'Whisper', 'Next.js'],
  //   links: { github: null, demo: null },
  // },
]

/**
 * `slug` maps to a Simple Icons logo. `hex` is only needed as a fallback color
 * for names that have no brand logo available (trademark removals, generic
 * concepts) — those render as a colored monogram tile instead.
 */
export const skills = [
  {
    group: 'Languages',
    items: [
      { name: 'Java', slug: 'openjdk', hex: 'E76F00' },
      { name: 'Python', slug: 'python' },
      { name: 'JavaScript', slug: 'javascript' },
      { name: 'TypeScript', slug: 'typescript' },
      { name: 'SQL', slug: null, hex: '4479A1' },
    ],
  },
  {
    group: 'Frameworks',
    items: [
      { name: 'Spring Boot', slug: 'springboot' },
      { name: 'React', slug: 'react' },
      { name: 'Next.js', slug: 'nextdotjs' },
      { name: 'Angular', slug: 'angular' },
      { name: 'Flask', slug: 'flask' },
      { name: 'FastAPI', slug: 'fastapi' },
      { name: 'Node.js', slug: 'nodedotjs' },
      { name: 'JPA/Hibernate', slug: 'hibernate' },
    ],
  },
  {
    group: 'AI & ML',
    items: [
      { name: 'LangGraph', slug: 'langgraph' },
      { name: 'LlamaIndex', slug: null, hex: '7B61FF' },
      { name: 'Claude', slug: 'claude' },
      { name: 'Qdrant', slug: 'qdrant' },
      { name: 'Pinecone', slug: null, hex: '1C17FF' },
      { name: 'Whisper', slug: null, hex: '412991' },
    ],
  },
  {
    group: 'Databases',
    items: [
      { name: 'PostgreSQL', slug: 'postgresql' },
      { name: 'MongoDB', slug: 'mongodb' },
      { name: 'Oracle', slug: null, hex: 'F80000' },
      { name: 'Redis', slug: 'redis' },
    ],
  },
  {
    group: 'Cloud & Infrastructure',
    items: [
      { name: 'AWS', slug: null, hex: 'FF9900' },
      { name: 'Azure', slug: null, hex: '0078D4' },
      { name: 'Docker', slug: 'docker' },
      { name: 'Kubernetes', slug: 'kubernetes' },
      { name: 'RabbitMQ', slug: 'rabbitmq' },
      { name: 'Jenkins', slug: 'jenkins' },
      { name: 'GitHub Actions', slug: 'githubactions' },
      { name: 'Grafana', slug: 'grafana' },
      { name: 'Linux', slug: 'linux' },
      { name: 'Git', slug: 'git' },
    ],
  },
  {
    group: 'Testing & Practices',
    items: [
      { name: 'JUnit 5', slug: 'junit5' },
      { name: 'Mockito', slug: null, hex: '78A641' },
      { name: 'Microservices', slug: null, hex: '0EA5E9' },
      { name: 'Distributed Systems', slug: null, hex: '8B5CF6' },
      { name: 'Agile', slug: null, hex: '10B981' },
    ],
  },
]

export const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'contact', label: 'Contact' },
]
