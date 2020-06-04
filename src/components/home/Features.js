import React from 'react'
import { Link } from 'gatsby'
import { FaMobileAlt, FaCloudUploadAlt, FaWindowRestore, FaMousePointer } from "react-icons/fa";

const Features = () => {
  return (
    <section className="Features py-5">
      <div className="container-xl py-5">

        <div className="row ">
 
          <div className="col-12 col-xl-8">

            <div className="d-flex flex-column flex-md-row">

              <div className="col" >
                <div className="pt-5 pb-4 px-4 mb-4 rounded Features__card">
                  <div className="Features__content">
                    <FaMobileAlt className="text-primary m-4" style={{fontSize: '4rem'}}/>
                    <h5>Mobile Apps</h5>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, veniam?</p>
                  </div>
                </div>
              </div>

              <div className="col" >
                <div className="pt-5 pb-4 px-4 mb-4 rounded Features__card">
                  <div className="Features__content">
                    <FaCloudUploadAlt className="text-primary m-4" style={{ fontSize: '4rem' }}/>
                    <h5>SAAS Apps</h5>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, veniam?</p>
                  </div>
                </div>
              </div>

            </div>


            <div className="d-flex flex-column flex-md-row">

              <div className="col" >
                <div className="pt-5 pb-4 px-4 mb-4 rounded Features__card">
                  <div className="Features__content">
                    <FaWindowRestore className="text-primary m-4" style={{ fontSize: '4rem' }}/>
                    <h5>Web Development</h5>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, veniam?</p>
                  </div>
                </div>
              </div>

              <div className="col" >
                <div className="pt-5 pb-4 px-4 mb-4 rounded Features__card">
                  <div className="Features__content">
                    <FaMousePointer className="text-primary m-4" style={{ fontSize: '4rem' }}/>
                    <h5>Pay Per Click Advertising</h5>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, veniam?</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-12 col-md-12 col-xl-4 align-self-center p-5 pl-xl-5 features-text">
            <h3 className="Heading">We can take your business online</h3>
            <p className="py-2">Over 30 high quality professionally designed pre-built website concepts to choose from. Build your website using a fully visual interface, using our revolutionary page & header builder.</p>
            <Link to="/services" className="Button Button--medium">VIEW MORE</Link>
          </div>

        </div>

      </div>
    </section>
  )
}

export default Features
