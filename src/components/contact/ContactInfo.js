import React, { Fragment } from 'react'
import { FaMapMarkerAlt, FaMobileAlt, FaEnvelope } from 'react-icons/fa'

const ContactInfo = () => {
  return (
    <Fragment>
      <div class="row p-2 mt-5 mb-2">
        <div class="col-3 d-flex flex-column justify-content-center">
          <div class="bg-primary rounded-circle text-center mx-auto circle">
            <FaMapMarkerAlt class="fas fa-map-marker-alt fa-2x text-light p-3"/>
          </div>
        </div>
        <div class="col-9">
          <p class="font-weight-bolder">Visit Us</p>
          <p>
            Thanksgiving Tower
            1601 Elm St,
            Dallas, TX 75201, USA
          </p>
        </div>
      </div>

      <div class="row p-2 my-2">
        <div class="col-3 d-flex flex-column justify-content-center">
          <div class="bg-primary rounded-circle text-center mx-auto circle">
            <FaMobileAlt class="fas fa-mobile-alt fa-2x text-light p-3"/>
          </div>
        </div>
        <div class="col-9">
          <p class="font-weight-bolder">Call Us</p>
          <p>613-863-2803</p>
        </div>
      </div>

      <div class="row p-2 my-2">
        <div class="col-3 d-flex flex-column justify-content-center">
          <div class="bg-primary rounded-circle text-center mx-auto circle">
            <FaEnvelope class="far fa-envelope fa-2x text-light p-3"/>
          </div>
        </div>
        <div class="col-9">
          <p class="font-weight-bolder">Email Us</p>
          <p>info@cenexconsulting.com</p>
        </div>
      </div>
    </Fragment>
  )
}

export default ContactInfo
