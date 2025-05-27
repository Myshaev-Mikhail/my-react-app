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

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts?_limit=${limit}`)
            .then((res) => res.json())
            .then((data) => {
                setCards(data);
                setLoading(false);
            })
            .catch(() => {
                setError('Failed to load cards');
                setLoading(false);
            });
    }, [limit]);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;

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
