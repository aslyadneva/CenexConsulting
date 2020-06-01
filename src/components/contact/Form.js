import React, { Component } from 'react'

class Form extends Component {
  state = {
    name: '', 
    email: '', 
    subject: '', 
    message: ''
  }

  handleChange = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }

  handleSubmit = (e) => {
    e.preventDefault()
    console.log('form submitting')
    this.setState({name: '', email: '', subject: '', message: ''})
  }

  render() {
    const { name, email, subject, message } = this.state

    return (
      <form 
        className="mt-5 Form" 
        autoComplete="off"
        action="https://formspree.io/slyadneva.anastasia@gmail.com"
        method="POST"
      >

        <div className="form-row">
          <div class="col-12 col-md-6">
            <input
              type="text"
              name="name"
              required        
              placeholder="Name"
              className="form-control p-4 border-0"
              id="name"
            />
          </div>
          <div className="col-12 col-md-6">
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="form-control p-4 border-0"
              required        
              id="email"
            />
          </div>
        </div>

        <div className="form-group mt-4">
          <input
            type="text"
            name="subject" 
            placeholder="Subject"   
            required        
            className="form-control p-4 border-0" 
            id="subject"
          />
        </div>

        <div className="form-group mt-4">
          <textarea
            name="message"
            placeholder="Message"
            className="form-control p-4 border-0"
            rows="5"
            required    
            id="message" 
          ></textarea>
        </div>

        <button type="submit" className="btn btn-primary btn-block mt-4 py-2">Submit</button>
      </form>
    )
  }
}

export default Form; 
