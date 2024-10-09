import LandingPage from './components/landing-page/LandingPage';

const App: React.FC = () => {
  return (
    <div style={{ 
      width: '100%', 
      minHeight: '100vh', 
      backgroundColor: '#001f3f'
    }}>
     <LandingPage/>
    </div>
  );
};

export default App;