import React from 'react'
import ProjectTile from './ProjectTile'
import project2 from '../../images/project2.jpg'
import project4 from '../../images/project4.jpg'
import project6 from '../../images/project6.jpg'


const projectList = [
  {
    id: 1,
    image: project2,
    title: 'PortfolioAid',
    type: 'Automation Scripts'
  },
  {
    id: 2,
    image: project4,
    title: 'Liberty Mutual',
    type: 'Safeco Integration'
  },
  {
    id: 3,
    image: project6,
    title: 'Tilster',
    type: 'RESTful API'
  },
  {
    id: 4,
    image: project6,
    title: 'BitHeads',
    type: 'Cloud Web App'
  },
  {
    id: 5,
    image: project2,
    title: 'InnovaPost',
    type: 'Java Web Services'
  },
  {
    id: 6,
    image: project4,
    title: 'MSI',
    type: 'FE Integration'
  }
]

const Projects = () => {
  return (
    <section id="projects-section" className="py-5">
      <div className="container">

        {/* <!-- Text Row --> */}
        <div className="row">
          <div className="col">
            <h2 className="text-center Heading ">Recent Projects</h2>
            <p className="text-center mx-auto" style={{maxWidth: '600px'}}>The people who made it happen and will continue to push this company forward for more success</p>
          </div>
        </div>

        {/* <!-- Columns Row --> */}
        <div className="row py-5 px-5 px-md-0 justify-content-center">
          {projectList.map((project) => (
            <div 
              data-sal="fade" data-sal-duration="1000" data-sal-easing="ease"
              id={project.id} 
              className="col-12 col-md-6 col-lg-4 Projects__container"
            >
              <ProjectTile image={project.image} companyName={project.title} type={project.type} />
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Projects
