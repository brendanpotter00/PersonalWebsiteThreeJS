import React, { useRef, useEffect, useState } from 'react';

const AboutSection: React.FC = () => {
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
      {/* Left side - Text content */}
      <div className="md:w-1/2 p-8 md:p-16 flex flex-col justify-center text-white md:ml-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">About Me</h2>
        <p className="text-lg md:text-xl mb-4">
          I’m Brendan Potter, a full-stack software engineer passionate about solving problems through code and building innovative products.
        </p>
        <p className="text-lg md:text-xl mb-4">
          I have worked on a variety of software projects, from aviation solutions to mobile and web development. My experience spans across multiple technologies and industries.
        </p>
        <p className="text-lg md:text-xl">
          I’m always looking for new challenges and opportunities to grow as a developer and leader in the tech industry.
        </p>
      </div>
      {/* Right side - Reserved space for 3D models or any additional content */}
      <div className="hidden md:block md:w-1/2 bg-gray-800 bg-opacity-20">
        {/* Placeholder for future 3D content */}
      </div>
    </div>
  );
};

export default AboutSection;
