import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Sphere } from '@react-three/drei';
import { Color, MathUtils } from 'three';

export const ContactSphere = () => {
  const sphereRef = useRef<THREE.Mesh>(null);
  const hoverRef = useRef<boolean>(false);
  const pulseRef = useRef<number>(0);

  useFrame(({ clock }) => {
    if (!sphereRef.current) return;
    
    // Rotate the sphere
    sphereRef.current.rotation.x = Math.sin(clock.getElapsedTime() * 0.3) * 0.2;
    sphereRef.current.rotation.y = Math.sin(clock.getElapsedTime() * 0.2) * 0.3;
    
    // Pulsing effect
    pulseRef.current += 0.03;
    
    const scale = 1 + Math.sin(pulseRef.current) * 0.05;
    sphereRef.current.scale.set(scale, scale, scale);

    // Wobble effect
    sphereRef.current.position.y = Math.sin(clock.getElapsedTime()) * 0.1;
  });

  return (
    <group>
      {/* Main sphere */}
      <Sphere 
        ref={sphereRef} 
        args={[1, 32, 32]} 
        position={[0, 0, 0]}
        onPointerOver={() => { hoverRef.current = true; }}
        onPointerOut={() => { hoverRef.current = false; }}
      >
        <meshPhongMaterial 
          color={new Color("#6d28d9")} 
          wireframe 
          transparent 
          opacity={0.8} 
          emissive={new Color("#5b21b6")}
          emissiveIntensity={0.3}
        />
      </Sphere>
      
      {/* Inner sphere for glow effect */}
      <Sphere args={[0.7, 16, 16]} position={[0, 0, 0]}>
        <meshPhongMaterial 
          color={new Color("#c4b5fd")} 
          transparent 
          opacity={0.3} 
          emissive={new Color("#8b5cf6")}
          emissiveIntensity={0.5}
        />
      </Sphere>
      
      {/* Outer wireframe sphere */}
      <Sphere args={[1.3, 16, 16]} position={[0, 0, 0]}>
        <meshPhongMaterial 
          color={new Color("#0d9488")} 
          wireframe 
          transparent 
          opacity={0.2}
        />
      </Sphere>
    </group>
  );
};

export default ContactSphere;