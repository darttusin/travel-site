import './Tours.css';

const tours = [
  {
    title: "Тур по Европе",
    description: "Исследуйте самые красивые города Европы с опытным гидом.",
    price: "€1200",
    image: "/src/assets/tours/europe.jpg"
  },
  {
    title: "Приключения в Азии",
    description: "Уникальные приключения в странах Азии, от пляжей до гор.",
    price: "€1500",
    image: "/src/assets/tours/asia.jpg"
  },
  {
    title: "Круиз по Карибам",
    description: "Наслаждайтесь солнцем и морем на борту нашего круизного лайнера.",
    price: "€2000",
    image: "/src/assets/tours/caribbean.jpg"
  },
];

function Tours() {
  return (
    <div className="main-content">
      <h1>Туры</h1>
      <p>Посмотрите наши доступные туры и выберите лучший для себя!</p>
      <div className="tours-container">
        {tours.map((tour, index) => (
          <div className="tour-card" key={index}>
            <img src={tour.image} alt={tour.title} className="tour-image" />
            <h2>{tour.title}</h2>
            <p>{tour.description}</p>
            <p className="tour-price">{tour.price}</p>
            <button className="btn">Узнать больше</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Tours;