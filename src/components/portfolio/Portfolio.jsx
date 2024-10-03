import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/IMG1.png";
import IMG2 from "../../assets/IMG2.png";
import IMG3 from "../../assets/IMG3.png";

function Portfolio(props) {
  return (
    <section id="portfolio">
      <h2> Projects In My Arsenal </h2>

      <div className="container portfolio__container">
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG1} alt="" />
          </div>
          <h3> Full Stack Stock Trading Platform </h3>
          <a className="btn btn-primary"> Ongoing </a>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG2} alt="" />
          </div>
          <h3> Scaled-down Version of Airbnb </h3>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/revati-pol/wanderlust"
              target="_blank"
              rel="noopener noreferrer"
              className="btn"
            >
              GitHub
            </a>
            <a
              href="https://wanderlust-9fbl.onrender.com/listings"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              Live Demo
            </a>
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG3} alt="" />
          </div>
          <h3> Clone of Spotify Website </h3>
          <div className="portfolio__item-cta">
            <a
                href="https://github.com/revati-pol/css-project"
                target="_blank"
                rel="noopener noreferrer"
                className="btn"
            >
                GitHub
            </a>
            <a
                href="https://revati-pol.github.io/css-project/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
            >
                Live Demo
            </a>
          </div>
        </article>
        
      </div>
    </section>
  );
}

export default Portfolio;
