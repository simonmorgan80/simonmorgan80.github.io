import React from "react";
import ReactHtmlParser from 'react-html-parser'; 

import ContactCard from "../components/contact-card/contact-card";
import Hero from "../components/hero/hero";
import Layout from "../components/layout/layout";
import SEO from "../components/seo/seo";


const projects = [
    { 
        name: 'Bladonmore', 
        url: '',
        content: '<p>Contract working for <a href="https://www.bladonmore.com" target="_blank" rel="noreferrer noopener">Bladonmore.com</a></p><p>Development of custom Wordpress builds using ACF. HTML, CSS, Javascript, Webpack & Gulp</p>',
        date: 'June 2021 - Jan 2022',
        subprojects: [
            'https://www.bladonmore.com',
            'https://www.arrowfletchings.net/',
            'https://www.aac-clyde.space/',
            'https://terracarta.report/'
        ]
    },
    { 
        name: 'theteam.co.uk', 
        url: 'http://www.theteam.co.uk',
        content: '<p>Custom Wordpress build using ACF. HTML, CSS, Javascript, Webpack & Gulp</p>',
        date: 'September 2021'        
    },
    { 
        name: 'xdefi.io', 
        url: 'https://www.xdefi.io',
        content: '<p>Custom Wordpress build using ACF. HTML, CSS, Javascript, Webpack & Gulp</p>',
        date: 'May 2021'
    },
    { 
        name: 'Pixeledeggs', 
        url: '',
        content: '<p>Contract working for <a href="https://www.pixeledeggs.com" target="_blank" rel="noreferrer noopener">Pixeledeggs.com</a></p><p>Part of development team developing custom Wordpress builds using ACF</p>',
        date: 'June 2020 - Dec 2020',
        subprojects: [
            'https://www.missingpeople.org.uk/',
            'https://immersivearcade.uk',
            'https://earthshotprize.org'
        ]
    },    
    { 
        name: 'rafaelvalls.co.uk', 
        url: 'https://www.rafaelvalls.co.uk/',
        content: '<p>Custom Wordpress build using ACF. HTML, CSS, Javascript, Webpack & Gulp</p>',
        date: 'May 2020'
    },
    { 
        name: 'nsandi.com', 
        url: 'http://nsandi.com',
        content: '<p> Contract working for <a href="http://www.theteam.co.uk" target="_blank" rel="noreferrer noopener">The Team</a></p><p>Front End Component library development. HTML, CSS, Javascript, Fractal.js, Webpack, Gulp. </p>',
        date: 'Feb 2020 - May 2020'
    },
    { 
        name: 'burfordcapital.com', 
        url: 'https://www.burfordcapital.com/',
        content: '<p>Contract working for <a href="http://www.living-group.com" target="_blank" rel="noreferrer noopener">Living Group</a></p><p>Front End Component library development. HTML, CSS, Javascript, Fractal.js, Webpack, Gulp. </p>',
        date: '2019'
    },
    { 
        name: 'potterclarkson.com', 
        url: 'https://www.potterclarkson.com/',
        content: '<p>Contract working for <a href="http://www.living-group.com" target="_blank" rel="noreferrer noopener">Living Group</a></p><p>Front End Component library development. HTML, CSS, Javascript, Fractal.js, Webpack, Gulp. </p>',
        date: '2019'
    },
    { 
        name: 'traverssmith.com', 
        url: 'https://www.traverssmith.com/',
        content: '<p>Contract working for <a href="http://www.living-group.com" target="_blank" rel="noreferrer noopener">Living Group</a></p><p>Front End Component library development. HTML, CSS, Javascript, Fractal.js, Webpack, Gulp. </p>',
        date: '2019'
    },
    { 
        name: 'elselondon.com', 
        url: 'https://www.elselondon.com/',
        content: '<p>Wordpress Build + Front End Component library development. Wordpress, HTML, CSS, Javascript, Fractal.js, Webpack, Gulp.</p>',
        date: '2018'
    },
    { 
        name: 'englandgolf.org', 
        url: 'https://www.englandgolf.org/',
        content: '<p>Wordpress Build + Front End Component library development. Wordpress, HTML, CSS, Javascript, Fractal.js, Webpack, Gulp.</p>',
        date: '2018'
    },
    { 
        name: 'nsandi-corporate.com', 
        url: 'https://nsandi-corporate.com/',
        content: '<p>Contract working for <a href="http://www.theteam.co.uk" target="_blank" rel="noreferrer noopener">The Team</a></p><p>Front End Component library development. HTML, CSS, Javascript, Fractal.js, Webpack, Gulp. </p>',
        date: '2018'
    },
    { 
        name: 'harneys.com', 
        url: 'https://www.harneys.com/',
        content: '<p>Contract working for <a href="http://www.living-group.com" target="_blank" rel="noreferrer noopener">Living Group</a></p><p>Front End Component library development. HTML, CSS, Javascript, Fractal.js, Webpack, Gulp. </p>',
        date: '2018'
    },
    { 
        name: 'kasowitz.com', 
        url: 'https://www.kasowitz.com/',
        content: '<p> Contract working for <a href="http://www.living-group.com" target="_blank" rel="noreferrer noopener">Living Group</a></p><p>Front End Component library development. HTML, CSS, Javascript, Fractal.js, Webpack, Gulp. </p>',
        date: '2018'
    }
];

const Portfolio = () => (
  <Layout>
    <SEO title="Portfolio" />
    <Hero title="Portfolio" summary="Recent work examples:" style={`bg--blue`}/>
    <section className="section">
        <div className="container">
            <div className="grid">
                <article className="article">
                    <div className="article__content article__content--full">
                        <ul className="project-list">
                        {projects.map(({name, url, content, date, subprojects}) => {

                            let title;

                            if (url) {
                                title = <a href={url} target="_blank" rel="noreferrer noopener" className="project__link">{name}</a>;
                            } else {
                                title = name;
                            }

                            return (
                                <li key={name} className="project-list__item">
                                    <div className="project">
                                        <h2 className="h4 project__title">{title}</h2>
                                        { ReactHtmlParser (content) }

                                        {subprojects &&
                                            <ul className="project__sublinks">
                                                {subprojects.map((url, index) => {
                                                    return (
                                                        <li key={index} className="">
                                                        <a href={url} target="_blank" rel="noreferrer noopener" className="">{url}</a>
                                                        </li>
                                                    )
                                                })}
                                            </ul>
                                        }

                                        {date && 
                                            <small className="project__date">{date}</small>
                                        }
                                    </div>
                                </li>
                            )
                        })}
                        </ul>
                    </div>
                </article>
                <aside>
                    <ContactCard />
                </aside>
            </div>
        </div>
    </section>
  </Layout>
)

export default Portfolio
