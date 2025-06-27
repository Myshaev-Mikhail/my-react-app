import React from 'react'
import {CardList} from "../CardList/CardList.tsx";
import './Main.css'
export const Main: React.FC = () => {
    return (
        <main>
            <div className="Candidates">
                <div className="Candidates-content">
                    <h1>HR агенство</h1>
                    <p>Это место, где можно показать себя и получить работу начального уровня в передовых компаниях. Начните свою карьеру здесь.</p>
                    <p>Ищете кандидатов? Нанимайте сейчас</p>
                    <div className="gradient">
                        <img className="img" src="Candidates.png" alt="Candidates" />
                    </div>
                    <div className="quote-container">
                        <img className="img_dop1" src="11-11%20140357.png" alt="Decor 1" />
                        <img className="img_dop2" src="140431.png" alt="Decor 2" />
                    </div>
                    <h1>Создать присутствие в Интернете сложно.<br />Jobly облегчает рекрутерам поиск вас</h1>
                    <p>Zhao Cui</p>
                    <p>Основатель Jobly.co</p>
                </div>
            </div>

            <CardList />

            <div className="connect-section">
                <div className="connect-content">
                    <img src="183343.png" alt="Connect with recruiter" />
                    <div className="connect-content-text">
                        <h1>Связаться с рекрутером</h1>
                        <p>
                            Получите мгновенный доступ к тщательно отобранному пулу лучших творческих и технических талантов, которые активно ищут свою следующую работу.
                            Найдите высококвалифицированную работу!
                        </p>
                    </div>
                </div>
            </div>

            <div className="profile-section">
                <div className="profile-content">
                    <div className="profile-text">
                        <h1>Настройте свой профиль.<br />Пусть работа сама вас найдет.</h1>
                    </div>
                    <div className="profile-image">
                        <img src="photo_2024-11-20_18-49-23.jpg" alt="Set up your profile" />
                    </div>
                </div>
            </div>
        </main>
    )
}
