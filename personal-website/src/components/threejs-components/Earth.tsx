import { useFrame, useLoader } from '@react-three/fiber';
import { useRef, useMemo } from 'react';
import * as THREE from 'three';
import { TextureLoader } from 'three/src/loaders/TextureLoader';

// Import textures
import albedoTexture from '../../assets/albedo.png';
import BumpTexture from '../../assets/earthBumpMap.png';
import CloudsTexture from '../../assets/earthClouds.jpeg';


export const Earth: React.FC = () => {
  const earthRef = useRef<THREE.Mesh>(null!);
  const cloudsRef = useRef<THREE.Mesh>(null!);

  // Load textures
  const [earthMap, bumpMap, cloudsMap] = useLoader(TextureLoader, [albedoTexture, BumpTexture, CloudsTexture]);

  // Create materials
  const earthMaterial = useMemo(() => {
    const material = new THREE.MeshStandardMaterial({
      map: earthMap,
      bumpMap: bumpMap,
      bumpScale: 0.03,
    });

    material.onBeforeCompile = (shader) => {
      shader.uniforms.tClouds = { value: cloudsMap };
      shader.uniforms.tClouds.value.wrapS = THREE.RepeatWrapping;
      shader.uniforms.uv_xOffset = { value: 0 };

      shader.fragmentShader = shader.fragmentShader.replace(
        '#include <common>',
        `
        #include <common>
        uniform sampler2D tClouds;
        uniform float uv_xOffset;
        `
      );

      shader.fragmentShader = shader.fragmentShader.replace(
        '#include <emissivemap_fragment>',
        `
        #include <emissivemap_fragment>
        float cloudsMapValue = texture2D(tClouds, vec2(vMapUv.x - uv_xOffset, vMapUv.y)).r;
        diffuseColor.rgb *= max(1.0 - cloudsMapValue, 0.2);
        `
      );

      material.userData.shader = shader;
    };

    return material;
  }, [earthMap, bumpMap, cloudsMap]);

  const cloudsMaterial = useMemo(() => {
    return new THREE.MeshStandardMaterial({
      map: cloudsMap,
      transparent: true,
      opacity: 0.4,
    });
  }, [cloudsMap]);

  useFrame((state, delta) => {
    if (earthRef.current && cloudsRef.current) {
      earthRef.current.rotation.y += delta * 0.05;
      cloudsRef.current.rotation.y += delta * 0.1;

      const shader = earthMaterial.userData.shader;
      if (shader) {
        shader.uniforms.uv_xOffset.value += (delta * 0.05) / (2 * Math.PI);
        shader.uniforms.uv_xOffset.value %= 1;
      }
    }
  });

  return (
    <group position={[0, 0, 0]}>
      <mesh ref={earthRef} material={earthMaterial}>
        <sphereGeometry args={[2, 64, 64]} />
      </mesh>
      <mesh ref={cloudsRef} material={cloudsMaterial}>
        <sphereGeometry args={[2.05, 64, 64]} />
      </mesh>
    </group>
  );
};

export default Earth;