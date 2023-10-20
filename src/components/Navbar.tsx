import { NavLink } from "react-router-dom";
import GithubIconHyperlink from "./socials/GithubIconHyperlink";
import { useNavigate } from "react-router-dom";

// import styles
import "../styles/componentStyles/Navbar.css";

function Navbar() {

    const navigate = useNavigate();

    function handleClick() {
        navigate("/");
    }

  return (
    <div className="navbar">
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
