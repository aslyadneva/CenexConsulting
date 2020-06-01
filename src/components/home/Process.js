import React from 'react'
import { FaLightbulb, FaFlask, FaPlane } from 'react-icons/fa'
import { Link } from 'gatsby'

const Process = () => {
  return (
    <section is="process" className="Process py-5" >
      <div class="container py-5">

        {/* <!-- Title Row --> */}
        <div class="row">
          <div class="col">
            <p class="text-center">HOW WE WORK</p>
            <h2 class="text-center font-weight-bold">A Simple Process</h2>
          </div>
        </div>

        {/* <!-- Columns Row --> */}
        <div class="row py-5 d-flex flex-column flex-md-row">

          <div class="col px-5">
            <div class="d-flex justify-content-center my-4">
              <FaLightbulb class="far fa-lightbulb text-primary fa-2x" style={{ fontSize: '2rem' }}/>
            </div>
            <h5 class="text-center">Ideate</h5>
            <p class="text-center">Wireframing has its pros and cons as it is a crucial part of the design stage.</p>
            <div className="Process__separator"></div>
          </div>

          <div class="col px-5">
            <div class="d-flex justify-content-center my-4">
              <FaFlask class="fas fa-flask text-primary fa-2x" style={{ fontSize: '2rem' }}/>
            </div>
            <h5 class="text-center">Create</h5>
            <p class="text-center">Wireframing has its pros and cons as it is a crucial part of the design stage.</p>
            <div className="Process__separator"></div>
          </div>

          <div class="col px-5">
            <div class="d-flex justify-content-center my-4">
              <FaPlane class="fas fa-plane text-primary fa-2x" style={{ fontSize: '2rem' }}/>
            </div>
            <h5 class="text-center">Deploy</h5>
            <p class="text-center">Wireframing has its pros and cons as it is a crucial part of the design stage.</p>
          </div>

        </div>

        {/* <!-- Button Row --> */}
        <div class="row d-flex justify-content-center pb-5">
          <Link to="/portfolio" className="btn btn-primary px-5 py-2">View Projects</Link>
        </div>
      </div>
    </section >
  )
}

export default Process