import Profile from "../components/Profile";
import FrontPageInfo from "../components/FrontPageInfo";
import { useEffect, useState } from "react";

function Frontpage() {
  const [scrollY, setScrollY] = useState(0);
  const [previousScrollY] = useState(0);
  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  useEffect(() => {
    const viewportHeight = window.innerHeight;
    const halfwayPoint = viewportHeight / 2;

    let newOpacity;
    newOpacity = 1 - scrollY / halfwayPoint;

    newOpacity = Math.max(Math.min(newOpacity, 1), 0);

    setOpacity(newOpacity);
  }, [scrollY, opacity, previousScrollY]);

  return (
    <div>
      <div className="introductionFrontPage" style={{ opacity: opacity }}>
        <Profile />
        <FrontPageInfo />
      </div>
      <div className="introductionFrontPagePlaceholder"></div>
    </div>
  );
}

export default Frontpage;
