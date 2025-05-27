import './Header.css';
import { Link } from 'react-router-dom';

export const Header = () => {
    return (
        <header>
            <div className="menu">
                <div className="menu-left">
                    <h3><Link to="/">Jobly</Link></h3>
                </div>

                <div className="menu-center">
                    <h3><Link to="/cards">View Cards</Link></h3>
                </div>

                <div className="menu-right">
                    <p>For Recruiters</p>
                    <button className="sign" id="openModalBtn">Sign up</button>
                    <button className="login">Login in</button>
                </div>
            </div>
        </header>
    );
};
