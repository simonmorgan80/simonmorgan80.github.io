import React from 'react';
import { Link } from "gatsby";
import Icon from "../icon/icon";
import PropTypes from "prop-types";
import "./button.scss";

const Button = ({to, label, icon}) => (   
    <Link to={to} className="button">
        {label}
        <Icon id={icon} style={`button__icon`} />
    </Link>
);

Button.propTypes = {
    id: PropTypes.string
};

Button.defaultProps = {
    id: ``    
};

export default Button;