import React from "react";
import "./about.css";
import ME from "../../assets/me2.jpg";
import { TfiWrite } from "react-icons/tfi";
import { HiLightBulb } from "react-icons/hi";
import { BsJournalCode } from "react-icons/bs";

function About(props) {
  return (
    <section id="about">
      <h2> Allow Me To Introduce Myself! </h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">

            <a href="#experience">
              <article className="about__card">
                <HiLightBulb className="about__icon" />
                <h5> My Skills </h5>
                <small> Technical Repertoire </small>
              </article>
            </a>

            <a href="#portfolio">
              <article className="about__card">
                  <BsJournalCode className="about__icon" />
                  <h5> My Projects </h5>
                  <small> Join The Code Watch </small>
              </article>
            </a>

            <a href="#story">
              <article className="about__card">
                  <TfiWrite className="about__icon" />
                  <h5> My Story </h5>
                  <small> From Politics to Pixels </small>
              </article>
            </a>

          </div>

          <p>
           <b>Hi, I'm Revati, a Web Developer based in Mumbai. <br />
           I design and code (most of the time). I build things for the web.</b>
          </p>

          <a href="#contact" className="btn btn-primary"> Want To Converse?</a>
        </div>
      </div>
    </section>
  );
}

export default About;
