import React from 'react';
import './TourCard.css';

interface TourCardProps {
//   image: string;
  title: string;
  description: string;
  price: string;
}

const TourCard: React.FC<TourCardProps> = ({ title, description, price }) => {
  return (
    <div className="tour-card">
      {/* <img src={image} alt={title} className="tour-image" /> */}
      <h2>{title}</h2>
      <p>{description}</p>
      <div className="tour-price">{price}</div>
      <button className="btn">Подробнее</button>
    </div>
  );
};

export default TourCard;