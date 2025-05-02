// src/components/Portfolio.jsx
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  FaLinkedin,
  FaGithub,
  FaEnvelope,
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
      icon: <FaServer className="text-orange-600 w-5 h-5 mr-2 flex-shrink-0" />,

      icon: <FaServer className="text-orange-600 w-5 h-5 mr-2 flex-shrink-0" />,
      summary:
        'Mid-level Backend Engineer at Trevi (Oct 2024 – Present, Remote) — Building a finance app with cash-back rewards and a Family Wallet, all powered by a scalable microservices backend.',
      link: 'https://trevi.app',
    },
    {
      icon: <FaIndustry className="text-indigo-500 w-5 h-5 mr-2 flex-shrink-0" />,
      summary:
        'Software Engineer Intern at Vodafone Intelligent Solutions (Feb 2025 – Present, Onsite) — Contributing to cloud solutions and automation tools in Smart Village, Cairo as a full-stack developer intern.',
      link: 'https://vois.vodafone.com',
    },
    {
      icon: <FaLaptopCode className="text-teal-950 w-5 h-5 mr-2 flex-shrink-0" />,
      summary:
        'Full-Stack Developer at MMSolutions (Jul 2024 – Mar 2025, Remote) — Built a driver-friendly freight dispatch system for Amazon Freight partner carriers, boosting efficiency and reliability.',
      link: 'https://mmsoln.com',
    },
    {
      icon: <FaAtom className="text-teal-950 w-5 h-5 mr-2 flex-shrink-0" />,
      summary:
        'Full-Stack Developer at Kinetics (Aug 2024 - Oct 2024, Onsite) — Led front-end modernization and integrated RESTful APIs, improving performance by 30% and driving adoption of best practices.',
      link: 'https://www.kineticsegypt.com/',
    },
  ];
  // Updated Bachelor Thesis information
  const bachelorThesis = {
    title: 'Bachelor Thesis',
    subject: 'Using XAI Algorithms for Material Recognition',
    year: 2025,
    description:
      'Focused on predicting molecular chemical properties of compounds and providing interpretability around these predictions using explainable AI methodologies.',
  };

  return (
    <div className="min-h-screen bg-black text-stone-300 px-6 py-10 flex justify-center font-inter">
      <motion.div
        className="max-w-4xl w-full"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Header */}
        <header className="mb-12">
          <div className="flex flex-col md:flex-row gap-x-8">
            <motion.div
              className="flex items-center space-x-4"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              {/* Profile Photo */}
              <img
                src={yassaPhoto}
                alt="Yassa Ashraf"
                className="w-16 h-16 rounded-full object-cover border-2 border-teal-950"
              />
              <div>
                <h1 className="text-2xl md:text-3xl font-bold">Yassa Ashraf</h1>
                <p className="text-stone-400 mt-1 text-sm md:text-base">
                  Full-Stack Developer
                </p>
              </div>
            </motion.div>

            <motion.div
              className="flex items-center space-x-4"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <a
                href="https://www.linkedin.com/in/yassa-ashraf-b59309231/"
                className="text-stone-400 hover:text-gray-200 transition-colors duration-300"
              >
                <FaLinkedin size={22} />
              </a>
              <a
                href="https://github.com/Yassa122"
                className="text-stone-400 hover:text-gray-200 transition-colors duration-300"
              >
                <FaGithub size={22} />
              </a>
              <a
                href="mailto:yassa.ashraf56@gmail.com"
                className="text-stone-400 hover:text-stone-200 transition-colors duration-300"
              >
                <FaEnvelope size={22} />
              </a>
            </motion.div>
          </div>
        </header>

        {/* Introduction */}
        <motion.section
          id="home"
          className="mb-16"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight text-stone-300">
            Hello! I’m Yassa
          </h1>
          <p className="mb-8 text-lg md:text-xl text-stone-300 leading-relaxed">
            I’m a Full-Stack developer who loves building user-friendly, scalable
            applications. I regularly explore cutting-edge technologies and share
            my knowledge with other developers through online content and mentorship.
            Currently, I work extensively with JavaScript, TypeScript, React, and
            Next.js to create impactful solutions.
          </p>
        </motion.section>
        {/* Divider */}
        <div className="w-full h-px bg-zinc-700 mb-10"></div>
        <section id="experience" className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-stone-300">
            Experience
          </h2>
          <ul className="relative ml-6 border-l-2  border-gray-500">
            {experiences.map((exp, idx) => (
              <li key={idx} className="mb-8 ml-[25px]  bottom-2 relative">
                {/* Timeline Marker */}
                <span className="absolute -left-8 top-2 w-3 h-3 bg-gray-400 rounded-full"></span>

                {/* Date Label */}
                <time className="block text-gray-400 uppercase text-xs mb-1">
                  {exp.year || exp.period || exp.date || ''}
                </time>

                {/* Description */}
                <p className="text-stone-300 text-base md:text-lg">
                  {exp.summary}
                </p>
              </li>
            ))}
          </ul>
        </section>


        {/* Divider */}
        <div className="w-full h-px bg-zinc-700 mb-10"></div>

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
        <div className="w-full h-px bg-zinc-700 mb-10"></div>

        {/* Bachelor Thesis */}
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
              <p className="text-gray-300 text-sm md:text-base mb-2">
                {bachelorThesis.description}
              </p>
            </div>
          </Link>
        </motion.section>
      </motion.div>
    </div>
  );
};

export default Portfolio;
