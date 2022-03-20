import { useEffect, useState } from "react";


function ShowNote() {
    // list of notes
    const [notes, setNotes] = useState(() => JSON.parse(localStorage.getItem('my-react-note')));
    const [notes1, setNotes1] = useState(() => JSON.parse(localStorage.getItem('my-react-note')));


    // getting the id from url and stored in NotId
    const [NoteId, setNoteId] = useState(() => {
        const params = new Proxy(new URLSearchParams(window.location.search), {
            get: (searchParams, prop) => searchParams.get(prop),
        });
        // Get the value of "some_key" in eg "https://example.com/?some_key=some_value"
        let value = params.id;
        return value;
    })

    const [noteText, setNoteText] = useState("")
    const [noteName, setnoteName] = useState("")
    const [note, setNote] = useState({})
    const[noteIndex,setNoteIndex]=useState(0)
    useEffect(async () => {
        // console.log(notes)
        // console.log(note)
        // console.log(NoteId)

        // console.log("++++")

        notes.map(e => {
            // console.log(e.id)
            if (e.id === NoteId) {
                setNoteText(e.text)
                setnoteName(e.name);
                  setNoteIndex(notes.indexOf(e));
                setNote((nootee) => {
                    nootee.id = e.id;
                    nootee.name = e.name;
                    nootee.text = e.text;
                    nootee.date = e.date;
                    return nootee;
                })
            }
            // console.log(e)

        })
        

    }, [])

    // store the notes to the local storage when it is changed
    useEffect(async() => {

        localStorage.setItem('my-react-note', JSON.stringify(notes))
      }, [notes])
    

    
    const [updataNotes, setupdataNotes] = useState([{}]);
     
    // function to save the data
    function handleSaveNote(){
        //    setupdataNotes(notes);
           note["text"]=noteText;
          notes1[noteIndex]=note;
          setNotes(notes1);

          alert("Your Note saved");
            // let updataNotes=[...notes,note.id=notes.id]; 
            // setNotes(updataNotes);
            // console.log(note)
            // console.log(notes);
        
    }

    return (
        <>
            {/* {params} */}
             
            <div id="textAreaDiv">
               
                <div id="noteheading">{noteName}</div>
                 
                <textarea className="TextArea" value={noteText} onChange={(e) => setNoteText(e.target.value)} ></textarea>
            </div>
           
            <div className="SaveButtonDiv"><button className="SaveButton" onClick={handleSaveNote}>SAVE</button>
            </div>
        </>
    )

}
export default ShowNote;