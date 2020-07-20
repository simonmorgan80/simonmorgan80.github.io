import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";
import Nav from "../nav/nav";

import "./header.scss";

const Header = ({ siteTitle }) => (
    <header className="header bg--blue">
        <div className="container">
            <div className="header__inner">                
                <div className="header__nav">
                    <Nav />
                </div>
                <div className="header__brand">
                    <p className="h2 header__title"><Link to="/" className="header__link">{siteTitle}</Link></p>
                </div>
            </div>
        </div>
    </header>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
