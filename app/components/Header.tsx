export default function Header() {
    return (
        <header className="header">
            <nav className="socials-bar">
                <a href="https://github.com/Fatapix" title="GitHub">
                    <img src="/icons/icon-github.svg"/>
                </a>
                <a href="#">
                    <img src="/icons/icon-mail.svg" title="Mail"/>
                </a>
                <a href="https://www.linkedin.com/in/noha-khirat-1a7bb91a9/?originalSubdomain=fr">
                    <img src="/icons/icon-linkedin.svg" title="LinkedIn"/>
                </a>
            </nav>
            <nav className="navigation-bar">
                <ul className="links">
                    <li className="item">
                        <a className="link" href="#home-section">Acceuil</a>
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
            </nav>
        </header>
    )
}