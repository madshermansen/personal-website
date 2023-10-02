import '../styles/Navbar.css'

function Navbar() {
    return (
    <div className="navbar">
        <div>
            <h1>Mads Hermansen [WIP]</h1>
        </div>
        <div className="links">
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/projects">Projects</a></li>
                <li><a href="/contact">Contact</a></li>
            </ul>
        </div>
    </div>
    )
}

export default Navbar