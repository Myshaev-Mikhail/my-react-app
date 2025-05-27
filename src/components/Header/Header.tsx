import './Header.css'
export const Header = () => {
    return (
        <header>
            <div className="menu">
                <div className="menu-left">
                    <h3>Jobly</h3>
                </div>
                <div className="menu-right">
                    <p>For Recruiters</p>
                    <button className="sign" id="openModalBtn">Sign up</button>
                    <button className="login">Login in</button>
                </div>
            </div>
        </header>
    )
}
