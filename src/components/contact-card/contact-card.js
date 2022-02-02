import React from 'react';
import Card from "../card/card"
import Icon from "../icon/icon";

const Contact = ({hideLink}) => {
    return (
        <Card to="/contact/" label="Find out more" hideLink={hideLink}>
            <h2 className="h4 card__title text--blue">Contact</h2>
            <p>Please contact me using the channels below:</p>
            <ul className="unstyled-list">
                <li className="unstyled-list__item">                                
                    <a href="https://www.linkedin.com/in/simon-morgan-5b842414/" className="link link--has-icon" rel="noopener noreferrer">
                        <Icon id="linkedin" style={`icon--sm link__icon`} />
                        Linkedin
                    </a>
                </li>
                <li className="unstyled-list__item">                                
                    <a href="https://github.com/simonmorgan80" className="link link--has-icon" rel="noopener noreferrer">
                        <Icon id="git" style={`icon--sm link__icon`} />
                        Github
                    </a>
                </li>
                <li className="unstyled-list__item">                                
                    <a href="mailto:simon.morgan80@gmail.com" className="link link--has-icon" rel="noopener noreferrer">
                        <Icon id="email" style={`icon--sm link__icon`} />
                        Email
                    </a>
                </li>
            </ul>
        </Card>
    )
};

export default Contact;