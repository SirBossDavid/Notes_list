import React, { useState } from 'react';

import NoteList from "./NoteList.jsx"

function App() {
 
  const cs_projects = [
    { id: 1, title: 'Project A', preview: 'Short preview of Project A', description: 'Detailed description of Project A.' },
    { id: 2, title: 'Project B', preview: 'Short preview of Project B', description: 'Detailed description of Project B.' },
    { id: 3, title: 'Project C', preview: 'Short preview of Project C', description: 'Detailed description of Project C.' },
    
  ];

  const film_projects = [
    { id: 4, title: 'Project D', preview: 'Short preview of Project A', description: 'Detailed description of Project A.' },
    { id: 5, title: 'Project E', preview: 'Short preview of Project B', description: 'Detailed description of Project B.' },
    { id: 6, title: 'Project F', preview: 'Short preview of Project C', description: 'Detailed description of Project C.' },
    
  ];


  return (<>
    <NoteList items = {cs_projects} category ="CS"/>
    <NoteList items = {film_projects} category ="Film"/>
    </>
  );
}

export default App;
