
import Profile from "../components/Profile"
import FrontPageInfo from '../components/FrontPageInfo'
import { useEffect, useState } from "react";

function Frontpage() {
    const [scrollY, setScrollY] = useState(0); 
    const [previousScrollY, setPreviousScrollY] = useState(0);
    const [opacity, setOpacity] = useState(1);

    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        const viewportHeight = window.innerHeight;
        const halfwayPoint = viewportHeight / 2;
        const isScrollingUp = scrollY < previousScrollY;
        let newOpacity;
    
        if (isScrollingUp) {
            newOpacity = opacity + 0.05;
        } else {
            newOpacity = 1 - (scrollY / halfwayPoint);
        }
    
        newOpacity = Math.max(Math.min(newOpacity, 1), 0);
    
        setOpacity(newOpacity);
        setPreviousScrollY(scrollY);
    }, [scrollY, opacity, previousScrollY]);

  return (
    <div>
        <div className="introductionFrontPage" style={{opacity: opacity}}>
            <Profile />
            <FrontPageInfo />
        </div>
        <div className="introductionFrontPagePlaceholder" style={{opacity: opacity}}></div>
    </div>
  );
}

export default Frontpage;