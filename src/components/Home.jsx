// src/Portfolio.js
import React from 'react';
import { motion } from 'framer-motion';

const Home = () => {
  const projects = [
    { name: 'Hidden Message', description: 'Encrypt a message inside a message', year: 2024 },
    { name: 'simpleQR', description: 'QR code generator', year: 2024 },
    { name: 'Abdulraheem', description: 'Interior designer portfolio', year: 2023 },
    { name: 'link', description: 'A URL shortener', year: 2023 },
    { name: 'Cairo Metro', description: 'Ticketing system for Egypt\'s Cairo Metro', year: 2023 },
    { name: 'Tickets22', description: 'Ticketing system for Qatar 2022 World Cup', year: 2023 },
    { name: 'DummyDB', description: 'Database generator for testing', year: 2022 },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-800 to-gray-900 text-white flex flex-col justify-center items-center">
      <header className="w-full flex justify-between items-center p-5 max-w-4xl mx-auto">
        <motion.div
          className="text-3xl font-bold tracking-wider"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          Your Name
        </motion.div>
        <div className="space-x-4 text-lg">
          <a href="#about" className="hover:underline">About</a>
          <a href="#work" className="hover:underline">Work</a>
          <a href="#projects" className="hover:underline">Projects</a>
          <a href="#contact" className="hover:underline">Contact</a>
        </div>
      </header>

      <main className="p-5 w-full max-w-4xl mx-auto flex flex-col items-center">
        <motion.section
          id="about"
          className="mb-10 w-full text-center"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold mb-3">About</h2>
          <p className="text-lg leading-relaxed">Passionate about crafting seamless user experiences with attention to detail. I'm always sided with practical solutions that are both functional and aesthetically pleasing.</p>
        </motion.section>

        <motion.section
          id="work"
          className="mb-10 w-full text-center"
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold mb-3">Work</h2>
          <ul className="list-none">
            <li className="mb-2">
              <span className="font-semibold">Instatus</span> - Fullstack Engineer - <span className="text-gray-400">July 2022 - Present</span>
            </li>
            <li className="mb-2">
              <span className="font-semibold">Microsoft</span> - Frontend & Design Engineer - <span className="text-gray-400">July 2023 - October 2023</span>
            </li>
          </ul>
        </motion.section>

        <motion.section
          id="projects"
          className="mb-10 w-full text-center"
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold mb-3">Projects</h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {projects.map((project, index) => (
              <motion.li
                key={index}
                className="p-4 bg-gray-700 rounded-lg shadow-lg hover:bg-gray-600 transition duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <h3 className="text-xl font-semibold mb-2">{project.name}</h3>
                <p className="text-gray-300">{project.description} - {project.year}</p>
              </motion.li>
            ))}
          </ul>
        </motion.section>
      </main>

      <footer className="p-5 text-center w-full max-w-4xl mx-auto">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          &copy; 2024 Your Name. All rights reserved.
        </motion.p>
      </footer>
    </div>
  );
}

export default Home;
