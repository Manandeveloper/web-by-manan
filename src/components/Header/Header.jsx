import {Link} from 'react-router-dom'
const Header = () => {
    return(
        <header>
        <div className="wrap">
            <div className="logo">
                <a href="">
                    <span>WEB</span>
                    <span>BY</span>
                    <span>MANAN</span>
                </a>
            </div>
            <div className="header-btn">
                <div className="btn-wrap">
                    <div className="button">
                        <span className="line"></span>
                        <span className="line"></span>
                        <div className="color-ball">
                            <div className="single-color"></div>
                            <div className="single-color"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="menu">
            <div className="nav">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="">About</Link></li>
                    <li><Link to="">Work</Link></li>
                </ul>
            </div>
            <div className="social-links">
                <p>Socials</p>
                <ul>
                    <li><Link to="">linkedin</Link></li>
                    <li><Link to="">Telegram</Link></li>
                    <li><Link to="">Whatsapp</Link></li>
                </ul>
            </div>
        </div>
    </header>
    );
};
export default Header;