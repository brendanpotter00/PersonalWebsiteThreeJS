import { useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import * as THREE from 'three';

interface CubeProps {
  position: [number, number, number];
}

const Cube: React.FC<CubeProps> = ({ position }) => {
  const mesh = useRef<THREE.Mesh>(null!);
  const velocity = useRef(new THREE.Vector3(Math.random() - 0.5, Math.random() - 0.5, Math.random() - 0.5).multiplyScalar(0.05));

  useFrame(() => {
    if (mesh.current) {
      mesh.current.position.add(velocity.current);

      // Bounce off imaginary walls
      if (Math.abs(mesh.current.position.x) > 5) velocity.current.x *= -1;
      if (Math.abs(mesh.current.position.y) > 5) velocity.current.y *= -1;
      if (Math.abs(mesh.current.position.z) > 5) velocity.current.z *= -1;

      mesh.current.rotation.x += 0.01;
      mesh.current.rotation.y += 0.01;
    }
  });

  return (
    <mesh ref={mesh} position={position}>
      <boxGeometry args={[0.8, 0.8, 0.8]} />
      <meshStandardMaterial color="hotpink" />
    </mesh>
  );
};

interface BouncingCubesProps {
  count: number;
}

export const BouncingCubes: React.FC<BouncingCubesProps> = ({ count }) => {
  const cubes = Array.from({ length: count }, (_, i) => (
    <Cube key={i} position={[Math.random() * 10 - 5, Math.random() * 10 - 5, Math.random() * 10 - 5]} />
  ));

  return <>{cubes}</>;
};