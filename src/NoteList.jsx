import React, { useState } from 'react';
import './notes.css';

function NoteList(props){

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
        <button className = "arrowButton"onClick={() => setScrollIndex((prev) => Math.max(prev - 1, 0))}>←</button>
        {projects.slice(scrollIndex, scrollIndex + maxVisible).map((project) => (
            <div key={project.id} className="project-box" onClick={() => handleClick(project)}>
            <h3>{project.title}</h3>
            <p>{project.preview}</p>
            </div>
        ))}
        <button className = "arrowButton" onClick={() => setScrollIndex((prev) => Math.min(prev + 1, projects.length - maxVisible))}>→</button>

        </div>

        {/* bigger display */}
        {selectedProject && (
        <div className="project-detail-overlay" onClick={handleClose}>
            <div className="project-detail-box" onClick={(e) => e.stopPropagation()}>
            <h2>{selectedProject.title}</h2>
            <p>{selectedProject.description}</p>
            <button onClick={handleClose}>Close</button>
            </div>
        </div>
        )}
    </div>
</>
    );


}

export default NoteList