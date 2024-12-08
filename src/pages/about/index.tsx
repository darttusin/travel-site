import './About.css';
import './Card.css';
import { useState, useEffect } from 'react';

function About() {
  const [reviews, setReviews] = useState([]);
  const [gids, setGids] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentIndexGid, setCurrentIndexGid] = useState(0);
  const [visible, setVisible] = useState(true);
  const [loading, setLoading] = useState(true);

  const fetchReviews = async () => {
    try {
      const response = await fetch('http://localhost:8000/reviews');
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      setReviews(data.reviews);
    } catch (error) {
      console.error('Ошибка при получении отзывов:', error);
    }
  };

  const fetchGids = async () => {
    try {
      const response = await fetch('http://localhost:8000/gids');
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      setGids(data.gids);
    } catch (error) {
      console.error('Ошибка при получении гидов:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchReviews();
    fetchGids();
  }, []);

  const nextReview = () => {
    if (reviews.length > 0) {
      setVisible(false);
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length);
        setVisible(true);
      }, 500);
    }
  };
  
  const nextReviewGid = () => {
    if (gids.length > 0) {
      setVisible(false);
      setTimeout(() => {
        setCurrentIndexGid((prevIndex) => (prevIndex + 1) % gids.length);
        setVisible(true);
      }, 500);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (gids.length > 0) {
        nextReviewGid();
      }
    }, 4000);
    return () => clearInterval(interval);
  }, [gids]);

  useEffect(() => {    
    const interval = setInterval(() => {
      nextReview();
    }, 4000);
    return () => clearInterval(interval);
  }, [reviews]);

  if (loading) {
    return <p>Загрузка данных...</p>;
  }

  return (
    <div className="main-content-about">
      <h1>О нас</h1>
        <div className="section">
          <p>
            Мы — компания "Мир Путешествий", и наша цель — подарить вам незабываемые впечатления от путешествий по самым красивым уголкам мира. 
            С момента нашего основания в 2010 году, мы стремимся предоставить нашим клиентам только лучшие туры и сервис.
          </p>
        </div>

        <h2>Почему выбирают нас?</h2>
        <div className="section">
          <ul>
            <li>Профессиональные гиды с многолетним опытом.</li>
            <li>Индивидуальный подход к каждому клиенту.</li>
            <li>Широкий выбор туров по всему миру.</li>
            <li>Высокое качество обслуживания и внимание к деталям.</li>
          </ul>
        </div>

        <h2>Наши гиды</h2>
        <div className="section">
          <p>
            Все наши гиды — это профессионалы с многолетним опытом работы в туристической сфере. Они не только отлично знают историю и культуру мест, которые мы посещаем, но и умеют сделать ваше путешествие комфортным и интересным. 
            Мы тщательно отбираем наших гидов, чтобы вы могли наслаждаться каждым моментом вашего путешествия.
          </p>
        </div>

        <div className="review-slider">
          <div className={`review-card ${visible ? 'visible' : 'hidden'}`}>
            <div className="gid-card">
              <img src={gids[currentIndexGid].img_path} alt="Гид" className="gid-image"/>
              <div className="gid-text">
                <p>"{gids[currentIndexGid].text}"</p>
                <footer>- {gids[currentIndexGid].gid}. Направление: {gids[currentIndexGid].direction}</footer>
              </div>
            </div>
          </div>
        </div>

      <h2>Отзывы наших клиентов</h2>

      <div className="review-slider">
        <div className={`review-card ${visible ? 'visible' : 'hidden'}`}>
          <p>"{reviews[currentIndex].text}"</p>
          <footer>- {reviews[currentIndex].author}</footer>
        </div>
      </div>

    </div>
  );
}

export default About;