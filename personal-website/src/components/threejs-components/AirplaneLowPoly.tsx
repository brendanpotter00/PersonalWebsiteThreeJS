import React, { useRef, useEffect } from 'react';
import { useGLTF } from '@react-three/drei';
import { useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';

interface LowPolyAirplaneProps {
  scrollY: number;
}

const LowPolyAirplane: React.FC<LowPolyAirplaneProps> = ({ scrollY }) => {
  const { scene } = useGLTF('/assets/low_poly_plane/scene.gltf');
  const airplaneRef = useRef<THREE.Group>(null!);
  const { camera, size } = useThree();
  const raycaster = new THREE.Raycaster();
  const plane = new THREE.Plane(new THREE.Vector3(0, 0, 1), 0);
  const mouseVector = new THREE.Vector2();
  const targetPos = useRef(new THREE.Vector3());

  useEffect(() => {
    const updateMousePosition = (event: MouseEvent) => {
      mouseVector.x = (event.clientX / size.width) * 2 - 1;
      mouseVector.y = -(event.clientY / size.height) * 2 + 1;
    };

    window.addEventListener('mousemove', updateMousePosition);
    return () => window.removeEventListener('mousemove', updateMousePosition);
  }, [size]);

  useFrame(() => {
    if (!airplaneRef.current) return;

    raycaster.setFromCamera(mouseVector, camera);
    const intersection = new THREE.Vector3();
    raycaster.ray.intersectPlane(plane, intersection);

    targetPos.current.copy(intersection);

    airplaneRef.current.position.lerp(targetPos.current, 0.1);

    if (mouseVector.x > 0) {
      airplaneRef.current.rotation.y = Math.PI;
    } else {
      airplaneRef.current.rotation.y = 0;
    }
  });

  return (
    <group ref={airplaneRef}>
      <primitive object={scene} scale={[0.2, 0.2, 0.2]} rotation={[0, Math.PI/2, 0]} />
    </group>
  );
};

export default LowPolyAirplane;

useGLTF.preload('/assets/low_poly_plane/scene.gltf');
