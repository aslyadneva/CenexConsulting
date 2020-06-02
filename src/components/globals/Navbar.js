import React, { Component } from 'react'
import { Link } from 'gatsby'
import logo from '../../images/cenexlogo.png'

class Navbar extends Component {
  state = {
    navOpen: false, 
    navCSS: 'collapse navbar-collapse', 
    navColorCSS: 'navbar-dark Navbar--dark', 
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
      {
        id: 4,
        path: '/contact',
        text: 'Contact'
      }, 
    ]
  }

  componentDidMount () {
    window.addEventListener('scroll', this.setNavColor)
  }

  componentWillUnount() {
    window.removeEventListener('scroll', this.setNavColor)
  }

  setNavColor = () => {
    window.scrollY > 70 
      ? this.setState({ navColorCSS: 'navbar-light bg-light Navbar--light'})
      : this.setState({ navColorCSS: 'navbar-dark' })
  }

  navbarHandler = () => {
    const { navOpen } = this.state
    navOpen 
      ? this.setState({ navOpen: false, navCSS: 'collapse navbar-collapse' }) 
      : this.setState({ navOpen: true, navCSS: 'collapse navbar-collapse show' })
  }

  render() {
    const { navCSS, navColorCSS } = this.state
    return (
      <nav className={`navbar navbar-expand-lg ${navColorCSS} fixed-top Navbar`}>
       
        <Link className="navbar-brand font-weight-bold pl-2" to="/">
          Cenex
        </Link>

        <button className="navbar-toggler" type="button" onClick={this.navbarHandler}>
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Everything in this div collapses at smaller screens  */}
        <div className={navCSS}>

          <ul className="navbar-nav mx-auto">
            {this.state.links.map(item => (
              <li key={item.id} className="nav-item px-2">
                <Link className="nav-link" to={item.path}>
                  {item.text} 
                </Link>
              </li>
            ))}
          </ul>

          <Link to="/contact" className="Button Button--small">Join Our Team</Link>
        </div>
      </nav>
    )
  }
}

export default Navbar

