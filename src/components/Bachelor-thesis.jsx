// src/components/BachelorThesisDetails.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; import { motion, AnimatePresence } from 'framer-motion';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { nightOwl } from 'react-syntax-highlighter/dist/esm/styles/prism';

// Importing images (update paths as needed)
import BachProjLandingPage from '../components/logo/BachProJLanding.png';
import BachProjDashboard from '../components/logo/BachDashboard.png';
import BachProjDataUpload from '../components/logo/BachDataUpload.png';
import BachProjModelTraining from '../components/logo/BachModelTrain.png';
import BachProjPredictions from '../components/logo/BachModelPred.png';
import BachProjBiologicalActivity from '../components/logo/BachBioPred.png';

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
        transition: { duration: 0.5 },
    },
};

// CodeSnippet Component with Copy Button and Syntax Highlighting
const CodeSnippet = ({ title, code }) => {
    const [copied, setCopied] = useState(false);

    const copyToClipboard = () => {
        navigator.clipboard.writeText(code).then(() => {
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        });
    };

    return (
        <div className="relative bg-zinc-900 p-4 rounded-md mb-6 border border-zinc-700 shadow-lg">
            <div className="flex justify-between items-center mb-2">
                <h3 className="text-xl font-semibold text-gray-100">{title}</h3>
                <button
                    onClick={copyToClipboard}
                    className="bg-zinc-950 text-gray-100 px-2 py-1 rounded hover:bg-gray-600 transition duration-200 focus:outline-none"
                >
                    {copied ? "Copied!" : "Copy"}
                </button>
            </div>
            <SyntaxHighlighter
                language="python"
                style={nightOwl}
                customStyle={{
                    borderRadius: "8px",
                    fontSize: "14px",
                    padding: "16px",
                    background: "#18181b", // Equivalent to Tailwind's bg-zinc-900
                }}
            >
                {code}
            </SyntaxHighlighter>
        </div>
    );
};

