import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { Canvas } from '@react-three/fiber';
import { Float, OrbitControls, Text3D } from '@react-three/drei';
import BackgroundShapes from './BackgroundShapes';

const HomePage = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const floatingIcons = [
    { icon: 'A', position: [-4, 2, -2], delay: 0 },
    { icon: 'B', position: [4, -2, -3], delay: 0.2 },
    { icon: 'C', position: [-3, -1, -4], delay: 0.4 },
    { icon: 'H', position: [3, 3, -2], delay: 0.6 },
  ];

  return (
    <div 
      ref={containerRef} 
      className="relative h-screen flex items-center overflow-hidden"
    >
      {/* 3D Background */}
      <div className="absolute inset-0 z-0">
        <Canvas camera={{ position: [0, 0, 10], fov: 75 }}>
          <ambientLight intensity={1.5} />
          <directionalLight position={[10, 10, 5]} intensity={1} />
          <Float
            speed={4}
            rotationIntensity={1}
            floatIntensity={2}
          >
            <BackgroundShapes />
            {floatingIcons.map((item, index) => (
              <Float
                key={index}
                speed={2}
                rotationIntensity={0.5}
                floatIntensity={1}
                position={item.position}
              >
                <Text3D
                  font="/fonts/inter_bold.json"
                  size={0.5}
                  height={0.1}
                  curveSegments={12}
                >
                  {item.icon}
                  <meshNormalMaterial />
                </Text3D>
              </Float>
            ))}
          </Float>
          <OrbitControls 
            enableZoom={false}
            enablePan={false}
            enableRotate={false}
            autoRotate
            autoRotateSpeed={0.5}
          />
        </Canvas>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 z-10 pt-20">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6"
          >
            <span className="px-4 py-2 rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-800 dark:text-primary-300 text-sm font-medium">
              Hello, Welcome to my Portfolio Website
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-5xl md:text-7xl font-bold mb-6"
          >
            <motion.span 
              className="block"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              Mukul Rajput
            </motion.span> 
            <motion.span 
              className="text-gradient"
              animate={{ 
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{ 
                duration: 5,
                repeat: Infinity,
                ease: "linear"
              }}
              style={{
                backgroundSize: "200% 200%",
              }}
            >
              DS & AI Student
            </motion.span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xl text-gray-600 dark:text-gray-400 mb-10"
          >
            I'm passionate about transforming data into powerful insights and building intelligent solutions that drive real-world impact through AI and analytics.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 rounded-full bg-primary-600 hover:bg-primary-700 text-white font-medium transition-colors"
            >
              View My Work
            </motion.a>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 rounded-full border border-gray-300 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300 font-medium transition-colors"
            >
              Contact Me
            </motion.a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-12 flex justify-center"
          >
            <motion.a
              href="https://mukul_rajput.bio.link/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 rounded-full bg-gradient-to-r from-primary-600 to-secondary-600 text-white font-medium flex items-center gap-2 hover:opacity-90 transition-opacity"
            >
              Connect With Me <ExternalLink size={18} />
            </motion.a>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;