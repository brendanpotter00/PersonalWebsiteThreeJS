import { OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { Text3D } from './Text3D';
import { BouncingCubes } from './BouncingCubes';
import './App.css'; // Make sure to create this CSS file

const App: React.FC = () => {
  return (
    <div className="canvas-container">
      <Canvas camera={{ position: [0, 0, 10], fov: 50 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <OrbitControls />
        <Text3D />
        <BouncingCubes count={20} />
      </Canvas>
    </div>
  );
};

export default App;