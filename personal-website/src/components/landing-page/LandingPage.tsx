import { OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import Header from '../Header';
import { Text3D } from '../threejs-components/Text3D';
import Earth from '../threejs-components/Earth';
import { Airplane } from '../threejs-components/Airplane';
import { useRef, useEffect } from 'react';

const LandingPage: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (canvasRef.current) {
        const scrollY = window.scrollY;
        canvasRef.current.style.transform = `translateY(${scrollY * 0.5}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div style={{ position: 'relative', minHeight: '300vh' }}>
      <Header />
      <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', overflow: 'hidden' }}>
        <Canvas ref={canvasRef} style={{ background: '#001f3f' }} camera={{ position: [0, 0, 10], fov: 50 }}>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} intensity={0.5} />
          <directionalLight position={[-10, 10, 5]} intensity={1} />
          <OrbitControls enableZoom={false} enablePan={true} enableRotate={true} />
          <Earth />
          <Text3D />
          <Airplane />
        </Canvas>
      </div>
      <div style={{ position: 'relative', zIndex: 5, paddingTop: '80px' }}>
        <section id="projects" style={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <h2 style={{ fontSize: '2.5rem', color: 'white' }}>About Me</h2>
        </section>
        <section id="contact" style={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <h2 style={{ fontSize: '2.5rem', color: 'white' }}>My Projects</h2>
        </section>
      </div>
    </div>
  );
};

export default LandingPage;