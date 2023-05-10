import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@mui/icons-material/School";
import WorkIcon from "@mui/icons-material/Work";
import { useEffect } from "react";
import ModeIcon from "@mui/icons-material/Mode";
import CodeIcon from "@mui/icons-material/Code";

function Experience() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, []);
  return (
    <div className="experience">
      <VerticalTimeline lineColor="#5643fa">
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2007 - 2017"
          iconStyle={{ background: "#5643fa", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Hope Hall Foundation School, Delhi
          </h3>
          <p> Class X CBSE</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2017 - 2019"
          iconStyle={{ background: "#5643fa", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            St. Mary's School, Delhi
          </h3>
          <p>Class XII CBSE, Science</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2019"
          iconStyle={{ background: "#5643fa", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Netaji Subhas University of Technology, NSUT (previously NSIT)
          </h3>
          <p className="vertical-timeline-element-subtitle">
            Started Bachelors of Technology (B. Tech)
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2019"
          iconStyle={{ background: "#5643fa", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Netaji Subhas University of Technology, NSUT (previously NSIT)
          </h3>
          <p className="vertical-timeline-element-subtitle">
            Started Bachelors of Technology (B. Tech)
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="Oct 2021 - Dec 2021"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            React Frontend Developer - Sapio Analytics
          </h3>
          <p>Developed three responsive & user-friendly UIs using React</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2023"
          iconStyle={{ background: "#5643fa", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Netaji Subhas University of Technology, NSUT (previously NSIT)
          </h3>
          <p className="vertical-timeline-element-subtitle">
            Graduated with a Bachelors of Technology (B. Tech)
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
}

export default Experience;
