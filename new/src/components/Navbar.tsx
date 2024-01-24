// import styles
import "../styles/componentStyles/Navbar.css";

// import svg logo
import Logo from "../assets/logo.svg";


function Navbar() {
    return (
        <div className="navbar">
            <div className="logo">
                <img src={Logo} alt="Logo" />
            </div>
            <div className="links">  
            <ul>
                <li>
                    <a href="/projects">Projects</a>
                </li>
                <li>
                    <a href="/projects">Contact</a>
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
    )
}

export default Navbar