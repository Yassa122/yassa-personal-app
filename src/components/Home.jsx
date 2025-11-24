// src/components/Portfolio.jsx

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  FaLinkedin,
  FaGithub,
  FaEnvelope,
  FaDownload,
  FaServer,
  FaLaptopCode,
  FaAtom,
  FaIndustry,
} from 'react-icons/fa';
import yassaPhoto from '../../src/components/logo/99081198.jpeg'; // adjust path as needed
import { Link } from 'react-router-dom'; // for routing

const Portfolio = () => {
  const [viewportWidth, setViewportWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setViewportWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const projects = [
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

  // Each experience object now includes a 'link' field.
  const experiences = [
    {
      title: 'Associate Software Engineer',
      company: 'VOIS (TES)',
      type: 'Full-time',
      period: 'Jul 2024 – Present',
      duration: 'Present',
      location: 'Cairo, Egypt · Hybrid',
      bullets: [
        'Contributed to enterprise-level order management solutions.',
        'Built backend & frontend features to improve functionality and UX.',
        'Addressed bugs and added advanced filtering for operational efficiency.',
        'Reviewed code and mentored junior team members to maintain quality.',
        'Participated in stakeholder presentations to align on business goals.',
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
      title: 'Associate Software Engineer Intern',
      company: 'VOIS (TES)',
      type: 'Internship', 
      period: 'Feb 2024 – Jul 2024',
      duration: '6 mos',
      location: 'Cairo, Egypt · Hybrid',
      bullets: [
        'Contributed to enterprise-level order management solutions.',
        'Built backend & frontend features to improve functionality and UX.',
        'Addressed bugs and added advanced filtering for operational efficiency.',
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
      company: 'VIXI-AI',
      type: 'Full-time',
      period: 'Sep 2025 – Present',
      duration: 'Present',
      location: 'Remote · U.A.E',
      bullets: [
        'Developing AI-powered software solutions using Python and Node.js.',
        'Building and deploying applications with Firebase Functions and Services.',
        'Deploying scalable solutions on GCP and Azure cloud platforms.',
        'Creating modern web applications using Next.js for enhanced user experiences.',
      ],
      skills: [
        'Python',
        'Node.js',
        'Firebase Functions',
        'Firebase Services',
        'GCP',
        'Azure',
        'Next.js',
      ],
    },
    {
      title: 'Full-Stack Engineer',
      company: 'Xylem Software',
      type: 'Full-time',
      period: 'Jun 2025 – Nov 2025',
      duration: '6 mos',
      location: 'Remote · Dubai, United Arab Emirates',
      bullets: [
        'Developing software solutions and AI products using Next.js and Node.js.',
        'Building and deploying machine learning and deep learning models for various business needs.',
        'Collaborating with cross-functional teams to deliver innovative technology solutions.'
      ],
      skills: [
        'Next.js',
        'Node.js',
        'Machine Learning',
        'Deep Learning',
        'AI',
        'Software Solutions'
      ],
    },
    {
      title: 'Back End Engineer',
      company: 'Trevi',
      type: 'Full-time',
      period: 'Oct 2024 – Sep 2025',
      duration: '1 yr',
      location: 'Cairo, Egypt · Hybrid',
      bullets: [
        'Developed RESTful APIs and middleware for API development at Trevi.',
        'Implemented authentication, authorization, and data protection for enhanced security measures.',
      ],
      skills: [
        'DevOps',
        'Git',
        'Microservices',
        'NestJS',
        'Problem Solving',
        'TypeScript',
        'Agile Methodologies',
      ],
    },
    {
      title: 'Software Engineering Consultant',
      company: 'MM Solutions',
      type: 'Contract',
      period: 'Dec 2024 – Mar 2025',
      duration: '4 mos',
      location: 'United States · Remote',
      bullets: [
        'Led development of scalable software solutions.',
        'Provided technical guidance to ensure best practices & code quality.',
        'Collaborated cross-functionally to optimize workflows and tech stack.',
      ],
      skills: [
        'Next.js',
        'DevOps',
        'Git',
        'Problem Solving',
        'Agile Methodologies',
      ],
    },
    {
      title: 'Full-stack Developer',
      company: 'MM Solutions',
      type: 'Contract',
      period: 'Jul 2024 – Dec 2024',
      duration: '6 mos',
      location: 'United States · Remote',
      bullets: [
        'Built PHP/Laravel apps with HTML, CSS, Bootstrap & Tailwind for UX.',
        'Collaborated with cross-functional teams for seamless deployments.',
        'Applied best practices to boost performance and meet project goals.',
      ],
      skills: ['PHP', 'Laravel', 'HTML', 'CSS', 'Bootstrap', 'TailwindCSS'],
    },
    {
      title: 'Full-stack Developer',
      company: 'Kinetics Dubai',
      type: 'Full-time',
      period: 'Aug 2024 – Oct 2024',
      duration: '3 mos',
      location: 'Cairo, Egypt · On-site',
      bullets: [
        'Worked with React.js, Node.js, Bootstrap, HTML & CSS to modernize UI.',
      ],
      skills: [
        'React.js',
        'Node.js',
        'Bootstrap',
        'HTML',
        'CSS',
        'Agile Methodologies',
      ],
    },
    {
      title: 'Full Stack Developer',
      company: 'Fiverr',
      type: 'Freelance',
      period: 'May 2023 – Oct 2023',
      duration: '6 mos',
      location: 'Remote',
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
      bullets: [],
      skills: ['Next.js', 'GraphQL'],
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

  const allSkills = [...new Set(experiences.flatMap(e => e.skills)), ...bachelorThesis.skills,
  ];
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
        <div className="w-full h-px bg-zinc-700 mb-8 sm:mb-10"></div>
        <section id="experience" className="mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-8 text-stone-300">
            Experience
          </h2>

          {/* Timeline */}
          <ul className="relative border-l-2 border-gray-700 pl-6 sm:pl-9 space-y-8 sm:space-y-12 pt-2">
            {experiences.map((exp, idx) => (
              <li key={idx} className="relative">
                {/* Timeline marker */}
                <span
                  className="absolute left-[-19px] sm:left-[-20px] top-2 w-3 h-3 bg-gray-400 rounded-full border-2 border-black"
                ></span>

                {/* Header row */}
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-1 sm:gap-0">
                  <div className="min-w-0 flex-1">
                    <h3 className="text-stone-100 font-semibold text-base sm:text-lg leading-tight">{exp.title}</h3>
                    <p className="text-gray-400 text-xs sm:text-sm mt-0.5">
                      {exp.company} &middot; {exp.type}
                    </p>
                  </div>
                  <div className="mt-1 sm:mt-0 text-xs text-gray-400 whitespace-nowrap sm:ml-4">
                    <time>{exp.period}</time>
                    <span className="hidden sm:inline"> &middot; {exp.duration}</span>
                    <span className="sm:hidden block mt-0.5">{exp.duration}</span>
                  </div>
                </div>

                {/* Location */}
                <p className="text-gray-300 mt-1.5 text-xs sm:text-sm">{exp.location}</p>

                {/* Bullets */}
                {exp.bullets.length > 0 && (
                  <ul className="list-disc list-inside mt-3 text-gray-300 space-y-1.5 text-sm sm:text-base">
                    {exp.bullets.map((b, i2) => (
                      <li key={i2} className="leading-relaxed">{b}</li>
                    ))}
                  </ul>
                )}

                {/* Skills */}
                {exp.skills.length > 0 && (
                  <div className="flex flex-wrap gap-1.5 sm:gap-2 mt-3 sm:mt-4">
                    {exp.skills.map((s) => (
                      <span
                        key={s}
                        data-skill={s}
                        className="bg-zinc-800/50 border border-zinc-700 px-2 sm:px-3 py-0.5 sm:py-1 rounded-full text-xs sm:text-sm text-gray-300"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                )}

              </li>
            ))}
          </ul>
        </section>


        {/* Divider */}
        <div className="w-full h-px bg-zinc-700 mb-8 sm:mb-10"></div>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-8 text-stone-300">
          Bachelor Thesis Project
        </h2>

        <motion.section
          id="bachelor-thesis"
          className="mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Link to="/bachelor-thesis">
            <div className="bg-zinc-900/30 border-l-4 border-gray-800 p-4 sm:p-5 hover:shadow-xl transition-all duration-300 hover:scale-[1.01] cursor-pointer">
              <h3 className="text-base sm:text-lg font-bold mb-2 text-stone-300 leading-tight">
                {bachelorThesis.subject} ({bachelorThesis.year})
              </h3>
              <p className="text-gray-300 text-sm sm:text-base mb-4 leading-relaxed">
                {bachelorThesis.description}
              </p>

              {/* Skills */}
              <div className="flex flex-wrap gap-1.5 sm:gap-2">
                {bachelorThesis.skills.map((s) => (
                  <span
                    key={s}
                    data-skill={s}
                    className="bg-zinc-800/50 border border-zinc-700 px-2 sm:px-3 py-0.5 sm:py-1 rounded-full text-xs sm:text-sm text-gray-300"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </Link>
        </motion.section>

        <div className="w-full h-px bg-zinc-700 mb-8 sm:mb-10"></div>



        <motion.section
          id="skills"
          className="mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-8 text-stone-300">
            Skills
          </h2>
          <div className="flex flex-wrap gap-2 sm:gap-3">
            {allSkills.map((skill) => (
              <motion.button
                key={skill}
                onClick={() => handleSkillClick(skill)}
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                className="bg-zinc-900/20 border border-zinc-700 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-sm sm:text-base text-stone-300 hover:border-teal-900 hover:text-teal-700 transform transition-colors duration-300"
              >
                {skill}
              </motion.button>
            ))}
          </div>


        </motion.section>

        {/* Projects */}
        <motion.section
          id="projects"
          className="mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-8 text-stone-300">
            Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {projects.map((project, index) => (
              <motion.a
                key={index}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-zinc-900/20 border border-zinc-700 p-4 sm:p-5 rounded-md transition-all duration-300 hover:border-teal-900 hover:text-lime-200 hover:scale-[1.01]"
                initial={{ opacity: 1 }}
                whileTap={{ scale: 0.98 }}
              >
                <h3 className="text-base sm:text-lg font-bold mb-2 text-stone-300 leading-tight">
                  {project.name}
                </h3>
                <p className="text-stone-300 text-sm sm:text-base mb-2 leading-relaxed">
                  {project.description}
                </p>
                <div className="text-stone-500 text-xs sm:text-sm">{project.year}</div>
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
