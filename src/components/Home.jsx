// src/components/Portfolio.jsx

import React from 'react';
import { motion } from 'framer-motion';
import {
  FaLinkedin,
  FaGithub,
  FaEnvelope,
  FaDownload,
} from 'react-icons/fa';
import yassaPhoto from '../../src/components/logo/99081198.jpeg'; // adjust path as needed
import { Link } from 'react-router-dom';
import GitHubContributions from './GitHubContributions';

const Portfolio = () => {
  const projects = [
    {
      name: 'Intervyo - Tech Interview Prep',
      description:
        'Comprehensive tech interview preparation platform covering full-stack development, DevOps, cloud computing, AI/ML, data engineering, and system design. Features 64+ questions, interactive visualizations, live compiler, and detailed explanations for all experience levels.',
      year: 2025,
      link: 'https://intervyo.vercel.app/',
    },
    {
      name: 'Eco-Pallets Project',
      description:
        'A comprehensive platform for managing and purchasing eco-friendly plastic pallets, utilizing a microservice architecture to ensure scalability and reliability.',
      year: 2024,
      link: 'https://eco-pallets.vercel.app',
    },
    {
      name: 'ECS Help Desk',
      description:
        'An intuitive and responsive help desk system combining modern web technologies to enhance user experience and streamline support processes.',
      year: 2023,
      link: 'https://ecs-project-omega.vercel.app/',
    },
    {
      name: 'Task Titan',
      description:
        'A robust task management application designed to help users efficiently organize and track their tasks with advanced features like reminders and collaboration tools.',
      year: '2023-present',
      link: 'https://task-titan.top',
    },
    {
      name: 'Cairo Metro',
      description:
        'A user-friendly application for reserving Cairo Metro tickets, offering seamless booking and real-time updates to improve commuter convenience.',
      year: 2023,
      link: 'https://cairometrosystem.onrender.com/',
    },
    {
      name: 'Amaria E-Commerce',
      description:
        'A modern online shopping platform offering a wide range of t-shirt products with a user-friendly interface, secure payment options, and efficient delivery services.',
      year: 2024,
      link: 'https://amaria-local.vercel.app',
    },
    {
      name: 'Myko E-Commerce',
      description:
        'A modern online shopping platform offering a wide range of t-shirt products with a user-friendly interface, secure payment options, and efficient delivery services.',
      year: 2024,
      link: 'https://myko-store.vercel.app',
    },
    {
      name: 'Book Store App - AWS',
      description:
        'A simple yet powerful web application for managing a book store, built with a JavaScript stack and hosted on AWS for robust performance and scalability.',
      year: 2024,
      link: 'https://github.com/Yassa122/BookStoreApp-AWS',
    },
  ];

  const experiences = [
    {
      title: 'Associate Software Engineer',
      company: 'Vodafone Intelligent Solutions (VOIS)',
      type: 'Full-time',
      period: 'Jul 2025 – Present',
      duration: 'Present',
      location: 'Cairo, Egypt · Hybrid',
      link: 'https://www.vodafone.com/careers/',
      bullets: [
        'Developed and enhanced enterprise ASP.NET Web API services in an N-tier architecture.',
        'Implemented advanced filtering, pagination, and reusable API components.',
        'Refactored Angular modules to improve maintainability and reduce duplicated logic.',
        'Improved error handling, logging, and validation to increase system reliability.',
        'Supported UAT cycles and stakeholder demos while aligning solutions with security standards.',
      ],
      skills: [
        'ASP.NET Web API',
        'Angular',
        'N-Tier Architecture',
        'Git',
        'Ticketing Systems',
      ],
    },
    {
      title: 'AI Software Engineer',
      company: 'VIXI AI',
      type: 'Full-time',
      period: 'Sep 2025 – Jan 2026',
      duration: '5 mos',
      location: 'Remote · U.A.E',
      link: 'https://vixiai.co/',
      bullets: [
        'Designed and implemented NLP pipelines using transformer-based models and retrieval techniques.',
        'Built containerized inference services with autoscaling and monitoring.',
        'Collaborated with product and data teams to prioritize enterprise features.',
        'Reduced deployment and iteration cycles by introducing preview and staging environments.',
      ],
      skills: [
        'Python',
        'Node.js',
        'NLP',
        'Transformers',
        'Docker',
        'Monitoring',
        'CI/CD',
      ],
    },
    {
      title: 'Software Engineer',
      company: 'Xylem Software',
      type: 'Full-time',
      period: 'Jun 2025 – Nov 2025',
      duration: '6 mos',
      location: 'Remote · Egypt',
      link: 'https://xylemsoftware.com',
      bullets: [
        'Delivered web and mobile features in a monorepo using React, React Native, and Node.js.',
        'Led backend development for analytics platforms including ingestion APIs and dashboards.',
        'Improved application performance via caching strategies and database query optimization.',
      ],
      skills: [
        'React',
        'React Native',
        'Node.js',
        'Analytics',
        'Caching',
        'SQL',
      ],
    },
    {
      title: 'Intern Software Engineer',
      company: 'Vodafone Intelligent Solutions (VOIS)',
      type: 'Internship', 
      period: 'Feb 2025 – Jul 2025',
      duration: '6 mos',
      location: 'Cairo, Egypt · Hybrid',
      link: 'https://www.vodafone.com/careers/',
      bullets: [
        'Contributed to backend Web API enhancements and Angular UI refinements.',
        'Improved p95 response times for critical endpoints through query optimization.',
        'Implemented unit tests and participated in peer code reviews.',
      ],
      skills: [
        'ASP.NET Web API',
        'Angular',
        'N-Tier Architecture',
        'Git',
        'Ticketing Systems',
      ],
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
        'Architected wallet and loyalty microservices using NestJS and Prisma.',
        'Integrated cashback and promotion engines serving high transaction volumes.',
        'Deployed services on AWS with health checks, retries, and SLA monitoring.',
      ],
      skills: [
        'NestJS',
        'Prisma',
        'Microservices',
        'AWS',
        'Git',
        'TypeScript',
      ],
    },
    {
      title: 'Software Engineer',
      company: 'MM Solutions',
      type: 'Contract',
      period: 'Jul 2024 – Mar 2025',
      duration: '9 mos',
      location: 'Cairo, Egypt',
      link: 'https://mmsolutions.com',
      bullets: [
        'Led web integration initiatives and optimized frontend bundle size and caching.',
        'Automated dispatch workflows with Amazon Freight partners.',
      ],
      skills: [
        'Web Integration',
        'Performance Optimization',
        'Caching',
        'Automation',
        'Git',
      ],
    },
    {
      title: 'Full-stack Developer',
      company: 'Kinetics Egypt',
      type: 'Full-time',
      period: 'Aug 2024 – Oct 2024',
      duration: '3 mos',
      location: 'Cairo, Egypt · On-site',
      link: 'https://kineticsgroup.co/',
      bullets: [
        'Delivered AWS-based solutions using EC2 and S3 with secure configurations.',
        'Built features in collaboration with product teams under tight deadlines.',
      ],
      skills: [
        'AWS',
        'EC2',
        'S3',
        'Full-stack Development',
      ],
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
        'Designed custom web apps with high performance and intuitive UI.',
        'Built Python-based stock prediction apps (incl. Robinhood data).',
        'Created 2D games in Java & C++ per client specs.',
        'Collaborated globally to deliver high-quality, remote solutions.',
      ],
      skills: [
        'Prediction Markets',
        'Predictive Modeling',
        'JavaScript',
        'Python',
        'Java',
        'C++',
      ],
    },
    {
      title: 'Full Stack Developer',
      company: 'Instatus',
      type: 'Internship',
      period: 'Jul 2022 – Sep 2022',
      duration: '3 mos',
      location: 'Remote',
      link: 'https://instatus.com',
      bullets: [],
      skills: ['Next.js', 'GraphQL', 'Tailwind CSS'],
    },
  ];
  // Updated Bachelor Thesis information
  const bachelorThesis = {
    title: 'Bachelor Thesis',
    subject: 'Using XAI Algorithms for Material Recognition',
    year: 2025,
    description:
      'Focused on predicting molecular chemical properties of compounds and providing interpretability around these predictions using explainable AI methodologies.',
    skills: [
      'Python',
      'PyTorch',
      'DistilBERT',
      'XAI',
      'SHAP',
      'LIME',
      'AWS Lambda',
      'EventBridge',
      'Step Functions',
      'SageMaker'
    ],
  };

  const publications = [
    {
      title:
        'MoleculeX-Predictive: An augmentation of transformers with explainable AI and knowledge layers for efficient drug property prediction',
      venue: 'Array (Elsevier)',
      status: 'Published · Volume 30',
      date: 'July 2026 · Open Access',
      doi: '10.1016/j.array.2026.100820',
      link: 'https://doi.org/10.1016/j.array.2026.100820',
      authors: 'Yassa Ashraf, Daniel Sameh, John Zaki, Amal Aboulhassan',
      badge: 'Featured Research',
      summary:
        'A knowledge-augmented ChemBERTa framework that combines high-accuracy molecular property prediction with transparent multi-modal explainability.',
      metrics: ['pIC50 R2: 0.918', '85% Pharmacophore Identification', 'Scaffold-Based Validation'],
    },
  ];

  const allSkills = [...new Set([...experiences.flatMap(e => e.skills), ...bachelorThesis.skills])];
  // Smooth-scroll to the first element that carries the same data-skill
  const handleSkillClick = (skill) => {
    const target = document.querySelector(`[data-skill="${skill}"]`);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'center' });
      // temporary highlight
      target.classList.add('ring-2', 'ring-teal-500');
      setTimeout(() => target.classList.remove('ring-2', 'ring-teal-500'), 2000);
    }
  };

  return (
    <div className="min-h-screen bg-black text-stone-300 px-4 sm:px-6 py-8 sm:py-10 flex justify-center font-inter">
      <motion.div
        className="max-w-3xl w-full text-left"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Header */}
        <header className="mb-10 sm:mb-12">
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 sm:gap-8">
            <motion.div
              className="flex flex-row items-start space-x-3 sm:space-x-4"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <img
                src={yassaPhoto}
                alt="Yassa Ashraf"
                className="w-14 h-14 sm:w-16 sm:h-16 rounded-full object-cover border-2 border-teal-950 flex-shrink-0"
              />
              <div className="min-w-0">
                <h1 className="text-xl sm:text-2xl md:text-3xl font-bold leading-tight">Yassa Ashraf</h1>
                <p className="text-stone-400 mt-1 text-xs sm:text-sm md:text-base">
                  Software Engineer
                </p>
              </div>
            </motion.div>

            <motion.div
              className="flex items-center flex-wrap gap-3 sm:gap-4 sm:mt-0"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <a
                href="https://www.linkedin.com/in/yassa-ashraf-b59309231/"
                className="text-stone-400 hover:text-gray-200 transition-colors duration-300"
                aria-label="LinkedIn"
              >
                <FaLinkedin size={20} className="sm:w-[22px] sm:h-[22px]" />
              </a>
              <a
                href="https://github.com/Yassa122"
                className="text-stone-400 hover:text-gray-200 transition-colors duration-300"
                aria-label="GitHub"
              >
                <FaGithub size={20} className="sm:w-[22px] sm:h-[22px]" />
              </a>
              <a
                href="mailto:yassa.ashraf56@gmail.com"
                className="text-stone-400 hover:text-stone-200 transition-colors duration-300"
                aria-label="Email"
              >
                <FaEnvelope size={20} className="sm:w-[22px] sm:h-[22px]" />
              </a>
              <a
                href="/Yassa_Ashraf_CV.pdf"
                download
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-md border border-teal-900 text-stone-300 text-xs sm:text-sm hover:bg-teal-900/20 transition-colors duration-300 whitespace-nowrap"
              >
                <FaDownload size={14} className="sm:w-4 sm:h-4" />
                <span>CV</span>
              </a>
            </motion.div>
          </div>
        </header>

        {/* Introduction */}
        <motion.section
          id="home"
          className="mb-12 sm:mb-16"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h1 className="text-3xl sm:text-4xl md:text-3xl font-bold mb-4 leading-tight text-stone-300">
            Hello! I'm Yassa
          </h1>
          <p className="mb-6 sm:mb-8 text-base sm:text-lg md:text-l text-stone-300 leading-relaxed">
            I'm a Software Engineer who loves building user-friendly, scalable
            applications. I regularly explore cutting-edge technologies and share
            my knowledge with other developers through online content and mentorship.
            Currently, I work extensively with JavaScript, TypeScript, React, and
            Next.js to create impactful solutions.
          </p>
        </motion.section>

        {/* Divider */}
        <motion.div className="w-full h-px bg-zinc-700 mb-10" />
        <GitHubContributions />

        <motion.div className="w-full h-px bg-zinc-700 mb-10" />
        <section id="experience" className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-stone-300">
            Experience
          </h2>

          {/* 1. Border lives here now: */}

          <ul className="relative border-l-2 border-gray-700 pl-9 space-y-12 pt-4">
            {experiences.map((exp, idx) => (
              <li key={idx} className="relative">
                {/* 2. Marker sits on the UL's line */}
                <span
                  className="
            absolute
            left-[-42.8px]
            top-2
            w-3 h-3
            bg-gray-400
            rounded-full
          "
                ></span>

                {/* Clickable experience card */}
                {exp.link ? (
                  <a
                    href={exp.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block cursor-pointer group hover:bg-zinc-900/20 rounded-lg p-2 -m-2 transition-all duration-200"
                  >
                    {/* Header row */}
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline">
                      <div>
                        <h3 className="text-stone-100 font-semibold group-hover:text-teal-400 transition-colors">{exp.title}</h3>
                        <p className="text-gray-400 text-sm">
                          {exp.company} &middot; {exp.type}
                        </p>
                      </div>
                      <div className="mt-1 sm:mt-0 text-xs text-gray-400">
                        <time>{exp.period}</time>
                        <span> &middot; {exp.duration}</span>
                      </div>
                    </div>

                    {/* Location */}
                    <p className="text-gray-300 mt-1">{exp.location}</p>

                    {/* Bullets */}
                    {exp.bullets.length > 0 && (
                      <ul className="list-disc list-inside mt-2 text-gray-300 space-y-1">
                        {exp.bullets.map((b, i2) => (
                          <li key={i2}>{b}</li>
                        ))}
                      </ul>
                    )}

                    {/* Skills */}
                    {exp.skills.length > 0 && (
                      <div className="flex flex-wrap gap-2 mt-3">
                        {exp.skills.map((s) => (
                          <span
                            key={s}
                            data-skill={s}
                            className="bg-zinc-800/50 border border-zinc-700 px-3 py-1 rounded-full text-sm text-gray-300"
                          >
                            {s}
                          </span>
                        ))}
                      </div>
                    )}
                  </a>
                ) : (
                  <div>
                    {/* Header row */}
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline">
                      <div>
                        <h3 className="text-stone-100 font-semibold">{exp.title}</h3>
                        <p className="text-gray-400 text-sm">
                          {exp.company} &middot; {exp.type}
                        </p>
                      </div>
                      <div className="mt-1 sm:mt-0 text-xs text-gray-400">
                        <time>{exp.period}</time>
                        <span> &middot; {exp.duration}</span>
                      </div>
                    </div>

                    {/* Location */}
                    <p className="text-gray-300 mt-1">{exp.location}</p>

                    {/* Bullets */}
                    {exp.bullets.length > 0 && (
                      <ul className="list-disc list-inside mt-2 text-gray-300 space-y-1">
                        {exp.bullets.map((b, i2) => (
                          <li key={i2}>{b}</li>
                        ))}
                      </ul>
                    )}

                    {/* Skills */}
                    {exp.skills.length > 0 && (
                      <div className="flex flex-wrap gap-2 mt-3">
                        {exp.skills.map((s) => (
                          <span
                            key={s}
                            data-skill={s}
                            className="bg-zinc-800/50 border border-zinc-700 px-3 py-1 rounded-full text-sm text-gray-300"
                          >
                            {s}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                )}

              </li>
            ))}
          </ul>
        </section>


        {/* Divider */}
        <div className="w-full h-px bg-zinc-700 mb-10"></div>
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-stone-300">
          Bachelor Thesis Project
        </h2>

        <motion.section
          id="bachelor-thesis"
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Link to="/bachelor-thesis">
            <div className="bg-zinc-900/30 border-l-4 border-gray-800 p-4 hover:shadow-xl transition-all duration-300 hover:scale-[1.01] cursor-pointer">
              <h3 className="text-lg font-bold mb-2 text-stone-300">
                {bachelorThesis.subject} ({bachelorThesis.year})
              </h3>
              <p className="text-gray-300 text-sm md:text-base mb-4">
                {bachelorThesis.description}
              </p>

              {/* Skills */}
              <div className="flex flex-wrap gap-2">
                {bachelorThesis.skills.map((s) => (
                  <span
                    key={s}
                    data-skill={s}
                    className="bg-zinc-800/50 border border-zinc-700 px-3 py-1 rounded-full text-sm text-gray-300"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </Link>
        </motion.section>

        <div className="w-full h-px bg-zinc-700 mb-10"></div>

        <motion.section
          id="publications"
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-stone-300">
            Publications
          </h2>
          <div className="space-y-4">
            {publications.map((publication, index) => (
              <motion.a
                key={index}
                href={publication.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-gradient-to-br from-zinc-900/70 to-zinc-900/20 border border-zinc-700 p-5 rounded-md transition-all duration-300 hover:border-teal-600 hover:shadow-[0_0_24px_rgba(45,212,191,0.15)] hover:scale-[1.01]"
                initial={{ opacity: 1 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="inline-flex items-center rounded-full border border-teal-700/50 bg-teal-900/20 px-3 py-1 text-xs text-teal-300 mb-3">
                  {publication.badge}
                </div>
                <h3 className="text-lg md:text-xl font-bold mb-2 text-stone-300">
                  {publication.title}
                </h3>
                <p className="text-sm text-stone-300 mb-3">{publication.summary}</p>
                <div className="flex flex-wrap gap-2 mb-3">
                  {publication.metrics.map((item) => (
                    <span
                      key={item}
                      className="bg-zinc-800/60 border border-zinc-700 px-2.5 py-1 rounded-full text-xs text-stone-300"
                    >
                      {item}
                    </span>
                  ))}
                </div>
                <p className="text-sm text-stone-400 mb-1">{publication.venue}</p>
                <p className="text-sm text-stone-400 mb-1">{publication.status}</p>
                <p className="text-sm text-stone-400 mb-3">{publication.date}</p>
                <p className="text-sm text-stone-300 mb-2">{publication.authors}</p>
                <p className="text-sm text-teal-400 font-medium">Read paper: DOI {publication.doi}</p>
              </motion.a>
            ))}
          </div>
        </motion.section>

        <div className="w-full h-px bg-zinc-700 mb-10"></div>



        <motion.section
          id="skills"
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-stone-300">
            Skills
          </h2>
          <div className="flex flex-wrap gap-3">
            {allSkills.map((skill) => (
              <motion.button
                key={skill}
                onClick={() => handleSkillClick(skill)}
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                className="bg-zinc-900/20 border border-zinc-700 px-4 py-2 rounded-full text-base text-stone-300 hover:border-teal-900 hover:text-teal-700 transform transition-colors duration-300"
              >
                {skill}
              </motion.button>
            ))}
          </div>


        </motion.section>

        {/* Projects */}
        <motion.section
          id="projects"
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-stone-300">
            Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <motion.a
                key={index}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-zinc-900/20 border border-zinc-700 p-4 rounded-md transition-all duration-300 hover:border-teal-900 hover:text-lime-200 hover:scale-[1.01]"
                initial={{ opacity: 1 }}
                whileTap={{ scale: 0.98 }}
              >
                <h3 className="text-lg font-bold mb-2 text-stone-300">
                  {project.name}
                </h3>
                <p className="text-stone-300 text-sm mb-2">
                  {project.description}
                </p>
                <div className="text-stone-500 text-sm">{project.year}</div>
              </motion.a>
            ))}
          </div>
        </motion.section>

        {/* Divider */}


      </motion.div>
    </div>
  );
};

export default Portfolio;
