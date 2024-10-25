import styles from './Footer.module.css';

function Footer() {
  return (
    <footer className={`${styles.footer}`}>
      <div className={`${styles.footer_content}`}>
        <p>Контакты:</p>
        <p>Email: example@example.com</p>
        <p>Телефон: +1 (234) 567-8901</p>
      </div>
      <p>© 2024 Мир Путешествий. Все права защищены.</p>
    </footer>
  );
}

export default Footer;