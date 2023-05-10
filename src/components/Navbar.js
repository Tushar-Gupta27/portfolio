import React, { useEffect, useLayoutEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "../styles/Navbar.css";
import ReorderIcon from "@mui/icons-material/Reorder";

function Navbar() {
  const [expandNavbar, setExpandNavbar] = useState(false);
  const [scrolled, setscrolled] = useState(false);
  const location = useLocation();
  // useEffect(() => {
  //   if (window.screenY > 0) setscrolled(true);
  //   else setscrolled(false);
  // }, [window.screenY]);
  useEffect(() => {
    function changeState() {
      setscrolled(window.scrollY > 0);
    }
    window.addEventListener("scroll", changeState);

    return () => {
      window.removeEventListener(changeState);
    };
  }, []);
  useEffect(() => {
    setExpandNavbar(false);
  }, [location]);
  console.log(window.scrollY);
  return (
    <div
      className={scrolled ? `navbar scrolled` : `navbar`}
      id={expandNavbar ? "open" : "close"}
    >
      <div className="toggleButton">
        <button
          onClick={() => {
            setExpandNavbar((prev) => !prev);
          }}
        >
          <ReorderIcon />
        </button>
      </div>
      <div className="links">
        <Link to="/portfolio"> Home </Link>
        <Link to="/portfolio/projects"> Projects </Link>
        <Link to="/portfolio/experience"> Experience </Link>
      </div>
    </div>
  );
}

export default Navbar;
