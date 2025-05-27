import React from 'react'
import {CardList} from "../CardList/CardList.tsx";
import './Main.css'
export const Main: React.FC = () => {
    return (
        <main>
            <div className="Candidates">
                <div className="Candidates-content">
                    <h1>Candidates with Creative & Engineering Backgrounds</h1>
                    <p>This is the place to show yourself and land entry level jobs at cutting-edge companies. Launch your career here.</p>
                    <button className="can">Join Now</button>
                    <p>Looking for candidate's? Hire now</p>
                    <div className="gradient">
                        <img className="img" src="Candidates.png" alt="Candidates" />
                    </div>
                    <div className="quote-container">
                        <img className="img_dop1" src="11-11%20140357.png" alt="Decor 1" />
                        <img className="img_dop2" src="140431.png" alt="Decor 2" />
                    </div>
                    <h1>Creating an Online Presence is Hard.<br />Jobly Makes it Easy for Recruiters to See you</h1>
                    <p>Zhao Cui</p>
                    <p>Founder at Jobly.co</p>
                </div>
            </div>

            <CardList />

            <div className="connect-section">
                <div className="connect-content">
                    <img src="183343.png" alt="Connect with recruiter" />
                    <div className="connect-content-text">
                        <h1>Connect With Recruiter</h1>
                        <p>
                            Get instant access to a curated pool of top creative & tech talent actively seeking their next role.
                            Find highly qualified job!
                        </p>
                    </div>
                </div>
            </div>

            <div className="profile-section">
                <div className="profile-content">
                    <div className="profile-text">
                        <h1>Set up your profile.<br />Let jobs find you.</h1>
                        <p className="join-now">Join Now</p>
                    </div>
                    <div className="profile-image">
                        <img src="photo_2024-11-20_18-49-23.jpg" alt="Set up your profile" />
                    </div>
                </div>
            </div>
        </main>
    )
}
