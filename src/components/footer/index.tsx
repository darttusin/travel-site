import './Footer.module.css';

function Footer() {
  return (
    <footer>
      <div className="icons">
          <a href="mailto:example@example.com" title="Написать на email">
            <i className="fas fa-envelope fa-2x"></i>
          </a>
          <a href="https://vk.com" target="_blank" rel="noopener noreferrer" title="VK">
            <i className="fab fa-vk fa-2x"></i>
          </a>
          <a href="https://t.me" target="_blank" rel="noopener noreferrer" title="Telegram">
            <i className="fab fa-telegram fa-2x" aria-hidden="true"></i>
          </a>
      </div>
      <p>© 2024 Мир Путешествий. Все права защищены.</p>
    </footer>
  );
}

export default Footer;