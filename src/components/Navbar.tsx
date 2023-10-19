


import { NavLink } from 'react-router-dom'
import GithubIconHyperlink from './socials/GithubIconHyperlink'


// import styles
import '../styles/componentStyles/Navbar.css'

function Navbar() {

    

    return (
        <div className="navbar" >
            <div>
                <h1 className="desktop-text">Mads Hermansen [WIP]</h1>
                <h1 className="mobile-text">MH</h1>
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