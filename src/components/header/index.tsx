import { Link } from "react-router-dom";
import './index.scss'
import { GithubIcon } from "../icon/githubIcon";
import { LinkedInIcon } from "../icon/LinkedInIcon";
export const Header = () => {
    return (
        <header id="header">
            <div className="header-bg"></div>
            <div className="header-container">
                <div className="header-breadcrumb"></div>
                <nav className="header-nav">
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
        </header>
    )
}