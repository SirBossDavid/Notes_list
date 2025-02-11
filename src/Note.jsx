import React, { useState } from 'react';
import { Link } from "react-router-dom";
import profileImage from "./assets/profile.png"; 

import "./css/Note.css"

function Note({selectedProject}){
    
    // Handle closing the larger box
    const handleClose = () => {
        props.setSelectedProject(null);
    };
    
    return(
        <>
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

export default Note;