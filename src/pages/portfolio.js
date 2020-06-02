import React from 'react'
import { graphql } from  'gatsby'
import Layout from '../components/layout'
import SEO from '../components/seo'
import BackgroundSection from '../components/globals/BackgroundSection'

const PortfolioPage = ({data}) => {
  return (
    <Layout>
      <SEO title="Our Clients"/>
      <BackgroundSection
        img={data.backgroundImage.childImageSharp.fluid}
        title="Our Services"
        backgroundType="default"
      >
        <div class="container my-auto">
          <div class="col-6">
            <h1 className="Title">Our work</h1>
          </div>
        </div>
      </BackgroundSection>


      {/* <!-- Projects Content  --> */}
      <section id="projects-section" class="py-5">
        <div class="container">

          {/* <!-- Text Row --> */}
      <div class="row">
            <div class="col">
              <h2 class="text-center Heading ">Recent Projects</h2>
              <p class="text-center">The people who made it happen and will continue to push this company forward for more success</p>
            </div>
          </div>

          {/* <!-- Columns Row --> */}
      <div class="row py-5 justify-content-center ">

            <div class="main-card project1 d-flex flex-column justify-content-between">
              <h3 class="text-center p-3 mt-5">BitHeads</h3>
              <p class=" p-4 align-self-start">We worked with Bitheads on BrianCloud web application for game developers. The app was built using angular JS and Java Spring framework backend.</p>
            </div>

            <div class="main-card project2">
              <h3 class="text-center p-3 mt-5">BitHeads</h3>
              <p class="p-4 align-self-start">We worked with Bitheads on BrianCloud web application for game developers. The app was built using angular JS and Java Spring framework backend.</p>
            </div>

            <div class="main-card project3">
              <h3 class="text-center p-3 mt-5">BitHeads</h3>
              <p class="p-4 align-self-start">We worked with Bitheads on BrianCloud web application for game developers. The app was built using angular JS and Java Spring framework backend.</p>
            </div>

            <div class="main-card project4">
              <h3 class="text-center p-3 mt-5">BitHeads</h3>
              <p class="p-4 align-self-start">We worked with Bitheads on BrianCloud web application for game developers. The app was built using angular JS and Java Spring framework backend.</p>
            </div>

            <div class="main-card project5">
              <h3 class="text-center p-3 mt-5">BitHeads</h3>
              <p class="p-4 align-self-start">We worked with Bitheads on BrianCloud web application for game developers. The app was built using angular JS and Java Spring framework backend.</p>
            </div>

            <div class="main-card project6">
              <h3 class="text-center p-3 mt-5">BitHeads</h3>
              <p class=" p-4 align-self-start">We worked with Bitheads on BrianCloud web application for game developers. The app was built using angular JS and Java Spring framework backend.</p>
            </div>
          </div>

        </div>
      </section>
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
