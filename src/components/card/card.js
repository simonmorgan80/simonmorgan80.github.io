import React from 'react';
import PropTypes from "prop-types";
import Button from "../button/button";
import "./card.scss";

const Card = ({to, label, hideLink, children}) => (
    <div className="card">
        <div className="card__body">
            {children}          
        </div>        
        {hideLink ? '' :
        <div className="card__footer">
            <Button to={to} label={label} icon="chevron-right" />
        </div>
        }
    </div>
);

Card.propTypes = {
    to: PropTypes.string,
    label: PropTypes.string
};

export default Card;