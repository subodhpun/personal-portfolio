import "./portfolio.css";

import IMG1 from "../../assets/paragonlaw.png";
import IMG3 from "../../assets/weather app.png";
import IMG4 from "../../assets/Portfolio preview.png";

import React from "react";

//Portfolio function
const Portfolio = () => {
  const soloProjects = [
    {
      id: 2,
      title: "Personal Portfolio",
      img: IMG4,
      description:
        "A modern personal portfolio built with HTML, CSS, JavaScript, and React, showcasing my skills and projects with a responsive and user-friendly design",
      technologies: "HTML | CSS | JavaScript | Reactjs",
      link: "https://fh-huquq-com.vercel.app/",
      github: "https://github.com/Rasif-Taghizada/fh-huquq.com",
    },
    {
      id: 1,
      title: "Law Firm Website.js",
      img: IMG1,
      description:
        "It is a law firm website using ReactJS, featuring intuitive navigation, service descriptions, attorney profiles, and contact forms. ",
      technologies: "Html | CSS | Javascript | React Js",
      link: "https://paragonlawassociates.netlify.app/",
      github: "https://github.com/Rasif-Taghizada/Educational-Website-ReactJs",
    },
    {
      id: 3,
      title: "Weather-App",
      img: IMG3,
      description: "It fetches real-time weather data from an API, displays current weather conditions, and provides a user-friendly interface for checking forecasts",
      technologies: "HTML | CSS | JavaScript",
      link: "https://weathearapp.netlify.app/",
      github: "https://subodhpun.github.io/Weather-App/",
    },
  
  ];

  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {soloProjects.map((pro) => (
          <article className="portfolio__item" key={pro.id}>
            <div className="portfolio__item-image">
              <img src={pro.img} alt={pro.title} />
            </div>
            <div className="portfolio__item-content">
              <h3>{pro.title}</h3>
              <p>{pro.description}</p>
              <p>{pro.technologies}</p>
            </div>
            <div className="portfolio__item-cta">
              <a
                href={pro.github}
                target="_blank"
                className="btn"
                rel="noreferrer"
              >
                GitHub
              </a>
              <a
                href={pro.link}
                target="_blank"
                className="btn btn-primary"
                rel="noreferrer"
              >
                Live Demo
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
