import React from 'react';

interface ExperienceCardProps {
  title: string;
  company: string;
  timeframe: string;
  description: string;
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({ title, company, timeframe, description }) => {
  return (
    <div className="mb-6">
      <h3 className="text-xl md:text-2xl font-semibold mb-1">{title}</h3>
      <p className="text-md md:text-lg text-gray-400 mb-1">{company}</p>
      <p className="text-sm md:text-md text-gray-500 mb-2">{timeframe}</p>
      <p className="text-sm md:text-lg">{description}</p>
    </div>
  );
};

export default ExperienceCard;
