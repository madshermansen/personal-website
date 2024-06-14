
import { useState } from "react";

export default function Projects() {
    const [removeMargin, setRemoveMargin] = useState(false);
  
    const handleHashChange = () => {
    const hashValue = window.location.hash.substring(1);
    setRemoveMargin(hashValue === "projects");

    };

    addEventListener("hashchange", (event) => {handleHashChange});

    return (
        <div className={`bg-primary w-full h-full absolute z-20 ${removeMargin ? '' : 'fullScreenLeft'}`}>
            <h1 className="text-white">Projects</h1>
        </div>
    )
}