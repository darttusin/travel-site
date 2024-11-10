import './About.css';
import { useState } from 'react';

function About() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentIndexGid, setCurrentIndexGid] = useState(0);

  const nextReview = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length);
  };

  const prevReview = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + reviews.length) % reviews.length);
  };

  const nextReviewGid = () => {
    setCurrentIndexGid((prevIndex) => (prevIndex + 1) % gids.length);
  };

  const prevReviewGid = () => {
    setCurrentIndexGid((prevIndex) => (prevIndex - 1 + gids.length) % gids.length);
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
    {text: "Анна — сертифицированный гид с более чем 10-летним опытом работы в Европе", direction: "Европа", gid: "Анна Смирнова"},
    {text: "Игорь — эксперт по азиатским странам, с особым акцентом на Японию и Таиланд", direction: "Азия", gid: "Игорь Петров"},
    {text: "Светлана имеет более 8 лет опыта работы в Южной Америке", direction: "Южная Америка", gid: "Светлана Кузнецова"},
    {text: "Дмитрий — гид по России, специализирующийся на экскурсиях по историческим городам", direction: "Россия", gid: "Дмитрий Иванов"},
  ]

  return (
    <div className="main-content-about">
      <h1>О нас</h1>
        <p>
          Мы — компания "Мир Путешествий", и наша цель — подарить вам незабываемые впечатления от путешествий по самым красивым уголкам мира. 
          С момента нашего основания в 2010 году, мы стремимся предоставить нашим клиентам только лучшие туры и сервис.
        </p>

        <h2>Наши гиды</h2>

        <p>
          Все наши гиды — это профессионалы с многолетним опытом работы в туристической сфере. Они не только отлично знают историю и культуру мест, которые мы посещаем, но и умеют сделать ваше путешествие комфортным и интересным. 
          Мы тщательно отбираем наших гидов, чтобы вы могли наслаждаться каждым моментом вашего путешествия.
        </p>

        <div className="review-slider">
          <button className="nav-button" onClick={prevReviewGid}>❮</button>
          <div className="review-card">
            <p>"{gids[currentIndexGid].text}"</p>
            <footer>- {gids[currentIndexGid].gid} {gids[currentIndexGid].direction}</footer>
          </div>
          <button className="nav-button" onClick={nextReviewGid}>❯</button>
        </div>

      <h2>Отзывы наших клиентов</h2>

      <div className="review-slider">
        <button className="nav-button" onClick={prevReview}>❮</button>
        <div className="review-card">
          <p>"{reviews[currentIndex].text}"</p>
          <footer>- {reviews[currentIndex].author}</footer>
        </div>
        <button className="nav-button" onClick={nextReview}>❯</button>
      </div>

    </div>
  );
}

export default About;