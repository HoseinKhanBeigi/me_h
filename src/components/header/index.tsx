import { Link } from "react-router-dom";
import './index.scss'
import { GithubIcon } from "../icon/githubIcon";
import { LinkedInIcon } from "../icon/LinkedInIcon";
export const Header = () => {
    const openMenu = () => {
        document.body.classList.add('is-nav-open')
    };
    const closeMenu = () => {
        document.body.classList.remove('is-nav-open')
    };
    return (
        <header id="header">
            <div className="header-bg"></div>
            <div className="header-container">
                <div className="header-breadcrumb"></div>
                <button
                    title="Open menu"
                    type="button"
                    className="header-nav-button"
                    onClick={openMenu}
                >
                    <span className="label">Menu</span>

                    <span className="dots d1"></span>
                    <span className="dots d2"></span>
                    <span className="dots d3"></span>
                </button>
                <nav className="header-nav">
                    <button
                        title="Close menu"
                        type="button"
                        className="header-nav-close-button"
                        onClick={closeMenu}
                    >
                        <span className="label">✕</span>
                    </button>
                    <ul>
                        <li>
                            <Link to="/">
                                .me()
                            </Link>
                        </li>
                        <li>
                            <Link to="/about">
                                .about()
                            </Link>
                        </li>
                        <li>
                            <a href={"https://github.com/HoseinKhanBeigi"} title={"GitHub"} target="_blank">
                                <GithubIcon />
                            </a>
                        </li>
                        <li>
                            <a href={"https://www.linkedin.com/in/hosein-khan-beigi/"} title={"LinkedIn"} target="_blank">
                                <LinkedInIcon />
                            </a>
                        </li>

                    </ul>
                </nav>
            </div>
        </header >
    )
}