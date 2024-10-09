import { useFrame, useThree } from '@react-three/fiber';
import { useRef } from 'react';
import * as THREE from 'three';

const Airplane: React.FC = () => {
  const airplaneRef = useRef<THREE.Group>(null!);
  const smokeParticles = useRef<THREE.Points>(null!);
  const { camera, size } = useThree();
  const particleCount = 1000; // Adjust this number as needed

  const positions = new Float32Array(particleCount * 3);

  useFrame(({ mouse }) => {
    if (airplaneRef.current) {
      // Calculate airplane position based on mouse
      const vector = new THREE.Vector3(
        (mouse.x * size.width) / size.height,
        -mouse.y,
        0.5
      );
      vector.unproject(camera);
      const dir = vector.sub(camera.position).normalize();
      const distance = -camera.position.z / dir.z;
      const pos = camera.position.clone().add(dir.multiplyScalar(distance));
      airplaneRef.current.position.copy(pos);
      airplaneRef.current.lookAt(camera.position);
    }

    if (smokeParticles.current) {
      // Update smoke particles
      const positions = smokeParticles.current.geometry.attributes.position;
      for (let i = 0; i < positions.count; i++) {
        positions.setY(i, positions.getY(i) - 0.01);
        if (positions.getY(i) < -5) {
          positions.setY(i, 5);
        }
      }
      positions.needsUpdate = true;
    }
  });

  return (
    <group ref={airplaneRef}>
      <mesh>
        <coneGeometry args={[0.1, 0.5, 32]} />
        <meshStandardMaterial color="white" />
      </mesh>
      <points ref={smokeParticles}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={particleCount}
            array={positions}
            itemSize={3}
          />
        </bufferGeometry>
        <pointsMaterial size={0.05} color="gray" transparent opacity={0.5} />
      </points>
    </group>
  );
};

export { Airplane };