import React from 'react';
import './assets/styles/global.css'
import { Layout } from './components/layout/Layout'

const App: React.FC = () => {
    const myText = "Привет из компонента Message!";
    return <Layout />;
};

export default App;
