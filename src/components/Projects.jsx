import React from "react";
import "./Projects.css";
import one from "../assets/placebook.png";
import two from "../assets/emplacement.png";
import three from "../assets/e-commers.png";
import four from "../assets/pizzaApp.png";
import five from "../assets/chatApp.png";

const Projects = () => {
  return (
    <div className="projects">
      <div className="projectBody">
        <div className="projectItem">
          <img className="projectItemImage" src={one} alt="" />
          <div className="overlay">Social-Media</div>
        </div>
        <div className="projectItem">
          <img className="projectItemImage" src={two} alt="" />
          <div className="overlay">Placement-Cell</div>
        </div>

        <div className="projectItem">
          <img className="projectItemImage" src={three} alt="" />
          <div className="overlay">E-Commers</div>
        </div>

        <div className="projectItem">
          <img className="projectItemImage" src={four} alt="" />
          <div className="overlay">Pizza-Order</div>
        </div>

        <div className="projectItem">
          <img className="projectItemImage" src={five} alt="" />
          <div className="overlay">Chat-App</div>
        </div>

        <div className="projectItem">
          <img className="projectItemImage" src={one} alt="" />
          <div className="overlay">Social-Media</div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
