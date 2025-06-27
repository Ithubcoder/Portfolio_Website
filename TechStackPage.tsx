import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ExternalLink, Check, Code2, Database, Cpu, Cloud, Globe, Terminal, Award, BookOpen, GraduationCap, Calendar, Brain, Rocket, Target, Star, Coffee, Users, Zap, Server, Shield, PenTool as Tool, Trophy, GitBranch, Laptop, Smartphone, Wifi, Monitor, HardDrive } from 'lucide-react';
import TechStackGrid from './TechStackGrid';

const TechStackPage = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  
  const scale = useTransform(scrollYProgress, [0, 0.5], [0.8, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);

  const stats = [
    { label: 'Years of Coding', value: '3+', icon: <Code2 className="w-6 h-6" /> },
    { label: 'Projects Completed', value: '20+', icon: <Rocket className="w-6 h-6" /> },
    { label: 'Certifications', value: '15+', icon: <Award className="w-6 h-6" /> },
    { label: 'Hackathons', value: '5+', icon: <Trophy className="w-6 h-6" /> }
  ];

  const additionalSkills = [
    {
      title: "System Design",
      description: "Scalable Architecture Design",
      icon: <Server className="w-6 h-6" />,
      color: "rose"
    },
    {
      title: "Security",
      description: "Best Practices & Implementation",
      icon: <Shield className="w-6 h-6" />,
      color: "lime"
    },
    {
      title: "DevOps",
      description: "CI/CD & Deployment",
      icon: <Tool className="w-6 h-6" />,
      color: "amber"
    },
    {
      title: "Performance",
      description: "Optimization & Monitoring",
      icon: <Zap className="w-6 h-6" />,
      color: "cyan"
    },
    {
      title: "Version Control",
      description: "Git & GitHub Workflow",
      icon: <GitBranch className="w-6 h-6" />,
      color: "purple"
    },
    {
      title: "Cross-Platform",
      description: "Desktop & Mobile Development",
      icon: <Laptop className="w-6 h-6" />,
      color: "indigo"
    },
    {
      title: "Mobile Dev",
      description: "React Native & Flutter",
      icon: <Smartphone className="w-6 h-6" />,
      color: "blue"
    },
    {
      title: "IoT",
      description: "Embedded Systems & Networking",
      icon: <Wifi className="w-6 h-6" />,
      color: "green"
    }
  ];

  const certificationLogos = {
    'IBM': '🎓',
    'Coursera': '📚',
    'Google': '🌐',
    'Microsoft': '💻',
    'LinkedIn': '💼',
    'Udacity': '🎯',
    'AWS': '☁️',
    'Oracle': '🔐'
  };

  const certifications = [
    {
      title: "IBM Data Science Professional Certificate",
      issuer: "IBM",
      date: "2023",
      icon: <Award className="w-6 h-6" />,
      color: "blue"
    },
    {
      title: "IBM AI Engineering Professional Certificate",
      issuer: "IBM",
      date: "2023",
      icon: <Cpu className="w-6 h-6" />,
      color: "purple"
    },
    {
      title: "Machine Learning Specialization",
      issuer: "Coursera",
      date: "2023",
      icon: <BookOpen className="w-6 h-6" />,
      color: "green"
    },
    {
      title: "Deep Learning Specialization",
      issuer: "Coursera",
      date: "2023",
      icon: <GraduationCap className="w-6 h-6" />,
      color: "red"
    },
    {
      title: "AWS Cloud Practitioner",
      issuer: "AWS",
      date: "2023",
      icon: <Cloud className="w-6 h-6" />,
      color: "yellow"
    },
    {
      title: "Full Stack Web Development",
      issuer: "Coursera",
      date: "2023",
      icon: <Globe className="w-6 h-6" />,
      color: "teal"
    },
    {
      title: "Python for Data Science",
      issuer: "LinkedIn",
      date: "2023",
      icon: <Database className="w-6 h-6" />,
      color: "cyan"
    },
    {
      title: "TensorFlow Developer Certificate",
      issuer: "Google",
      date: "2023",
      icon: <Brain className="w-6 h-6" />,
      color: "orange"
    },
    {
      title: "Azure AI Fundamentals",
      issuer: "Microsoft",
      date: "2023",
      icon: <Monitor className="w-6 h-6" />,
      color: "indigo"
    },
    {
      title: "Oracle Database SQL Certified",
      issuer: "Oracle",
      date: "2023",
      icon: <HardDrive className="w-6 h-6" />,
      color: "rose"
    }
  ];

  return (
    <div ref={containerRef} className="container mx-auto px-4">
      <motion.h2 
        className="section-heading text-center mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        Tech Stack
      </motion.h2>

      <motion.div
        className="text-center mb-16 max-w-2xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        <p className="text-lg text-gray-700 dark:text-gray-300">
          With a strong foundation in Computer Science, I specialize in Data Science and AI, working with cutting-edge technologies and frameworks to build innovative solutions.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
      >
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="glass p-6 rounded-xl text-center transform hover:scale-105 transition-all duration-300 hover:shadow-[0_0_30px_rgba(var(--tw-text-primary-500-rgb),0.3)] dark:hover:shadow-[0_0_30px_rgba(var(--tw-text-primary-400-rgb),0.2)]"
            whileHover={{ y: -5 }}
          >
            <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center text-primary-600 dark:text-primary-400 transform group-hover:scale-110 transition-transform duration-300">
              {stat.icon}
            </div>
            <div className="text-3xl font-bold text-primary-600 dark:text-primary-400 mb-2">
              {stat.value}
            </div>
            <div className="text-gray-600 dark:text-gray-400">
              {stat.label}
            </div>
          </motion.div>
        ))}
      </motion.div>

      <motion.div 
        style={{ scale, opacity }}
        className="mb-16"
      >
        <div className="relative h-[350px] md:h-[500px]">
          <TechStackGrid />
        </div>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
        {/* Programming Languages */}
        <motion.div
          className="glass p-6 rounded-xl transform hover:scale-105 transition-all duration-300 hover:shadow-[0_0_30px_rgba(var(--tw-text-blue-500-rgb),0.3)] dark:hover:shadow-[0_0_30px_rgba(var(--tw-text-blue-400-rgb),0.2)]"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
          whileHover={{ y: -5 }}
        >
          <div className="mb-4 text-center">
            <div className="w-16 h-16 mx-auto mb-4 rounded-xl bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-blue-600 dark:text-blue-400 transform group-hover:scale-110 transition-transform duration-300">
              <Code2 className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200">Programming</h3>
          </div>
          <ul className="space-y-2">
            {['Python', 'Java', 'C/C++', 'R', 'JavaScript', 'TypeScript', 'HTML/CSS', 'SQL', 'Kotlin', 'Swift'].map((item, index) => (
              <motion.li 
                key={index}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.1 * index }}
                className="flex items-center gap-2 text-gray-700 dark:text-gray-300"
              >
                <Check className="w-5 h-5 text-green-500" />
                {item}
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {/* Data Science & AI/ML */}
        <motion.div
          className="glass p-6 rounded-xl transform hover:scale-105 transition-all duration-300 hover:shadow-[0_0_30px_rgba(var(--tw-text-green-500-rgb),0.3)] dark:hover:shadow-[0_0_30px_rgba(var(--tw-text-green-400-rgb),0.2)]"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: 0.2 }}
          whileHover={{ y: -5 }}
        >
          <div className="mb-4 text-center">
            <div className="w-16 h-16 mx-auto mb-4 rounded-xl bg-green-100 dark:bg-green-900/30 flex items-center justify-center text-green-600 dark:text-green-400 transform group-hover:scale-110 transition-transform duration-300">
              <Cpu className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200">AI & ML</h3>
          </div>
          <ul className="space-y-2">
            {[
              'TensorFlow',
              'PyTorch',
              'Scikit-learn',
              'OpenCV',
              'Pandas',
              'NumPy',
              'Matplotlib',
              'Keras',
              'YOLO',
              'Transformers'
            ].map((item, index) => (
              <motion.li 
                key={index}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.1 * index }}
                className="flex items-center gap-2 text-gray-700 dark:text-gray-300"
              >
                <Check className="w-5 h-5 text-green-500" />
                {item}
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {/* Web Development */}
        <motion.div
          className="glass p-6 rounded-xl transform hover:scale-105 transition-all duration-300 hover:shadow-[0_0_30px_rgba(var(--tw-text-purple-500-rgb),0.3)] dark:hover:shadow-[0_0_30px_rgba(var(--tw-text-purple-400-rgb),0.2)]"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: 0.3 }}
          whileHover={{ y: -5 }}
        >
          <div className="mb-4 text-center">
            <div className="w-16 h-16 mx-auto mb-4 rounded-xl bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center text-purple-600 dark:text-purple-400 transform group-hover:scale-110 transition-transform duration-300">
              <Globe className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200">Web Dev</h3>
          </div>
          <ul className="space-y-2">
            {[
              'React.js',
              'Node.js',
              'Express.js',
              'Next.js',
              'Tailwind CSS',
              'Bootstrap',
              'MongoDB',
              'RESTful APIs',
              'GraphQL',
              'Vue.js'
            ].map((item, index) => (
              <motion.li 
                key={index}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.1 * index }}
                className="flex items-center gap-2 text-gray-700 dark:text-gray-300"
              >
                <Check className="w-5 h-5 text-green-500" />
                {item}
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {/* Tools & Technologies */}
        <motion.div
          className="glass p-6 rounded-xl transform hover:scale-105 transition-all duration-300 hover:shadow-[0_0_30px_rgba(var(--tw-text-orange-500-rgb),0.3)] dark:hover:shadow-[0_0_30px_rgba(var(--tw-text-orange-400-rgb),0.2)]"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: 0.4 }}
          whileHover={{ y: -5 }}
        >
          <div className="mb-4 text-center">
            <div className="w-16 h-16 mx-auto mb-4 rounded-xl bg-orange-100 dark:bg-orange-900/30 flex items-center justify-center text-orange-600 dark:text-orange-400 transform group-hover:scale-110 transition-transform duration-300">
              <Terminal className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200">Tools</h3>
          </div>
          <ul className="space-y-2">
            {[
              'Git',
              'Docker',
              'VS Code',
              'Jupyter',
              'Postman',
              'AWS',
              'Linux',
              'Figma',
              'Kubernetes',
              'Jenkins'
            ].map((item, index) => (
              <motion.li 
                key={index}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.1 * index }}
                className="flex items-center gap-2 text-gray-700 dark:text-gray-300"
              >
                <Check className="w-5 h-5 text-green-500" />
                {item}
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>

      {/* Additional Skills Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
      >
        {additionalSkills.map((skill, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className={`glass p-6 rounded-xl text-center transform hover:scale-105 transition-all duration-300 hover:shadow-[0_0_30px_rgba(var(--tw-text-${skill.color}-500-rgb),0.3)] dark:hover:shadow-[0_0_30px_rgba(var(--tw-text-${skill.color}-400-rgb),0.2)]`}
            whileHover={{ y: -5 }}
          >
            <div className={`w-12 h-12 mx-auto mb-4 rounded-full bg-${skill.color}-100 dark:bg-${skill.color}-900/30 flex items-center justify-center text-${skill.color}-600 dark:text-${skill.color}-400 transform group-hover:scale-110 transition-transform duration-300`}>
              {skill.icon}
            </div>
            <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-gray-200">
              {skill.title}
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              {skill.description}
            </p>
          </motion.div>
        ))}
      </motion.div>

      {/* Certifications Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mt-20"
      >
        <h3 className="text-2xl font-bold text-center mb-8 text-gray-800 dark:text-gray-200">
          Certifications & Achievements
        </h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ 
                y: -10,
                transition: { type: "spring", stiffness: 300 }
              }}
              className={`glass p-6 rounded-xl relative group cursor-pointer transform hover:scale-105 transition-all duration-300 hover:shadow-[0_0_30px_rgba(var(--tw-text-${cert.color}-500-rgb),0.3)] dark:hover:shadow-[0_0_30px_rgba(var(--tw-text-${cert.color}-400-rgb),0.2)]`}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary-500/10 to-secondary-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className="relative z-10">
                <div className={`w-12 h-12 rounded-xl bg-${cert.color}-100 dark:bg-${cert.color}-900/30 flex items-center justify-center text-${cert.color}-600 dark:text-${cert.color}-400 mb-4 transform group-hover:scale-110 transition-transform duration-300`}>
                  {cert.icon}
                </div>
                
                <h4 className="text-lg font-bold mb-2 text-gray-800 dark:text-gray-200 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                  {cert.title}
                </h4>
                
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-2xl">{certificationLogos[cert.issuer as keyof typeof certificationLogos]}</span>
                  <p className="text-gray-600 dark:text-gray-400">
                    {cert.issuer}
                  </p>
                </div>
                
                <p className="text-sm text-gray-500 dark:text-gray-500 mt-2 flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  Completed in {cert.date}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default TechStackPage;