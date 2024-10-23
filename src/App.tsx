import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Tours from './pages/Tours'; // Импортируем компонент Tours
import Navigation from './components/Navigation'; // Импортируем компонент навигации
import Footer from './components/Footer'; // Импортируем компонент 

function App() {
  return (
    <BrowserRouter>
      <Navigation /> {/* Добавляем компонент навигации */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/tours" element={<Tours />} /> {/* Убираем Contacts */}
      </Routes>
      <Footer /> {/* Добавляем футер */}
    </BrowserRouter>
  );
}

export default App;