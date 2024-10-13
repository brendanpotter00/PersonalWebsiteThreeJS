import React from 'react';

interface ProjectCardProps {
  title: string;
  technologies: string[];
  description: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, technologies, description }) => {
  return (
    <div className="mb-6">
      <h3 className="text-xl md:text-2xl font-semibold mb-2">{title}</h3>
      <p className="text-sm md:text-lg text-gray-400 mb-2">Technologies Used: {technologies.join(', ')}</p>
      <p className="text-sm md:text-lg">{description}</p>
    </div>
  );
};

export default ProjectCard;
