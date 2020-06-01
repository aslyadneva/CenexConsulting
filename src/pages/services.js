import React from 'react'
import {graphql} from 'gatsby'
import Layout from '../components/layout'
import BackgroundSection from '../components/globals/BackgroundSection'
import SEO from '../components/seo'

const ServicesPage = ({data}) => {
  return (
    <Layout>
      <SEO title="Services"/>
      {/* <!-- Services Header --> */}
      <BackgroundSection
        img={data.backgroundImage.childImageSharp.fluid}
        title="Our Services"
        backgroundType="default"
      >
        <div class="container my-auto">
          <div class="col-6">
            <h1 class="display-3 text-light font-weight-bold">Our services</h1>
          </div>
        </div>
      </BackgroundSection>

      {/* <!-- Services Content --> */}
      <section id="services-content">

        {/* <!-- Java Consulting --> */}
    <div class="container-fluid">
          <div class="row java-consulting">
            <div class="col col-12 col-md-8 col-xl-6">
              <div class="container-sm container-lg">
                <div class="p-3 m-3 p-md-5 m-md-5">
                  <h3 class="font-weight-bold py-3 py-md-3">Java Consulting</h3>
                  <p class="">With the “write once, run anywhere” mantra of Java, the popular programming language isn’t slowing and neither are we.
              <br/>
                      <br/>
                        Our Java consulting practice continues to grow as do our customers. From custom development of Java applications to auditing and troubleshooting to mentoring and staff augmentation.
            </p>
                      <a href="#">Learn More</a>
          </div>
         </div>
                </div>
                <div class="col d-none d-md-block col-md-4 col-xl-6 bg-dark java-image"></div>
              </div>
            </div>

            {/* <!-- Web Consulting --> */}
    <div class="container-fluid">
              <div class="row web-consulting">

                <div class="col d-none d-md-block col-md-4 col-xl-6 bg-dark web-image"></div>

                <div class="col col-12 col-md-8 col-xl-6">
                  <div class="container-sm container-lg">
                    <div class="p-3 m-3 p-md-5 m-md-5">
                      <h3 class="font-weight-bold py-3 py-md-3">UI/UX Consulting</h3>
                      <p class="">With the “write once, run anywhere” mantra of Java, the popular programming language isn’t slowing and neither are we.
              <br/>
                          <br/>
                            Our Java consulting practice continues to grow as do our customers. From custom development of Java applications to auditing and troubleshooting to mentoring and staff augmentation.
            </p>
                          <a href="#">Learn More</a>
          </div>
         </div>
                    </div>
                  </div>
                </div>

                {/* <!-- App Development --> */}
    <div class="container-fluid">
                  <div class="row app-development">
                    <div class="col col-12 col-md-8 col-xl-6">
                      <div class="container-sm container-lg">
                        <div class="p-3 m-3 p-md-5 m-md-5">
                          <h3 class="font-weight-bold py-3 py-md-3">App Development</h3>
                          <p class="">With the “write once, run anywhere” mantra of Java, the popular programming language isn’t slowing and neither are we.
              <br/>
                              <br/>
                                Our Java consulting practice continues to grow as do our customers. From custom development of Java applications to auditing and troubleshooting to mentoring and staff augmentation.
            </p>
                              <a href="#">Learn More</a>
          </div>
         </div>
                        </div>
                        <div class="col d-none d-md-block col-md-4 col-xl-6 bg-dark app-image"></div>
                      </div>
                    </div>

                    {/* <!-- Support --> */}
    <div class="container-fluid">
                      <div class="row support">
                        <div class="col d-none d-md-block col-md-4 col-xl-6 bg-dark people-image"></div>
                        <div class="col col-12 col-md-8 col-xl-6">
                          <div class="container-sm container-lg">
                            <div class="p-3 m-3 p-md-5 m-md-5">
                              <h3 class="font-weight-bold py-3 py-md-3">Support</h3>
                              <p class="">With the “write once, run anywhere” mantra of Java, the popular programming language isn’t slowing and neither are we.
              <br/>
                                  <br/>
                                    Our Java consulting practice continues to grow as do our customers. From custom development of Java applications to auditing and troubleshooting to mentoring and staff augmentation.
            </p>
                                  <a href="#">Learn More</a>
          </div>
         </div>
                            </div>
                          </div>
                        </div>
  

  </section>
    </Layout>
    
  )
}

export const query = graphql`
  {
    backgroundImage:file(relativePath:{eq: "laptop.jpg"}) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`

export default ServicesPage
