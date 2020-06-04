import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import SEO from '../components/seo'
import BackgroundSection from '../components/globals/BackgroundSection'
import Form from '../components/contact/Form'
import ContactInfo from '../components/contact/ContactInfo'
import Map from '../components/contact/Map'

const ContactPage = ({data}) => {
  return (
    <Layout>
      <SEO title="Contact Us"/>
      <BackgroundSection
        img={data.backgroundImage.childImageSharp.fluid}
        title="Contact Us"
        backgroundType="default"
      >
        <div className="container my-auto">
          <div className="col-6">
            <h1 className="Title">Contact Us</h1>
          </div>
        </div>
      </BackgroundSection>

      {/* <!-- Contact Form --> */}
      <section id="contact-form" className="Contact">
        <div className="container">
          <div className="row">

            {/* <!-- Form Column --> */}
            <div className="col-12 col-xl-8">
              <div className="p-5 rounded-lg Contact__container">
                <h3 className="py-2 Heading">Reach out to us</h3>
                <p>Dont be shy, Just tell us about yourself and we’ll figure out the best option for you and your project.</p>
                <Form/>
              </div>
            </div>

            {/* <!-- Text Column --> */}
            <div className="col-12 col-xl-4 d-flex flex-column">
              <ContactInfo/>
            </div>
            
          </div>
        </div>
      </section>

      {/* <!-- Map --> */}
      <section className="px-2 py-5 p-md-5-5">
        <div className="container">
          <h3 className="Heading">Visit our office</h3>
          <p>You don't need an appointment, just walk in.</p>
          <div style={{width: 'auto', height: '30rem', position: 'relative'}}>
            <Map />
          </div>
        </div>
      </section>   
    </Layout>
  )
}

export const query = graphql`
  {
    backgroundImage:file(relativePath:{eq: "landscape.jpg"}) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`

export default ContactPage
