import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

interface EarthProps {
  scrollY: number;
}

const Earth: React.FC<EarthProps> = ({ scrollY }) => {
  // Load the GLTF scene
  const { scene } = useGLTF('/assets/low_poly_planet_earth/scene.gltf');
  const earthRef = useRef<THREE.Group>(null);

  useFrame(() => {
    if (earthRef.current) {
      earthRef.current.rotation.y += 0.003; // Adjust the speed of rotation here
      
      // Move Earth closer to camera and to the right based on scroll
      const maxScroll = 1000; // Adjust this value based on your needs
      const scrollProgress = Math.min(scrollY / maxScroll, 1);
      
      earthRef.current.position.x = scrollProgress * 3; // Move right
      earthRef.current.position.z = -scrollProgress * -3; // Move closer
      earthRef.current.position.y = -scrollProgress * 3; // Move closer
    }
  });

  return (
    <primitive 
      ref={earthRef}
      object={scene} 
      scale={[1.5, 1.5, 1.5]} // Adjust scale as needed
      position={[0, 0, 0]} // Adjust position as needed
    />
  );
}

export default Earth;

// Preload the model for faster rendering
useGLTF.preload('/assets/low_poly_planet_earth/scene.gltf');
