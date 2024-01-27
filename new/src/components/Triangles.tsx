// import styles
import "../styles/componentStyles/triangles.css";

// animate
import { gsap } from "gsap";
    
import { ScrollToPlugin } from "gsap/ScrollToPlugin";


gsap.registerPlugin(ScrollToPlugin);

function Triangle() {
  const height = window.innerHeight;
  const width = window.innerWidth;
  const randomX = Math.floor(Math.random() * height);
  const randomY = Math.floor(Math.random() * width);
  const randomTilt = Math.floor(Math.random() * 360);

  const triangleStyle = {
    top: randomX + "px",
    left: randomY + "px",
    transform: "rotate(" + randomTilt + "deg)",
  };

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      className="svg-triangle"
      style={triangleStyle}
    >
    <defs>
        <linearGradient id="gradient-stroke" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stop-color="rgba(255,0,0,0.26)" />
                <stop offset="100%" stop-color="rgba(255,0,0,0.05)" />
        </linearGradient>
    </defs>
    <path d="M 50,10 90,90 10,90 z" stroke="url(#gradient-stroke)" stroke-width="2"/>
</svg>

    // thanks to https://codepen.io/knod/pen/KzRYye for the triangle svg path
  );
}

function Triangles() {
  const triangleCount = 5;
  const triangles = [];

  for (let i = 0; i < triangleCount; i++) {
    triangles.push(<Triangle />);
  }

  return (
    <div className="background">
      {triangles}
      <h1 className="text">Mads Hermansen</h1>
      <nav className="navigation">
        <a href="/projects">Projects</a>
        <a href="/contact">Contact</a>
      </nav>
    </div>
  );
}

export default Triangles;
