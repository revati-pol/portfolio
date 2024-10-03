import React from "react";
import { Typewriter } from 'react-simple-typewriter';
import CTA from "./CTA";
import ME from "../../assets/me1-.png";
import HeaderSocials from "./HeaderSocials";
import './header.css';


function Header(props) {
  return (
    <header>
      <div className="container header__container">
        <h4> Hello there! I'm </h4>
        <h1> Revati Pol </h1>
        <h4 className="text-light"> 
          <Typewriter
            words={['Frontend Developer', 'Backend Developer', 'MERN Stack Developer', 'Full Stack Developer']}
            loop={true}  // Number of loops, or use `true` for infinite loop
            cursor
            cursorStyle="|"
            typeSpeed={90}  // Speed in ms for typing each character
            deleteSpeed={70}  // Speed in ms for deleting each character
            delaySpeed={2000}  // Time in ms before typing starts again
          />
        </h4>

        <CTA/>
        <HeaderSocials/>

        <div className="me">
            <img src={ME} alt=""/>
        </div>

        <a href="#contact" className="scroll__down"> Scroll Down </a>
        
      </div>
    </header>
  );
}

export default Header;
