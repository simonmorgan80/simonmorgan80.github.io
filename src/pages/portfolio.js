import React from "react";
import ReactHtmlParser from 'react-html-parser'; 

import ContactCard from "../components/contact-card/contact-card";
import Hero from "../components/hero/hero";
import Layout from "../components/layout/layout";
import SEO from "../components/seo/seo";


const projects = [
    { 
        name: 'burfordcapital.com', 
        url: 'https://www.burfordcapital.com/',
        content: '<p>Front End Component library development. HTML, CSS, Javascript, Fractal.js, Webpack, Gulp. Working for <a href="http://www.living-group.com" target="_blank" rel="noreferrer noopener">Living Group</a></p>'
    },
    { 
        name: 'potterclarkson.com', 
        url: 'https://www.potterclarkson.com/',
        content: '<p>Front End Component library development. HTML, CSS, Javascript, Fractal.js, Webpack, Gulp. Working for <a href="http://www.living-group.com" target="_blank" rel="noreferrer noopener">Living Group</a></p>'
    },
    { 
        name: 'traverssmith.com', 
        url: 'https://www.traverssmith.com/',
        content: '<p>Front End Component library development. HTML, CSS, Javascript, Fractal.js, Webpack, Gulp. Working for <a href="http://www.living-group.com" target="_blank" rel="noreferrer noopener">Living Group</a></p>'
    }, 
    // { 
    //     name: 'rede-partners.com', 
    //     url: 'https://www.rede-partners.com/',
    //     content: '<p>Front End Component library development. HTML, CSS, Javascript, Fractal.js, Webpack, Gulp. Working for <a href="http://www.living-group.com" target="_blank" rel="noreferrer noopener">Living Group</a></p>'
    // },
    { 
        name: 'elselondon.com', 
        url: 'https://www.elselondon.com/',
        content: '<p>Wordpress Build + Front End Component library development. Wordpress, HTML, CSS, Javascript, Fractal.js, Webpack, Gulp.</p>'
    },
    { 
        name: 'englandgolf.org', 
        url: 'https://www.englandgolf.org/',
        content: '<p>Wordpress Build + Front End Component library development. Wordpress, HTML, CSS, Javascript, Fractal.js, Webpack, Gulp.</p>'
    },
    { 
        name: 'nsandi-corporate.com', 
        url: 'https://nsandi-corporate.com/',
        content: '<p>Front End Component library development. HTML, CSS, Javascript, Fractal.js, Webpack, Gulp. Working for <a href="http://www.theteam.co.uk" target="_blank" rel="noreferrer noopener">The Team</a></p>'
    },
    { 
        name: 'harneys.com', 
        url: 'https://www.harneys.com/',
        content: '<p>Front End Component library development. HTML, CSS, Javascript, Fractal.js, Webpack, Gulp. Working for <a href="http://www.living-group.com" target="_blank" rel="noreferrer noopener">Living Group</a></p>'
    },
    { 
        name: 'kasowitz.com', 
        url: 'https://www.kasowitz.com/',
        content: '<p>Front End Component library development. HTML, CSS, Javascript, Fractal.js, Webpack, Gulp. Working for <a href="http://www.living-group.com" target="_blank" rel="noreferrer noopener">Living Group</a></p>'
    },
    { 
        name: 'kasowitz.com/at-a-glance/our-ethos', 
        url: 'https://www.kasowitz.com/at-a-glance/our-ethos',
        content: '<p>Front End Component library development. HTML, CSS, Javascript, Fractal.js, Webpack, Gulp. Working for <a href="http://www.living-group.com" target="_blank" rel="noreferrer noopener">Living Group</a></p>'
    },    
    { 
        name: 'theteam.co.uk', 
        url: 'http://www.theteam.co.uk',
        content: '<p>Wordpress Build </p>'
    }    
];

const Portfolio = () => (
  <Layout>
    <SEO title="Portfolio" />
    <Hero title="Portfolio" style={`bg--blue`}/>
    <section className="section">
        <div className="container">
            <div className="grid">
                <article className="article">
                    <div className="article__content">                        
                        <p>Some recent work examples</p>
                        <ul className="project-list">
                        {projects.map(({name, url, content}) => {
                            return (
                                <li key={name} className="project-list__item">
                                    <div className="project">
                                    <h2 class="h4 project__title"><a href={url} target="_blank" rel="noreferrer noopener" className="project__link">{name}</a></h2>
                                    { ReactHtmlParser (content) }
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
