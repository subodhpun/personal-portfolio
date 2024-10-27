import "./intro.css";

import React from "react";
import { VscFolderLibrary } from "react-icons/vsc";
import img from '../../assets/Me.jpg'


const Intro = () => {
  return (
    <section id="about">
      <h5>Get to know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={img} alt="Subodh" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>3+ Completed Projects</small>
            </article>
          </div>
          <p>
          Aspiring frontend developer with skills in HTML, CSS, JavaScript, 
          and React. Familiar with Git and GitHub for version control. Passionate 
          about web development and eager to learn and contribute to creating dynamic
          and user-friendly websites  
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default Intro;
