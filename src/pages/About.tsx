import './About.css';
import { useState, useEffect } from 'react';

function About() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentIndexGid, setCurrentIndexGid] = useState(0);
  const [visible, setVisible] = useState(true);

  const nextReview = () => {
    setVisible(false);
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length);
      setVisible(true);
    }, 500);

  };

  const nextReviewGid = () => {
    setVisible(false);
    setTimeout(() => {
      setCurrentIndexGid((prevIndex) => (prevIndex + 1) % gids.length);
      setVisible(true);
    }, 500);

  };
  
  const reviews = [
    {
      text: "Путешествие с 'Мир Путешествий' было просто великолепным! Наш гид был очень знающим и отзывчивым. Мы увидели места, о которых даже не догадывались!",
      author: "Анна, Москва"
    },
    {
      text: "Отличная организация и внимание к деталям. Я рекомендую эту компанию всем своим друзьям!",
      author: "Сергей, Санкт-Петербург"
    },
    {
      text: "Я был в восторге от тура! Все было организовано на высшем уровне, и я получил массу положительных эмоций. Обязательно вернусь снова!",
      author: "Дмитрий, Казань"
    },
    {
      text: "Наш гид был настоящим профессионалом! Он сделал наше путешествие незабываемым, рассказывая интересные факты и истории о местах, которые мы посещали.",
      author: "Елена, Новосибирск"
    },
    {
      text: "Прекрасный сервис и внимание к клиентам! Я чувствовал себя в безопасности и комфорте на протяжении всего тура. Спасибо!",
      author: "Максим, Екатеринбург"
    }
  ];

  const gids = [
    {img_path: "/src/assets/gids/anna.jpg", text: "Анна — сертифицированный гид с более чем 10-летним опытом работы в Европе", direction: "Европа", gid: "Анна Смирнова"},
    {img_path: "/src/assets/gids/igor.jpg", text: "Игорь — эксперт по азиатским странам, с особым акцентом на Японию и Таиланд", direction: "Азия", gid: "Игорь Петров"},
    {img_path: "/src/assets/gids/svetlana.jpg", text: "Светлана имеет более 8 лет опыта работы в Южной Америке", direction: "Южная Америка", gid: "Светлана Кузнецова"},
    {img_path: "/src/assets/gids/dmitri.jpg", text: "Дмитрий — гид по России, специализирующийся на экскурсиях по историческим городам", direction: "Россия", gid: "Дмитрий Иванов"},
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      nextReviewGid();
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      nextReview();
    }, 4000);
    return () => clearInterval(interval);
  }, []);

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
            <img src={gids[currentIndexGid].img_path}/>
            <p>"{gids[currentIndexGid].text}"</p>
            <footer>- {gids[currentIndexGid].gid} {gids[currentIndexGid].direction}</footer>
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