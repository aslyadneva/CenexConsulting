import React, { Component } from 'react'
import { FaPlus, FaMinus } from 'react-icons/fa'

class FAQ extends Component {
  state = {
    openTabs: [],
    tabs: [
      { 
        id: 1,
        heading: 'What is your team size?', 
        content: "Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid.Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident."
      }, 
      {
        id: 2,
        heading: "How much do you charge ?",
        content: "Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid.Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident."
      }, 
      {
        id: 3,
        heading: "Do you offer support?",
        content: "Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid.Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident."
      }, 
      {
        id: 4,
        heading: "Where are you located?",
        content: "Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid.Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident."
      }, 
      {
        id: 5,
        heading: "Technologies you specialize in?",
        content: "Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid.Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident."
      }, 
      {
        id: 6,
        heading: "Are you available currently?",
        content: "Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid.Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident."
      }
    ]
  }

  toggleTab = (id) => {
    const {openTabs} = this.state

    openTabs.includes(id) 
      ? this.setState({ openTabs: openTabs.filter(tab => tab !== id) })
      : this.setState({ openTabs: [...this.state.openTabs, id] })
  }

  render () {
    const { tabs, openTabs } = this.state

    const openedStyle = {
      maxHeight: '100rem', 
      transition: 'max-height 2s, opacity 2s',
      opacity: '1', 
      visibility: 'visible', 
    }
    const closedStyle = {
      maxHeight: '0rem', 
      height: '0', 
      visibility: 'hidden', 
      opacity: '0', 
      transition: 'max-height 2s', 
    }

    return (
      <section id="faq" className="FAQ py-5" >
        <div className="container py-5">

          <div className="row">
            <div className="col">
              <h2 className="text-center Heading">FAQ</h2>
              <p className="text-center">Get prompt responses from a friendly, professional and knowledgable support team.</p>
            </div>
          </div>

          <div className="row pt-5">

            {/* <!-- Column 1 --> */}
            <div className="col-12 col-sm-6 px-4">
              {tabs.map((item, idx) => {
                if (idx < 3) { 
                  return (
                    <div className="card my-3" key={item.id}>
                      <div 
                        className="main-card card-body d-flex justify-content-between align-items-center FAQ__card" 
                        onClick={() => this.toggleTab(item.id)}
                      >
                        <span>{item.heading}</span>
                        {
                          openTabs.includes(item.id)
                            ? <FaMinus className="collapse-icon fas fa-plus"/>
                            : <FaPlus className="collapse-icon fas fa-plus"/>
                        }                 
                      </div>

                      <div 
                        className="shadow"
                        style={openTabs.includes(item.id) ? openedStyle : closedStyle}
                      >
                        <div className="card card-body border-0">
                          <p>{item.content}</p>
                        </div>
                      </div>

                    </div>
                  )
                } else {
                  return null
                }
              })}
            </div>

            {/* <!-- Column 2 --> */}
            <div className="col-12 col-sm-6 px-4">
              {tabs.map((item, idx) => {
                if (idx > 2) { 
                  return (
                    <div className="card my-3" key={item.id}>
                      <div 
                        className="main-card card-body d-flex justify-content-between align-items-center FAQ__card"
                        onClick={() => this.toggleTab(item.id)}
                      >
                        <span>{item.heading}</span>
                        {
                          openTabs.includes(item.id)
                            ? <FaMinus className="collapse-icon fas fa-plus"/>
                            : <FaPlus className="collapse-icon fas fa-plus"/>
                        }    
                      </div>

                      <div 
                        className="shadow"
                        style={openTabs.includes(item.id) ? openedStyle : closedStyle}
                      >
                        <div className="card card-body border-0">
                          <p>{item.content}</p>
                        </div>
                      </div>

                    </div>
                  )
                } else {
                  return null
                }
              })}
            </div>

          </div>
        </div>
      </section >
    )
  }
}

export default FAQ
