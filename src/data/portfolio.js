// src/data/portfolio.js
// All portfolio content lives here so the page components only deal with layout.

import intervyoShot from '../assets/projects/intervyo.webp';
import ecoPalletsShot from '../assets/projects/eco-pallets.webp';
import ecsShot from '../assets/projects/ecs-help-desk.webp';
import cairoMetroShot from '../assets/projects/cairo-metro.webp';
import thesisShot from '../assets/projects/thesis.webp';

// Months from a 'YYYY-MM' start date through the current month, counted inclusively
export const durationSince = (start) => {
  const [year, month] = start.split('-').map(Number);
  const now = new Date();
  const months = (now.getFullYear() - year) * 12 + (now.getMonth() + 1 - month) + 1;
  const yrs = Math.floor(months / 12);
  const mos = months % 12;
  return [
    yrs > 0 && `${yrs} yr${yrs > 1 ? 's' : ''}`,
    mos > 0 && `${mos} mo${mos > 1 ? 's' : ''}`,
  ].filter(Boolean).join(' ');
};

export const profile = {
  name: 'Yassa Ashraf',
  role: 'Software Engineer',
  focus: 'Backend, Cloud & AI Systems',
  tagline:
    'I build reliable backend, cloud, and AI-enabled systems, from API design and infrastructure as code all the way to production.',
  location: 'Cairo, Egypt',
  email: 'yassa.ashraf56@gmail.com',
  cv: '/Yassa_Ashraf_CV.pdf',
  linkedin: 'https://www.linkedin.com/in/yassa-ashraf-b59309231/',
  github: 'https://github.com/Yassa122',
  x: 'https://x.com/yassa_ashraf56',
};

export const highlights = [
  { value: '10+', label: 'EV charging networks integrated at EV Cozmo' },
  { value: 'R² 0.918', label: 'pIC50 prediction in my Elsevier-published model' },
  { value: 'A+', label: 'Bachelor thesis on explainable AI' },
];

