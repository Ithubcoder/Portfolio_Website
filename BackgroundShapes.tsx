import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Icosahedron, Octahedron, Dodecahedron, Line } from '@react-three/drei';
import { Mesh, Color, Vector3 } from 'three';

const BackgroundShapes = () => {
  const group = useRef<THREE.Group>(null);
  const icoRef = useRef<Mesh>(null);
  const octaRef = useRef<Mesh>(null);
  const dodecRef = useRef<Mesh>(null);
  
  // Initialize linePoints with valid Vector3 instances
  const linePoints = useRef<Vector3[]>([
    new Vector3(3, 0, -5),    // Initial position of Icosahedron
    new Vector3(-3, 2, -3),   // Initial position of Octahedron
    new Vector3(0, -3, -4),   // Initial position of Dodecahedron
    new Vector3(3, 0, -5),    // Close the loop back to Icosahedron
  ]);

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime() * 0.5;
    
    if (icoRef.current) {
      icoRef.current.position.x = Math.sin(t) * 3;
      icoRef.current.position.y = Math.cos(t * 0.7) * 2;
      icoRef.current.rotation.x += 0.003;
      icoRef.current.rotation.y += 0.005;
    }
    
    if (octaRef.current) {
      octaRef.current.position.x = Math.cos(t * 0.8) * 3;
      octaRef.current.position.y = Math.sin(t * 0.5) * 2;
      octaRef.current.rotation.x += 0.004;
      octaRef.current.rotation.z += 0.006;
    }
    
    if (dodecRef.current) {
      dodecRef.current.position.x = Math.sin(t * 0.6) * 3.5;
      dodecRef.current.position.y = Math.cos(t * 0.9) * 2.5;
      dodecRef.current.rotation.y += 0.005;
      dodecRef.current.rotation.z += 0.003;
    }
    
    if (group.current) {
      group.current.rotation.y = clock.getElapsedTime() * 0.05;
    }

    // Only update line points if all refs are available
    if (icoRef.current && octaRef.current && dodecRef.current) {
      linePoints.current[0].copy(icoRef.current.position);
      linePoints.current[1].copy(octaRef.current.position);
      linePoints.current[2].copy(dodecRef.current.position);
      linePoints.current[3].copy(icoRef.current.position);
    }
  });

  return (
    <group ref={group}>
      <Icosahedron ref={icoRef} args={[1, 1]} position={[3, 0, -5]}>
        <meshPhongMaterial 
          color={new Color("#6d28d9")} 
          wireframe 
          transparent 
          opacity={0.6} 
        />
      </Icosahedron>
      
      <Octahedron ref={octaRef} args={[1, 0]} position={[-3, 2, -3]}>
        <meshPhongMaterial 
          color={new Color("#0d9488")} 
          wireframe 
          transparent 
          opacity={0.6} 
        />
      </Octahedron>
      
      <Dodecahedron ref={dodecRef} args={[0.8, 0]} position={[0, -3, -4]}>
        <meshPhongMaterial 
          color={new Color("#f97316")} 
          wireframe 
          transparent 
          opacity={0.6} 
        />
      </Dodecahedron>

      <Line
        points={linePoints.current}
        color="#8b5cf6"
        lineWidth={1}
        transparent
        opacity={0.3}
      />
    </group>
  );
};

export default BackgroundShapes;