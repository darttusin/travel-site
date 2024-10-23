import { Button } from '../components/button';
import './Home.css'; // Подключаем стили
import { Link } from 'react-router-dom'; // Импортируем Link для навигации

function Home() {
  return (
    <div className="home-container">
      <main className="main-content">
        <h1>Добро пожаловать!</h1> {/* Основной заголовок страницы */}
        <p>Исследуйте новые горизонты и находите вдохновение для следующего приключения.</p>
        <Link to="/tours"> {/* Используем Link для перехода на страницу Tours */}
          <Button
            label="Начни свое путешествие"
            color="blue"
            size="large"
          />
        </Link>
      </main>
    </div>
  );
}

export default Home;