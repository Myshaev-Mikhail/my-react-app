import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './components/layout/Layout.tsx';
import { HomePage } from './pages/HomePage.tsx';
import { CardsPage } from './pages/CardsPage';
import { NotFoundPage } from './pages/NotFoundPage';

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<HomePage />} />
                    <Route path="cards" element={<CardsPage />} />
                    <Route path="*" element={<NotFoundPage />} />
                </Route>
            </Routes>
        </BrowserRouter>

    );
};

export default App;
