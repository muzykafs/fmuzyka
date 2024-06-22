import Link from 'next/link';
import '../../styles/components/server/header.scss';

const HeaderNavbar = () => {
    return (
        <header className="header">
            <div className="header__logo">
                <Link href="/">
                    Fyodor Muzyka
                </Link>
            </div>
            <nav className="header__navbar">
                <ul className="header__nav-list">
                    <li className="header__nav-item">
                        <Link href="about">
                            About
                        </Link>
                    </li>
                    <li className="header__nav-item">
                        <Link href="projects">
                            Project
                        </Link>
                    </li>
                    <li className="header__nav-item">
                        <Link href="services">
                            Services
                        </Link>
                    </li>
                    <li className="header__nav-item">
                        <Link href="contact">
                            Contact
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default HeaderNavbar;