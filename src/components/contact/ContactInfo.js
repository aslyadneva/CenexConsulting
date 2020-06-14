import React, { Fragment } from 'react'
import { FaMapMarkerAlt, FaMobileAlt, FaEnvelope } from 'react-icons/fa'

const ContactInfo = () => {
  return (
    <Fragment>
      <div className="row p-2 mt-5 mb-2">
        <div className="col-3 d-flex justify-content-center align-items-center">
          <div className="bg-primary rounded-circle  circle d-flex justify-content-center align-items-center" style={{height: '35px', width: '35px'}}>
            <FaMapMarkerAlt style={{color: 'white'}}/>
          </div>
        </div>
        <div className="col-9">
          <p className="font-weight-bolder">Visit Us</p>
          <p>
            Thanksgiving Tower
            1601 Elm St,
            Dallas, TX 75201, USA
          </p>
        </div>
      </div>

      <div className="row p-2 my-2">
        <div className="col-3 d-flex justify-content-center align-items-center">
          <div className="bg-primary rounded-circle circle d-flex justify-content-center align-items-center" style={{ height: '35px', width: '35px' }}>
            <FaMobileAlt style={{ color: 'white' }}/>
          </div>
        </div>
        <div className="col-9">
          <p className="font-weight-bolder">Call Us</p>
          <p>613-863-2803</p>
        </div>
      </div>

      <div className="row p-2 my-2">
        <div className="col-3 d-flex justify-content-center align-items-center">
          <div className="bg-primary rounded-circle circle d-flex justify-content-center align-items-center" style={{ height: '35px', width: '35px' }}>
            <FaEnvelope style={{ color: 'white' }}/>
          </div>
        </div>
        <div className="col-9">
          <p className="font-weight-bolder">Email Us</p>
          <p>info@cenexconsulting.com</p>
        </div>
      </div>
    </Fragment>
  )
}

export default ContactInfo
