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

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts?_limit=3')
            .then((response) => response.json())
            .then((data) => {
                setCards(data);
                setLoading(false);
            })
            .catch(() => {
                setError('Error fetching data');
                setLoading(false);
            });
    }, []);

    const handleFeatureClick = (index: number) => {
        setActiveIndex(index);
    };

    if (loading) return <p className="text-center text-gray-500">Loading...</p>;
    if (error) return <p className="text-center text-red-500">{error}</p>;
    if (cards.length === 0) return <p className="text-center text-gray-500">No cards available</p>;

    return (
        <section className="info">
            <h2>Everything you want to know in one place.</h2>
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
                        <h3>Professional Profile {index + 1}</h3>
                        <p>
                            {index + 1}. We know finding the right job is stressful, so we’ve made it simple. It only takes a few
                            minutes. Create a free portfolio on briefolio to show your best self and get discovered by recruiter
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
};