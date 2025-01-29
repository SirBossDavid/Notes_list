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

return(
<>
    <div className="category-row">
        {/* Row of clickable boxes */}
        <h1>{category}</h1>
        <div className="project-row">
        {projects.map((project) => (
            <div key={project.id} className="project-box" onClick={() => handleClick(project)}>
            <h3>{project.title}</h3>
            <p>{project.preview}</p>
            </div>
        ))}
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