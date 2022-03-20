import React from 'react'
// import ShowNote from './ShowNote'

// {/*this is our note card component
// here am using id,text,date,handleDeleteNote as props which have been defined in App.js*/}

function Note({ id, date, name, handleDelete }) {
    function confirmationDelete() {
        var result = window.confirm("Want to delete?");
        if (result) {
          handleDelete(id)
        // Logic to delete the item
           }
    }
    return (
        <div className='nodelist' >
            <div className="note">
                {/*This part will contain the main note's text part*/}

                <a href={"/ShowNote?id=" + id} >{name}</a>
                {/*in the footer part of the note*/}
            </div>
            <div className="date-div">
                {/*it will store date on which the user is going to create the note*/}
                <small>{date}</small>
            </div>
            {/*this is for deleting the note using each note's unique id as parameter
                so we have passed handleDeleteNote function as it's onClick event*/}

            {/* <MdDeleteForever onClick={()=>handleDelete(id)} className="delete-icon" size="1.3em" /> */}

            <button className='delete-div' onClick={confirmationDelete}>Delete</button>




        </div>
    )
}

export default Note
