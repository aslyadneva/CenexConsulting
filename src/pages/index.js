import React from "react"
import { graphql, Link } from "gatsby"
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
        <div className="container my-auto px-5 px-md-3">
          <h1 className="Title" data-sal="slide-down" data-sal-duration="1000" data-sal-easing="ease">
            The future of <br/> innovation is now
          </h1>
          <p className="Lead" data-sal="slide-down" data-sal-duration="1000" data-sal-easing="ease"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit.<br />Minima illum tempora, vero rem quia ad?
          </p>
          
            <Link to="/services" className="Button Button--large" data-sal="slide-down" data-sal-duration="1000" data-sal-easing="ease">
              LEARN MORE
            </Link>
           
         
          
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
    backgroundImage:file(relativePath:{eq: "white-bg.jpg"}) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`

export default IndexPage
