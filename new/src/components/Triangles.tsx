// import styles
import "../styles/componentStyles/triangles.css";

// animate
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
    
const box = useRef();

useGSAP(() => {
  gsap.to(box.current, { duration: 1, x: 100 });
});

const gridRows = 3;
const gridColumns = 5;

function Triangle({ position }: { position: [number, number] }) {
  const randomTilt = Math.floor(Math.random() * 360);

  const [gridX, gridY] = position;
  const cellWidth = window.innerWidth / gridColumns;
  const cellHeight = window.innerHeight / gridRows;

  const triangleStyle = {
    top: (gridY * cellHeight) + "px",
    left: (gridX * cellWidth) + "px",
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
  const grid = Array.from({ length: gridRows }, () => Array(gridColumns).fill(false));
  const triangleCount = Math.min(window.innerWidth / 300, gridRows * gridColumns);
  const triangles = [];

  for (let i = 0; i < triangleCount; i++) {
    let x, y;

    do {
      x = Math.floor(Math.random() * gridColumns);
      y = Math.floor(Math.random() * gridRows);
    } while (grid[y][x]);

    grid[y][x] = true;

    triangles.push(<Triangle position={[x, y]} />);
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

useGsap

export default Triangles;
