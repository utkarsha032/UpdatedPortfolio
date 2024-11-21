import React from 'react';
import {FaGithub, FaLinkedin} from "react-icons/fa";
import {GrMail} from "react-icons/gr";
import {SiLeetcode} from "react-icons/si"

const Footer = () => {
  return (
    <footer>
      <h4>Developed by Utkarsha</h4>
      <h4>Copyright &copy; 2023 UV</h4>
      <div className='footerLinks'>
        <a href="https://github.com/utkarsha032" target='_blank'><FaGithub/></a>
        <a href="https://www.linkedin.com/in/utkarsha-v-818920285/" target='_blank'><FaLinkedin/></a>
        <a href='mailTo:utkarshavishu11@gmail.com' target='_blank'><GrMail/></a>
        <a href="https://leetcode.com/u/utkarsha200317/" target="_blank"><SiLeetcode/></a>
      </div>
    </footer>
  )
}

export default Footer