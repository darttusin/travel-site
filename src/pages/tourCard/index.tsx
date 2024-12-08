import React from 'react';
import './TourCard.css';

interface TourCardProps {
  title: string;
  description: string;
  price: string;
  days: number;
  difficulty: string;
  startDate: string;
  endDate: string;
}

const TourCard: React.FC<TourCardProps> = ({ title, description, price, days, difficulty, startDate, endDate }) => {
  return (
    <div className="tour-card">
      <h2>{title}</h2>
      <p>{description}</p>
      <p>{price}</p>
      <p>Дней: {days}</p>
      <p>Сложность: {difficulty}</p>
      <p>Дата начала: {startDate}</p>
      <p>Дата окончания: {endDate}</p>
    </div>
  );
};

export default TourCard;