import React from 'react'

const Recognition = () => {
  return (
    <section id = "recognition" class="py-5" >
      <div class="container py-5">
        <div class="row d-flex justify-content-between">

          <div class="col-12 col-lg-4">
            <h2 class="font-weight-bold">Our Recognition</h2>
            <p>Over 30 high quality professionally designed pre-built website concepts to choose from. Build your website using a fully visual interface, using our revolutionary page & header builder.</p>
            <p class="text-primary">Contact Us</p>
          </div>

          <div id="counter" class="col-12 col-lg-6 d-flex justify-content-between align-items-center">

            <div class="border-right pr-5">
              <span class="display-4 text-primary counter-value" data-count="2011">1980</span>
              <h6 class="text-center">Established In</h6>
            </div>

            <div class="border-right pr-5">
              <p class="display-4 text-primary counter-value" data-count="180">0</p>
              <h6 class="text-center">Projects</h6>
            </div>

            <div>
              <p class="display-4 text-primary counter-value" data-count="46">0</p>
              <h6 class="text-center">Clients</h6>
            </div>

          </div>

        </div>
      </div>

    </section >
  )
}

export default Recognition
