import React from 'react';

interface TeamCardProps {
  image: string;
  name: string;
  description: string;
}

const TeamCard: React.FC<TeamCardProps> = ({ image, name, description }) => {
  return (
    <div className="team-card">
      <img src={image} alt={name} />
      <h3>{name}</h3>
      <p>{description}</p>
    </div>
  );
};

export default TeamCard;