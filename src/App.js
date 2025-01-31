import './App.css';
import { useState,useEffect } from "react"

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CreateNote from './Pages/CreateNote.js';
import EditNote from './Pages/EditNote.js';
import Notes from './Pages/Notes.js';


function App() {
  const [notes, setNotes] = useState(JSON.parse(localStorage.getItem('notes'))|| []);
  useEffect(()=>{
     localStorage.setItem('notes',JSON.stringify(notes));
  },[notes])
  return (
    <>
      <main id="app">
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Notes notes={notes} />} />
            <Route path='/create-note' element={<CreateNote  setNotes={setNotes}/>} />
            <Route path='/edit-note/:id' element={<EditNote notes={notes} setNotes={setNotes}/>} />
          </Routes>
        </BrowserRouter>
      </main>
    </>
  );
}
export default App;
