import { useState } from 'react';
import './Header.css';
import { SignUpModal } from '../Main/SignUp';
import { Link } from 'react-router-dom';

export const Header = () => {
    const [isModalOpen, setModalOpen] = useState(false);

    const openModal = () => setModalOpen(true);
    const closeModal = () => setModalOpen(false);

    return (
        <header>
            <div className="menu">
                <div className="menu-left">
                    <h3><Link to="/">Jobly</Link></h3>
                </div>

                <div className="menu-center">
                    <h3><Link to="/cards">Карточки</Link></h3>
                </div>

                <div className="menu-right">
                    <button className="sign" onClick={openModal}>Зарегистрироваться</button>
                    <button className="login" onClick={openModal}>Авторизоваться</button>
                </div>
            </div>


            <SignUpModal isOpen={isModalOpen} onClose={closeModal} />
        </header>
    );
};
