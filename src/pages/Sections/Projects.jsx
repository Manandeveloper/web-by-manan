import React  from "react";
import { NavLink } from 'react-router-dom';
import projects from '../../components/Data/Projects';

const Project = () => {
    return(
        <div className="project-section">
            <div className="container">
                <h2>Recent Work</h2>
                <div className="project-list">
                    {projects.map((project) => (
                    <div className="single-project">
                        <div className="project-image">
                            <img src={project.mainImage} alt={project.title} />
                        </div>
                        <div className="project-info">
                            <p className="name">
                                <NavLink key={project.id} to={`/project/${project.id}`} className="project-card">
                                    {project.title}    
                                </NavLink>
                            </p>
                            <p className="project-description"> {project.shortdescription} </p>
                        </div>
                    </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
export default Project;