const BachelorThesisDetails = () => {
    const navigate = useNavigate();    // ← initialize navigate

    const [zoomedImage, setZoomedImage] = useState(null);
    // Define your code snippets
    const codeSnippets = [
        {
            title: "Imports & Global Variables",
            code: `import math
import uuid
from flask import Flask, request, jsonify, send_file
from flask_cors import CORS
import pandas as pd
from tqdm import tqdm
from transformers import AutoTokenizer, AutoModelForSequenceClassification, Trainer, TrainingArguments, TrainerCallback
import torch
from torch.utils.data import Dataset, DataLoader
import time
import os
from torch import nn
from threading import Thread, Lock
from rdkit import Chem
from rdkit.Chem import Descriptors
import logging
import shap
import numpy as np
import matplotlib
matplotlib.use("Agg")  # Use non-interactive backend
import matplotlib.pyplot as plt
from flask import send_from_directory
from lime.lime_tabular import LimeTabularExplainer
import openai
from sklearn.metrics import mean_squared_error, mean_absolute_error, r2_score, accuracy_score`
        },
        {
            title: "Extracting Knowledge Features",
            code: `def extract_knowledge_features(smiles):
    mol = Chem.MolFromSmiles(smiles)
    if mol:
        molecular_weight = Descriptors.MolWt(mol)
        num_h_donors = Descriptors.NumHDonors(mol)
        num_h_acceptors = Descriptors.NumHAcceptors(mol)
        return [molecular_weight, num_h_donors, num_h_acceptors]
    else:
        return [0, 0, 0]`
        },
        {
            title: "SMILESDataset Class",
            code: `class SMILESDataset(Dataset):
    def __init__(self, smiles_list, knowledge_features, target_list=None, tokenizer=None, max_length=128):
        self.smiles_list = smiles_list
        self.knowledge_features = knowledge_features
        self.target_list = target_list
        self.tokenizer = tokenizer
        self.max_length = max_length

    def __len__(self):
        return len(self.smiles_list)

    def __getitem__(self, idx):
        smiles = self.smiles_list[idx]
        inputs = self.tokenizer(
            smiles,
            padding="max_length",
            truncation=True,
            max_length=self.max_length,
            return_tensors="pt",
        )
        item = {
            "input_ids": inputs["input_ids"].squeeze(),
            "attention_mask": inputs["attention_mask"].squeeze(),
            "knowledge_features": torch.tensor(self.knowledge_features[idx], dtype=torch.float),
        }
        if self.target_list is not None:
            item["labels"] = torch.tensor(self.target_list[idx], dtype=torch.float)
        return item`
        },
        {
            title: "Knowledge Augmented Model",
            code: `class KnowledgeAugmentedModel(nn.Module):
    def __init__(self, base_model, knowledge_dim, num_labels=3):
        super().__init__()
        self.base_model = base_model
        self.knowledge_fc = nn.Sequential(
            nn.Linear(knowledge_dim, 64),
            nn.ReLU(),
            nn.Linear(64, 64),
            nn.ReLU(),
        )
        hidden_size = base_model.config.hidden_size
        self.fc_pic50 = nn.Linear(hidden_size + 64, 1)
        self.fc_logp = nn.Linear(hidden_size + 64, 1)
        self.fc_num_atoms = nn.Linear(hidden_size + 64, 1)

    def forward(self, input_ids, attention_mask, knowledge_features, labels=None):
        outputs = self.base_model.roberta(
            input_ids=input_ids,
            attention_mask=attention_mask,
            return_dict=True,
        )
        pooled_output = outputs.last_hidden_state[:, 0, :]
        knowledge_output = self.knowledge_fc(knowledge_features)
        combined_output = torch.cat((pooled_output, knowledge_output), dim=1)
        pIC50_pred = self.fc_pic50(combined_output)
        logP_pred = self.fc_logp(combined_output)
        num_atoms_pred = self.fc_num_atoms(combined_output)
        logits = torch.cat((pIC50_pred, logP_pred, num_atoms_pred), dim=1)
        loss = None
        if labels is not None:
            loss_fn = nn.MSELoss()
            loss = loss_fn(logits, labels)
        return {"loss": loss, "logits": logits}`
        },
        {
            title: "Load Model and Tokenizer",
            code: `def load_model_and_tokenizer():
    global model, tokenizer
    tokenizer = AutoTokenizer.from_pretrained("seyonec/ChemBERTa-zinc-base-v1")
    model_path = "./fine_tuned_chemberta_with_knowledge"
    if os.path.exists(model_path) and os.path.isdir(model_path):
        try:
            logging.info("Attempting to load the fine-tuned model.")
            model_local = KnowledgeAugmentedModel.from_pretrained(
                model_path, knowledge_dim=3, num_labels=3
            )
            model_local.to(device)
            model_local.eval()
            model = model_local
            logging.info("Fine-tuned model loaded successfully.")
        except Exception as e:
            logging.error(f"Failed to load fine-tuned model: {e}")
            base_model = AutoModelForSequenceClassification.from_pretrained(
                "seyonec/ChemBERTa-zinc-base-v1", num_labels=3, problem_type="regression"
            )
            model_local = KnowledgeAugmentedModel(base_model, knowledge_dim=3, num_labels=3)
            model_local.to(device)
            model_local.eval()
            model = model_local
    else:
        logging.info("Fine-tuned model directory not found. Loading base model.")
        base_model = AutoModelForSequenceClassification.from_pretrained(
            "seyonec/ChemBERTa-zinc-base-v1", num_labels=3, problem_type="regression"
        )
        model_local = KnowledgeAugmentedModel(base_model, knowledge_dim=3, num_labels=3)
        model_local.to(device)
        model_local.eval()
        model = model_local`
        },
        {
            title: "Custom Training Callback",
            code: `class ProgressCallback(TrainerCallback):
    def __init__(self, total_steps):
        self.total_steps = total_steps
        self.start_time = None

    def on_train_begin(self, args, state, control, **kwargs):
        self.start_time = time.time()
        training_status["status"] = "running"
        training_status["progress"] = 0
        training_status["eta"] = None

    def on_log(self, args, state, control, logs=None, **kwargs):
        current_step = state.global_step
        progress = (current_step / self.total_steps) * 100
        elapsed_time = time.time() - self.start_time
        steps_per_sec = current_step / elapsed_time if elapsed_time > 0 else 0
        steps_remaining = self.total_steps - current_step
        eta_seconds = steps_remaining / steps_per_sec if steps_per_sec > 0 else None
        training_status["progress"] = progress
        training_status["eta"] = time.strftime("%H:%M:%S", time.gmtime(eta_seconds)) if eta_seconds else None`
        }
    ];

    // Image data for the gallery
    const images = [
        { src: BachProjLandingPage, alt: "Landing Page", caption: "Landing Page" },
        { src: BachProjDashboard, alt: "Dashboard Overview", caption: "Dashboard Overview" },
        { src: BachProjDataUpload, alt: "Data Upload", caption: "Data Upload Page" },
        { src: BachProjModelTraining, alt: "Model Training", caption: "Model Training Page" },
        { src: BachProjPredictions, alt: "Predictions", caption: "Predictions Page" },
        { src: BachProjBiologicalActivity, alt: "Biological Activity", caption: "Biological Activity Page" },
    ];

    return (
        <motion.div
            className="min-h-screen bg-black text-white px-4 md:px-6 py-10 flex justify-center"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
        >
            <div className="max-w-4xl w-full">
                <button
                    onClick={() => navigate(-1)}
                    className="
    sticky top-0
    z-10
    bg-transparent
    px-4 py-2
    text-stone-400 hover:text-stone-200
    mb-6
  "
                >
                    ← Back
                </button>
                {/* Heading */}
                <motion.h1 className="text-3xl md:text-4xl font-bold mb-4 text-center" variants={itemVariants}>
                    Bachelor Thesis: Using XAI Algorithms for Material Recognition
                </motion.h1>

                {/* Subheading / Description */}
                <motion.p
                    className="text-sm md:text-lg text-gray-300 mb-8 leading-relaxed text-center"
                    variants={itemVariants}
                >
                    This project investigates the application of Explainable AI (XAI) techniques to predict molecular
                    chemical properties. The central goal is to provide interpretable insights into each prediction.
                </motion.p>

                {/* Images / Gallery Section */}
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
                    variants={itemVariants}
                >
                    {images.map((image, index) => (
                        <motion.div
                            key={index}
                            className="relative cursor-pointer"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            onClick={() => setZoomedImage(image.src)}
                        >
                            <img
                                src={image.src}
                                alt={image.alt}
                                className="w-full h-auto border-2 border-blue-950 rounded-md"
                            />
                            <div className="mt-2 text-xs md:text-sm text-gray-400 text-center">
                                {image.caption}
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Zoomed Image Modal */}
                <AnimatePresence>
                    {zoomedImage && (
                        <motion.div
                            className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setZoomedImage(null)}
                        >
                            <motion.img
                                src={zoomedImage}
                                alt="Zoomed"
                                className="max-w-full max-h-full rounded-lg shadow-lg"
                                initial={{ scale: 0.8 }}
                                animate={{ scale: 1 }}
                                exit={{ scale: 0.8 }}
                            />
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Code Snippets Section */}
                <motion.div className="mt-8" variants={itemVariants}>
                    <h2 className="text-2xl font-semibold mb-3">Code Snippets</h2>
                    {codeSnippets.map((snippet, index) => (
                        <CodeSnippet key={index} title={snippet.title} code={snippet.code} />
                    ))}
                </motion.div>

                {/* GitHub Repository Link */}
                <motion.div className="mt-8 text-center" variants={itemVariants}>
                    <h2 className="text-2xl font-semibold mb-3">GitHub Repository</h2>
                    <a
                        href="https://github.com/Yassa122/Using-XAI-Algorithms-for-Material-Recognition"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-400 hover:underline text-lg"
                    >
                        View the project on GitHub
                    </a>
                </motion.div>

                {/* Detailed Explanation */}
                <motion.div className="mt-8" variants={itemVariants}>
                    <h2 className="text-2xl font-semibold mb-3">Project Highlights</h2>
                    <ul className="list-disc list-inside text-gray-300 space-y-2">
                        <li>
                            <strong>Accurate Predictions:</strong> Leveraging deep learning architectures for high-precision molecular property forecasting.
                        </li>
                        <li>
                            <strong>Explainable Insights:</strong> Integration of SHAP or LIME methods to display factor contributions, ensuring transparency.
                        </li>
                        <li>
                            <strong>Scalable Pipeline:</strong> Containerized microservices for data preprocessing, model inference, and result reporting.
                        </li>
                        <li>
                            <strong>Real-World Applications:</strong> Potential adoption in pharmaceuticals, materials science, and chemical engineering.
                        </li>
                    </ul>
                </motion.div>
            </div>
        </motion.div>
    );
};

export default BachelorThesisDetails;
