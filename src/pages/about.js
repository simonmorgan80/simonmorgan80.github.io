import React from "react"

import Contact from "../components/contact-card/contact-card"
import Hero from "../components/hero/hero"
import Layout from "../components/layout/layout"
import SEO from "../components/seo/seo"

const About = () => (
  <Layout>
    <SEO title="About" />
    <Hero title="About me" style={`bg--blue`}/>
    <section className="section">
        <div className="container">
            <div className="grid">
                <article className="article">
                    <div className="article__content">                        
                        <p>I'm a Freelance front-end web developer and technical lead with over 15 years agency experience. I specialise in creating responsive, accessible and high performing front end user interfaces using HTML, CSS and Javascript.</p>

                        <p>For lots of projects my approach is to build out front-end component libraries that are then used to inform and build out the final site or application.  I use tools such as <a href="https://fractal.build/" target="_blank" rel="noreferrer">Fractal.build</a>, <a href="https://webpack.js.org/" target="_blank" rel="noreferrer">Webpack</a> & <a href="https://gulpjs.com/" target="_blank" rel="noreferrer">Gulp</a> to create custom and maintainable component libraries.</p>

                        <p>I also develop lots of CMS based sites using <a href="https://wordpress.org/" target="_blank" rel="noopener noreferrer">Wordpress</a> & <a href="https://umbraco.com/" target="_blank" rel="noopener noreferrer">Umbraco</a> to build out component based sites for clients and currently increasing knowledge of Headless CMS such as <a href="https://www.contentful.com/" target="_blank" rel="noopener noreferrer">Contentful</a> using frameworks like as <a href="https://www.gatsbyjs.org/" target="_blank" rel="noopener noreferrer">Gatsby</a> for the front end.</p>
                    </div>
                </article>
                <aside>
                    <Contact />
                </aside>
            </div>
        </div>
    </section>
  </Layout>
)

export default About
