import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Card } from '../components/Card/Card.tsx';

interface CardData {
    id: number;
    title: string;
    body: string;
}

export const CardsPage: React.FC = () => {
    const [searchParams] = useSearchParams();
    const limit = Number(searchParams.get('limit')) || 10;

    const [cards, setCards] = useState<CardData[]>([]);
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
        fetch(`https://jsonplaceholder.typicode.com/posts?_limit=${limit}`)
            .then((res) => res.json())
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
    }, [limit]);

    if (loading) return <p className="text-center text-gray-500">Загрузка...</p>;
    if (error) return <p className="text-center text-red-500">{error}</p>;

    return (
        <div className="card-display">
            <div className="feature">
                {cards.map((card) => (
                    <Card
                        key={card.id}
                        title={card.title}
                        description={card.body}
                        image="/134006.png"
                    />
                ))}
            </div>
        </div>
    );
};