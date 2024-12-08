import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import About from './pages/about';
import Tours from './pages/tours';
import Navigation from './components/navigation';
import Footer from './components/footer';

function App() {
  return (
    <BrowserRouter>
      <Navigation /> {}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/tours" element={<Tours />} /> {}
      </Routes>
      <Footer /> {}
    </BrowserRouter>
  );
}

export default App;