export const experiences = [
  {
    title: 'Senior Software Engineer',
    company: 'Polyshares',
    type: 'Contract',
    period: 'Oct 2026 – Present',
    duration: durationSince('2026-10'),
    current: true,
    location: 'Austin, TX, USA · Remote',
    link: 'https://polyshares.com',
    bullets: [
      'Build and ship backend and product features for a data-licensing marketplace on Supabase (PostgreSQL, PL/pgSQL, row-level security), JavaScript web apps, and GitHub Actions.',
      'Own production database releases through a guarded migration pipeline: per-migration preflight checks, function fingerprint guards, post-deploy readbacks, rollbacks, and rolled-back staging rehearsals before each release.',
      "Delivered the seller intake redesign and moved the advanced-broker portal onto the shared intake module, extending broker read, save, and submit APIs so brokers can complete and submit intakes on a seller's behalf.",
      'Reviewed, validated end to end on staging, and released an LLM-assisted LOI pricing service (Anthropic Claude) that produces staff-only price proposals after intake approval, with configurable reviewer routing; diagnosed and fixed a worker crash found during staging validation.',
      'Improved CRM pipeline performance with indexed board queries and paged ticket loading; shipped authentication fixes (Google account selection, invite recovery, returning-user sign-up) and deal-assignment routing hotfixes.',
      "Review teammates' pull requests and coordinate releases with product, keeping staging and production in sync.",
    ],
    skills: ['Supabase', 'PostgreSQL', 'PL/pgSQL', 'Row-Level Security', 'JavaScript', 'GitHub Actions', 'LLMs', 'Database Migrations'],
  },
  {
    title: 'Mid-Level Software Engineer',
    company: 'Deloitte',
    type: 'Full-time',
    period: 'Sep 2026 – Present',
    duration: durationSince('2026-09'),
    current: true,
    location: 'Cairo, Egypt · Hybrid',
    link: 'https://www.deloitte.com/',
    bullets: [
      'Design and build cloud-native backend services and platform components using AWS, TypeScript, Node.js, and Terraform.',
      'Develop secure APIs, event-driven workflows, and infrastructure components for enterprise platforms in regulated environments.',
      'Implement infrastructure as code and CI/CD workflows for repeatable validation, deployment, and environment consistency.',
      'Collaborate with cross-functional and international teams on cloud architecture, integration, testing, security, and production delivery.',
    ],
    skills: ['AWS', 'TypeScript', 'Node.js', 'Terraform', 'Event-Driven Architecture', 'CI/CD'],
  },
  {
    title: 'Senior Software Engineer',
    company: 'EV Cozmo',
    type: 'Contract',
    period: 'Jun 2026 – Oct 2026',
    duration: '5 mos',
    location: 'Greater London, UK · Remote',
    link: 'https://evcozmo.com',
    bullets: [
      'Reverse-engineered mobile clients, local data stores, and network behavior across 10+ EV charging apps to integrate station and live-availability data where public APIs were incomplete or unavailable.',
      'Recovered and normalized station inventories from Firestore caches, local app storage, and network responses, significantly increasing charging-location coverage.',
      'Architected a pluggable live-status provider layer that syncs multiple charging networks in parallel with source-level timeouts, rate-limit-aware auth, and fail-soft error handling.',
      'Built geospatial entity-resolution and deduplication pipelines using MongoDB geospatial queries and GeoJSON indexing to map third-party records to canonical stations.',
      'Developed clean-architecture station services for CRUD, nearest-station search, favorites, and image management on AWS Lambda, API Gateway, and Mongoose.',
      'Delivered Flutter station-discovery features (maps, filters, favorites) and shipped production releases to the App Store and Google Play.',
      'Maintained CI/CD pipelines with GitHub Actions and SST across development and production.',
    ],
    skills: ['Flutter', 'MongoDB', 'Mongoose', 'AWS Lambda', 'API Gateway', 'GitHub Actions', 'SST', 'Clean Architecture', 'Reverse Engineering'],
  },
  {
    title: 'Associate Software Engineer',
    company: 'Vodafone Intelligent Solutions (VOIS)',
    type: 'Full-time',
    period: 'Jul 2025 – Sep 2026',
    duration: '1 yr 3 mos',
    location: 'Cairo, Egypt · Hybrid',
    link: 'https://www.vodafone.com/careers/',
    bullets: [
      'Developed enterprise applications using ASP.NET Web API, Angular, Entity Framework Core, and reusable backend architecture across SerieTool, VEB Tool, and DLM Pricing Tool.',
      'Designed and built a reusable ASP.NET Core project template adopted across multiple internal applications, implementing JWT authentication with token revocation, generic repository and Unit of Work patterns, centralized dependency injection, Serilog, Hangfire, AutoMapper, and audit tracking.',
      "Built SerieTool's Angular admin panel for workforce and order management, including agent management, manual order assignment, backlog handling, order categorization, product management, leave management, and daily reporting.",
      'Designed and delivered the VEB Tool from initial architecture to production, building an Excel-based order ingestion pipeline integrated with RPA workflows, order lifecycle tracking, delay monitoring, and full audit history.',
      'Developed analytics dashboards for order statistics, delivery performance, customer insights, and operational bottlenecks, alongside role-based access control and customer management features.',
      'Contributed to the DLM Pricing Tool by developing backend and frontend functionality, resolving production issues, implementing advanced filtering, and improving enterprise order and pricing workflows.',
      'Improved code quality and maintainability through shared components, standardized service-layer patterns, stronger validation and error handling, code reviews, and mentoring junior developers.',
      'Supported UAT, stakeholder demonstrations, release preparation, and production delivery within enterprise security and development standards.',
    ],
    skills: ['ASP.NET Web API', 'C#', 'Angular', 'TypeScript', 'Entity Framework Core', 'SQL', 'JWT', 'Hangfire', 'Serilog', 'RBAC'],
  },
  {
    title: 'Software Engineer Intern',
    company: 'Vodafone Intelligent Solutions (VOIS)',
    type: 'Internship',
    period: 'Feb 2025 – Jul 2025',
    duration: '6 mos',
    location: 'Cairo, Egypt · Hybrid',
    link: 'https://www.vodafone.com/careers/',
    bullets: [
      'Contributed to ASP.NET Web API backend enhancements and Angular frontend development.',
      'Improved performance of critical endpoints through database query and API optimization.',
      'Implemented unit tests and participated in peer reviews and software quality processes.',
    ],
    skills: ['ASP.NET Web API', 'Angular', 'SQL', 'Unit Testing'],
  },
  {
    title: 'AI Software Engineer',
    company: 'VIXI AI',
    type: 'Contract',
    period: 'Sep 2025 – Jan 2026',
    duration: '5 mos',
    location: 'Remote · UAE',
    link: 'https://vixiai.co/',
    bullets: [
      'Designed NLP and retrieval pipelines using transformer-based models for enterprise AI use cases.',
      'Built containerized AI inference services with deployment automation, autoscaling, and monitoring.',
      'Collaborated with product and data teams to translate business requirements into production AI capabilities.',
      'Improved development velocity by introducing preview and staging environments for faster iteration.',
    ],
    skills: ['Python', 'Node.js', 'NLP', 'Transformers', 'Docker', 'Monitoring', 'CI/CD'],
  },
  {
    title: 'Software Engineer',
    company: 'Xylem Software',
    type: 'Contract',
    period: 'Jun 2025 – Nov 2025',
    duration: '6 mos',
    location: 'Remote · Egypt',
    link: 'https://xylemsoftware.com',
    bullets: [
      'Delivered web and mobile functionality in a monorepo using React, React Native, Node.js, and shared application services.',
      'Led backend development for analytics and operational platforms, including ingestion APIs and dashboard services.',
      'Improved application performance through caching, query optimization, and backend service improvements.',
    ],
    skills: ['React', 'React Native', 'Node.js', 'Analytics', 'Caching', 'SQL'],
  },
  {
    title: 'Mid-Level Backend Engineer',
    company: 'Trevi',
    type: 'Full-time',
    period: 'Oct 2024 – Sep 2025',
    duration: '1 yr',
    location: 'Cairo, Egypt · Hybrid',
    link: 'https://trevi.app',
    bullets: [
      'Architected wallet and loyalty backend services using NestJS, Prisma, and relational databases.',
      'Integrated cashback and promotion workflows supporting transaction-heavy financial use cases.',
      'Deployed services on AWS with health checks, retry mechanisms, monitoring, and reliability controls.',
    ],
    skills: ['NestJS', 'Prisma', 'Microservices', 'AWS', 'TypeScript'],
  },
  {
    title: 'Software Engineer',
    company: 'MM Solutions',
    type: 'Part-time',
    period: 'Jul 2024 – Mar 2025',
    duration: '9 mos',
    location: 'Remote · USA',
    link: 'https://mmsolutions.com',
    bullets: [
      'Led web integration work and optimized frontend loading, caching, and application performance.',
      'Automated dispatch and operational workflows supporting Amazon Freight partner operations.',
    ],
    skills: ['Web Integration', 'Performance Optimization', 'Caching', 'Automation'],
  },
  {
    title: 'Full Stack Developer',
    company: 'Kinetics Egypt',
    type: 'Full-time',
    period: 'Aug 2024 – Oct 2024',
    duration: '3 mos',
    location: 'Cairo, Egypt · On-site',
    link: 'https://kineticsgroup.co/',
    bullets: [
      'Delivered cloud-hosted software solutions using AWS EC2 and S3 with secure environment configuration.',
      'Developed product features with engineering and product teams under tight delivery timelines.',
    ],
    skills: ['AWS', 'EC2', 'S3', 'Full-stack Development'],
  },
  {
    title: 'Full Stack Developer',
    company: 'Fiverr',
    type: 'Freelance',
    period: 'May 2023 – Oct 2023',
    duration: '6 mos',
    location: 'Remote',
    link: 'https://www.fiverr.com',
    bullets: [
      'Built custom web applications, dashboards, and interactive products for international clients.',
      'Managed delivery end to end, from requirements gathering and implementation through deployment and handover.',
    ],
    skills: ['JavaScript', 'Python', 'Java', 'C++'],
  },
  {
    title: 'Full Stack Developer Intern',
    company: 'Instatus',
    type: 'Internship',
    period: 'Jul 2022 – Sep 2022',
    duration: '3 mos',
    location: 'Cairo, Egypt',
    link: 'https://instatus.com',
    bullets: [
      'Developed frontend functionality using Next.js, GraphQL, and Tailwind CSS.',
      'Integrated GraphQL queries and mutations for real-time status-management workflows.',
      'Improved UI responsiveness and collaborated with backend engineers on schema integration.',
    ],
    skills: ['Next.js', 'GraphQL', 'Tailwind CSS'],
  },
];

