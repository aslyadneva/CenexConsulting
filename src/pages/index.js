import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import BackgroundSection from "../components/globals/BackgroundSection"
import Features from "../components/home/Features"
import Companies from "../components/home/Companies"
import Process from "../components/home/Process"
import Recognition from "../components/home/Recognition"
import FAQ from "../components/home/FAQ"

const IndexPage = ({data}) => {
  return ( 
    <Layout> 
      <SEO title="Home" />
      <BackgroundSection 
        img={data.backgroundImage.childImageSharp.fluid}
        title="Cenex Consulting"
        backgroundType="main"
      >
        <div className="video-section-header" >
          <h1 className="text-light pt-5 font-weight-bold" style={{fontSize: '4.5rem'}}>
            The future of <br/> innovation is now
          </h1>
          <p className="lead text-light pb-3">The core was draining on energy and destroyed the <br/> entire planet as kal-el was the only survivor.</p>
          <button className="btn btn-primary py-2 px-4">LEARN MORE</button>  
        </div>
      </BackgroundSection>

      <Features/>
      <Companies />
      <Process />
      <Recognition />
      <FAQ />         
    </Layout>
  )
}

export const query = graphql`
  {
    backgroundImage:file(relativePath:{eq: "projects.jpg"}) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`

export default IndexPage
