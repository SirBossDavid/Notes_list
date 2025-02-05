import React, { useState } from 'react';
import './css/notes.css';

import profileImage from './assets/profile.png';
import { Link } from 'react-router-dom';

function NoteCard(props){

    const projects = props.items;
    const category = props.category

    const [selectedProject, setSelectedProject] = useState(null);
    
    // Handle clicking on a preview box
    const handleClick = (project) => {
    setSelectedProject(project);
    };

    // Handle closing the larger box
    const handleClose = () => {
    setSelectedProject(null);
    };

    const [scrollIndex, setScrollIndex] = useState(0);
    const maxVisible = 5; // Number of visible notes


return(
<>
    <div className="category-row">
        {/* Row of clickable boxes */}
        <h1>{category}</h1>
        <div className="project-row">
            <button className = "arrowButton" onClick={() => setScrollIndex((prev) => Math.max(prev - 1, 0))}>←</button>

            {projects.slice(scrollIndex, scrollIndex + maxVisible).map((project) => (
                <div key={project.id} className="project-box" onClick={() => handleClick(project)}>
                    <h3>{project.title}</h3>
                    <img className="prev_image" src={profileImage} alt="Profile" />
                    <p>{project.description}</p>
                </div>
            ))}

            <button className = "arrowButton" onClick={() => setScrollIndex((prev) => 
            Math.min(prev + 1, Math.max(0, projects.length - maxVisible)))}>→</button>

        </div>
    </div>
    
        {/* bigger display */}
        {selectedProject && (
        <div className="project-detail-overlay" onClick={handleClose}>
            <div className="project-detail-box" onClick={(e) => e.stopPropagation()}>
                <h2 className='title'>{selectedProject.title}</h2>
                <div className="content">
                    <img className="image" src={profileImage} alt="Profile" />
                    <div className="info">
                        <p className="info"><strong>Name:</strong> {selectedProject.Name}</p>
                        <p className="info"><strong>Description:</strong> {selectedProject.description}</p>
                        <p className='info'><strong>Looking for:</strong> {selectedProject.looking_for}</p>
                        <p className='info'><strong>Skills required:</strong> {selectedProject.skills_required.join(", ")}</p>
                        <p className='info'><strong>Status:</strong> {selectedProject.progress}</p>
                    </div>
                </div>
                <div className="button-container">
                    <button onClick={handleClose}>Close</button>
                    <Link to = "/apply"> 
                        <button>Apply</button>
                    </Link>
                    
                </div>
            </div>
        </div>
        )}
    
</>
    );


}

export default NoteCard