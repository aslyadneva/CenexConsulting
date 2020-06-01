import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import SEO from '../components/seo'
import BackgroundSection from '../components/globals/BackgroundSection'

const ContactPage = ({data}) => {
  return (
    <Layout>
      <SEO title="Contact Us"/>
      <BackgroundSection
        img={data.backgroundImage.childImageSharp.fluid}
        title="Contact Us"
        backgroundType="default"
      >
        <div class="container my-auto">
          <div class="col-6">
            <h1 class="display-3 text-light font-weight-bold">Contact Us</h1>
          </div>
        </div>
      </BackgroundSection>
      Contact Page
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
