import React from "react";
import { useParams } from "react-router-dom";
import { ProjectList } from "../helpers/ProjectList";
import GitHubIcon from "@mui/icons-material/GitHub";
import { useEffect } from "react";
import "../styles/ProjectDisplay.css";

function ProjectDisplay() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, []);
  const { id } = useParams();
  const project = ProjectList[id];
  return (
    <div className="project">
      <h1> {project.name}</h1>
      <img src={project.image} alt="projectImg" />
      <p className="skillsBox">
        <p className="desc">{project.desc}</p>
        <p className="date">{project.date}</p>
        <hr />
        <h2 className="skills">Skills:</h2>
        <p>{project.skills}</p>
        {project.subtitle ? (
          <p className="subtitle">{project.subtitle}</p>
        ) : null}
        <hr />
        <p className="check">Checkout the project</p>
        <a
          href={project.link}
          target="_blank"
          rel="noreferrer"
          className="deployedLink"
          data-tooltip="Deployed Link"
        >
          <GitHubIcon />
        </a>
      </p>
      {/* <hr /> */}
      {project.gallery ? (
        <>
          <div className="projectGallery">
            <hr />
            <h3 className="skills" style={{ color: "#3e497a" }}>
              Project Gallery
            </h3>
            <p
              className="subtitle"
              style={{ fontSize: "15px", color: "rgba(0,0,0,0.4)" }}
            >
              {project.errSubtitle}
            </p>
            {project.gallery.map((e, i) => (
              <img src={e} key={i} alt="screenshot" />
            ))}
          </div>
        </>
      ) : null}
    </div>
  );
}

export default ProjectDisplay;
