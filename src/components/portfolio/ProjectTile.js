import React from 'react'

const ProjectTile = ({image, companyName, type}) => {
  return (
    <div className="ProjectTile">
      <img src={image} className="ProjectTile__image"/>
      <div className="ProjectTile__overlay">
        <div className="ProjectTile__content">
          <h4 className="ProjectTile__content__title">{companyName}</h4>
          <span className="ProjectTile__content__description">{type}</span>
        </div>
      </div>
    </div>
  )
} 

export default ProjectTile
