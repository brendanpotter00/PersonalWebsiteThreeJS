import { OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import Header from '../Header';
import { Text3D } from '../threejs-components/Text3D';
import Earth from '../threejs-components/Earth';
import LowPolyAirplane from '../threejs-components/AirplaneLowPoly';
import Computer from '../threejs-components/Computer';
import { useRef, useEffect, useState } from 'react';
import Linkedin from '../threejs-components/link-components/Linkedin';
import Github from '../threejs-components/link-components/Github';
import Email from '../threejs-components/link-components/Email';
import AboutSection from '../about-page/AboutSection';
import ProjectSection from '../project-page/ProjectSection';
import ExperienceSection from '../experience-section/ExperienceSection';
import Footer from '../Footer';

const LandingPage: React.FC = () => {
  const isMobile = window.innerWidth < 768 || window.innerHeight < 10; // Check if mobile
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div style={{ position: 'relative', minHeight: isMobile ? '200vh' : '300vh' }}>
      <Header />
      <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', overflow: 'hidden' }}>
        <Canvas ref={canvasRef} style={{ background: '#001f3f', pointerEvents: 'auto' }} camera={{ position: [0, 0, isMobile ? 5 : 10], fov: 50 }}>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} intensity={0.5} />
          <directionalLight position={[-10, 10, 5]} intensity={1} />
          <OrbitControls enableZoom={false} enablePan={true} enableRotate={true} />
          
          <Earth scrollY={scrollY} />
          <LowPolyAirplane scrollY={scrollY} />
          <Computer scrollY={scrollY} />
          <Linkedin scrollY={scrollY} />
          <Github scrollY={scrollY} />
          <Email scrollY={scrollY} />
        </Canvas>
      </div>

      {/* Scrollable text sections */}
      <div style={{ position: 'relative', zIndex: 5, paddingTop: isMobile ? '100px' : '200px' }}>
        <section id="section1" style={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
          <h2 style={{ fontSize: isMobile ? '1.5rem' : '2.5rem', color: 'white' }}>Hello World</h2>
          <div style={{ fontSize: isMobile ? '1.5rem' : '2.5rem', color: 'white' }}> My Name is Brendan Potter </div>
        </section>
        
        <AboutSection />
        <div className="my-16"></div> 
        <ExperienceSection />
        <div className="my-16"></div> 
        <ProjectSection />
        <div className="my-16"></div> 
        <Footer />
      </div>
    </div>
  );
};

export default LandingPage;
