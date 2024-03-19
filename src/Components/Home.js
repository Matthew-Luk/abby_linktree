import React from 'react'
import '../SCSS/style.scss'
import photo from '../images/abby2.jpg'
import { AiOutlineInstagram } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
import { AiOutlineLinkedin } from "react-icons/ai";
import { FaRegFileAlt } from "react-icons/fa";
import PDF1 from '../images/resume.pdf';
import { AiOutlineFacebook } from "react-icons/ai";
import { CiTwitter } from "react-icons/ci";
import { CiMail } from "react-icons/ci";

const Home = () => {
  const emailHandler = () => {
    window.location = 'mailto:abigailsaeturn@gmail.com?subject=Greetings!&body=Hello%20Abby!%20'
  }

  return (
    <div className='home'>
      <div className='header'>
        <img className='photo' src={photo} alt="headshot of abigail saeturn" />
        <p>ABIGAIL SAETURN</p>
      </div>
      <div className='main'>
        <a href="https://www.instagram.com/abigailmey/" target="_blank" rel="noreferrer">
          <AiOutlineInstagram size={"2.4rem"} color={"#5541d5"}/>
          Personal Instagram
        </a>
        <a href="https://www.instagram.com/abbyandmattyeats/" target="_blank" rel="noreferrer">
          <AiFillInstagram size={"2.4rem"} color={"#e62051"}/>
          Food Instagram
        </a>
        <a href="https://www.linkedin.com/in/abigail-saeturn-970331226/" target="_blank" rel="noreferrer">
          <AiOutlineLinkedin size={"2.4rem"} color={"#0967c1"}/>
          LinkedIn
        </a>
        <a href={PDF1} target="_blank" rel="noreferrer">
          <FaRegFileAlt size={"2.2rem"} color={"#000"}/>
          Resume
        </a>
      </div>
      <div className='links'>
        <a href='https://www.facebook.com/purtypurtyprincesss' target="_blank" rel="noreferrer">
          <AiOutlineFacebook size={"2.4rem"} color={"#0078f6"}/>
        </a>
        <a href='https://twitter.com/abigailmey' target="_blank" rel="noreferrer">
          <CiTwitter size={"2.4rem"} color={"#28a8e7"}/>
        </a>
        <CiMail onClick={emailHandler} size={"2.4rem"} color="#000"/>
      </div>
    </div>
  )
}

export default Home