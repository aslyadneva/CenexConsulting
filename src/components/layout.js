import React, {Fragment} from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import './bootstrap.min.css'
import './layout.css'
import Navbar from "./globals/Navbar"


const Layout = ({ children }) => (
  <Fragment>
    <Navbar/>
    {children}
  </Fragment>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
