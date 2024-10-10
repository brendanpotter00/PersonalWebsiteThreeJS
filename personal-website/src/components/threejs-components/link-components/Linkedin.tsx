import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import { useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';

interface LinkedinProps {
  scrollY: number;
}

const Linkedin: React.FC<LinkedinProps> = ({ scrollY }) => {
  const { scene } = useGLTF('/assets/linkedin/scene.gltf');
  const linkedinRef = useRef<THREE.Group>(null);
  const { gl } = useThree();  // For accessing the canvas element
  const speed = 0.3;

  // Handle hover effect
  const handlePointerOver = () => {
    gl.domElement.style.cursor = 'pointer';  // Change cursor to pointer
  };

  const handlePointerOut = () => {
    gl.domElement.style.cursor = 'default';  // Revert cursor to default
  };

  // Handle click redirect
  const handleClick = () => {
    window.open('https://www.linkedin.com/in/brendan-potter00/', '_blank');  // Replace with your LinkedIn URL
  };

  useFrame(({ clock }) => {
    if (linkedinRef.current) {
      const time = clock.getElapsedTime();
      // Apply rotation along the Y-axis back and forth
      linkedinRef.current.rotation.y = Math.sin(time * speed) * (Math.PI / 36); 
    }
  });

  return (
    <primitive
      ref={linkedinRef}
      object={scene}
      scale={[0.2, 0.2, 0.2]} // Adjust the size
      position={[-7, 0, 0]} // Bottom-left position
      onPointerOver={handlePointerOver} // Change cursor on hover
      onPointerOut={handlePointerOut} // Reset cursor on mouse out
      onClick={handleClick} // Redirect to LinkedIn profile on click
    />
  );
};

export default Linkedin;

useGLTF.preload('/assets/linkedin/scene.gltf');
