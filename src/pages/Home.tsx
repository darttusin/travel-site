import { Button } from '../components/button';
import './Home.css';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="home-container">
      <main className="main-content">
        <h1>Добро пожаловать!</h1>
        <p>Исследуйте новые горизонты и находите вдохновение для следующего приключения.</p>
        <section className="call-to-action">
          <Link to="/tours">
            <Button
              label="Начни свое путешествие"
              color="blue"
              size="large"
            />
          </Link>
        </section>
      </main>
    </div>
  );
}

export default Home;