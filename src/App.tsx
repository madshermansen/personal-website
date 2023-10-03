import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// import styles
import './styles/App.css'

// import components
import Navbar from './components/Navbar'

// import pages
import ProjectsPage from './pages/ProjectsPage'

function App() {

  return (
    <Router>
        <Navbar />

        <Routes>
          <Route path="/" element={<h1>Home</h1>} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/contact" element={<h1>Contact</h1>} />

          {/* 404 */}
          <Route path="*" element={<h1>404: Page not found</h1>} />
        </Routes>

    </Router>
  )
}

export default App
