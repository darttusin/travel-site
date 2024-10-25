import { Link } from 'react-router-dom';
import styles from './Navigation.module.css';

function Navigation() {
  return (
    <nav className={`${styles.navigation}`}>
      <div className={`${styles.nav_links}`}>
        <Link to="/" className={`${styles.nav_link}`}>Home</Link>
        <Link to="/about" className={`${styles.nav_link}`}>About</Link>
        <Link to="/tours" className={`${styles.nav_link}`}>Tours</Link>
      </div>
    </nav>
  );
}

export default Navigation;