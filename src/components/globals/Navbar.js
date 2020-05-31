import React, { Component } from 'react'
import { Link } from 'gatsby'
import logo from '../../images/cenexlogo.png'

class Navbar extends Component {
  state = {
    navOpen: false, 
    navCSS: 'collapse navbar-collapse', 
    links: [
      {
        id: 1, 
        path: '/', 
        text: 'Home'
      }, 
      {
        id: 2,
        path: '/services',
        text: 'Services'
      }, 
      {
        id: 3,
        path: '/portfolio',
        text: 'Portfolio'
      }, 
    ]
  }

  navbarHandler = () => {
    const {navOpen, navCSS} = this.state
    navOpen 
      ? this.setState({ navOpen: false, navCSS: 'collapse navbar-collapse' }) 
      : this.setState({ navOpen: true, navCSS: 'collapse navbar-collapse show' })
  }

  render() {
    console.log(this.state.navCSS)
    return (
      <nav className="navbar navbar-expand-lg navbar-light px-5 py-4 fixed-top">
       
        <Link className="navbar-brand font-weight-bold pl-2" to="/">
          <img src={logo} alt="Cenex Consulting logo" style={{height: '60px'}}/>
        </Link>

        <button className="navbar-toggler" type="button" onClick={this.navbarHandler}>
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Everything in this div collapses at smaller screens  */}
        <div className={this.state.navCSS}>

          <ul className="navbar-nav mx-auto">
            {this.state.links.map(item => (
              <li key={item.id} className="nav-item px-2">
                <Link className="nav-link" to={item.path}>
                  {item.text} 
                </Link>
              </li>
            ))}
          </ul>

          <Link to="/contact" className="btn btn-outline-primary">CONTACT US</Link>
        </div>
      </nav>
    )
  }
}

export default Navbar

