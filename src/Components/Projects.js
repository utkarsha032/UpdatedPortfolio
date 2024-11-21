import React from 'react';
import ProjectBox from './ProjectBox';
import PortfolioImage from '../images/PortfolioImage.png';
import WigglesImage from '../images/WigglesImage.png';

const Projects = () => {
  return (
    <div>
      <h1 className='projectHeading'>My <b>Projects</b></h1>
      <div className='project'>
        <ProjectBox projectPhoto={WigglesImage} projectName="Wiggles" />
        <ProjectBox projectPhoto={PortfolioImage} projectName="Previous Portfolio" />
      </div>

    </div>
  )
}

export default Projects