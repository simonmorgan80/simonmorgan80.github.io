import React from "react";

import Card from "../components/card/card"
import ContactCard from "../components/contact-card/contact-card"
import Hero from "../components/hero/hero"
import Layout from "../components/layout/layout"
import SEO from "../components/seo/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero title="Web Developer" summary="Available February 2022" style={`bg--blue`}/>
    <section className="section">
        <div className="container">
            <div className="grid grid--cards">
                <Card to="/about/" label="Find out more">
                    <h2 className="h4 card__title text--blue">About me</h2>
                    <p>Freelance front-end web developer and technical lead with over 15 years agency experience. I specialise in creating responsive, accessible and high performing front end user interfaces using HTML, CSS and Javascript.</p>
                </Card>
                <Card to="/portfolio/" label="View portfolio">
                    <h2 className="h4 card__title text--blue">Portfolio</h2>
                    <p>I've worked across various sectors including charities, finance and law.</p>
                </Card>
                <ContactCard />
            </div>
        </div>
    </section>
  </Layout>
)

export default IndexPage
