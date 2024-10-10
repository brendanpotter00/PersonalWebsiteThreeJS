import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

interface ComputerProps {
    scrollY: number;
  }

const Computer: React.FC<ComputerProps> = ({ scrollY }) => {
  const { scene } = useGLTF('/assets/old_computer_mouse_and_keyboard_low_poly/scene.gltf');
  const computerRef = useRef<THREE.Group>(null);
  const orbitRef = useRef<THREE.Group>(null);

  useFrame(({ clock }) => {
    if (orbitRef.current) {
      // Rotate the orbit group around the y-axis
      orbitRef.current.rotation.y = clock.getElapsedTime() * 0.2;
    }
    if (computerRef.current) {
      // Rotate the computer itself
      computerRef.current.rotation.y += 0.01;
       // Move Earth closer to camera and to the right based on scroll
       const maxScroll = 1000; // Adjust this value based on your needs
       const scrollProgress = Math.min(scrollY / maxScroll, 1);
       
     computerRef.current.position.x = scrollProgress * -3; // Move right
     computerRef.current.position.z = -scrollProgress * -3; // Move closer
     computerRef.current.position.y = -scrollProgress * 3; // Move closer
    }
    
  });

  return (
    <group ref={orbitRef}>
      <group position={[3, 1.1, 0]}>
        <primitive 
          ref={computerRef}
          object={scene} 
          scale={[0.2, 0.2, 0.2]}
          rotation={[0, 0, 0]}
        />
      </group>
    </group>
  );
}

export default Computer;

// Preload the model for faster rendering
useGLTF.preload('/assets/old_computer_mouse_and_keyboard_low_poly/scene.gltf');
