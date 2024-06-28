import React from 'react';
import { motion } from 'framer-motion';
import Navbar from './Navbar';
import Footer from './Footer.jsx';
import preview from './logo/CairoMetroImg.png';
import vd from './logo/Ecs-help-desk.png';

const projects = [
  {
    id: 1,
    title: "Cairo Metro Project",
    description: "A comprehensive app for Cairo's metro system.",
    imageUrl: preview,
    link: "https://project-one-link.com"
  },
  {
    id: 2,
    title: "ECS Help Desk",
    description: "An efficient help desk solution for ECS.",
    imageUrl: vd,
    link: "https://project-two-link.com"
  },
  {
    id: 3,
    title: "Project Three",
    description: "Description of project three.",
    imageUrl: "project-three-image-url.jpg",
    link: "https://project-three-link.com"
  },
];

const Home = () => {
  return (
    <div className="bg-gray-900 text-white">
      <Navbar />
      {/* Hero Section */}
      <section id="home" className="relative flex flex-col items-center justify-center h-screen bg-gray-900 text-white text-center p-10 overflow-hidden">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.2 }}
          transition={{ duration: 2 }}
        />
        <motion.div
          className="rounded-lg z-10"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <motion.h1
            className="text-5xl font-bold"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
          >
            Welcome to Yassa Ashraf's Portfolio
          </motion.h1>
          <motion.p
            className="mt-4 text-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2, duration: 1 }}
          >
            Showcasing my best work in software engineering and computer science projects.
          </motion.p>
          <motion.p
            className="mt-2 text-xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 3, duration: 1 }}
          >
            DEVELOPING INTELLIGENT, SEAMLESS SOFTWARE
          </motion.p>
          <motion.p
            className="mt-2 text-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 4, duration: 1 }}
          >
            I'm a 3rd year Computer Science student majoring in Software Engineering at the German International University.
          </motion.p>
          <div className="mt-6 flex justify-center space-x-4">
            <motion.a
              href="https://github.com/your-github-profile"
              className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 5, duration: 1 }}
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub Profile
            </motion.a>
            <motion.a
              href="your-cv-download-link"
              className="bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 6, duration: 1 }}
              download
            >
              Download CV
            </motion.a>
          </div>
        </motion.div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-gray-800">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10">Projects</h2>
          <div className="space-y-10">
            {projects.map((project) => (
              <motion.div
                key={project.id}
                className="bg-gray-700 shadow-lg rounded-lg overflow-hidden transform transition duration-500 hover:scale-105 flex flex-col md:flex-row"
                whileHover={{ scale: 1.05 }}
              >
                <img src={project.imageUrl} alt={project.title} className="w-full md:w-1/2 h-56 md:h-auto object-cover" />
                <div className="p-6 flex flex-col justify-between">
                  <div>
                    <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
                    <p className="text-gray-300 mb-4">{project.description}</p>
                  </div>
                  <a href={project.link} className="mt-4 inline-block bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600" target="_blank" rel="noopener noreferrer">View Project</a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Home;
