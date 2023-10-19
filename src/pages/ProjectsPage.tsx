import '../styles/ProjectPage.css'
import projects from '../assets/projects/projects.json'
import {MouseEventHandler} from 'react'
import { FaGithub } from 'react-icons/fa';

function ProjectsPage() {

    const handleProjectClick: MouseEventHandler<HTMLDivElement> = (event) => {
        const URL = event.currentTarget.getAttribute('data-url');
        if (URL) {
            window.location.href = URL;
        }
      };

    return (
        <div className='projectListWrapper'>
            <h1>Projects</h1>
            <div className='projectList'>
                {projects.map((item) => (
                    <div className='projectBox' onClick={handleProjectClick} data-url={item.URl} >
                        <img src={item.image} alt={item.name} className='projectImage' loading="lazy"/>
                        <div className="skeletonLoader"></div>
                        <div className='projectInfo'>
                            <h3 className='projectTitle'>{item.name} <a href={item.githubURL}><FaGithub /></a></h3>
                            <p className="technologies">{item.technologies.map((tech) => (
                                <span>{tech}</span>
                            ))}</p>
                            <p>{item.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ProjectsPage