export const publication = {
  title:
    'MoleculeX-Predictive: An augmentation of transformers with explainable AI and knowledge layers for efficient drug property prediction',
  venue: 'Array (Elsevier)',
  details: 'Volume 30 · July 2026 · Open Access',
  doi: '10.1016/j.array.2026.100820',
  link: 'https://doi.org/10.1016/j.array.2026.100820',
  scienceDirect: 'https://www.sciencedirect.com/science/article/pii/S2590005626001438',
  authors: ['Yassa Ashraf', 'Daniel Sameh', 'John Zaki', 'Amal Aboulhassan'],
  summary:
    'A knowledge-augmented ChemBERTa framework that combines high-accuracy molecular property prediction with transparent multi-modal explainability.',
  metrics: [
    { value: '0.918', label: 'pIC50 R²' },
    { value: '85%', label: 'Pharmacophore identification' },
  ],
  tags: ['Scaffold-based validation', 'Explainable AI', 'Open Access'],
};

export const bachelorThesis = {
  subject: 'Using Explainable AI Algorithms for Material Recognition',
  year: 2025,
  grade: 'A+',
  image: thesisShot,
  description:
    'ChemBERTa-based material-recognition models with post-hoc explainability, using attention visualization and feature attribution to make every prediction traceable. Served through Flask inference services on AWS with CI/CD, plus a Next.js dashboard for inspecting predictions and explanations in real time.',
  skills: ['Python', 'PyTorch', 'ChemBERTa', 'Explainable AI', 'SHAP', 'LIME', 'Flask', 'SageMaker', 'EC2', 'S3', 'Next.js'],
};

