// import React from 'react';
// import ProjectBox from './ProjectBox';
// import PortfolioImage from '../images/PortfolioImage.png';
// import WigglesImage from '../images/WigglesImage.png';

// const Projects = () => {
//   return (
//     <div>
//       <h1 className='projectHeading'>My <b>Projects</b></h1>
//       <div className='project'>
//         <ProjectBox projectPhoto={WigglesImage} projectName="Wiggles" />
//         <ProjectBox projectPhoto={PortfolioImage} projectName="Previous Portfolio" />
//       </div>

//     </div>
//   )
// }

// export default Projects

import React from "react";
import ProjectBox from "./ProjectBox";

const Projects = () => {
  const items = [
    // row 1
    {
      category: "Machine Learning",
      type: "tech",
      projectName: "LLM Recommender System for Finance",
      description:
        "Suggests domain-specific LLMs for risk forecasting, earnings-call summarization, and sentiment with retrieval + clustering + explainer modules.",
      repo: "", demo: ""
    },
    {
      category: "Web Development",
      type: "tech",
      projectName: "Wiggles — Pet Parenting Platform",
      description:
        "MERN app for pet profiles, vaccination records, and QR IDs; contributed backend APIs & React state logic.",
      repo: "https://github.com/utkarsha032/Wiggles", demo: ""
    },
    // row 2
    {
      category: "Web Development",
      type: "tech",
      projectName: "Personal Portfolio (v1)",
      description:
        "Responsive portfolio on Vercel; you’re viewing the refreshed v1.",
      repo: "https://github.com/utkarsha032/UpdatedPortfolio",
      demo: "https://updated-portfolio-zeta-virid.vercel.app/"
    },
    {
      category: "Machine Learning",
      type: "tech",
      projectName: "Electricity Consumption Forecasting",
      description:
        "Compared LR/RF/XGB for short-term demand; improved baseline accuracy.",
      repo: "", demo: ""
    },
    // row 3 (electronics – no buttons)
    {
      category: "Electronics",
      type: "electronics",
      projectName: "Radar-based Smart Streetlight System",
      description:
        "MCU + RF + sensors for auto-dimming via ambient light & motion; remote monitoring. 1st Prize — TI WiSH’25 7-day Hackathon."
    },
    {
      category: "Electronics",
      type: "electronics",
      projectName: "PPG Heart-Rate Monitor",
      description:
        "Wearable PPG chain with analog conditioning & filtering; ±2 bpm accuracy in live tests."
    }
  ];

  return (
    <section className="proj-section">
      <h1 className="projectHeading">My <b>Projects</b></h1>
      <div className="projects-grid">
        {items.map((p) => <ProjectBox key={p.projectName} {...p} />)}
      </div>
    </section>
  );
};

export default Projects;
