import React from 'react'
import { Link } from 'gatsby'

const Recognition = () => {
  return (
    <section id = "recognition" className="Recognition py-5">
      <div class="container py-5 px-5">
        <div class="row d-flex justify-content-between">

          <div class="col-12 col-lg-4">
            <h2 class="Heading">Our Recognition</h2>
            <p>Over 30 high quality professionally designed pre-built website concepts to choose from. Build your website using a fully visual interface, using our revolutionary page & header builder.</p>
            <Link to="/contact" className="text-primary">Contact Us</Link>
          </div>

          <div id="counter" class="col-12 col-lg-6 d-flex justify-content-between align-items-center">

            <div class="border-right pr-5">
              <span class="display-4 text-primary counter-value">2011</span>
              <h6 class="text-center">Established In</h6>
            </div>

            <div class="border-right pr-5">
              <p class="display-4 text-primary counter-value">180</p>
              <h6 class="text-center">Projects</h6>
            </div>

            <div>
              <p class="display-4 text-primary counter-value">46</p>
              <h6 class="text-center">Clients</h6>
            </div>

          </div>

        </div>
      </div>

    </section >
  )
}

export default Recognition