export const projects = [
  {
    name: 'Beity App',
    kind: 'Cloud kitchens',
    description:
      'Cloud-kitchen ordering and delivery platform with order lifecycle management, role-based authorization, clean backend architecture, and AWS deployment pipelines.',
    stack: ['NestJS', 'React Native', 'AWS', 'PostgreSQL'],
    icon: 'kitchen',
  },
  {
    name: 'Intervyo',
    kind: 'Interview prep',
    description:
      'Interview prep platform covering full-stack, DevOps, cloud, AI/ML, data engineering, and system design, with 64+ questions, interactive visualizations, and a live compiler.',
    stack: ['Next.js', 'Node.js', 'TypeScript', 'PostgreSQL'],
    year: 2025,
    link: 'https://intervyo.vercel.app/',
    image: intervyoShot,
  },
  {
    name: 'Eco-Pallets',
    kind: 'Microservices',
    description:
      'E-commerce platform for plastic pallets built on product, order, and payment microservices that communicate asynchronously over Kafka.',
    stack: ['NestJS', 'Next.js', 'Kafka', 'Microservices'],
    year: 2024,
    link: 'https://eco-pallets.vercel.app',
    image: ecoPalletsShot,
  },
  {
    name: 'ECS Help Desk',
    kind: 'Ticketing',
    description:
      'Ticket-management platform supporting roles, SLAs, real-time updates, analytics, and operational workflows.',
    stack: ['MERN', 'Tailwind CSS'],
    year: 2023,
    link: 'https://ecs-project-omega.vercel.app/',
    image: ecsShot,
  },
  {
    name: 'Bookstore Serverless API',
    kind: 'Serverless API',
    description:
      'Serverless CRUD and search APIs with authentication, rate limiting, DynamoDB access patterns, CloudWatch monitoring, and CI/CD.',
    stack: ['AWS Lambda', 'API Gateway', 'DynamoDB'],
    year: 2024,
    link: 'https://github.com/Yassa122/BookStoreApp-AWS',
    icon: 'book',
  },
  {
    name: 'Cairo Metro',
    kind: 'Reservations',
    description:
      'Ticket reservation system for the Cairo Metro with seamless booking, subscriptions, and real-time updates for commuters.',
    year: 2023,
    link: 'https://cairometrosystem.onrender.com/',
    image: cairoMetroShot,
  },
];

