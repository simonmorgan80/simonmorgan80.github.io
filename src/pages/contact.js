import React from "react"

import ContactCard from "../components/contact-card/contact-card"
import Hero from "../components/hero/hero"
import Layout from "../components/layout/layout"
import SEO from "../components/seo/seo"

const Contact = () => (
  <Layout>
    <SEO title="Contact" />
    <Hero title="Contact" style={`bg--blue`}/>
    <section className="section">
        <div className="container">
            <div className="grid">
                <article className="article">
                    <div className="article__content">                        
                        <p>Please get in touch for more information or if you'd like to discuss upcoming projects you need support with.</p>
                        <p>I am currently looking for new contracts from the beginning of <strong>February 2022.</strong></p>
                    </div>
                </article>
                <aside>
                    <ContactCard hideLink="true"/>
                </aside>
            </div>
        </div>
    </section>
  </Layout>
)

export default Contact
