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
    `I'm a software engineer finishing a Master's in Computer Science at Northeastern. I'm drawn to the unglamorous questions — why a request is slow, why a pipeline is flaky, why a system that worked at ten users falls over at ten thousand.`,
    `Most of my work is backend — REST APIs, data modeling, and the caching and query layers underneath. Lately I've been building AI infrastructure at Northeastern's DASH AI Hub: retrieval pipelines over real course content, agent workflows that grade and reason, and the inference layer that keeps GPU-backed services from buckling under load.`,
  ],
  capabilities: [
    {
      title: 'Backend Engineering',
      text: 'REST APIs, service design, data modeling, and the query and caching work underneath.',
    },
    {
      title: 'Full-Stack Delivery',
      text: 'React and Next.js frontends wired to services I also own, so features ship whole.',
    },
    {
      title: 'AI Engineering',
      text: 'RAG pipelines, LangGraph agent workflows, and inference that scales past a single GPU.',
    },
    {
      title: 'Cloud & Delivery',
      text: 'Docker, Jenkins and GitHub Actions pipelines, with Prometheus and Grafana to catch failures.',
    },
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
      { value: '3 → 40', label: 'Inference workers' },
      { value: '10+', label: 'Faculty adopted' },
    ],
    stack: ['Next.js', 'Flask', 'LangGraph', 'LlamaIndex', 'Qdrant', 'RabbitMQ', 'Whisper'],
    points: [
      'Led development of an AI grading platform in Next.js, Flask, and LangGraph, cutting essay grading from 8+ hours to under 30 minutes across 10+ faculty.',
      'Built a semantic RAG pipeline with LlamaIndex, Qdrant, and metadata filtering, validating response quality through controlled experiments and faculty feedback.',
      'Scaled AI inference from 3 to 40 workers using shared Whisper services and RabbitMQ, eliminating GPU memory failures.',
      'Automated AWS and on-premises deployments with Docker and GitHub Actions.',
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
      'Built and tuned production engineering tools, from the React front end down to Oracle and the deployment pipeline.',
    metrics: [
      { value: '80s → 2s', label: 'Page latency' },
      { value: '10,000+', label: 'Daily transactions' },
      { value: '95%+', label: 'Test coverage' },
    ],
    stack: ['React', 'Java', 'Spring Boot', 'Oracle', 'Docker', 'Jenkins', 'Grafana'],
    points: [
      'Developed a production BOM Viewer and REST APIs in React, Java, Spring Boot, and Oracle, batching SAP requests and adding server-side caching for 10,000+ daily transactions.',
      'Refactored a data-intensive PCB app with lazy loading and asynchronous JavaScript, cutting page latency from 80s to 2s for 200+ engineers.',
      'Automated Docker deployments through Jenkins CI/CD, instrumenting services with Prometheus and Grafana plus automated failure alerts.',
      'Engineered JUnit 5 and Mockito suites to 95%+ coverage, reducing regression defects by 50%.',
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
      "Shipped platform features and multi-cloud automation for SAP's provisioning tooling and Cognizant's internal portal.",
    metrics: [
      { value: '−40%', label: 'Page latency' },
      { value: '40+ hrs', label: 'Saved per deployment' },
      { value: '3 clouds', label: 'AWS, Azure, HANA' },
    ],
    stack: ['React', 'Python', 'Java', 'Angular', 'AWS', 'Azure', 'SQL'],
    points: [
      "Implemented React interfaces and Python REST services for SAP's Service Provider Cockpit, enabling consultants to manage server provisioning and lifecycle workflows.",
      "Extended the Cockpit's Python automation layer across AWS, Azure, and SAP HANA Cloud, eliminating 40+ hours of manual setup per environment deployment.",
      'Migrated core OneCognizant modules from .NET to Java and Angular, optimizing SQL queries to cut page latency by 40% and eliminate recurring timeouts.',
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
    summary: 'Built a service-booking platform end to end during a six-month internship.',
    stack: ['Angular', 'Spring Boot', 'PostgreSQL', 'JWT'],
    points: [
      'Built a service-booking platform using Angular and Spring Boot, integrating JWT authentication and PostgreSQL for secure booking workflows.',
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
