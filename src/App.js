import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { nanoid } from "nanoid"
import Header from './components/Header';
// import NavBar from './components/NavBar';
import Home from './components/Home';
import ShowNote from './components/ShowNote';
import NavBar from './components/NavBar';

function App() {
  // defalut elements to notes list
  const [notes, setNotes] = useState([
    {
      
      id: nanoid(),
      
      name: "First Note File",
      text: "This is first notes contain",
      date: "19/03/2022",
    },
    {
      id: nanoid(),
      
      name: "Second Note File",
      text: "This is first notes contain",
      date: "19/03/2022",
    },

  ])
  // variable for dark mode
  const [darkMode, setdarkMode] = useState(false);


  // variable to search notes
  const [searchNote, setsearchNote] = useState("");

  // {/*to store or save the data in local storage even after closing the tab*/ }
  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem('my-react-note'))
    if (savedNotes) {
      setNotes(savedNotes)
    }
  }, [])

  // {/*this is for saving the app data in local storage*/ }
  useEffect(() => {

    localStorage.setItem('my-react-note', JSON.stringify(notes))
  }, [notes])

  // function to add new note into notes
  const addNote = (name) => {
    const date = new Date();
    const newNote = {
      id: nanoid(),
      name: name,
      text: '',
      date: date.toLocaleDateString()
    }
    const newNotes = [...notes, newNote]
    setNotes(newNotes)
  }
  // function to delete a note
  const deleteNote = (id) => {
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
  }
  return (
    <div className={`${darkMode && 'dark-mode'}`}>
      <div className='cotainer'>
        <Header changeDarkMode={setdarkMode} />
        <NavBar tosearch={setsearchNote} />
        {/* jgvjgvjgv */}
        {/* r = /  notelis*/}
        {/* r /note showNote */}
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home notes={notes.filter((note)=>{
               return note.name.toLowerCase().startsWith(searchNote.toLowerCase());
            })} handleAddNote={addNote} handleDelete={deleteNote} />
            } />
            {/* <Route path='/a' element={<>A</>} /> */}
            {/* <Route path="/b" element={<>B</>} /> */}
            <Route path="/ShowNote" element={<ShowNote/>} />

            {/* </Route> */}
          </Routes>
        </BrowserRouter>
        {/* <Notelist notes={notes.filter((note)=>note.text.toLowerCase().includes(searchNote))} handleAddNote={addNote} handleDelete={deleteNote}  /> */}

      </div>
    </div >
  );
}

export default App;
