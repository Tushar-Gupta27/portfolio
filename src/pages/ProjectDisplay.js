import React from "react";
import { useParams } from "react-router-dom";
import { ProjectList } from "../helpers/ProjectList";
import GitHubIcon from "@mui/icons-material/GitHub";
import InsertLinkIcon from "@mui/icons-material/InsertLink";
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
        <h3 className="skills">Skills:</h3>
        <p>{project.skills}</p>
        {project.subtitle ? (
          <p className="subtitle">{project.subtitle}</p>
        ) : null}
        <hr />
        <h3 className="check">Checkout the project</h3>
        <a
          href={project.link}
          target="_blank"
          rel="noreferrer"
          className="deployedLink"
          data-tooltip="Deployed Link"
        >
          <InsertLinkIcon />
        </a>
        <a
          href={project.repoLink}
          target="_blank"
          rel="noreferrer"
          className="deployedLink"
          data-tooltip="Repository Link"
        >
          <GitHubIcon />
        </a>
      </p>
      {/* <hr /> */}
      {project.gallery ? (
        <>
          <div className="projectGallery">
            <hr />
            <h3
              className="skills"
              style={{
                margin: "8px 0",
                background: "transparent",
                fontSize: "26px",
              }}
            >
              Project Gallery
            </h3>
            <p className="subtitle">{project.errSubtitle}</p>
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
