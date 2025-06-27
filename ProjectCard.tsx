import React from 'react';
import { motion } from 'framer-motion';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  category: string;
  githubUrl: string;
}

interface ProjectCardProps {
  project: Project;
  index: number;
  isHovered: boolean;
  onHover: () => void;
  onLeave: () => void;
}

const ProjectCard = ({ project, index, isHovered, onHover, onLeave }: ProjectCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="project-card h-full"
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
    >
      <motion.div 
        className="group relative h-full overflow-hidden rounded-xl glass"
        whileHover={{ y: -10, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
        transition={{ duration: 0.3 }}
      >
        <div className="relative h-56 overflow-hidden rounded-t-xl">
          <motion.img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
            animate={{ scale: isHovered ? 1.1 : 1 }}
            transition={{ duration: 0.4 }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          
          <div className="absolute top-4 right-4 flex flex-wrap gap-2 justify-end max-w-[calc(100%-2rem)]">
            {project.tags.map((tag, tagIndex) => (
              <motion.span
                key={tagIndex}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + tagIndex * 0.1 }}
                className="px-3 py-1 text-xs font-medium rounded-full bg-primary-100/80 text-primary-800 dark:bg-primary-900/80 dark:text-primary-200 backdrop-blur-sm"
              >
                {tag}
              </motion.span>
            ))}
          </div>
        </div>
        
        <div className="p-6">
          <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-gray-200">
            {project.title}
          </h3>
          <p className="text-gray-600 dark:text-gray-400">
            {project.description}
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ProjectCard;