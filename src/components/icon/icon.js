import React from 'react';
import PropTypes from "prop-types";
import "./icon.scss";

const Icon = ({id, style}) => (
    <svg className={`icon ${style}`} height="32px" width="32px" aria-hidden="true" focusable="false">
        <use xlinkHref={`/icons/symbol-defs.svg#icon-${ id }`}></use>
    </svg>
);

Icon.propTypes = {
    id: PropTypes.string,
    style: PropTypes.string,
};

Icon.defaultProps = {
    id: ``,
    style: ``    
};

export default Icon;