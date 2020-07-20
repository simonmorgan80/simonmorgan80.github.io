import React from 'react';
import PropTypes from "prop-types";
import "./hero.scss";

const Hero = ({title, style}) => (
    <section className={`hero ${ style }`}>
        <div className="container">
            <h1 className="hero__title">{title}</h1>
        </div>
    </section>
);

Hero.propTypes = {
    title: PropTypes.string,
    style: PropTypes.string
};

Hero.defaultProps = {
    title: ``,
    style: ``
};

export default Hero;