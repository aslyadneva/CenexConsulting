import React from 'react'

const FAQ = () => {
  return (
    <section id = "faq" class="py-5" >
      <div class="container py-5">

        <div class="row">
          <div class="col">
            <h2 class="text-center font-weight-bold">FAQ</h2>
            <p class="text-center">Get prompt responses from a friendly, professional and knowledgable support team.</p>
          </div>
        </div>

        <div class="row pt-5">

          {/* <!-- Column 1 --> */}
          <div class="col-12 col-sm-6 px-4">

            {/* <!-- Card 1 --> */}
            <div class="card my-3">

              <div class="main-card card-body d-flex justify-content-between align-items-center"
                data-toggle="collapse"
                data-target="#collapseExample"
                aria-expanded="false"
                aria-controls="collapseExample">
                <span>What is your team size?</span>
                <i class="collapse-icon fas fa-plus"></i>
              </div>

              <div class="collapse shadow" id="collapseExample">
                <div class="card card-body border-0">
                  <p>Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
                  terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer
                  labore wes anderson cred nesciunt sapiente ea proident.</p>
                </div>
              </div>

            </div>

            {/* <!-- Card 2 --> */}
            <div class="card my-3">
              <div class="main-card card-body d-flex justify-content-between align-items-center"
                data-toggle="collapse"
                data-target="#collapseExample2"
                aria-expanded="false"
                aria-controls="collapseExample"
              >
                <span>How much do you charge?</span>
                <i class="collapse-icon fas fa-plus"></i>
              </div>

              <div class="collapse shadow" id="collapseExample2">
                <div class="card card-body border-0">
                  <p> Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
                  terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer
                   labore wes anderson cred nesciunt sapiente ea proident.</p>
                </div>
              </div>
            </div>

            {/* <!-- Card 3 --> */}
            <div class="card my-3">
              <div class="main-card card-body d-flex justify-content-between align-items-center"
                data-toggle="collapse"
                data-target="#collapseExample3"
                aria-expanded="false"
                aria-controls="collapseExample"
              >
                <span>Do you offer support?</span>
                <i class="collapse-icon fas fa-plus"></i>
              </div>

              <div class="collapse shadow" id="collapseExample3">
                <div class="card card-body border-0">
                  <p> Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
                  terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer
                   labore wes anderson cred nesciunt sapiente ea proident.</p>
                </div>
              </div>
            </div>
          </div>

          {/* <!-- Column 2 --> */}
          <div class="col-12 col-sm-6 px-4">

            {/* <!-- Card 4 --> */}
            <div class="card my-3">

              <div class="main-card card-body d-flex justify-content-between align-items-center"
                data-toggle="collapse"
                data-target="#collapseExample4"
                aria-expanded="false"
                aria-controls="collapseExample">
                <span>Where are you located?</span>
                <i class="collapse-icon fas fa-plus"></i>
              </div>

              <div class="collapse shadow" id="collapseExample4">
                <div class="card card-body border-0">
                  <p> Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
                  terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer
                   labore wes anderson cred nesciunt sapiente ea proident.</p>
                </div>
              </div>

            </div>

            {/* <!-- Card 5 --> */}
            <div class="card my-3">
              <div class="main-card card-body d-flex justify-content-between align-items-center"
                data-toggle="collapse"
                data-target="#collapseExample5"
                aria-expanded="false"
                aria-controls="collapseExample"
              >
                <span>Teachnologies you specialize in?</span>
                <i class="collapse-icon fas fa-plus"></i>
              </div>

              <div class="collapse shadow" id="collapseExample5">
                <div class="card card-body border-0">
                  <p> Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
                  terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer
                   labore wes anderson cred nesciunt sapiente ea proident.</p>
                </div>
              </div>
            </div>

            {/* <!-- Card 6 --> */}
            <div class="card my-3">
              <div class="main-card card-body d-flex justify-content-between align-items-center"
                data-toggle="collapse"
                data-target="#collapseExample6"
                aria-expanded="false"
                aria-controls="collapseExample"
              >
                <span>Are you available currently?</span>
                <i class="collapse-icon fas fa-plus"></i>
              </div>

              <div class="collapse shadow" id="collapseExample6">
                <div class="card card-body border-0">
                  <p> Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
                  terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer
                   labore wes anderson cred nesciunt sapiente ea proident.</p>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section >
  )
}

export default FAQ
