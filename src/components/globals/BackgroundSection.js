import React from 'react'
import BackgroundImage from 'gatsby-background-image'

const BackgroundSection = ({ img, backgroundType, children}) => (
  <BackgroundImage 
    className={`background background--${backgroundType} d-flex align-items-center justify-content-center`} 
    fluid={img} 
    preserveStackingContext={true}
  >
    {children}
  </BackgroundImage>
)

BackgroundSection.defaultProps = {
  title: 'Default Title',
  backgroundType: "default"
}

export default BackgroundSection

