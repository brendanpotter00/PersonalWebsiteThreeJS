import React, { useRef, useEffect, useState } from 'react';
import ExperienceCard from './ExperienceCard';

const ExperienceSection: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  // Intersection Observer to trigger the fade-in animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Stop observing once it's visible
        }
      },
      { threshold: 0.3 } // Trigger when 30% of the section is visible
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
      {/* Left side - Experience content */}
      <div className="md:w-1/2 p-8 md:p-16 flex flex-col justify-center text-white md:ml-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">My Experience</h2>

        {/* Reusable Experience Cards */}
        <ExperienceCard 
          title="Full-Stack Software Engineer" 
          company="ForeFlight, a Boeing Company"
          timeframe="2020 - Present"
          description="Developed and maintained aviation-related software solutions using modern full-stack technologies, including Angular, .NET, and C#. Responsible for leading the development of an MVP product that generated revenue."
        />
        
        <ExperienceCard 
          title="iOS Developer Intern" 
          company="ForeFlight"
          timeframe="Summer 2019"
          description="Worked on the flagship ForeFlight app, implementing features in Swift and Objective-C. Gained experience in mobile development and contributing to large-scale applications."
        />

        <ExperienceCard 
          title="ACM Tutor"
          company="Trinity University"
          timeframe="2018 - 2020"
          description="Provided tutoring and mentorship for lower-division computer science courses, assisting students with algorithms, data structures, and programming."
        />
      </div>
      {/* Right side - Reserved space for future content */}
      <div className="hidden md:block md:w-1/2 bg-gray-800 bg-opacity-20">
        {/* Placeholder for future 3D content */}
      </div>
    </div>
  );
};

export default ExperienceSection;
