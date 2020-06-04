import React from 'react'
import { FaLightbulb, FaFlask, FaPlane } from 'react-icons/fa'
import { Link } from 'gatsby'

const Process = () => {
  return (
    <section className="Process" >
      <div className="container py-5">

        {/* <!-- Title Row --> */}
        <div className="row">
          <div className="col">
            <p className="text-center">HOW WE WORK</p>
            <h2 className="text-center Heading">A Simple Process</h2>
          </div>
        </div>

        {/* <!-- Columns Row --> */}
        <div className="row py-5 d-flex flex-column flex-md-row">

          <div className="col px-5">
            <div className="d-flex justify-content-center my-4">
              <FaLightbulb className="far fa-lightbulb text-primary fa-2x" style={{ fontSize: '2rem' }}/>
            </div>
            <h5 className="text-center">Ideate</h5>
            <p className="text-center">Wireframing has its pros and cons as it is a crucial part of the design stage.</p>
            <div className="Process__separator"></div>
          </div>

          <div className="col px-5">
            <div className="d-flex justify-content-center my-4">
              <FaFlask className="fas fa-flask text-primary fa-2x" style={{ fontSize: '2rem' }}/>
            </div>
            <h5 className="text-center">Create</h5>
            <p className="text-center">Wireframing has its pros and cons as it is a crucial part of the design stage.</p>
            <div className="Process__separator"></div>
          </div>

          <div class="col px-5">
            <div class="d-flex justify-content-center my-4">
              <FaPlane className="fas fa-plane text-primary fa-2x" style={{ fontSize: '2rem' }}/>
            </div>
            <h5 className="text-center">Deploy</h5>
            <p className="text-center">Wireframing has its pros and cons as it is a crucial part of the design stage.</p>
          </div>

        </div>

        {/* <!-- Button Row --> */}
        <div className="row d-flex justify-content-center pb-5">
          <Link to="/portfolio" className="Button Button--medium">View Projects</Link>
        </div>
      </div>
    </section >
  )
}

export default Process
