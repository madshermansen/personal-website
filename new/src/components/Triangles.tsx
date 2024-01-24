// import styles
import "../styles/componentStyles/triangles.css";

function Triangle() {
    return (
        <div className="triangle"/>
    )
}

function Triangles() {
    return(
        <div className="background">
        <Triangle />
        <Triangle />
        <Triangle />
        <h1 className="text">Mads Hermansen</h1>
        <nav className="navigation">
          <a href="/projects">Projects</a>
          <a href="/contact">Contact</a>
        </nav>
      </div>
    )

}

export default Triangles;