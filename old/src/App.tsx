import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// import styles
import "./styles/App.css";

// import components
import Navbar from "./components/Navbar";

// import pages
import ProjectsPage from "./pages/ProjectsPage";
import HomePage from "./pages/HomePage";
import ContactPage from "./pages/ContactPage";
import TestPage from "./components/Testpage";

function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/test" element={<TestPage />} />

        {/* 404 */}
        <Route path="*" element={<h1>404: Page not found</h1>} />
      </Routes>
    </Router>
  );
}

export default App;
