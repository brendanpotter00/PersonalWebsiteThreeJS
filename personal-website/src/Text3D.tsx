import { Text } from '@react-three/drei';

export const Text3D: React.FC = () => {
  return (
    <Text
      position={[0, 0, 0]}
      fontSize={1}
      color="gold"
      anchorX="center"
      anchorY="middle"
    >
      Brendan Potter
    </Text>
  );
};