export const moreProjects = [
  {
    name: 'Task Titan',
    description: 'Task management app with reminders and collaboration tools.',
    year: '2023',
  },
  {
    name: 'Amaria',
    description: 'T-shirt e-commerce storefront with a product catalog, cart, and secure checkout.',
    year: '2024',
    link: 'https://amaria-local.vercel.app',
  },
  {
    name: 'Myko',
    description: 'Fashion e-commerce storefront with a product catalog, cart, and secure checkout.',
    year: '2024',
    link: 'https://myko-store.vercel.app',
  },
];

export const skillGroups = [
  { name: 'Languages', items: ['TypeScript', 'JavaScript', 'Java', 'Python', 'C#', 'SQL', 'Dart', 'Bash'] },
  { name: 'Backend', items: ['Node.js', 'NestJS', 'Express', 'Spring Boot', 'ASP.NET Web API', 'REST', 'GraphQL', 'Microservices'] },
  { name: 'Frontend & Mobile', items: ['React', 'Next.js', 'Angular', 'React Native', 'Flutter', 'Tailwind CSS'] },
  {
    name: 'Cloud & DevOps',
    items: ['AWS', 'EC2', 'AWS Lambda', 'ECS', 'EKS', 'S3', 'API Gateway', 'CloudFront', 'CloudWatch', 'SageMaker', 'Terraform', 'Docker', 'Kubernetes', 'GitHub Actions', 'Jenkins', 'CI/CD'],
  },
  { name: 'Data', items: ['PostgreSQL', 'MySQL', 'MongoDB', 'DynamoDB', 'Redis', 'Prisma', 'Mongoose', 'JDBC'] },
  {
    name: 'AI & ML',
    items: ['Generative AI', 'LLMs', 'RAG', 'Agentic AI', 'Multi-Agent Systems', 'Hugging Face Transformers', 'ChemBERTa', 'Gemini', 'Google ADK', 'Embeddings', 'Semantic Retrieval', 'Explainable AI'],
  },
  {
    name: 'Architecture & Security',
    items: ['Clean Architecture', 'Domain-Driven Design', 'Event-Driven Architecture', 'Serverless Architecture', 'Distributed Systems', 'OAuth2', 'JWT', 'RBAC', 'API Security'],
  },
  { name: 'Testing & Observability', items: ['JUnit', 'Jest', 'Unit Testing', 'Integration Testing', 'Grafana', 'Logging', 'Monitoring'] },
];

export const education = {
  degree: 'Bachelor of Computer Science, Software Engineering',
  school: 'German International University, Cairo',
  period: 'Oct 2021 – Jul 2025',
};

export const certifications = [
  {
    name: 'Oracle Cloud Infrastructure Foundations Associate',
    issuer: 'Oracle',
    date: 'Mar 2025',
    link: 'https://catalog-education.oracle.com/ords/certview/sharebadge?id=3F472699D59B6B493C53F5B67CE0CE76F46E57F5F1EFFFFB6A5148567F93FA7F',
  },
  { name: 'Career Essentials in Generative AI', issuer: 'Microsoft / LinkedIn', date: 'Oct 2025' },
  { name: 'Explainable AI (XAI)', issuer: 'Duke University', date: 'Oct 2025' },
  { name: 'Interpretable Machine Learning', issuer: 'Duke University', date: 'Oct 2025' },
  { name: 'Ethics in the Age of Generative AI', issuer: 'LinkedIn', date: 'Oct 2025' },
];

export const languages = [
  { name: 'English', level: 'Professional' },
  { name: 'Arabic', level: 'Native' },
  { name: 'German', level: 'Limited working' },
];
