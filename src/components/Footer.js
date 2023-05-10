import React from "react";
import InsertLinkIcon from "@mui/icons-material/InsertLink";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import CallIcon from "@mui/icons-material/Call";
import "../styles/Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
        <a
          href="mailto:guptatusharhhfs27@gmail.com"
          target="_blank"
          rel="noreferrer"
          data-tooltip="Email"
          className="iconsHover"
        >
          <EmailIcon />
        </a>
        <a
          href="tel:+919773503036"
          target="_blank"
          rel="noreferrer"
          data-tooltip="Mobile"
          className="iconsHover"
        >
          <CallIcon />
        </a>
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
          <GitHubIcon />
        </a>
        <a
          href="https://drive.google.com/file/d/1mpgTHgjwTLLIgzF69tvnFuzFz58vsGO-/view?usp=share_link"
          target="_blank"
          rel="noreferrer"
          title="Resume / CV"
          className="tiltIcon iconsHover"
          data-tooltip="Resume"
        >
          <InsertLinkIcon />
        </a>
        <a
          href="https://leetcode.com/guptatushar27hhfs/"
          target="_blank"
          rel="noreferrer"
          title="Resume / CV"
          className="tiltIcon iconsHover"
          data-tooltip="LeetCode"
        >
          <InsertLinkIcon />
        </a>
        <a
          href="https://auth.geeksforgeeks.org/user/guptatushar27hhfs/practice/"
          target="_blank"
          rel="noreferrer"
          title="Resume / CV"
          className="tiltIcon iconsHover"
          data-tooltip="GeeksForGeeks"
        >
          <InsertLinkIcon />
        </a>
      </div>
    </div>
  );
}

export default Footer;
