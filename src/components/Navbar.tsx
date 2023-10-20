import { NavLink, useLocation, useNavigate } from "react-router-dom";
import GithubIconHyperlink from "./socials/GithubIconHyperlink";
import { useEffect, useState } from "react";

// import styles
import "../styles/componentStyles/Navbar.css";

function Navbar() {
  const [backgroundOpacity, setBackgroundOpacity] =
    useState("rgba(0, 0, 0, 0)");

  const navigate = useNavigate();

  function handleClick() {
    navigate("/");
  }
  const location = useLocation();

  const handleScroll = () => {
    if (location.pathname === "/projects") {
      if (window.scrollY > 90) {
        setBackgroundOpacity("rgba(0, 0, 0, 0.3)");
      } else {
        setBackgroundOpacity("rgba(0, 0, 0, 0)");
      }
    } else {
      if (window.scrollY > window.innerHeight / 1.3) {
        setBackgroundOpacity("rgba(0, 0, 0, 0.3)");
      } else {
        setBackgroundOpacity("rgba(0, 0, 0, 0)");
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  return (
    <div className="navbar" style={{ backgroundColor: backgroundOpacity }}>
      <div onClick={handleClick}>
        <h1 className="desktop-text">Mads Hermansen</h1>
        <h1 className="mobile-text">MH</h1>
      </div>
      <div className="links">
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/projects">Projects</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>
          <li>
            <GithubIconHyperlink />
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
