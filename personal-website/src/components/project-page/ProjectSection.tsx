import React, { useRef, useEffect, useState } from 'react';
import ProjectCard from './ProjectCard';

const ProjectSection: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Stop observing once it's visible
        }
      },
      { threshold: 0.3 } // Adjust this to trigger earlier or later
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <div
      ref={sectionRef}
      className={`flex flex-col md:flex-row h-full w-full bg-gray-900 bg-opacity-10 mx-4 md:mx-16 transition-opacity duration-1000 ease-out ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      {/* Left side - Project content */}
      <div className="md:w-1/2 p-8 md:p-16 flex flex-col justify-center text-white md:ml-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">My Projects</h2>
        
        {/* Reusable Project Cards */}
        <ProjectCard 
          title="Project 1" 
          technologies={['React', 'Tailwind CSS', 'TypeScript']}
          description="This is a web app built using React and TypeScript with a Tailwind CSS frontend. It demonstrates reusable components and dynamic data handling."
        />
        
        <ProjectCard 
          title="Project 2" 
          technologies={['Node.js', 'Express', 'MongoDB']}
          description="A backend service built with Node.js and Express that provides a RESTful API for managing data in a MongoDB database."
        />

        <ProjectCard 
          title="Project 3" 
          technologies={['React Native', 'Expo']}
          description="A mobile application built with React Native and Expo that allows users to track their fitness activities and goals."
        />
      </div>
      {/* Right side - Reserved space for future content */}
      <div className="hidden md:block md:w-1/2 bg-gray-800 bg-opacity-20">
        {/* Placeholder for future content */}
      </div>
    </div>
  );
};

export default ProjectSection;
