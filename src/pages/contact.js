import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import SEO from '../components/seo'
import BackgroundSection from '../components/globals/BackgroundSection'
import Form from '../components/contact/Form'
import ContactInfo from '../components/contact/ContactInfo'

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
        <div class="container">
          <div class="row">

            {/* <!-- Form Column --> */}
            <div class="col-12 col-xl-8">
              <div class="p-5 rounded-lg Contact__container">
                <h3 class="py-2 Heading">Reach out to us</h3>
                <p>Dont be shy, Just tell us about yourself and we’ll figure out the best option for you and your project.</p>
                <Form/>
              </div>
            </div>

            {/* <!-- Text Column --> */}
            <div class="col-12 col-xl-4 d-flex flex-column">
              <ContactInfo/>
            </div>
            
          </div>
        </div>
      </section>

      {/* <!-- Map --> */}
      <section id="contact-map" class="p-5">
        <div class="container">
          <h3 className="Heading">Visit our office</h3>
          <p>You don't need an appointment, just walk in.</p>
          MAP GOES HERE
          {/* <div id="map" style='width: auto; height: 30rem;'>

          </div> */}
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
