import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

interface EmailProps {
  scrollY: number;
}

const Email: React.FC<EmailProps> = ({ scrollY }) => {
  const { scene } = useGLTF('/assets/message/scene.gltf');
  const emailRef = useRef<THREE.Group>(null);
  const speed = 0.7;

  useFrame(({ clock }) => {
    if (emailRef.current) {
      const time = clock.getElapsedTime();
      // Apply rotation along the Y-axis back and forth
      emailRef.current.rotation.y = Math.sin(time * speed) * (Math.PI / 36); // Back-and-forth with smaller range
    }
  });

  return (
    <primitive
      ref={emailRef}
      object={scene}
      scale={[0.2, 0.2, 0.2]} // Adjust the size
      position={[-7, -2, 0]} // Bottom-left position
    />
  );
};

export default Email;

useGLTF.preload('/assets/message/scene.gltf');
