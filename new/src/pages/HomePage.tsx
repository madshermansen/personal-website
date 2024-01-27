// import components
import Triangles from "../components/Triangles";
import Navbar from "../components/Navbar";

function HomePage() {
  return (
    <div>
      <Navbar />
      <Triangles />
      <h1>Home Page</h1>
      <p>This page is for public access</p>
    </div>
  );
}

export default HomePage;
