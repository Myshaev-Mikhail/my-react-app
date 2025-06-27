import React from 'react';
import { Link } from 'react-router-dom';

export const NotFoundPage: React.FC = () => (
    <div style={{ textAlign: 'center', marginTop: '2rem' }}>
        <h1>404 — Страница не найдена</h1>
        <Link to="/">Вернуться на главную</Link>
    </div>
);
