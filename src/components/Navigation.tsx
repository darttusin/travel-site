import { Link } from 'react-router-dom';
import './Navigation.css'; // Подключаем стили для навигации

function Navigation() {
  return (
    <nav className="navigation">
      <div className="nav-links">
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/about" className="nav-link">About</Link>
        <Link to="/tours" className="nav-link">Tours</Link>
      </div>
    </nav>
  );
}

export default Navigation;