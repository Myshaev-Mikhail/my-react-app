import React from 'react'
import './Card.css'

interface CardProps {
    title: string
    description: string
    image: string
}

export const Card: React.FC<CardProps> = ({ title, description, image }) => {
    return (
        <div className="featureCard">
            <h3>{title}</h3>
            <p>{description}</p>
            <img src={image} alt={title} className="cardImage" />
        </div>
    )
}