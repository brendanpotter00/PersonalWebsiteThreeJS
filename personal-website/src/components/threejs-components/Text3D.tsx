import { Text } from '@react-three/drei';

export const Text3D: React.FC = () => {
  return (
    <group position={[0, -2, 0]}>
      <Text
        fontSize={0.7}
        color="cyan"
        anchorX="center"
        anchorY="bottom"
      >
        Hello World
      </Text>
      <Text
        position={[0, -0.6, 0]}
        fontSize={0.7}
        color="gold"
        anchorX="center"
        anchorY="top"
        textAlign="center"
      >
        {`My Name is\nBrendan Potter`}
      </Text>
    </group>
  );
};