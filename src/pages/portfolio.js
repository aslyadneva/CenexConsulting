import React from 'react'
import { graphql } from  'gatsby'
import Layout from '../components/layout'
import SEO from '../components/seo'
import BackgroundSection from '../components/globals/BackgroundSection'
import Projects from '../components/portfolio/Projects'

const PortfolioPage = ({data}) => {
  return (
    <Layout>
      <SEO title="Our Clients"/>
      <BackgroundSection
        img={data.backgroundImage.childImageSharp.fluid}
        title="Our Services"
        backgroundType="default"
      >
        <div className="container my-auto">
          <div className="col-6">
            <h1 className="Title">Our work</h1>
          </div>
        </div>
      </BackgroundSection>

     <Projects />
     
    </Layout>
  )
}

export const query = graphql`
  {
    backgroundImage:file(relativePath:{eq: "chart.jpg"}) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`

export default PortfolioPage
