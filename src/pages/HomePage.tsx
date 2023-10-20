// import styles
import "../styles/HomePage.css";

// import components
import FrontPage from "../components/Frontpage";
import Skills from "../components/Skills";
import GithubIconHyperlink from "../components/socials/GithubIconHyperlink";
import { useEffect } from "react";

function HomePage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="HomePage">
      <FrontPage />
      <Skills />
      <div className="moreInfo">
        <p>
          This project is open-sourced under the MIT License - Created by Mads
          Hermansen <GithubIconHyperlink />
          <br />
          This site is still under development
        </p>
      </div>
    </div>
  );
}

export default HomePage;
