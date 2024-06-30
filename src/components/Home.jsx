import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaTwitter, FaGithub, FaEnvelope } from 'react-icons/fa';

const Portfolio = () => {
  const [viewportWidth, setViewportWidth] = useState(1220);

  const projects = [
    { name: "Eco-Pallets-project", description: "Comprehensive platform for managing and purchasing plastic pallets, leveraging a microservice architecture.", year: 2024 },
    { name: "ECS-Help-Desk", description: "Amalgamation of modern web technologies and best practices for an intuitive and responsive user experience.", year: 2024 },
    { name: "Task Titan", description: "A project that helps in managing tasks.", year: 2023 },
    { name: "Cairo Metro", description: "A project that helps people reserve Cairo Metro tickets.", year: 2023 },
    { name: "VideoFeatureExtractionUsingDeepLearning", description: "Extracting features from video data using a 4-layer Convolutional Neural Network (CNN).", year: 2023 },
    { name: "BookStoreApp-AWS", description: "A simple web application using a JavaScript stack and hosting on AWS.", year: 2023 }
  ];

  return (
    <div className="min-h-screen bg-dark-grey text-gray-100 p-8 flex justify-center">
      <div className="max-w-2xl w-full">
        <header className="mb-8 flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <a href="https://twitter.com/yourhandle" className="text-gray-400 hover:text-gray-300">
              <FaTwitter size={24} />
            </a>
            <a href="https://github.com/yourhandle" className="text-gray-400 hover:text-gray-300">
              <FaGithub size={24} />
            </a>
            <a href="mailto:youremail@example.com" className="text-gray-400 hover:text-gray-300">
              <FaEnvelope size={24} />
            </a>
          </div>
          <div className="flex items-center space-x-4">
            <img src="your-photo-url.jpg" alt="Yassa Ashraf" className="w-12 h-12 rounded-full" />
            <div>
              <h1 className="text-xl font-bold">Yassa Ashraf</h1>
              <p className="text-gray-400">Frontend Developer</p>
            </div>
          </div>
        </header>
        <main>
          <section id="home" className="mb-8">
            <h1 className="text-4xl font-bold mb-4">Hey, I'm Yassa 👋</h1>
            <p className="mb-8 text-lg">
              I'm a frontend developer, optimist, and community builder. I currently work as a
              [your role here]. I create educational content for developers, teaching them about
              web development, JavaScript, TypeScript, React, and Next.js.
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
                <motion.div
                  key={index}
                  className="p-3 h-32 rounded-lg shadow-lg cursor-pointer transition-all duration-500 ease-in-out transform hover:scale-105 hover:bg-zinc-800"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => window.open(`/${project.name.toLowerCase().replace(/\s/g, '-')}`, '_blank')}
                >
                  <h3 className="text-lg font-semibold mb-2">{project.name}</h3>
                  <p className="text-gray-400 text-sm mb-2">{project.description}</p>
                  <div className="text-gray-500 text-sm">{project.year}</div>
                </motion.div>
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
