import { Link } from "gatsby";
import React from "react";

import "./nav.scss";

const Nav = () => (
    <nav className="navbar">
        <ul className="nav">
            <li className="nav__item">
                <Link to="/" className="nav__link" activeClassName="is-current">Home</Link>
            </li>
            <li className="nav__item">
                <Link to="/about" className="nav__link" activeClassName="is-current">About</Link>
            </li>
            <li className="nav__item">
                <Link to="/portfolio" className="nav__link" activeClassName="is-current">Portfolio</Link>
            </li>
            <li className="nav__item">
                <Link to="/contact" className="nav__link" activeClassName="is-current">Contact</Link>
            </li>
        </ul>
    </nav>
);

export default Nav;