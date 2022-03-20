import React from 'react'
import Note from './Note'
import AddNote from './AddNote'

const Home=({notes,handleAddNote,handleDelete})=>{
   return (
       <div className='middle-container'>
          <div className='note-container'>
          {notes.map((note)=>
               <Note id={note.id} text={note.text} date={note.date} name={note.name}
               handleDelete={handleDelete}
               />
           )}
          
         <AddNote handleAddNote={handleAddNote}/>
         </div>
       
       </div>
   );

}
export default Home;