import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

const Portfolio = () => {
  const [viewportWidth, setViewportWidth] = useState(1220);

  const projects = [
    {
      name: "Eco-Pallets Project",
      description: "A comprehensive platform for managing and purchasing eco-friendly plastic pallets, utilizing a microservice architecture to ensure scalability and reliability.",
      year: 2024,
      link: "https://eco-pallets.vercel.app",
    },
    {
      name: "ECS Help Desk",
      description: "An intuitive and responsive help desk system combining modern web technologies to enhance user experience and streamline support processes.",
      year: 2024,
      link: "https://ecs-project-omega.vercel.app/",
    },
    {
      name: "Task Titan",
      description: "A robust task management application designed to help users efficiently organize and track their tasks with advanced features like reminders and collaboration tools.",
      year: 2023,
      link: "https://task-titan.top",
    },
    {
      name: "Cairo Metro",
      description: "A user-friendly application for reserving Cairo Metro tickets, offering seamless booking and real-time updates to improve commuter convenience.",
      year: 2023,
      link: "https://cairometrosystem.onrender.com/",
    },
    {
      name: "Video Feature Extraction Using Deep Learning",
      description: "A project employing a 4-layer Convolutional Neural Network (CNN) to extract meaningful features from video data, aiding in video analysis and machine learning tasks.",
      year: 2023,
      link: "https://example.com/video-feature-extraction",
    },
    {
      name: "Book Store App - AWS",
      description: "A simple yet powerful web application for managing a book store, built using a JavaScript stack and hosted on AWS for robust performance and scalability.",
      year: 2023,
      link: "https://example.com/book-store-app-aws",
    },
  ];

  return (
    <div className="min-h-screen bg-dark-grey text-gray-100 p-8 flex justify-center">
      <div className="max-w-2xl w-full">
        <header className="mb-8 flex flex-col items-center md:flex-row md:justify-between">
          <div className="flex items-center space-x-4">
            <div>
              <h1 className="text-xl font-bold">Yassa Ashraf</h1>
              <p className="text-gray-400">Full-Stack Developer</p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <a href="https://www.linkedin.com/in/yassa-ashraf-b59309231/" className="text-gray-400 hover:text-gray-300">
              <FaLinkedin size={24} />
            </a>
            <a href="https://github.com/Yassa122" className="text-gray-400 hover:text-gray-300">
              <FaGithub size={24} />
            </a>
            <a href="mailto:youremail@example.com" className="text-gray-400 hover:text-gray-300">
              <FaEnvelope size={24} />
            </a>
          </div>
        </header>
        <main>
          <section id="home" className="mb-8">
            <h1 className="text-4xl font-bold mb-4">Hey, I'm Yassa 👋</h1>
            <p className="mb-8 text-lg">
              I'm a Full-Stack developer, optimist, and community builder. I currently work as a full-stack developer, creating educational content for developers. My content focuses on web development technologies like JavaScript, TypeScript, React, and Next.js.
            </p>
          </section>
          <section id="projects" className="mb-8">
            <h2 className="text-3xl font-bold mb-4">Projects</h2>
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              {projects.map((project, index) => (
                <motion.a
                  key={index}
                  className="p-3 h-32 rounded-lg shadow-lg cursor-pointer transition-all duration-500 ease-in-out transform hover:scale-105 hover:bg-zinc-800"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <h3 className="text-lg font-semibold mb-2">{project.name}</h3>
                  <p className="text-gray-400 text-sm mb-2">{project.description}</p>
                  <div className="text-gray-500 text-sm">{project.year}</div>
                </motion.a>
              ))}
            </motion.div>
          </section>
          <section id="blog" className="mb-8">
            <h2 className="text-3xl font-bold mb-4">Responsive Viewport</h2>
            <div className="flex justify-center mt-4 space-x-4">
              <button
                onClick={() => setViewportWidth(375)}
                className="px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-700"
              >
                Mobile
              </button>
              <button
                onClick={() => setViewportWidth(768)}
                className="px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-700"
              >
                Tablet
              </button>
              <button
                onClick={() => setViewportWidth(1220)}
                className="px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-700"
              >
                Desktop
              </button>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

export default Portfolio;
