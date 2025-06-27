import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Github } from 'lucide-react';
import ProjectCard from './ProjectCard';

const categories = ['All', 'Web', 'AI/ML', 'Python'];

const projects = [
  {
    id: 1,
    title: "Face Recognition Attendance System",
    description: "A Python-based face recognition system for automated attendance tracking using OpenCV and face_recognition library.",
    image: "https://images.pexels.com/photos/5473337/pexels-photo-5473337.jpeg",
    tags: ["Python", "OpenCV", "face_recognition", "AI/ML"],
    category: "AI/ML",
    githubUrl: "https://github.com/Ithubcoder/Face-Recognition-Attendance-System",
  },
  {
    id: 2,
    title: "Real Estate Price Prediction",
    description: "Machine learning model to predict house prices using various features and algorithms.",
    image: "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg",
    tags: ["Python", "Scikit-learn", "Pandas", "ML"],
    category: "AI/ML",
    githubUrl: "https://github.com/Ithubcoder/Real-Estate-Price-Prediction",
  },
  {
    id: 3,
    title: "Smart Traffic Management System",
    description: "IoT-based traffic management system using computer vision for real-time traffic monitoring.",
    image: "https://images.pexels.com/photos/1529881/pexels-photo-1529881.jpeg",
    tags: ["Python", "OpenCV", "IoT", "AI/ML"],
    category: "AI/ML",
    githubUrl: "https://github.com/Ithubcoder/Smart-Traffic-Management-System",
  },
  {
    id: 4,
    title: "Portfolio Website",
    description: "Personal portfolio website built with React, Three.js, and Framer Motion featuring 3D elements.",
    image: "https://images.pexels.com/photos/5926393/pexels-photo-5926393.jpeg",
    tags: ["React", "Three.js", "Framer Motion"],
    category: "Web",
    githubUrl: "https://github.com/Ithubcoder/portfolio",
  },
  {
    id: 5,
    title: "Image Captioning Model",
    description: "Deep learning model that generates natural language descriptions for images using CNN and LSTM.",
    image: "https://images.pexels.com/photos/1089438/pexels-photo-1089438.jpeg",
    tags: ["Python", "TensorFlow", "Deep Learning"],
    category: "AI/ML",
    githubUrl: "https://github.com/Ithubcoder/Image-Captioning-Model",
  },
  {
    id: 6,
    title: "Python Mini Projects",
    description: "Collection of various Python projects including games, automation scripts, and utility tools.",
    image: "https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg",
    tags: ["Python", "Automation", "Games"],
    category: "Python",
    githubUrl: "https://github.com/Ithubcoder/Python-Mini-Projects",
  },
  {
    id: 7,
    title: "Chatbot Using Python",
    description: "An intelligent chatbot built with Python and natural language processing capabilities.",
    image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg",
    tags: ["Python", "NLP", "AI/ML"],
    category: "AI/ML",
    githubUrl: "https://github.com/Ithubcoder/Chatbot-Using-Python",
  },
  {
    id: 8,
    title: "Weather App",
    description: "A weather application that provides real-time weather information using Python and weather APIs.",
    image: "https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg",
    tags: ["Python", "API", "Weather"],
    category: "Python",
    githubUrl: "https://github.com/Ithubcoder/Weather-App",
  },
  {
    id: 9,
    title: "Calculator Using Python",
    description: "A feature-rich calculator application built with Python and Tkinter GUI.",
    image: "https://images.pexels.com/photos/5980856/pexels-photo-5980856.jpeg",
    tags: ["Python", "Tkinter", "GUI"],
    category: "Python",
    githubUrl: "https://github.com/Ithubcoder/Calculator-Using-Python",
  }
];

const ProjectsPage = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const filteredProjects = activeCategory === 'All'
    ? projects
    : projects.filter(project => project.category === activeCategory);

  return (
    <div className="container mx-auto px-4">
      <motion.h2 
        className="section-heading text-center mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        My Projects
      </motion.h2>

      <motion.div
        className="flex flex-wrap justify-center gap-4 mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        {categories.map((category, index) => (
          <motion.button
            key={index}
            onClick={() => setActiveCategory(category)}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.95 }}
            className={`px-4 py-2 rounded-full ${
              activeCategory === category
                ? 'bg-primary-600 text-white'
                : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300'
            } font-medium transition-colors`}
          >
            {category}
          </motion.button>
        ))}
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        {filteredProjects.map((project, index) => (
          <ProjectCard
            key={project.id}
            project={project}
            index={index}
            isHovered={hoveredProject === project.id}
            onHover={() => setHoveredProject(project.id)}
            onLeave={() => setHoveredProject(null)}
          />
        ))}
      </div>

      <motion.div
        className="text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <motion.a
          href="https://github.com/Ithubcoder"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-primary-600 hover:bg-primary-700 text-white font-medium transition-colors"
        >
          <Github size={20} />
          View All Projects
        </motion.a>
      </motion.div>
    </div>
  );
};

export default ProjectsPage;