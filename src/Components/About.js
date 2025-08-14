// import React from 'react';
// import Skills from './Skills.js';
// import Tilt from 'react-parallax-tilt';
// import Lottie from "lottie-react"
// import Coder from '../LottieFiles/coder.json';

// const About = () => {
//   return (
//     <>
//       <div className='AboutPage'>
//         <div className='AboutText'>
//           <h1 className='AboutTextHeading' >Get to <b>know</b> me!</h1>
//           <p>
//             Hi, my name is <b>Utkarsha</b> and I am from New Delhi, India.
//             I'm a <b>Electronics and Communication Engineering</b> pre-final year in IGDTUW Delhi. <br/><br/>
//             I love to create original projects with beautiful designs, you can check out some of my work in the projects section.<br/><br/>
//             I am <b>open</b> to new collaborations or work where I can contribute and grow. Feel free to connect with me, links are in the footer.<br/>
//             Apart from coding I love fashion <a href="https://www.instagram.com/yuviiiie/?hl=en" target='_blank'>Instagram.</a>
//           </p>
//         </div>

//         <div>
//           <Tilt>
//               <Lottie 
//               className="illustration" 
//               animationData={Coder} 
//               loop={true} 
//             />
//           </Tilt>
//         </div>

//       </div>
      
//       <h1 className='SkillsHeading'>Professional Skillset</h1>
//       <div className='skills'>
        
//         <Skills skill='React' />
//         <Skills skill='Node' />
//         <Skills skill='Express' />
//         <Skills skill='MongoDb' />
//         <Skills skill='Git' />
//         <Skills skill='Github' />
//         <Skills skill='Javascript' />
//         <Skills skill='C++' />
//         <Skills skill='Postman' />
//         <Skills skill='Figma' />
//         <Skills skill='Vercel' />
//         <Skills skill='Npm' />
//         <Skills skill='Bootstrap'/>
        
//       </div>
//     </>
//   )
// }

// export default About

import React from "react";
import Skills from "./Skills.js";
import Tilt from "react-parallax-tilt";
import Lottie from "lottie-react";
import Coder from "../LottieFiles/coder.json";

const About = () => {
  return (
    <>
      <div className="AboutPage">
        <div className="AboutText">
          <h1 className="AboutTextHeading">
            Get to <b>know</b> me!
          </h1>
          <p>
            Hi, I’m <b>Utkarsha</b> from New Delhi, India — a{" "}
            <b>pre-final year ECE</b> student at IGDTUW. I enjoy building end-to-end
            products across <b>machine learning</b>, <b>full-stack web</b>, and{" "}
            <b>embedded systems</b>.
            <br />
            <br />
            I’m currently a <b>Research Intern at University College London</b>,
            working on an <b>LLM Recommender System for Finance</b> (retrieval,
            clustering, explainability). I was also selected for{" "}
            <b>Texas Instruments WiSH’25</b> (Hardware Track) where my team built a{" "}
            <b>Smart Streetlight</b> prototype and won <b>1st Prize</b> in the final
            hackathon.
            <br />
            <br />
            I love projects that blend clean engineering with practical impact. I’m{" "}
            <b>open to collaborations</b> and internships—feel free to reach out via
            the links in the navbar/footer.
          </p>
        </div>

        <div>
          <Tilt>
            <Lottie className="illustration" animationData={Coder} loop />
          </Tilt>
        </div>
      </div>

      <h1 className="SkillsHeading">Professional Skillset</h1>
      <div className="skills">
        {/* Web / Backend */}
        <Skills skill="React" />
        <Skills skill="Node.js" />
        <Skills skill="Express" />
        <Skills skill="MongoDB" />
        <Skills skill="JavaScript" />
        {/* ML / Data */}
        <Skills skill="Python" />
        <Skills skill="LangChain" />
        <Skills skill="TensorFlow" />
        <Skills skill="Pandas" />
        {/* Systems / Embedded */}
        <Skills skill="C++" />
        <Skills skill="Embedded C" />
        <Skills skill="Arduino / RF" />
        {/* Tools */}
        <Skills skill="Git" />
        <Skills skill="GitHub" />
        <Skills skill="Postman" />
        <Skills skill="Figma" />
        <Skills skill="Vercel" />
        <Skills skill="NPM" />
      </div>
    </>
  );
};

export default About;
