
import { NavLink } from 'react-router-dom'
import '../styles/Navbar.css'
import GithubIconHyperlink from './socials/GithubIconHyperlink'

function Navbar() {
    return (
    <div className="navbar">
        <div>
            <h1>Mads Hermansen [WIP]</h1>
        </div>
        <div className="links">
            <ul>
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/projects">Projects</NavLink></li>
                <li><NavLink to="/contact">Contact</NavLink></li>
                <li><GithubIconHyperlink /></li>
            </ul>
        </div>
    </div>
    )
}

export default Navbar