import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Text, Float, Line } from '@react-three/drei';
import { Color, Vector3 } from 'three';

const techStack = [
  { name: 'React', color: '#61DAFB', position: [-4, 2, 0] },
  { name: 'Python', color: '#3776AB', position: [3, 1, -2] },
  { name: 'TensorFlow', color: '#FF6F00', position: [-2, -1, -3] },
  { name: 'Node.js', color: '#339933', position: [4, -2, -1] },
  { name: 'OpenCV', color: '#5C3EE8', position: [-1, 3, -2] },
  { name: 'PyTorch', color: '#EE4C2C', position: [0, -3, 0] },
  { name: 'Three.js', color: '#000000', position: [2, 0, -3] },
  { name: 'Scikit', color: '#F7931E', position: [-3, -2, -1] },
  { name: 'MongoDB', color: '#47A248', position: [3, 2, -2] },
  { name: 'Docker', color: '#2496ED', position: [-2, 1, -1] },
  { name: 'AWS', color: '#FF9900', position: [1, -2, -3] },
  { name: 'TypeScript', color: '#3178C6', position: [-4, -1, -2] },
];

interface TechItemProps {
  name: string;
  color: string;
  position: [number, number, number];
  index: number;
}

const TechItem = ({ name, color, position, index }: TechItemProps) => {
  const meshRef = useRef<THREE.Mesh>(null);
  const linePoints = useRef<Vector3[]>([
    new Vector3(...position),
    new Vector3(...techStack[(index + 1) % techStack.length].position)
  ]);
  
  useFrame(({ clock }) => {
    if (meshRef.current) {
      const t = clock.getElapsedTime() + index;
      meshRef.current.position.y += Math.sin(t * 0.5) * 0.002;
      meshRef.current.rotation.y += 0.005;

      // Update line points to connect to next tech item
      const nextIndex = (index + 1) % techStack.length;
      const nextPosition = new Vector3(...techStack[nextIndex].position);
      linePoints.current = [
        meshRef.current.position.clone(),
        nextPosition
      ];
    }
  });

  return (
    <>
      <Float
        speed={2}
        rotationIntensity={0.2}
        floatIntensity={0.5}
        position={position}
      >
        <mesh ref={meshRef}>
          <sphereGeometry args={[0.5, 16, 16]} />
          <meshPhongMaterial color={new Color(color)} wireframe />
          <Text
            position={[0, 0, 0.6]}
            fontSize={0.3}
            color="white"
            font="/fonts/inter_bold.json"
            anchorX="center"
            anchorY="middle"
          >
            {name}
          </Text>
        </mesh>
      </Float>

      {linePoints.current.length >= 2 && (
        <Line
          points={linePoints.current}
          color={color}
          lineWidth={1}
          transparent
          opacity={0.2}
        />
      )}
    </>
  );
};

const TechStackGrid = () => {
  return (
    <Canvas camera={{ position: [0, 0, 8], fov: 60 }}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 10]} intensity={1} />
      <pointLight position={[-10, -10, -10]} intensity={0.5} />
      
      {techStack.map((tech, index) => (
        <TechItem 
          key={index} 
          name={tech.name} 
          color={tech.color} 
          position={tech.position as [number, number, number]} 
          index={index}
        />
      ))}
    </Canvas>
  );
};

export default TechStackGrid;