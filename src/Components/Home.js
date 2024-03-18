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
        <img className='photo' src={photo} alt="" />
        <p>ABIGAIL SAETURN</p>
      </div>
      <div className='main'>
        <a href="https://www.instagram.com/abigailmey/">
          <AiOutlineInstagram size={"2.4rem"} color={"#9b59e4"}/>
          Personal Instagram
        </a>
        <a href="https://www.instagram.com/abbyandmattyeats/">
          <AiFillInstagram size={"2.4rem"} color={"#d45fd6"}/>
          Food Instagram
        </a>
        <a href="https://www.linkedin.com/in/abigail-saeturn-970331226/">
          <AiOutlineLinkedin size={"2.4rem"} color={"#f14a79"}/>
          LinkedIn
        </a>
        <a href={PDF1} target="_blank" rel="noreferrer">
          <FaRegFileAlt size={"2.4rem"} color={"#f43737"}/>
          Resume
        </a>
      </div>
      <div className='links'>
        <a href='https://www.facebook.com/purtypurtyprincesss' target="_blank" rel="noreferrer">
          <AiOutlineFacebook size={"2.4rem"} color="white"/>
        </a>
        <a href='https://twitter.com/abigailmey' target="_blank" rel="noreferrer">
          <CiTwitter size={"2.4rem"} color="white"/>
        </a>
        <CiMail onClick={emailHandler} size={"2.4rem"} color="white"/>
      </div>
    </div>
  )
}

export default Home