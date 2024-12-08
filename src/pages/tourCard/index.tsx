import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt, faMountain, faClock } from '@fortawesome/free-solid-svg-icons';
import './TourCard.css';

interface TourCardProps {
  id: number;
  title: string;
  description: string;
  price: string;
  days: number;
  difficulty: string;
  startDate: string;
  endDate: string;
  onBook: () => void;
}

const TourCard: React.FC<TourCardProps> = ({ 
  id, 
  title, 
  description, 
  price, 
  days, 
  difficulty, 
  startDate, 
  endDate,
  onBook
}) => {
  return (
    <div className="tour-card">
      <img src={`src/assets/images/tour_${id}.jpg`} alt={title} className="tour-image" />
      <div className="tour-header">
        <h2 className="tour-title">{title}</h2>
        <p className="tour-price">{price}</p>
      </div>
      <p className="tour-description">{description}</p>
      <div className="tour-details">
        <div className="tour-detail">
          <FontAwesomeIcon icon={faCalendarAlt} className="tour-icon" />
          <span className="tour-text">{startDate} - {endDate}</span>
        </div>
        <div className="tour-detail">
          <FontAwesomeIcon icon={faMountain} className="tour-icon" />
          <span className="tour-text">{difficulty}</span>
        </div>
        <div className="tour-detail">
          <FontAwesomeIcon icon={faClock} className="tour-icon" />
          <span className="tour-text">{days} дней</span>
        </div>
      </div>
      <button className="tour-button" onClick={onBook}>Забронировать</button>
    </div>
  );
};

export default TourCard;