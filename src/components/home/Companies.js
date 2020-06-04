import React from 'react'
import innovaLogo from '../../images/innova.png'
import libertyLogo from '../../images/liberty.png'
import tilsterLogo from '../../images/tilster.png'
import portfolioLogo from '../../images/portfolioAid.png'

const Companies = () => {
  return (
    <section className="Companies">
      <div className="container">
        <div className="row d-flex align-items-center justify-content-between">      
            <img className="img-fluid Companies__image" src={innovaLogo} alt="Innova Post Logo" />
          
            <img className="img-fluid Companies__image" src={libertyLogo} alt="Liberty Mutual Logo" />
          
            <img className="img-fluid Companies__image" src={tilsterLogo} alt="Tilster Logo" />
         
            <img className="img-fluid Companies__image" src={portfolioLogo} alt="Portfolio Aid Logo" />
        </div>
      </div>
    </section>
  )
}

export default Companies
