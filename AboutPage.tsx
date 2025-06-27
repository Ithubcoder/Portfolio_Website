import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { GraduationCap, Trophy, Briefcase, Heart, Code, Brain, Rocket } from 'lucide-react';
import { Canvas } from '@react-three/fiber';
import { Float, Text3D, OrbitControls, Stars } from '@react-three/drei';

const AboutPage = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.8, 1], [0, 1, 1, 0]);

  const timelineItems = [
    {
      year: "2020",
      title: "Completed 10th Grade – G.D Goenka International School",
      description: "Laid the foundation for my academic journey with a growing curiosity in computers and technology.",
      icon: <GraduationCap className="w-6 h-6" />,
    },
    {
      year: "2022",
      title: "Completed 12th Grade – G.D Goenka International School",
      description: "Specialized in Physics, Chemistry, and Mathematics, strengthening analytical and problem-solving skills.",
      icon: <GraduationCap className="w-6 h-6" />,
    },
    {
      year: "2022",
      title: "Started B.Tech C.S.E (DS & AI) – SRM University, Haryana",
      description: "Enrolled in Computer Science with a specialization in Data Science & AI to build intelligent tech solutions.",
      icon: <GraduationCap className="w-6 h-6" />,
    }
  ];

  const achievements = [
    {
      title: "Hackathon Winner",
      description: "First place in SRM University Hackathon 2023",
      icon: <Trophy className="w-6 h-6" />,
      color: "blue"
    },
    {
      title: "Research Paper",
      description: "Published paper on AI in Healthcare",
      icon: <Briefcase className="w-6 h-6" />,
      color: "purple"
    },
    {
      title: "Community Impact",
      description: "Led AI workshops for 100+ students",
      icon: <Heart className="w-6 h-6" />,
      color: "pink"
    },
    {
      title: "AI Projects",
      description: "Developed 10+ AI/ML Projects",
      icon: <Brain className="w-6 h-6" />,
      color: "indigo"
    }
  ];

  return (
    <div ref={containerRef} className="container mx-auto px-4">
      <motion.h2 
        className="section-heading text-center mb-8"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        About Me
      </motion.h2>

      <div className="flex flex-col md:flex-row gap-8 items-center justify-center mb-12">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="md:w-1/2"
        >
          <div className="glass p-8 rounded-xl space-y-6">
            <p className="text-lg text-gray-700 dark:text-gray-300">
              Hi, I'm Mukul Rajput, a passionate AI & Machine Learning Enthusiast with a strong interest in data science, software development, and IoT-based smart solutions. I enjoy solving real-world problems through technology, leveraging my skills in Python, OpenCV, and ML algorithms to build innovative projects.
            </p>
            
            <p className="text-lg text-gray-700 dark:text-gray-300">
              Currently pursuing BTech C.S.E with specialization in Data Science & Artificial Intelligence from SRM University, I actively engage in machine learning, AI research, and software development. My experience spans across internships in data science and software development, working with real-world datasets, recommendation systems, face recognition models, and smart traffic management systems.
            </p>
          </div>
        </motion.div>

        <motion.div
          style={{ y, opacity }}
          className="md:w-1/2 h-[400px] relative"
        >
          <Canvas>
            <ambientLight intensity={0.5} />
            <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} />
            <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
            <Float
              speed={1.5}
              rotationIntensity={0.5}
              floatIntensity={0.5}
            >
              <Text3D
                font="/fonts/inter_bold.json"
                size={1.5}
                height={0.2}
                curveSegments={12}
                bevelEnabled
                bevelThickness={0.02}
                bevelSize={0.02}
                bevelOffset={0}
                bevelSegments={5}
                position={[-3.2, 0, 0]}
              >
                Hello
                <meshNormalMaterial />
              </Text3D>
            </Float>
            <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />
          </Canvas>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="grid md:grid-cols-2 gap-8 mb-16"
      >
        {achievements.map((achievement, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className={`glass p-6 rounded-xl text-center transform hover:scale-105 transition-all duration-300 hover:shadow-[0_0_30px_rgba(var(--tw-text-${achievement.color}-500-rgb),0.3)] dark:hover:shadow-[0_0_30px_rgba(var(--tw-text-${achievement.color}-400-rgb),0.2)]`}
            whileHover={{ y: -5 }}
          >
            <div className={`w-12 h-12 mx-auto mb-4 rounded-full bg-${achievement.color}-100 dark:bg-${achievement.color}-900/30 flex items-center justify-center text-${achievement.color}-600 dark:text-${achievement.color}-400 transform group-hover:scale-110 transition-transform duration-300`}>
              {achievement.icon}
            </div>
            <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-gray-200">
              {achievement.title}
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              {achievement.description}
            </p>
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative py-20"
      >
        <h3 className="text-2xl font-bold text-center mb-16 text-gray-800 dark:text-gray-200">
          My Journey
        </h3>

        <div className="max-w-4xl mx-auto space-y-12">
          {timelineItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <motion.div
                className="glass p-8 rounded-xl transform-gpu transition-all duration-300 hover:shadow-[0_20px_40px_rgba(var(--tw-shadow-color),0.3)] dark:hover:shadow-[0_20px_40px_rgba(var(--tw-shadow-color),0.2)]"
                whileHover={{
                  scale: 1.02,
                  rotateX: 5,
                  rotateY: 5,
                }}
              >
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="inline-block px-6 py-2 rounded-full bg-gradient-to-r from-primary-500 to-secondary-500 text-white font-bold mb-6 transform hover:scale-105 transition-transform duration-300 hover:shadow-lg"
                >
                  {item.year}
                </motion.div>
                
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 rounded-xl bg-primary-100 dark:bg-primary-900/50 text-primary-800 dark:text-primary-300 transform hover:scale-110 transition-transform duration-300">
                    {item.icon}
                  </div>
                  <h4 className="text-xl font-bold text-gray-800 dark:text-gray-200">
                    {item.title}
                  </h4>
                </div>
                
                <p className="text-gray-600 dark:text-gray-400 ml-14">
                  {item.description}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default AboutPage;