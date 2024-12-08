import React from 'react';
import TourCard from '../tourCard';
import './Tours.css';

const Tours: React.FC = () => {
  const tours = [
    {
      // image: '/path/to/image1.jpg',
      title: 'Тур по Европе',
      description: 'Насладитесь красотой европейских городов.',
      price: 'от 500$',
    },
    {
      // image: '/path/to/image2.jpg',
      title: 'Приключение в Азии',
      description: 'Уникальные впечатления и культура Азии.',
      price: 'от 700$',
    },
  ];

  return (
    <div className="tours">
      <h1>Наши Туры</h1>
      <div className="tours-container">
        {tours.map((tour, index) => (
          <TourCard
            key={index}
            // image={tour.image}
            title={tour.title}
            description={tour.description}
            price={tour.price}
          />
        ))}
      </div>
    </div>
  );
};

export default Tours;