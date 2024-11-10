import { Link } from 'react-router-dom';
import styles from './Navigation.module.css';

function Navigation() {
  return (
    <nav className={`${styles.navigation}`}>
      <h1 className={styles.logo}>Мир Путешествий</h1>
      <div className={`${styles.nav_links}`}>
        <Link to="/" className={`${styles.nav_link}`}>Главная</Link>
        <Link to="/about" className={`${styles.nav_link}`}>О нас</Link>
        <Link to="/tours" className={`${styles.nav_link}`}>Туры</Link>
      </div>
    </nav>
  );
}

export default Navigation;