import React from "react";
import ProjectItem from "../components/ProjectItem";
import { ProjectList } from "../helpers/ProjectList";

import { useEffect } from "react";
import "../styles/Projects.css";

function Projects() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, []);
  return (
    <div className="projects">
      <h1 style={{ color: "#2d5ddf" }}> My Personal Projects</h1>
      <div className="projectList">
        {ProjectList.map((project, idx) => {
          return (
            <ProjectItem
              key={idx}
              id={idx}
              name={project.name}
              image={project.image}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Projects;
