// src/components/BachelorThesisDetails.jsx
import React from 'react';
import { motion } from 'framer-motion';

// Animation Variants
const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            when: 'beforeChildren',
            staggerChildren: 0.15,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
        },
    },
};

const BachelorThesisDetails = () => {
    return (
        <motion.div
            className="min-h-screen bg-black text-white px-6 py-10 flex justify-center"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
        >
            <div className="max-w-4xl w-full">
                {/* Heading */}
                <motion.h1
                    className="text-4xl font-bold mb-4"
                    variants={itemVariants}
                >
                    Bachelor Thesis: Using XAI Algorithms for Material Recognition
                </motion.h1>

                {/* Subheading / Description */}
                <motion.p
                    className="text-base md:text-lg text-gray-300 mb-8 leading-relaxed"
                    variants={itemVariants}
                >
                    This project investigates the application of Explainable AI (XAI)
                    techniques to predict the molecular chemical properties of various
                    compounds. The central goal is to provide interpretable insights
                    into each prediction, ensuring scientists and researchers
                    can understand, validate, and refine these AI-driven results.
                </motion.p>

                {/* Images / Gallery Section */}
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 gap-6"
                    variants={itemVariants}
                >
                    {/* Example Image #1 */}
                    <motion.div
                        className="relative"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                    >
                        <img
                            src="/images/bachelor1.jpg" /* or import them from src */
                            alt="Bachelor Thesis Screenshot 1"
                            className="w-full h-auto border-2 border-green-300 rounded-md"
                        />
                        <div className="mt-2 text-sm text-gray-400">
                            Figure 1: Overview of the XAI pipeline
                        </div>
                    </motion.div>

                    {/* Example Image #2 */}
                    <motion.div
                        className="relative"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                    >
                        <img
                            src="/images/bachelor2.jpg"
                            alt="Bachelor Thesis Screenshot 2"
                            className="w-full h-auto border-2 border-green-300 rounded-md"
                        />
                        <div className="mt-2 text-sm text-gray-400">
                            Figure 2: Visualizing model explanations
                        </div>
                    </motion.div>
                </motion.div>

                {/* Detailed Explanation */}
                <motion.div
                    className="mt-8"
                    variants={itemVariants}
                >
                    <h2 className="text-2xl font-semibold mb-3">
                        Project Highlights
                    </h2>
                    <ul className="list-disc list-inside text-gray-300 space-y-2">
                        <li>
                            <strong>Accurate Predictions:</strong> Leveraging deep learning
                            architectures for high-precision molecular property forecasting.
                        </li>
                        <li>
                            <strong>Explainable Insights:</strong> Integration of SHAP or LIME
                            methods to display factor contributions, ensuring transparency.
                        </li>
                        <li>
                            <strong>Scalable Pipeline:</strong> Containerized microservices
                            for data preprocessing, model inference, and result reporting.
                        </li>
                        <li>
                            <strong>Real-World Applications:</strong> Potential adoption in
                            pharmaceuticals, materials science, and chemical engineering.
                        </li>
                    </ul>
                </motion.div>
            </div>
        </motion.div>
    );
};

export default BachelorThesisDetails;
