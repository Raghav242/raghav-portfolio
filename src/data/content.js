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
  // The hero's fuller version of `role`; the footer keeps the short one.
  headline: 'Software Engineer · Backend, Full Stack & AI',
  tagline: 'I build scalable systems and AI-powered products that solve real problems.',
  location: 'Boston, MA',
  photo: '/profile1.jpg',
  resume: '/Raghavendra-Kulkarni-Resume.pdf',
  email: 'raghavendrahk242@gmail.com',
  phone: '857-654-2114',
  links: {
    github: 'https://github.com/Raghav242',
    linkedin: 'https://www.linkedin.com/in/raghavendra-kulkarni-599815185/',
  },
}

/** Career-wide reach. Per-role numbers live with each role in `experience`. */
export const stats = [
  { value: '3+', label: 'Years building production software' },
  { value: '300K+', label: 'Users on systems I’ve improved' },
  { value: '500+', label: 'Enterprise tenants on platforms I’ve built' },
]

export const about = {
  intro: [
    `Hey, I’m Raghav 👋 I build fast, reliable software — from scalable backend systems to AI-powered products people actually use.`,
    `I enjoy solving hard engineering problems, whether it’s optimizing a slow API, designing distributed systems, or turning AI models into production-ready applications.`,
  ],
  philosophy: `Fast is a feature. Boring technology is underrated. If it isn’t instrumented, it isn’t done.`,
  facts: [
    { label: 'Location', value: 'Boston, MA' },
    { label: 'Graduating', value: 'December 2026' },
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
 * Ordered most-recent first, so the current role leads. `role` and `period`
 * label the company's tab or accordion header; the detail comes from
 * `positions`. A company with more than one position (Cognizant) shows each
 * with its own title and dates, so the progression stays visible.
 *
 * Each position is written problem → solution → impact, in plain language:
 *   summary — one or two sentences anyone can follow
 *   metrics — two or three outcomes, shown as large figures
 *   points  — the main problems solved (optional)
 *   story   — an optional extra paragraph behind "Read more"
 * Technology names stay out of this section; Skills and the resume carry them.
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
    positions: [
      {
        summary:
          'I build AI tools that take slow, manual academic work off the plates of faculty and students — and make them dependable enough for everyday use.',
        metrics: [
          { value: '8h → 30m', label: 'Workflow processing time' },
          { value: '300+', label: 'Active users' },
          { value: '10+', label: 'Faculty adopted' },
        ],
        points: [
          'Faculty were losing a full working day to evaluation workflows. I helped build Ava, a platform that gets the same work done in under 30 minutes.',
          'Practicing a conversation is hard without honest feedback. I built Lyra, a voice coaching platform where people practice out loud and get structured feedback.',
        ],
        story:
          'The hard part of AI tools isn’t the demo — it’s making them trustworthy. Answers need to stay grounded in the right sources, and slow steps like transcription and voice generation can’t leave someone staring at a spinner. Much of my work is the unglamorous plumbing that keeps these workflows accurate and responsive.',
      },
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
    positions: [
      {
        summary:
          'Engineers were losing time to slow internal tools. I helped make them fast, and made the code behind them safer to change.',
        metrics: [
          { value: '80s → 2s', label: 'Key workflow load time' },
          { value: '200+', label: 'Engineers who rely on it' },
          { value: '−50%', label: 'Production regressions' },
        ],
        points: [
          'A circuit-board workflow engineers depended on took over 80 seconds to load. I rebuilt how its screens fetch and load data — it now opens in about 2 seconds.',
          'Shipping changes was slow and risky. I automated builds and deployments and added thorough tests, so deploys got 45% faster and regressions fell by half.',
        ],
        story:
          'I also built the services that bring data from the company’s core business systems into one engineering platform, which handles 10,000+ transactions a day. Untangling tightly coupled code along the way made that platform easier — and safer — for the next engineer to work on.',
      },
    ],
  },
  {
    id: 'cognizant',
    role: 'Intern → Software Engineer',
    company: 'Cognizant Technology Solutions',
    initials: 'CT',
    logo: '/logos/cognizant.png',
    location: 'Bengaluru, India',
    period: 'Apr 2022 – Aug 2024',
    positions: [
      {
        role: 'Software Engineer',
        period: 'Oct 2022 – Aug 2024',
        summary:
          'Every new enterprise environment meant days of repetitive, hands-on server setup. I helped automate it, so teams could stand up environments in under an hour and ship more often.',
        metrics: [
          { value: '40+ hrs', label: 'Manual setup saved per environment' },
          { value: '500+', label: 'Enterprise tenants onboarded' },
          { value: '3×', label: 'Faster release cadence' },
        ],
        points: [
          'Environments took days to set up by hand. I automated provisioning and deployment across three cloud providers, bringing spin-up under 45 minutes.',
          'Releases were infrequent and hard to keep an eye on. I built release pipelines with monitoring built in, which tripled how often we shipped.',
        ],
        story:
          'The platform replaced a patchwork of manual server sessions and runbooks with a self-service tool. Beyond the automation, I worked on its web app and APIs, cutting the time its workflows took by 60%.',
      },
      {
        role: 'Software Engineer Intern',
        period: 'Apr 2022 – Sep 2022',
        summary:
          'I moved core parts of an aging, high-traffic platform onto a modern stack and fixed the slow database queries underneath — making pages faster and ending the timeouts users kept hitting.',
        metrics: [
          { value: '−40%', label: 'Page latency' },
          { value: '300K+', label: 'Users freed from timeouts' },
        ],
      },
    ],
  },
]

/**
 * Cards show `art`, `name`, `blurb` and `stack` up front; `details` sit behind
 * "Explore project". `status: 'in-progress'` adds the badge, and splits the
 * stack into `stack` (in use today) and `planned`. `featured` widens the card
 * to two grid columns — only use it when the count still fills whole rows
 * (with eight projects, none is featured).
 *
 * `art` picks a conceptual line illustration from ProjectArt.jsx — none of
 * them are screenshots. Links stay null until a repo or demo is public.
 */
export const projects = [
  {
    name: 'AI Teaching Assistant',
    art: 'tutor',
    blurb: 'An AI tutor that answers graduate finance students’ questions from their own course material.',
    stack: ['React', 'Flask', 'Pinecone', 'Claude'],
    details: {
      problem:
        'Students needed help outside office hours, but a general chatbot doesn’t know the course — and can easily cross academic-integrity lines.',
      solution:
        'It searches the course’s own Canvas content and answers from it, with guardrails that keep it within what the course allows.',
      features: [
        'Answers grounded in the course’s Canvas material',
        'Guardrails scoped to academic-integrity rules',
        'Used by 50+ students in a graduate finance course',
      ],
      tech: 'React and Flask, with course content indexed in Pinecone and answers from Claude.',
    },
    links: { github: null, demo: null },
  },
  {
    name: 'PlanVoyage',
    art: 'route',
    blurb: 'A trip planner for discovering destinations and turning them into day-by-day itineraries.',
    stack: ['React', 'Node.js', 'PostgreSQL', 'Docker'],
    details: {
      problem: 'Trip ideas tend to end up scattered across browser tabs, notes, and group chats.',
      solution:
        'PlanVoyage puts discovery and planning in one place: find destinations, build out the days, and save the trip to share.',
      features: [
        'Day-by-day itinerary builder with saved trips',
        'Shared trips with role-based access',
        'Secure sign-in',
      ],
      tech: 'React and Node.js on PostgreSQL, containerized with Docker and deployed to AWS through automated pipelines.',
    },
    links: { github: null, demo: null },
  },
  {
    name: 'Daybook',
    art: 'dashboard',
    status: 'in-progress',
    blurb:
      'One place to organize your day — tasks, calendars, budgets, meals, and personal information, with AI to help you find what you need.',
    stack: ['React', 'TypeScript', 'FastAPI', 'PostgreSQL'],
    planned: ['LangGraph', 'LlamaIndex', 'Qdrant', 'Local LLMs'],
    details: {
      problem:
        'Everyday life is spread across a to-do app, a calendar, a grocery list, a spreadsheet of bills, and a folder of documents — none of which talk to each other.',
      solution:
        'Daybook brings them into a single dashboard, with an account for each person who uses it. The foundation is built; the planning and AI layers come next.',
      featuresLabel: 'Where it stands',
      features: [
        'Working today: tasks, a calendar agenda, grocery lists, and bill tracking',
        'Working today: secure multi-user accounts and a unified dashboard',
        'Planned: meal planning, budgets, and AI search and Q&A over your own documents',
      ],
      tech: 'A React and TypeScript front end over a FastAPI and PostgreSQL backend, tested on both sides. The AI layer is planned around self-hosted models, so personal data stays private.',
    },
    links: { github: null, demo: null },
  },
  {
    name: 'BudgetAI',
    art: 'score',
    blurb: 'A budgeting app that explains your spending and sums up your financial health in one score.',
    stack: ['React', 'FastAPI', 'PostgreSQL', 'LLM'],
    details: {
      problem: 'A bank statement shows what you spent — not whether you’re on track.',
      solution:
        'BudgetAI turns transactions into plain-language insights and a single 0–100 score you can check at a glance.',
      features: [
        'Financial health score built from budget, savings, and spending',
        'AI-written insights over your own transactions',
      ],
      tech: 'A React front end and FastAPI backend on PostgreSQL, with an LLM generating the insights.',
    },
    links: { github: null, demo: null },
  },
  {
    name: 'Open-Source LLM Server',
    art: 'server',
    blurb: 'Self-service, time-boxed access to open-source LLMs on a shared on-prem GPU server.',
    stack: ['React', 'Flask', 'Linux'],
    details: {
      problem:
        'A GPU server is valuable and easy to monopolize — sharing it fairly needs a way to manage who uses it, and when.',
      solution: 'People reserve a time slot and receive credentials that expire when it ends.',
      features: ['Reservable, time-bound credentials', 'Access over a REST API or SSH'],
      tech: 'A React and Flask app running on a Linux GPU host.',
    },
    links: { github: null, demo: null },
  },
  {
    name: 'Food Calorie Prediction',
    art: 'vision',
    blurb: 'Take a photo of a meal and get the dish identified, with an estimate of its calories.',
    stack: ['Python', 'TensorFlow'],
    details: {
      problem: 'Logging calories by hand is tedious enough that most people give up on it.',
      solution:
        'A vision model recognizes the dish from a photo, then looks up its nutrition data to estimate the calories.',
      features: ['Recognizes 101 food categories', 'Calorie estimates from USDA FoodData'],
      tech: 'An EfficientNetV2-B0 model trained on Food-101 with TensorFlow, paired with the USDA FoodData API.',
    },
    links: { github: null, demo: null },
  },
  {
    name: 'Image Editing App',
    art: 'editor',
    blurb: 'A desktop image editor with filters, color tools, and compression — usable from a GUI or a script.',
    stack: ['Java', 'Swing', 'JUnit'],
    details: {
      problem:
        'Most edits are a quick tweak, but some are the same steps on image after image — one tool should handle both.',
      solution:
        'The same editing engine sits behind a Swing interface and a command line that runs scripts, so a batch of edits can be replayed automatically.',
      features: [
        'Blur, sharpen, sepia, grayscale, flips, and brightness',
        'Color correction, levels, and RGB histograms',
        'Split view to compare an edit against the original',
        'Image compression built on a Haar wavelet transform',
      ],
      tech: 'Plain Java in a Model-View-Controller design, with a Swing GUI and JUnit tests that use mock models and controllers.',
    },
    links: { github: 'https://github.com/Raghav242/ImageEditingApp', demo: null },
  },
  {
    name: 'Agentic Workflow Engine',
    art: 'agents',
    status: 'in-progress',
    blurb: 'An orchestration layer where AI agents plan tasks, use tools, and hand off work to each other.',
    stack: [],
    planned: ['Python', 'LangGraph', 'Claude', 'FastAPI'],
    details: {
      problem: 'Agent demos are easy. Agents that recover from failures — and can be measured — are not.',
      solution:
        'An engine focused on the parts demos skip: the agent loop, tool calling, and what happens when things go wrong.',
      featuresLabel: 'Focus areas',
      features: ['Agent loop and tool-calling design', 'Retries, failure modes, and evaluation'],
    },
    links: { github: null, demo: null },
  },
]

/**
 * Grouped by what the work needs rather than by tool type. `featured` items
 * are the default view (16 of them, four per group); "View all technologies"
 * adds the rest. Groups with no featured items, like Testing, only appear in
 * the full view.
 *
 * `slug` maps to a Simple Icons logo. `hex` is only needed as a fallback color
 * for names that have no brand logo available (trademark removals, generic
 * concepts) — those render as a colored monogram tile instead.
 */
export const skills = [
  {
    group: 'Languages',
    items: [
      { name: 'Java', slug: 'openjdk', hex: 'E76F00', featured: true },
      { name: 'Python', slug: 'python', featured: true },
      { name: 'TypeScript', slug: 'typescript', featured: true },
      { name: 'SQL', slug: null, hex: '4479A1', featured: true },
      { name: 'JavaScript', slug: 'javascript' },
    ],
  },
  {
    group: 'Backend & Frontend',
    items: [
      { name: 'Spring Boot', slug: 'springboot', featured: true },
      { name: 'React', slug: 'react', featured: true },
      { name: 'Next.js', slug: 'nextdotjs', featured: true },
      { name: 'FastAPI', slug: 'fastapi', featured: true },
      { name: 'Angular', slug: 'angular' },
      { name: 'Flask', slug: 'flask' },
      { name: 'Node.js', slug: 'nodedotjs' },
      { name: 'JPA/Hibernate', slug: 'hibernate' },
    ],
  },
  {
    group: 'AI & Data',
    items: [
      { name: 'LangGraph', slug: 'langgraph', featured: true },
      { name: 'Qdrant', slug: 'qdrant', featured: true },
      { name: 'PostgreSQL', slug: 'postgresql', featured: true },
      { name: 'Redis', slug: 'redis', featured: true },
      { name: 'LlamaIndex', slug: null, hex: '7B61FF' },
      { name: 'Claude', slug: 'claude' },
      { name: 'Pinecone', slug: null, hex: '1C17FF' },
      { name: 'Whisper', slug: null, hex: '412991' },
      { name: 'MongoDB', slug: 'mongodb' },
      { name: 'Oracle', slug: null, hex: 'F80000' },
    ],
  },
  {
    group: 'Cloud & Infrastructure',
    items: [
      { name: 'AWS', slug: null, hex: 'FF9900', featured: true },
      { name: 'Docker', slug: 'docker', featured: true },
      { name: 'Kubernetes', slug: 'kubernetes', featured: true },
      { name: 'RabbitMQ', slug: 'rabbitmq', featured: true },
      { name: 'Azure', slug: null, hex: '0078D4' },
      { name: 'Jenkins', slug: 'jenkins' },
      { name: 'GitHub Actions', slug: 'githubactions' },
      { name: 'Grafana', slug: 'grafana' },
      { name: 'Linux', slug: 'linux' },
      { name: 'Git', slug: 'git' },
    ],
  },
  {
    group: 'Testing',
    items: [
      { name: 'JUnit 5', slug: 'junit5' },
      { name: 'Mockito', slug: null, hex: '78A641' },
    ],
  },
]

/** Ways of working rather than tools — shown as plain text in the full view. */
export const practices = ['Microservices', 'Distributed Systems', 'Agile']

export const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'contact', label: 'Contact' },
]
