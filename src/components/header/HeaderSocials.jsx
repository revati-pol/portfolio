import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";


function HeaderSocials(props) {
  return (
    <div className="header__socials">
      <a
        href="https://github.com/revati-pol"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaGithub />
      </a>
      <a href="https://www.linkedin.com/in/revatipol"
        target="_blank"
        rel="noopener noreferrer"
      >
        <BsLinkedin />
      </a>
      <a
        href="https://t.me/revatipol24"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaTelegram />
      </a>
    </div>
  );
}

export default HeaderSocials;
