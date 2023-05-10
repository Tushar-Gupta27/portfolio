import React from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GithubIcon from "@mui/icons-material/GitHub";
import "../styles/Home.css";
import InsertLinkOutlinedIcon from "@mui/icons-material/InsertLinkOutlined";
import { useEffect } from "react";
function Home() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, []);
  return (
    <div className="home">
      <div className="about">
        <h2> Hi, My Name is Tushar</h2>
        <div className="prompt">
          <p>
            A
            <ul className="animatedText">
              <li>Frontend Developer</li>
              <li>Backend Developer</li>
              <li>FullStack Developer</li>
            </ul>
            with a passion for learning and creating.
          </p>
        </div>
        <div className="icons">
          <a
            href="https://www.linkedin.com/in/tushar-gupta-55250a209/"
            target="_blank"
            rel="noreferrer"
            data-tooltip="LinkedIn"
            className="iconsHover"
          >
            <LinkedInIcon />
          </a>

          <a
            href="https://github.com/Tushar-Gupta27"
            target="_blank"
            rel="noreferrer"
            data-tooltip="GitHub"
            className="iconsHover"
          >
            <GithubIcon />
          </a>
          <a
            href="https://drive.google.com/file/d/1mpgTHgjwTLLIgzF69tvnFuzFz58vsGO-/view?usp=share_link"
            target="_blank"
            rel="noreferrer"
            title="Resume / CV"
            className="tiltIcon iconsHover"
            data-tooltip="Resume"
          >
            <InsertLinkOutlinedIcon />
          </a>
        </div>
      </div>
      <div className="skills" style={{ position: "relative" }}>
        <h1
          style={{
            position: "sticky",
            top: "5px",
            zIndex: "10",
            height: "100px",
            textAlign: "center",
          }}
        >
          Skills
        </h1>
        <ol className="list">
          <li className="item">
            <h2> Front-End</h2>
            <span>
              <strong>ReactJS</strong>, <strong>Redux</strong>, HTML,
              <strong> CSS</strong>, NPM, BootStrap, MaterialUI,
              <strong> StyledComponents</strong>, jQuery
            </span>
          </li>
          <hr />
          <li className="item">
            <h2>Back-End</h2>
            <span>
              <strong>ExpressJS</strong>, <strong>NodeJS</strong>,
              <strong> REST API</strong>, MySQL, <strong>MongoDB</strong>,
              Firebase, Mongoose
            </span>
          </li>
          <hr />
          <li className="item">
            <h2>Languages</h2>
            <span>
              Experienced in <strong>JavaScript</strong>, <strong>C++ </strong>
              using both <strong>Object Oriented Programming</strong> &
              <strong> Functional Programming</strong>, Beginner in Python, Data
              Structures & Algorithms
            </span>
          </li>
          <hr />
          <li className="item">
            <h2>Other Skills</h2>
            <span>
              <strong>Git</strong>, <strong>VS Code</strong>,
              <strong> JWT</strong>, Mapbox, Google OAuth
            </span>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Home;
