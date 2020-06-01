import React, {Fragment} from 'react'
import { Link } from 'gatsby'

const Footer = () => {
  return (
    <Fragment>
      {/* <!-- Footer Section --> */}
      <footer className="Footer py-5">
        <div className="container">
          <div className="row">

            <div className="col-12 py-3 px-5 col-md-6 col-xl-3 py-xl-0 pl-xl-3 pr-xl-5 ">
              <h5 className="mb-4 text-light">Cenex</h5>
              <p>Get started swiftly & easily by importing a demo of your choice in a single click. Build your website using a fully visual interface.</p>
            </div>

            <div className="col-12 py-3 px-5 col-md-6 col-xl-3 py-xl-0 px-xl-5">
              <h5 className="mb-4 text-light">Work Hours</h5>
              <p>8 AM - 7 PM, Monday - Saturday</p>
              <p>Our Support and Sales team is available 24*7 to answer your queries.      </p>


            </div>

            <div className="col-12 py-3 px-5 col-md-6 col-xl-3 py-xl-0 px-xl-5">
              <h5 className="mb-4 text-light">About Us</h5>
              <Link to="/services"><p>Services</p></Link>
              <Link to="/portfolio"><p>Portfolio</p></Link>
              <Link to="/contact"><p>Contact</p></Link>
            </div>

            <div className="col-12 py-3 px-5 col-md-6 col-xl-3 py-xl-0 px-xl-5">
              <h5 className="mb-4 text-light">Legal</h5>
              <a href="#"><p>Services</p></a>
              <a href="#"><p>Portfolio</p></a>
              <a href="#"><p>Contact</p></a>
            </div>

          </div>

        </div>


      </footer>

      {/* <!-- Copyright Section --> */}
      <section id="copyright" className="Copyright py-4">
        <div className="container">

          <p className="m-0">Copyright &copy; 2020, Cenex Consulting, All Rights Reserved</p>

        </div>
      </section>
    </Fragment>
  )
}

export default Footer
