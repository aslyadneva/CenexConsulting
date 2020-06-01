import React from 'react'
import {graphql, Link} from 'gatsby'
import Layout from '../components/layout'
import BackgroundSection from '../components/globals/BackgroundSection'
import SEO from '../components/seo'
import java from '../images/database.jpg'
import ui from '../images/wireframe.jpg'
import app from '../images/smartphone.jpg'
import support from '../images/people.jpg'

const services = [
  {
    title: "Java Consulting", 
    img: java, 
  }, 
  {
    title: "UI/UX Consulting",
    img: ui
  }, 
  {
    title: "App Development",
    img: app
  }, 
  {
    title: "Support",
    img: support
  }
]

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
        {services.map((service, idx) => {
          return (
            <div class="container-fluid">
              <div class="row java-consulting">

                {idx % 2 !== 0 &&
                  <div class="col d-none d-md-block col-md-4 col-xl-6 bg-dark px-0">
                    <img src={service.img} alt={service.title} style={{ height: '100%', width: '100%', objectFit: 'cover' }} />
                  </div>
                }
                
                <div class="col col-12 col-md-8 col-xl-6">
                  <div class="container-sm container-lg">
                    <div class="p-3 m-3 p-md-5 m-md-5">
                      <h3 class="font-weight-bold py-3 py-md-3">{service.title}</h3>
                      <p>
                        With the “write once, run anywhere” mantra of Java, the popular programming language isn’t slowing and neither are we.
                        <br />
                        <br />
                        Our Java consulting practice continues to grow as do our customers. From custom development of Java applications to auditing and troubleshooting to mentoring and staff augmentation.
                      </p>
                      <Link to="/contact" >Learn More</Link>
                    </div>
                  </div>
                </div>

                {idx === 0 || idx % 2 === 0 ?
                  <div class="col d-none d-md-block col-md-4 col-xl-6 bg-dark px-0">
                    <img src={service.img} alt={service.title} style={{ height: '100%', width: '100%', objectFit: 'cover' }} />
                  </div>
                  : null
                }
                
              </div>
            </div>
          )
        })}     
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
