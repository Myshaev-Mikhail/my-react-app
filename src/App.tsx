// src/App.tsx
import React from 'react';
import Message from './Message';

const App: React.FC = () => {
    const myText = "Привет из компонента Message!";
    return (
        <div>
            <h1>Моё приложение</h1>
            <Message text={myText} />
        </div>
    );
};

export default App;
