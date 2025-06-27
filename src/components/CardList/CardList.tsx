import React, { useState, useEffect } from 'react';
import { Card } from '../Card/Card';

interface CardData {
    id: number;
    title: string;
    body: string;
}

export const CardList: React.FC = () => {
    const [cards, setCards] = useState<CardData[]>([]);
    const [activeIndex, setActiveIndex] = useState(0);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    // Локальный словарь переводов только для трёх карточек
    const translations: { [key: string]: string } = {
        "1-title": "Они создают, отталкивают, обеспечивают, за исключением представленных возможностей",
        "1-body": "Потому что и принимают, отвергая последствия, ускоряют и с представлением раздражения используют все наши вещи, которые действительно существуют, как архитектор",
        "2-title": "Кто есть",
        "2-body": "Это вещей время жизни, следуя ничего не представляющим болям, которые не избегают удовольствия, и через ничто используют раздражение, которое открывает не долги, а тех, кто не ничего",
        "3-title": "Эти проблемы почти как упражнение, отталкивающее тех, кто сам по себе",
        "3-body": "И справедливо, но по праву, удовольствие выбирает всё само по себе, удовольствие болей через обвинение желает участвовать, раздражение через его ненависть, труд и проявление",
    };

    const translateText = (id: number, field: 'title' | 'body', originalText: string): string => {
        const mappedId = ((id - 1) % 3) + 1;
        const key = `${mappedId}-${field}`;
        return translations[key] || originalText;
    };

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts?_limit=3')
            .then((response) => response.json())
            .then((data) => {
                const translatedData = data.map((item: CardData) => ({
                    ...item,
                    title: translateText(item.id, 'title', item.title),
                    body: translateText(item.id, 'body', item.body),
                }));
                setCards(translatedData);
                setLoading(false);
            })
            .catch(() => {
                setError('Ошибка при загрузке данных');
                setLoading(false);
            });
    }, []);

    const handleFeatureClick = (index: number) => {
        setActiveIndex(index);
    };

    if (loading) return <p className="text-center text-gray-500">Загрузка...</p>;
    if (error) return <p className="text-center text-red-500">{error}</p>;
    if (cards.length === 0) return <p className="text-center text-gray-500">Нет доступных карточек</p>;

    return (
        <section className="info">
            <h2>Всё, что вы хотите знать, в одном месте</h2>
            <div className="card-display">
                <Card
                    title={cards[activeIndex].title}
                    description={cards[activeIndex].body}
                    image="/134006.png"
                />
            </div>
            <div className="features-slider">
                {cards.map((card, index) => (
                    <div
                        key={card.id}
                        className={`feature ${activeIndex === index ? 'active' : ''}`}
                        onClick={() => handleFeatureClick(index)}
                    >
                        <h3>Профессиональный профиль {index + 1}</h3>
                        <p>
                            {index + 1}. Мы знаем, что поиск подходящей работы — это стресс, поэтому мы упростили процесс. Это займёт всего несколько минут. Создайте бесплатное портфолио на Briefolio, чтобы показать себя с лучшей стороны и быть замеченным рекрутерами.
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
};