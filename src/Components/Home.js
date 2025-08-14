import React from 'react';
import Lottie from  "lottie-react";
import SpaceBoy from "../LottieFiles/SpaceBoy.json";
import Typed from "./Typed.js";
import Tilt from 'react-parallax-tilt';
import Avatar from '../images/Avatar.png';
import {CiCoffeeCup} from "react-icons/ci";

const Home = () => {
  return (
    <div >
      <div className='HomePage'>

        <div className='HomeText'>
          <h1>Hi There!</h1>
          <h1>I'M <b>UTKARSHA</b></h1>
          <Typed/>   
        </div>

        <Lottie 
          className="illustration" 
          animationData={SpaceBoy} 
          loop={true} 
        />
        
      </div>

      <div className='AboutPage'>
        <div className='AboutText'>
          <h1 className='AboutTextHeading'>Brief <b>introduction</b></h1>
          <p>
            I love turning ideas into products that actually get used. I work across
            <b> embedded systems</b> and <b>full-stack web</b>, and I’m comfortable in
            <b> C++</b>, <b>Java</b>, and <b>Python</b>. Lately I’ve been building with the
            <b> MERN</b> stack and sharpening my data structures & algorithms.<br /><br />
            I’m an <b>ECE pre-final year</b> student at IGDTUW (Dept. Rank 2), a
            <b> TI WiSH’25 Design thinking project Hackathon — 1st Prize</b> winner, and currently exploring
            applied AI through research.<br /><br />
            Also, I love <b>coffee and music</b> <CiCoffeeCup style={{scale:"1.5", rotate:"15deg"}}/>   
          </p>
        </div>
        <Tilt>
          <img className='Avatar' src={Avatar} alt="" />
        </Tilt>
      </div>
    </div>
  )
}

export default Home