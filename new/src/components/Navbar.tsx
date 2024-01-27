// import styles
import "../styles/componentStyles/Navbar.css";

// import svg logo
import Logo from "../assets/logo.svg";

function Navbar() {
  return (
    <div className="navbar">
      <div className="logo">
        <a href="/">
          <img src={Logo} alt="Logo" />
        </a>
      </div>
      <div className="links">
        <ul>
          <li>
            <a href="/projects">Projects</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
          <li>
            <a href="https://github.com/madshermansen">Github</a>
          </li>
          <li>
            <a href="/resume.pdf">Resume</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
