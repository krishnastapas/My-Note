import React,{useState} from 'react'

function AddNote({handleAddNote}){
    const [noteText, setnoteText] = useState('');

    const handleChange=(event)=>{
        setnoteText(event.target.value)
    }
    const handleAddClick=()=>{
        if(noteText.trim().length>0){
            handleAddNote(noteText);
            setnoteText('');
        }
    }
    return(
        <div className='add-div'>
            {/* <div className='name-input'> */}
            {/* <textarea placeholder='Type note heading'></textarea> */}
            <input className='name-input'placeholder='Type Name' onChange={handleChange} value={noteText}></input>
            {/* </div> */}
            {/* </div>
        <div onClick className='addnote'>
           + Add */}
       <button className='addnote' onClick={handleAddClick}>+Add</button>

        
        </div>
    )

}
export default AddNote;