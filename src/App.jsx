import React, { useState } from 'react';

import NoteList from "./NoteList.jsx"

function App() {
 
  const cs_projects = [
    { id: 1, title: 'Project A', preview: 'Short preview of Project A', description: 'Detailed description of Project A.' },
    { id: 2, title: 'Project B', preview: 'Short preview of Project B', description: 'Detailed description of Project B.' },
    { id: 3, title: 'Project C', preview: 'Short preview of Project C', description: 'Detailed description of Project C.' },
    { id: 6, title: 'Project G', preview: 'Short preview of Project C', description: 'Detailed description of Project C.' },
    { id: 7, title: 'Project H', preview: 'Short preview of Project C', description: 'Detailed description of Project C.' },
    { id: 8, title: 'Project I', preview: 'Short preview of Project C', description: 'Detailed description of Project C.' },
    { id: 9, title: 'Project J', preview: 'Short preview of Project C', description: 'Detailed description of Project C.' },
    { id: 10, title: 'Project K', preview: 'Short preview of Project C', description: 'Detailed description of Project C.' },
    { id: 11, title: 'Project C', preview: 'Short preview of Project C', description: 'Detailed description of Project z.' },
    
  ];

  const film_projects = [
    { id: 4, title: 'Project D', preview: 'Short preview of Project A', description: 'Detailed description of Project A.' },
    { id: 5, title: 'Project E', preview: 'Short preview of Project B', description: 'Detailed description of Project B.' },
    { id: 6, title: 'Project F', preview: 'Short preview of Project C', description: 'Detailed description of Project C.' },
    
  ];


  return (<>
    <NoteList items = {cs_projects} category ="Recommended"/>
    <NoteList items = {film_projects} category ="C"/>
    </>
  );
}

export default App;
