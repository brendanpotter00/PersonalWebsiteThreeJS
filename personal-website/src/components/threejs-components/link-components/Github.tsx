import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

interface GithubProps {
  scrollY: number;
}

const Github: React.FC<GithubProps> = ({ scrollY }) => {
  const { scene } = useGLTF('/assets/github/scene.gltf');
  const githubRef = useRef<THREE.Group>(null);
  const speed = 0.5;


  useFrame(({clock}) => {
    if (githubRef.current) {
        const time = clock.getElapsedTime();
        // Apply rotation along the Y-axis back and forth
        githubRef.current.rotation.y = Math.sin(time * speed) * (Math.PI / 36); 
    }
  });

  return (
    <primitive
      ref={githubRef}
      object={scene}
      scale={[0.2, 0.2, 0.2]} // Adjust the size
      position={[-7, -1, 0]} // Bottom-left position
    />
  );
};

export default Github;

useGLTF.preload('/assets/github/scene.gltf');
