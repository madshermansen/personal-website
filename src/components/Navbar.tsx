
import { Link } from 'react-router-dom'
import '../styles/Navbar.css'

function Navbar() {
    return (
    <div className="navbar">
        <div>
            <h1>Mads Hermansen [WIP]</h1>
        </div>
        <div className="links">
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/projects">Projects</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>
        </div>
    </div>
    )
}

export default Navbar