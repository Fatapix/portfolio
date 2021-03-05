export default function Header() {
    return (
        <header className="header">
            <nav className="socials-bar">
                <div className="contacts-container">
                    <label className="mail">contact@khirat-noha.fr</label>
                    <label className="mail">06 72 53 07 47</label>
                </div>
                <div className="links-container">
                    <a href="https://github.com/Fatapix" title="GitHub">
                        <img src="/icons/icon-github.svg"/>
                    </a>
                    <a href="#">
                        <img src="/icons/icon-mail.svg" title="Mail"/>
                    </a>
                    <a href="https://www.linkedin.com/in/noha-khirat-1a7bb91a9/?originalSubdomain=fr">
                        <img src="/icons/icon-linkedin.svg" title="LinkedIn"/>
                    </a>
                </div>
            </nav>
            <div className="menu-icon">
                <span></span>
            </div>
            <nav className="navigation-bar">
                <ul className="links">
                    <li className="item active">
                        <a className="link" href="#home-section">Accueil</a>
                    </li>
                    <li className="item">
                        <a className="link" href="#about-section">A propos</a>
                    </li>
                    <li className="item">
                        <a className="link" href="#portfolio-section">Portfolio</a>
                    </li>
                    <li className="item">
                        <a className="link" href="#contacts-section">Contacts</a>
                    </li>
                </ul>
                <div className="contacts-mobile">
                    <a href="https://github.com/Fatapix" title="GitHub">
                        <img src="/icons/icon-github.svg"/>
                    </a>
                    <a href="#">
                        <img src="/icons/icon-mail.svg" title="Mail"/>
                    </a>
                    <a href="https://www.linkedin.com/in/noha-khirat-1a7bb91a9/?originalSubdomain=fr">
                        <img src="/icons/icon-linkedin.svg" title="LinkedIn"/>
                    </a>
                </div>
            </nav>
        </header>
    )
}