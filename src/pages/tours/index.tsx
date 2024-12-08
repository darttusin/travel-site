import { useEffect, useState } from 'react';
import TourCard from '../tourCard';
import './Tours.css';

interface Tour {
  price: string;
  display_name: string;
  days: number;
  difficulty: string;
  short_description: string;
  start_date: string;
  end_date: string;
}

function Tours () {
  const [tours, setTours] = useState<Tour[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchTours = async () => {
      try {
        const response = await fetch('http://localhost:8000/tours');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setTours(data.tours);
      } catch (err) {
        setError('Ошибка при загрузке туров');
      } finally {
        setLoading(false);
      }
    };

    fetchTours();
  }, []);

  if (loading) {
    return <div>Загрузка...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  if (!tours || tours.length === 0) {
    return <div>Нет доступных туров</div>;
  }

  return (
    <div className="tours">
      <h1>Наши Туры</h1>
      <div className="tours-container">
        {tours.map((tour, index) => (
          <TourCard
            key={index}
            title={tour.display_name}
            description={tour.short_description}
            price={`от ${tour.price}$`}
            days={tour.days}
            difficulty={tour.difficulty}
            startDate={tour.start_date}
            endDate={tour.end_date}
          />
        ))}
      </div>
    </div>
  );
};

export default Tours;