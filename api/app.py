from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

import uvicorn

import random
from datetime import datetime, timedelta


app = FastAPI()


@app.get("/reviews")
async def get_reviews() -> dict:
    return {
        "reviews": [
            {
                "text": "Путешествие с 'Мир Путешествий' было просто великолепным! Наш гид был очень знающим и отзывчивым. Мы увидели места, о которых даже не догадывались!",
                "author": "Анна, Москва",
            },
            {
                "text": "Отличная организация и внимание к деталям. Я рекомендую эту компанию всем своим друзьям!",
                "author": "Сергей, Санкт-Петербург",
            },
            {
                "text": "Я был в восторге от тура! Все было организовано на высшем уровне, и я получил массу положительных эмоций. Обязательно вернусь снова!",
                "author": "Дмитрий, Казань",
            },
            {
                "text": "Наш гид был настоящим профессионалом! Он сделал наше путешествие незабываемым, рассказывая интересные факты и истории о местах, которые мы посещали.",
                "author": "Елена, Новосибирск",
            },
            {
                "text": "Прекрасный сервис и внимание к клиентам! Я чувствовал себя в безопасности и комфорте на протяжении всего тура. Спасибо!",
                "author": "Максим, Екатеринбург",
            },
        ]
    }


@app.get("/gids")
async def get_gids() -> dict:
    return {
        "gids": [
            {
                "img_path": "/src/assets/gids/anna.jpg",
                "text": "Анна — сертифицированный гид с более чем 10-летним опытом работы в Европе",
                "direction": "Европа",
                "gid": "Анна Смирнова",
            },
            {
                "img_path": "/src/assets/gids/igor.jpg",
                "text": "Игорь — эксперт по азиатским странам, с особым акцентом на Японию и Таиланд",
                "direction": "Азия",
                "gid": "Игорь Петров",
            },
            {
                "img_path": "/src/assets/gids/svetlana.jpg",
                "text": "Светлана имеет более 8 лет опыта работы в Южной Америке",
                "direction": "Южная Америка",
                "gid": "Светлана Кузнецова",
            },
            {
                "img_path": "/src/assets/gids/dmitri.jpg",
                "text": "Дмитрий — гид по России, специализирующийся на экскурсиях по историческим городам",
                "direction": "Россия",
                "gid": "Дмитрий Иванов",
            },
        ]
    }

@app.get("/tours")
async def get_tours() -> dict:
    return {
        "tours": [{
            "id": i+1,
            "price": random.randint(100, 5000),  # Случайная цена от 100 до 5000
            "display_name": f"Тур {i + 1}",
            "days": random.randint(1, 14),  # Случайное количество дней от 1 до 14
            "difficulty": random.choice(["Легкий", "Средний", "Сложный"]),
            "short_description": f"Описание тура {i + 1}. Это замечательное путешествие.",
            "start_date": (datetime.now() + timedelta(days=random.randint(1, 30))).strftime("%Y:%m:%d"),
            "end_date": (datetime.now() + timedelta(days=random.randint(31, 60))).strftime("%Y:%m:%d"),
        } for i in range(5)]
    }

@app.post("/booking")
async def book_tour(body: dict) -> None:
    print(f'{body["tourTitle"]} booked for {body["email"]}')
    return

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


uvicorn.run(app, host="0.0.0.0", port=8000)